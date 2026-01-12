const express = require('express');
const router = express.Router();
const db = require('../config/database');
const upload = require('../config/multer');

// GET all vendors
router.get('/vendors', async (req, res) => {
  try {
    const [vendors] = await db.query('SELECT * FROM vendors ORDER BY created_at DESC');
    res.json(vendors);
  } catch (error) {
    console.error('Error fetching vendors:', error);
    res.status(500).json({ message: 'Error fetching vendors', error: error.message });
  }
});

// GET single vendor
router.get('/vendors/:id', async (req, res) => {
  try {
    const [vendors] = await db.query('SELECT * FROM vendors WHERE vendor_id = ?', [req.params.id]);
    
    if (vendors.length === 0) {
      return res.status(404).json({ message: 'Vendor not found' });
    }
    
    res.json(vendors[0]);
  } catch (error) {
    console.error('Error fetching vendor:', error);
    res.status(500).json({ message: 'Error fetching vendor', error: error.message });
  }
});

// POST - Create new vendor
router.post('/vendors', upload.single('certificate'), async (req, res) => {
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
  if (!company_name || !organization_name || !vendor_name || !account_no || 
      !ifsc || !phone_number || !email || !timing || !vendor_type) {
    return res.status(400).json({ message: 'All required fields must be provided' });
  }

  try {
    const query = `
      INSERT INTO vendors (
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
      message: 'Vendor added successfully',
      vendor_id: result.insertId
    });
  } catch (error) {
    console.error('Error adding vendor:', error);
    res.status(500).json({ message: 'Error adding vendor', error: error.message });
  }
});

// PUT - Update vendor
router.put('/vendors/:id', upload.single('certificate'), async (req, res) => {
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
      UPDATE vendors SET
        company_name = ?, organization_name = ?, vendor_name = ?, costing_breakdown = ?, document = ?, other_details = ?,
        account_no = ?, gst = ?, ifsc = ?, phone_number = ?, email = ?, timing = ?,
        pan = ?, aadhar = ?, vendor_type = ?, certificate = ?
      WHERE vendor_id = ?
    `;

    const values = [
      company_name, organization_name, vendor_name, costing_breakdown, document, other_details,
      account_no, gst, ifsc, phone_number, email, timing,
      pan, aadhar, vendor_type, certificate,
      req.params.id
    ];

    const [result] = await db.query(query, values);

    if (result.affectedRows === 0) {
      return res.status(404).json({ message: 'Vendor not found' });
    }

    res.json({ message: 'Vendor updated successfully' });
  } catch (error) {
    console.error('Error updating vendor:', error);
    res.status(500).json({ message: 'Error updating vendor', error: error.message });
  }
});

// DELETE vendor
router.delete('/vendors/:id', async (req, res) => {
  try {
    const [result] = await db.query('DELETE FROM vendors WHERE vendor_id = ?', [req.params.id]);

    if (result.affectedRows === 0) {
      return res.status(404).json({ message: 'Vendor not found' });
    }

    res.json({ message: 'Vendor deleted successfully' });
  } catch (error) {
    console.error('Error deleting vendor:', error);
    res.status(500).json({ message: 'Error deleting vendor', error: error.message });
  }
});

module.exports = router;
