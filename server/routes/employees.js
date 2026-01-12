const express = require('express');
const router = express.Router();
const db = require('../config/database');
const upload = require('../config/multer');

// GET all employees
router.get('/employees', async (req, res) => {
  try {
    const [rows] = await db.query('SELECT * FROM employees ORDER BY created_at DESC');
    res.json(rows);
  } catch (error) {
    console.error('Error fetching employees:', error);
    res.status(500).json({ message: 'Error fetching employees', error: error.message });
  }
});

// GET single employee by ID
router.get('/employees/:id', async (req, res) => {
  try {
    const [rows] = await db.query('SELECT * FROM employees WHERE employee_id = ?', [req.params.id]);
    
    if (rows.length === 0) {
      return res.status(404).json({ message: 'Employee not found' });
    }
    
    res.json(rows[0]);
  } catch (error) {
    console.error('Error fetching employee:', error);
    res.status(500).json({ message: 'Error fetching employee', error: error.message });
  }
});

// POST - Create new employee
router.post('/employees', upload.single('resume'), async (req, res) => {
  const {
    first_name,
    middle_name,
    last_name,
    gender,
    email,
    phone,
    designation,
    experience,
    father_name,
    mother_name,
    address,
    location,
    bank_account_no,
    bank_name,
    ifsc_code,
    date_of_joining
  } = req.body;

  const resume = req.file ? req.file.filename : null;

  // Validate required fields
  if (!first_name || !last_name || !gender || !email || !phone || 
      !designation || !address || !location || !bank_account_no || 
      !bank_name || !ifsc_code || !date_of_joining) {
    return res.status(400).json({ message: 'All required fields must be provided' });
  }

  try {
    const query = `
      INSERT INTO employees (
        first_name, middle_name, last_name, gender, email, phone,
        designation, experience, father_name, mother_name, address,
        location, bank_account_no, bank_name, ifsc_code, date_of_joining, resume
      ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
    `;

    const values = [
      first_name, middle_name, last_name, gender, email, phone,
      designation, experience, father_name, mother_name, address,
      location, bank_account_no, bank_name, ifsc_code, date_of_joining, resume
    ];

    const [result] = await db.query(query, values);

    res.status(201).json({
      message: 'Employee added successfully',
      employee_id: result.insertId
    });
  } catch (error) {
    console.error('Error adding employee:', error);
    
    // Check for duplicate email error
    if (error.code === 'ER_DUP_ENTRY') {
      return res.status(409).json({ message: 'Email already exists' });
    }
    
    res.status(500).json({ message: 'Error adding employee', error: error.message });
  }
});

// PUT - Update employee
router.put('/employees/:id', upload.single('resume'), async (req, res) => {
  const {
    first_name,
    middle_name,
    last_name,
    gender,
    email,
    phone,
    designation,
    experience,
    father_name,
    mother_name,
    address,
    location,
    bank_account_no,
    bank_name,
    ifsc_code,
    date_of_joining
  } = req.body;

  const resume = req.file ? req.file.filename : req.body.resume;

  try {
    const query = `
      UPDATE employees SET
        first_name = ?, middle_name = ?, last_name = ?, gender = ?,
        email = ?, phone = ?, designation = ?, experience = ?,
        father_name = ?, mother_name = ?, address = ?, location = ?,
        bank_account_no = ?, bank_name = ?, ifsc_code = ?, date_of_joining = ?, resume = ?
      WHERE employee_id = ?
    `;

    const values = [
      first_name, middle_name, last_name, gender, email, phone,
      designation, experience, father_name, mother_name, address,
      location, bank_account_no, bank_name, ifsc_code, date_of_joining, resume,
      req.params.id
    ];

    const [result] = await db.query(query, values);

    if (result.affectedRows === 0) {
      return res.status(404).json({ message: 'Employee not found' });
    }

    res.json({ message: 'Employee updated successfully' });
  } catch (error) {
    console.error('Error updating employee:', error);
    
    if (error.code === 'ER_DUP_ENTRY') {
      return res.status(409).json({ message: 'Email already exists' });
    }
    
    res.status(500).json({ message: 'Error updating employee', error: error.message });
  }
});

// DELETE employee
router.delete('/employees/:id', async (req, res) => {
  try {
    const [result] = await db.query('DELETE FROM employees WHERE employee_id = ?', [req.params.id]);

    if (result.affectedRows === 0) {
      return res.status(404).json({ message: 'Employee not found' });
    }

    res.json({ message: 'Employee deleted successfully' });
  } catch (error) {
    console.error('Error deleting employee:', error);
    res.status(500).json({ message: 'Error deleting employee', error: error.message });
  }
});

module.exports = router;
