-- Create database
CREATE DATABASE IF NOT EXISTS rudrakshawff_db;

USE rudrakshawff_db;

-- Create employees table
CREATE TABLE IF NOT EXISTS employees (
  employee_id INT AUTO_INCREMENT PRIMARY KEY,
  first_name VARCHAR(100) NOT NULL,
  middle_name VARCHAR(100),
  last_name VARCHAR(100) NOT NULL,
  gender VARCHAR(20) NOT NULL,
  email VARCHAR(255) UNIQUE NOT NULL,
  phone VARCHAR(15) NOT NULL,
  designation VARCHAR(100) NOT NULL,
  experience TEXT,
  father_name VARCHAR(100),
  mother_name VARCHAR(100),
  address TEXT NOT NULL,
  location VARCHAR(100) NOT NULL,
  bank_account_no VARCHAR(50) NOT NULL,
  bank_name VARCHAR(100) NOT NULL,
  ifsc_code VARCHAR(20) NOT NULL,
  date_of_joining DATE NOT NULL,
  resume VARCHAR(255),
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  INDEX idx_email (email),
  INDEX idx_designation (designation)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
