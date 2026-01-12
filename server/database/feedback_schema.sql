-- Create employee_feedback table
CREATE TABLE IF NOT EXISTS employee_feedback (
  id INT AUTO_INCREMENT PRIMARY KEY,
  feedback_for_employee VARCHAR(100) NOT NULL,
  feedback_given_by VARCHAR(100) NOT NULL,
  feedback_type VARCHAR(50) NOT NULL,
  reason VARCHAR(255) NOT NULL,
  review TEXT NOT NULL,
  remarks TEXT,
  employee_idea TEXT,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  INDEX idx_feedback_for (feedback_for_employee),
  INDEX idx_feedback_by (feedback_given_by),
  INDEX idx_feedback_type (feedback_type)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Create project_feedback table
CREATE TABLE IF NOT EXISTS project_feedback (
  id INT AUTO_INCREMENT PRIMARY KEY,
  project_or_event VARCHAR(200) NOT NULL,
  feedback_given_by VARCHAR(100) NOT NULL,
  reason VARCHAR(255) NOT NULL,
  feedback_content TEXT NOT NULL,
  remarks TEXT,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  INDEX idx_project_event (project_or_event),
  INDEX idx_feedback_by (feedback_given_by)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
