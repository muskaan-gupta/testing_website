const express = require('express');
const router = express.Router();
const db = require('../config/database');
const upload = require('../config/multer');

// GET all events
router.get('/events', async (req, res) => {
  try {
    const [rows] = await db.query('SELECT * FROM events ORDER BY timing DESC');
    res.json(rows);
  } catch (error) {
    console.error('Error fetching events:', error);
    res.status(500).json({ message: 'Error fetching events', error: error.message });
  }
});

// GET single event by ID
router.get('/events/:id', async (req, res) => {
  try {
    const [rows] = await db.query('SELECT * FROM events WHERE document_id = ?', [req.params.id]);
    
    if (rows.length === 0) {
      return res.status(404).json({ message: 'Event not found' });
    }
    
    res.json(rows[0]);
  } catch (error) {
    console.error('Error fetching event:', error);
    res.status(500).json({ message: 'Error fetching event', error: error.message });
  }
});

// POST - Create new event
router.post('/events', upload.single('certificate'), async (req, res) => {
  const {
    company_name,
    organization_name,
    vendor_name,
    costing_breakdown,
    document,
    other_details,
    account_no,
    gst,
    ifsc,
    phone_number,
    email,
    timing,
    pan,
    aadhar,
    vendor_type
  } = req.body;

  const certificate = req.file ? req.file.filename : null;

  // Validate required fields
  if (!company_name || !organization_name || !vendor_name || !costing_breakdown || 
      !account_no || !ifsc || !phone_number || !email || !timing || !vendor_type) {
    return res.status(400).json({ message: 'All required fields must be provided' });
  }

  try {
    const query = `
      INSERT INTO events (
        company_name, organization_name, vendor_name, costing_breakdown, document, other_details,
        account_no, gst, ifsc, phone_number, email, timing,
        pan, aadhar, vendor_type, certificate
      ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
    `;

    const values = [
      company_name, organization_name, vendor_name, costing_breakdown, document, other_details,
      account_no, gst, ifsc, phone_number, email, timing,
      pan, aadhar, vendor_type, certificate
    ];

    const [result] = await db.query(query, values);

    res.status(201).json({
      message: 'Event added successfully',
      document_id: result.insertId
    });
  } catch (error) {
    console.error('Error adding event:', error);
    res.status(500).json({ message: 'Error adding event', error: error.message });
  }
});

// PUT - Update event
router.put('/events/:id', upload.single('certificate'), async (req, res) => {
  const {
    company_name,
    organization_name,
    vendor_name,
    costing_breakdown,
    document,
    other_details,
    account_no,
    gst,
    ifsc,
    phone_number,
    email,
    timing,
    pan,
    aadhar,
    vendor_type
  } = req.body;

  const certificate = req.file ? req.file.filename : req.body.certificate;

  try {
    const query = `
      UPDATE events SET
        company_name = ?, organization_name = ?, vendor_name = ?, costing_breakdown = ?, document = ?, other_details = ?,
        account_no = ?, gst = ?, ifsc = ?, phone_number = ?, email = ?, timing = ?,
        pan = ?, aadhar = ?, vendor_type = ?, certificate = ?
      WHERE document_id = ?
    `;

    const values = [
      company_name, organization_name, vendor_name, costing_breakdown, document, other_details,
      account_no, gst, ifsc, phone_number, email, timing,
      pan, aadhar, vendor_type, certificate,
      req.params.id
    ];

    const [result] = await db.query(query, values);

    if (result.affectedRows === 0) {
      return res.status(404).json({ message: 'Event not found' });
    }

    res.json({ message: 'Event updated successfully' });
  } catch (error) {
    console.error('Error updating event:', error);
    res.status(500).json({ message: 'Error updating event', error: error.message });
  }
});

// DELETE event
router.delete('/events/:id', async (req, res) => {
  try {
    const [result] = await db.query('DELETE FROM events WHERE document_id = ?', [req.params.id]);

    if (result.affectedRows === 0) {
      return res.status(404).json({ message: 'Event not found' });
    }

    res.json({ message: 'Event deleted successfully' });
  } catch (error) {
    console.error('Error deleting event:', error);
    res.status(500).json({ message: 'Error deleting event', error: error.message });
  }
});

module.exports = router;
