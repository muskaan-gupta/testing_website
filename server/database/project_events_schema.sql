-- Create project_events table for event management
CREATE TABLE IF NOT EXISTS project_events (
  id INT AUTO_INCREMENT PRIMARY KEY,
  project_name VARCHAR(100) NOT NULL,
  event_name VARCHAR(200) NOT NULL,
  event_description TEXT NOT NULL,
  event_purpose TEXT NOT NULL,
  costing_details TEXT NOT NULL,
  handled_by_employee VARCHAR(100) NOT NULL,
  event_date DATE NOT NULL,
  document VARCHAR(255) NOT NULL,
  status VARCHAR(50) DEFAULT 'Pending Approval',
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  INDEX idx_project_name (project_name),
  INDEX idx_event_date (event_date),
  INDEX idx_status (status)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
