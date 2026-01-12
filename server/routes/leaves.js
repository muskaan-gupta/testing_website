const express = require('express');
const router = express.Router();
const db = require('../config/database');
const upload = require('../config/multer');

// GET all leave types
router.get('/leave-types', async (req, res) => {
  try {
    const [leaveTypes] = await db.query('SELECT * FROM leave_types ORDER BY leave_type_name');
    res.json(leaveTypes);
  } catch (error) {
    console.error('Error fetching leave types:', error);
    res.status(500).json({ message: 'Error fetching leave types', error: error.message });
  }
});

// GET all employee leaves
router.get('/employee-leaves', async (req, res) => {
  try {
    const query = `
      SELECT 
        el.*,
        lt.leave_type_name
      FROM employee_leaves el
      LEFT JOIN leave_types lt ON el.leave_type_id = lt.leave_type_id
      ORDER BY el.applied_on DESC
    `;
    const [leaves] = await db.query(query);
    res.json(leaves);
  } catch (error) {
    console.error('Error fetching employee leaves:', error);
    res.status(500).json({ message: 'Error fetching employee leaves', error: error.message });
  }
});

// GET single leave by ID
router.get('/employee-leaves/:id', async (req, res) => {
  try {
    const query = `
      SELECT 
        el.*,
        lt.leave_type_name,
        e.first_name,
        e.last_name,
        CONCAT(e.first_name, ' ', e.last_name) as employee_name
      FROM employee_leaves el
      LEFT JOIN leave_types lt ON el.leave_type_id = lt.leave_type_id
      LEFT JOIN employees e ON el.employee_id = e.employee_id
      WHERE el.leave_id = ?
    `;
    const [leaves] = await db.query(query, [req.params.id]);
    
    if (leaves.length === 0) {
      return res.status(404).json({ message: 'Leave request not found' });
    }
    
    res.json(leaves[0]);
  } catch (error) {
    console.error('Error fetching leave:', error);
    res.status(500).json({ message: 'Error fetching leave', error: error.message });
  }
});

// GET leaves by employee ID
router.get('/employee-leaves/employee/:employeeId', async (req, res) => {
  try {
    const query = `
      SELECT 
        el.*,
        lt.leave_type_name
      FROM employee_leaves el
      LEFT JOIN leave_types lt ON el.leave_type_id = lt.leave_type_id
      WHERE el.employee_id = ?
      ORDER BY el.applied_on DESC
    `;
    const [leaves] = await db.query(query, [req.params.employeeId]);
    res.json(leaves);
  } catch (error) {
    console.error('Error fetching employee leaves:', error);
    res.status(500).json({ message: 'Error fetching employee leaves', error: error.message });
  }
});

// GET leave balance for employee
router.get('/employee-leaves/balance/:employeeId', async (req, res) => {
  try {
    const currentYear = new Date().getFullYear();
    
    const query = `
      SELECT 
        lt.leave_type_id,
        lt.leave_type_name,
        lt.max_days_per_year,
        lt.max_consecutive_days,
        COALESCE(SUM(CASE WHEN el.approval_status != 'Rejected' THEN el.total_days ELSE 0 END), 0) as used_days,
        (lt.max_days_per_year - COALESCE(SUM(CASE WHEN el.approval_status != 'Rejected' THEN el.total_days ELSE 0 END), 0)) as remaining_days
      FROM leave_types lt
      LEFT JOIN employee_leaves el ON lt.leave_type_id = el.leave_type_id 
        AND el.employee_id = ? 
        AND YEAR(el.from_date) = ?
      GROUP BY lt.leave_type_id
      ORDER BY lt.leave_type_name
    `;
    
    const [balances] = await db.query(query, [req.params.employeeId, currentYear]);
    res.json(balances);
  } catch (error) {
    console.error('Error fetching leave balance:', error);
    res.status(500).json({ message: 'Error fetching leave balance', error: error.message });
  }
});

// POST - Create new leave request
router.post('/employee-leaves', upload.single('supporting_document'), async (req, res) => {
  const {
    unique_id,
    employee_name,
    employee_id,
    leave_type_id,
    from_date,
    to_date,
    total_days,
    is_half_day,
    reason,
    medical_certificate,
    is_work_from_home,
    wfh_from_date,
    wfh_to_date
  } = req.body;

  const supporting_document = req.file ? req.file.filename : null;

  // Validate required fields
  if (!unique_id || !employee_name || !employee_id || !leave_type_id || !from_date || !to_date || !total_days || !reason) {
    return res.status(400).json({ message: 'All required fields must be provided' });
  }

  try {
    // Get leave type details for validation
    const [leaveTypes] = await db.query('SELECT * FROM leave_types WHERE leave_type_id = ?', [leave_type_id]);
    
    if (leaveTypes.length === 0) {
      return res.status(400).json({ message: 'Invalid leave type' });
    }

    const leaveType = leaveTypes[0];

    // Validate consecutive days limit
    if (leaveType.max_consecutive_days && parseInt(total_days) > leaveType.max_consecutive_days) {
      return res.status(400).json({ 
        message: `${leaveType.leave_type_name} allows maximum ${leaveType.max_consecutive_days} consecutive days. You requested ${total_days} days.` 
      });
    }

    // Check yearly limit
    const currentYear = new Date().getFullYear();
    const [yearlyLeaves] = await db.query(
      `SELECT SUM(total_days) as used_days FROM employee_leaves 
       WHERE employee_id = ? AND leave_type_id = ? 
       AND YEAR(from_date) = ? AND approval_status != 'Rejected'`,
      [employee_id, leave_type_id, currentYear]
    );

    const usedDays = yearlyLeaves[0].used_days || 0;
    const remainingDays = leaveType.max_days_per_year - usedDays;

    if (parseFloat(total_days) > remainingDays) {
      return res.status(400).json({ 
        message: `Insufficient leave balance. You have ${remainingDays} days remaining for ${leaveType.leave_type_name} this year.` 
      });
    }

    const query = `
      INSERT INTO employee_leaves (
        unique_id, employee_name, employee_id, leave_type_id, from_date, to_date, total_days, 
        is_half_day, reason, medical_certificate, supporting_document,
        is_work_from_home, wfh_from_date, wfh_to_date, approval_status
      ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, 'Pending')
    `;

    const values = [
      unique_id,
      employee_name,
      employee_id, 
      leave_type_id, 
      from_date, 
      to_date, 
      total_days,
      is_half_day === 'true' || is_half_day === true ? 1 : 0,
      reason, 
      medical_certificate === 'true' || medical_certificate === true ? 1 : 0,
      supporting_document,
      is_work_from_home === 'true' || is_work_from_home === true ? 1 : 0,
      wfh_from_date || null,
      wfh_to_date || null
    ];

    const [result] = await db.query(query, values);

    res.status(201).json({
      message: 'Leave request submitted successfully',
      leave_id: result.insertId,
      remaining_days: remainingDays - parseFloat(total_days)
    });
  } catch (error) {
    console.error('Error creating leave request:', error);
    res.status(500).json({ message: 'Error creating leave request', error: error.message });
  }
});

// PUT - Update leave request
router.put('/employee-leaves/:id', upload.single('medical_certificate_file'), async (req, res) => {
  const {
    employee_id,
    leave_type_id,
    from_date,
    to_date,
    total_days,
    reason,
    medical_certificate,
    approval_status,
    approved_by
  } = req.body;

  try {
    const query = `
      UPDATE employee_leaves SET
        employee_id = ?, leave_type_id = ?, from_date = ?, to_date = ?, total_days = ?,
        reason = ?, medical_certificate = ?, approval_status = ?, approved_by = ?
      WHERE leave_id = ?
    `;

    const values = [
      employee_id,
      leave_type_id,
      from_date,
      to_date,
      total_days,
      reason,
      medical_certificate === 'true' || medical_certificate === true ? 1 : 0,
      approval_status || 'Pending',
      approved_by || null,
      req.params.id
    ];

    const [result] = await db.query(query, values);

    if (result.affectedRows === 0) {
      return res.status(404).json({ message: 'Leave request not found' });
    }

    res.json({ message: 'Leave request updated successfully' });
  } catch (error) {
    console.error('Error updating leave request:', error);
    res.status(500).json({ message: 'Error updating leave request', error: error.message });
  }
});

// PUT - Approve/Reject leave
router.put('/employee-leaves/:id/status', async (req, res) => {
  const { approval_status, approved_by, remarks } = req.body;

  if (!approval_status || !approved_by) {
    return res.status(400).json({ message: 'Approval status and approver ID are required' });
  }

  try {
    const query = `
      UPDATE employee_leaves SET
        approval_status = ?, approved_by = ?
      WHERE leave_id = ?
    `;

    const values = [approval_status, approved_by, req.params.id];
    const [result] = await db.query(query, values);

    if (result.affectedRows === 0) {
      return res.status(404).json({ message: 'Leave request not found' });
    }

    res.json({ message: `Leave request ${approval_status.toLowerCase()} successfully` });
  } catch (error) {
    console.error('Error updating leave status:', error);
    res.status(500).json({ message: 'Error updating leave status', error: error.message });
  }
});

// DELETE leave request
router.delete('/employee-leaves/:id', async (req, res) => {
  try {
    const [result] = await db.query('DELETE FROM employee_leaves WHERE leave_id = ?', [req.params.id]);

    if (result.affectedRows === 0) {
      return res.status(404).json({ message: 'Leave request not found' });
    }

    res.json({ message: 'Leave request deleted successfully' });
  } catch (error) {
    console.error('Error deleting leave request:', error);
    res.status(500).json({ message: 'Error deleting leave request', error: error.message });
  }
});

module.exports = router;
