const express = require('express');
const router = express.Router();
const db = require('../config/database');
const upload = require('../config/multer');

// GET all project events
router.get('/project-events', async (req, res) => {
  try {
    const [rows] = await db.query('SELECT * FROM project_events ORDER BY event_date DESC');
    res.json(rows);
  } catch (error) {
    console.error('Error fetching project events:', error);
    res.status(500).json({ message: 'Error fetching project events', error: error.message });
  }
});

// GET single project event by ID
router.get('/project-events/:id', async (req, res) => {
  try {
    const [rows] = await db.query('SELECT * FROM project_events WHERE id = ?', [req.params.id]);
    
    if (rows.length === 0) {
      return res.status(404).json({ message: 'Project event not found' });
    }
    
    res.json(rows[0]);
  } catch (error) {
    console.error('Error fetching project event:', error);
    res.status(500).json({ message: 'Error fetching project event', error: error.message });
  }
});

// POST - Create new project event
router.post('/project-events', upload.single('document'), async (req, res) => {
  const {
    project_name,
    event_name,
    event_description,
    event_purpose,
    costing_details,
    handled_by_employee,
    event_date
  } = req.body;

  const document = req.file ? req.file.filename : null;

  // Validate required fields
  if (!project_name || !event_name || !event_description || !event_purpose || 
      !costing_details || !handled_by_employee || !event_date || !document) {
    return res.status(400).json({ message: 'All fields including document are required' });
  }

  try {
    const query = `
      INSERT INTO project_events (
        project_name, event_name, event_description, event_purpose,
        costing_details, handled_by_employee, event_date, document
      ) VALUES (?, ?, ?, ?, ?, ?, ?, ?)
    `;

    const values = [
      project_name, event_name, event_description, event_purpose,
      costing_details, handled_by_employee, event_date, document
    ];

    const [result] = await db.query(query, values);

    res.status(201).json({
      message: 'Event submitted successfully for approval',
      id: result.insertId
    });
  } catch (error) {
    console.error('Error creating project event:', error);
    res.status(500).json({ message: 'Error creating project event', error: error.message });
  }
});

// PUT - Update project event
router.put('/project-events/:id', upload.single('document'), async (req, res) => {
  const {
    project_name,
    event_name,
    event_description,
    event_purpose,
    costing_details,
    handled_by_employee,
    event_date,
    status
  } = req.body;

  const document = req.file ? req.file.filename : req.body.document;

  try {
    const query = `
      UPDATE project_events SET
        project_name = ?, event_name = ?, event_description = ?, event_purpose = ?,
        costing_details = ?, handled_by_employee = ?, event_date = ?, document = ?,
        status = ?
      WHERE id = ?
    `;

    const values = [
      project_name, event_name, event_description, event_purpose,
      costing_details, handled_by_employee, event_date, document,
      status || 'Pending Approval',
      req.params.id
    ];

    const [result] = await db.query(query, values);

    if (result.affectedRows === 0) {
      return res.status(404).json({ message: 'Project event not found' });
    }

    res.json({ message: 'Event updated successfully' });
  } catch (error) {
    console.error('Error updating project event:', error);
    res.status(500).json({ message: 'Error updating project event', error: error.message });
  }
});

// DELETE project event
router.delete('/project-events/:id', async (req, res) => {
  try {
    const [result] = await db.query('DELETE FROM project_events WHERE id = ?', [req.params.id]);

    if (result.affectedRows === 0) {
      return res.status(404).json({ message: 'Project event not found' });
    }

    res.json({ message: 'Event deleted successfully' });
  } catch (error) {
    console.error('Error deleting project event:', error);
    res.status(500).json({ message: 'Error deleting project event', error: error.message });
  }
});

module.exports = router;
