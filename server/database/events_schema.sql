-- Add vendors table (events endpoint is used for vendors)
CREATE TABLE IF NOT EXISTS events (
  document_id INT AUTO_INCREMENT PRIMARY KEY,
  company_name VARCHAR(200) NOT NULL,
  organization_name VARCHAR(200) NOT NULL,
  vendor_name VARCHAR(100) NOT NULL,
  costing_breakdown TEXT NOT NULL,
  document VARCHAR(255),
  other_details TEXT,
  account_no VARCHAR(50) NOT NULL,
  gst VARCHAR(20),
  ifsc VARCHAR(20) NOT NULL,
  phone_number VARCHAR(15) NOT NULL,
  email VARCHAR(255) NOT NULL,
  timing TIMESTAMP NOT NULL,
  pan VARCHAR(20),
  aadhar VARCHAR(20),
  vendor_type VARCHAR(50) NOT NULL,
  certificate VARCHAR(255),
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  INDEX idx_company_name (company_name),
  INDEX idx_vendor_type (vendor_type),
  INDEX idx_timing (timing)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
