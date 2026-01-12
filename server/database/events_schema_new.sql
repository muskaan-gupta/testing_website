-- Events Table Schema (General Events Management)
-- This is separate from vendors and project_events tables
CREATE TABLE IF NOT EXISTS events (
  event_id INT AUTO_INCREMENT PRIMARY KEY,
  event_name VARCHAR(200) NOT NULL,
  event_type VARCHAR(100),
  event_date DATE,
  event_location VARCHAR(255),
  event_description TEXT,
  costing_breakdown TEXT,
  document TEXT,
  other_details TEXT,
  account_no VARCHAR(50),
  gst VARCHAR(20),
  ifsc VARCHAR(20),
  phone_number VARCHAR(20),
  email VARCHAR(100),
  timing VARCHAR(100),
  pan VARCHAR(20),
  aadhar VARCHAR(20),
  certificate VARCHAR(255),
  status VARCHAR(50) DEFAULT 'Active',
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  INDEX idx_event_name (event_name),
  INDEX idx_event_type (event_type),
  INDEX idx_event_date (event_date),
  INDEX idx_status (status)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
