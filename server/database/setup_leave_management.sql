-- Quick setup script for leave management
-- Run this entire file in MySQL

USE rudrakshawff_db;

-- Drop existing tables if they exist
DROP TABLE IF EXISTS employee_leaves;
DROP TABLE IF EXISTS leave_types;

-- Create Leave Types Table
CREATE TABLE leave_types (
  leave_type_id INT AUTO_INCREMENT PRIMARY KEY,
  leave_type_name VARCHAR(100) NOT NULL,
  description TEXT,
  max_days_per_year INT,
  max_consecutive_days INT,
  requires_medical_certificate BOOLEAN DEFAULT FALSE,
  excluded_staff_types VARCHAR(255),
  has_work_from_home_option BOOLEAN DEFAULT FALSE,
  wfh_days INT DEFAULT 0,
  is_half_day_applicable BOOLEAN DEFAULT FALSE,
  criteria_notes TEXT,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Insert all 10 leave types with criteria
INSERT INTO leave_types (leave_type_name, description, max_days_per_year, max_consecutive_days, requires_medical_certificate, excluded_staff_types, has_work_from_home_option, wfh_days, is_half_day_applicable, criteria_notes) VALUES
('Casual Leave', 'Personal or casual time off', 24, 2, FALSE, NULL, FALSE, 0, FALSE, 'Maximum 2 consecutive days allowed at a time. For short-term personal needs.'),
('Sick Leave', 'Medical leave for illness or injury', 12, 12, TRUE, NULL, FALSE, 0, FALSE, 'Maximum 12 days per year for all categories of staff. Medical certificate required for leaves exceeding 3 days.'),
('Earned Leave', 'Annual earned leave for planning vacation', 7, 7, FALSE, 'Voluntary,Intern', FALSE, 0, FALSE, 'Maximum 7 days allowed. Not applicable for Voluntary and Intern staff members.'),
('Compensatory Leave', 'Leave for working on Sunday or holidays', 12, 5, FALSE, NULL, FALSE, 0, FALSE, 'Granted when employee works on Sunday/holidays. Must be approved by supervisor. Valid for 90 days from earning date.'),
('Weekly Off', 'Regular weekly off adjustment', 52, 2, FALSE, NULL, FALSE, 0, FALSE, 'Weekly off compensation for adjusted working schedules.'),
('Special Leave', 'For emergency or health issues', 7, 7, FALSE, NULL, FALSE, 0, FALSE, 'Maximum 7 days for any emergency or health-related issues. Requires proper justification.'),
('Maternity Leave', 'Maternity leave for female employees', 150, 150, TRUE, 'Male', FALSE, 0, FALSE, '150 days of paid maternity leave. Medical certificate and pregnancy proof required. Can be taken before and after delivery.'),
('Paternity Leave', 'Paternity leave for male employees', 14, 14, FALSE, 'Female', TRUE, 16, FALSE, '14 days paid paternity leave + optional 16 days work from home. Birth certificate required.'),
('Morning Leave', 'Half-day morning leave', 15, 1, FALSE, NULL, FALSE, 0, TRUE, 'Maximum 15 morning leaves (half-day) allowed per year. For personal appointments or urgent matters.'),
('Emergency Leave', 'Immediate family emergency leave', 7, 7, FALSE, NULL, FALSE, 0, FALSE, 'Maximum 7 days for immediate family emergencies (within first relation). Requires supporting documents or proof.');

-- Create Employee Leaves Table
CREATE TABLE employee_leaves (
  leave_id INT AUTO_INCREMENT PRIMARY KEY,
  unique_id VARCHAR(50) NOT NULL,
  employee_name VARCHAR(200) NOT NULL,
  employee_id VARCHAR(50) NOT NULL,
  leave_type_id INT NOT NULL,
  from_date DATE NOT NULL,
  to_date DATE NOT NULL,
  total_days DECIMAL(4,1) NOT NULL,
  is_half_day BOOLEAN DEFAULT FALSE,
  reason TEXT NOT NULL,
  medical_certificate BOOLEAN DEFAULT FALSE,
  medical_certificate_file VARCHAR(255),
  supporting_document VARCHAR(255),
  is_work_from_home BOOLEAN DEFAULT FALSE,
  wfh_from_date DATE,
  wfh_to_date DATE,
  approval_status VARCHAR(50) DEFAULT 'Pending',
  approved_by INT,
  approval_remarks TEXT,
  applied_on TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  INDEX idx_unique_id (unique_id),
  INDEX idx_employee_name (employee_name),
  INDEX idx_employee_id (employee_id),
  INDEX idx_leave_type_id (leave_type_id),
  INDEX idx_approval_status (approval_status),
  INDEX idx_from_date (from_date),
  INDEX idx_to_date (to_date),
  FOREIGN KEY (leave_type_id) REFERENCES leave_types(leave_type_id)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Verify the data was inserted
SELECT 'Leave types created successfully!' as status;
SELECT * FROM leave_types;
