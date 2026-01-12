const express = require('express');
const router = express.Router();
const db = require('../config/database');

// =============== EMPLOYEE FEEDBACK ROUTES ===============

// GET all employee feedbacks
router.get('/employee-feedback', async (req, res) => {
  try {
    const [rows] = await db.query('SELECT * FROM employee_feedback ORDER BY created_at DESC');
    res.json(rows);
  } catch (error) {
    console.error('Error fetching employee feedbacks:', error);
    res.status(500).json({ message: 'Error fetching employee feedbacks', error: error.message });
  }
});

// GET single employee feedback by ID
router.get('/employee-feedback/:id', async (req, res) => {
  try {
    const [rows] = await db.query('SELECT * FROM employee_feedback WHERE id = ?', [req.params.id]);
    
    if (rows.length === 0) {
      return res.status(404).json({ message: 'Employee feedback not found' });
    }
    
    res.json(rows[0]);
  } catch (error) {
    console.error('Error fetching employee feedback:', error);
    res.status(500).json({ message: 'Error fetching employee feedback', error: error.message });
  }
});

// POST - Create new employee feedback
router.post('/employee-feedback', async (req, res) => {
  const {
    feedback_for_employee,
    feedback_given_by,
    feedback_type,
    reason,
    review,
    remarks,
    employee_idea
  } = req.body;

  // Validate required fields
  if (!feedback_for_employee || !feedback_given_by || !feedback_type || !reason || !review) {
    return res.status(400).json({ message: 'All required fields must be provided' });
  }

  try {
    const query = `
      INSERT INTO employee_feedback (
        feedback_for_employee, feedback_given_by, feedback_type,
        reason, review, remarks, employee_idea
      ) VALUES (?, ?, ?, ?, ?, ?, ?)
    `;

    const values = [
      feedback_for_employee, feedback_given_by, feedback_type,
      reason, review, remarks, employee_idea
    ];

    const [result] = await db.query(query, values);

    res.status(201).json({
      message: 'Employee feedback submitted successfully',
      id: result.insertId
    });
  } catch (error) {
    console.error('Error creating employee feedback:', error);
    res.status(500).json({ message: 'Error creating employee feedback', error: error.message });
  }
});

// PUT - Update employee feedback
router.put('/employee-feedback/:id', async (req, res) => {
  const {
    feedback_for_employee,
    feedback_given_by,
    feedback_type,
    reason,
    review,
    remarks,
    employee_idea
  } = req.body;

  try {
    const query = `
      UPDATE employee_feedback SET
        feedback_for_employee = ?, feedback_given_by = ?, feedback_type = ?,
        reason = ?, review = ?, remarks = ?, employee_idea = ?
      WHERE id = ?
    `;

    const values = [
      feedback_for_employee, feedback_given_by, feedback_type,
      reason, review, remarks, employee_idea,
      req.params.id
    ];

    const [result] = await db.query(query, values);

    if (result.affectedRows === 0) {
      return res.status(404).json({ message: 'Employee feedback not found' });
    }

    res.json({ message: 'Employee feedback updated successfully' });
  } catch (error) {
    console.error('Error updating employee feedback:', error);
    res.status(500).json({ message: 'Error updating employee feedback', error: error.message });
  }
});

// DELETE employee feedback
router.delete('/employee-feedback/:id', async (req, res) => {
  try {
    const [result] = await db.query('DELETE FROM employee_feedback WHERE id = ?', [req.params.id]);

    if (result.affectedRows === 0) {
      return res.status(404).json({ message: 'Employee feedback not found' });
    }

    res.json({ message: 'Employee feedback deleted successfully' });
  } catch (error) {
    console.error('Error deleting employee feedback:', error);
    res.status(500).json({ message: 'Error deleting employee feedback', error: error.message });
  }
});

// =============== PROJECT FEEDBACK ROUTES ===============

// GET all project feedbacks
router.get('/project-feedback', async (req, res) => {
  try {
    const [rows] = await db.query('SELECT * FROM project_feedback ORDER BY created_at DESC');
    res.json(rows);
  } catch (error) {
    console.error('Error fetching project feedbacks:', error);
    res.status(500).json({ message: 'Error fetching project feedbacks', error: error.message });
  }
});

// GET single project feedback by ID
router.get('/project-feedback/:id', async (req, res) => {
  try {
    const [rows] = await db.query('SELECT * FROM project_feedback WHERE id = ?', [req.params.id]);
    
    if (rows.length === 0) {
      return res.status(404).json({ message: 'Project feedback not found' });
    }
    
    res.json(rows[0]);
  } catch (error) {
    console.error('Error fetching project feedback:', error);
    res.status(500).json({ message: 'Error fetching project feedback', error: error.message });
  }
});

// POST - Create new project feedback
router.post('/project-feedback', async (req, res) => {
  const {
    project_or_event,
    feedback_given_by,
    reason,
    feedback_content,
    remarks
  } = req.body;

  // Validate required fields
  if (!project_or_event || !feedback_given_by || !reason || !feedback_content) {
    return res.status(400).json({ message: 'All required fields must be provided' });
  }

  try {
    const query = `
      INSERT INTO project_feedback (
        project_or_event, feedback_given_by, reason, feedback_content, remarks
      ) VALUES (?, ?, ?, ?, ?)
    `;

    const values = [
      project_or_event, feedback_given_by, reason, feedback_content, remarks
    ];

    const [result] = await db.query(query, values);

    res.status(201).json({
      message: 'Project feedback submitted successfully',
      id: result.insertId
    });
  } catch (error) {
    console.error('Error creating project feedback:', error);
    res.status(500).json({ message: 'Error creating project feedback', error: error.message });
  }
});

// PUT - Update project feedback
router.put('/project-feedback/:id', async (req, res) => {
  const {
    project_or_event,
    feedback_given_by,
    reason,
    feedback_content,
    remarks
  } = req.body;

  try {
    const query = `
      UPDATE project_feedback SET
        project_or_event = ?, feedback_given_by = ?, reason = ?,
        feedback_content = ?, remarks = ?
      WHERE id = ?
    `;

    const values = [
      project_or_event, feedback_given_by, reason, feedback_content, remarks,
      req.params.id
    ];

    const [result] = await db.query(query, values);

    if (result.affectedRows === 0) {
      return res.status(404).json({ message: 'Project feedback not found' });
    }

    res.json({ message: 'Project feedback updated successfully' });
  } catch (error) {
    console.error('Error updating project feedback:', error);
    res.status(500).json({ message: 'Error updating project feedback', error: error.message });
  }
});

// DELETE project feedback
router.delete('/project-feedback/:id', async (req, res) => {
  try {
    const [result] = await db.query('DELETE FROM project_feedback WHERE id = ?', [req.params.id]);

    if (result.affectedRows === 0) {
      return res.status(404).json({ message: 'Project feedback not found' });
    }

    res.json({ message: 'Project feedback deleted successfully' });
  } catch (error) {
    console.error('Error deleting project feedback:', error);
    res.status(500).json({ message: 'Error deleting project feedback', error: error.message });
  }
});

module.exports = router;
