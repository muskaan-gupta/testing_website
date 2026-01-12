# RudrakshaWFF Server

Backend API server for RudrakshaWFF Employee Management System.

## Prerequisites

- Node.js (v14 or higher)
- MySQL (v5.7 or higher)

## Setup Instructions

### 1. Install Dependencies

```bash
cd server
npm install
```

### 2. Configure Database

1. Create a MySQL database named `rudrakshawff_db`
2. Update the `.env` file with your database credentials:

```env
PORT=5000
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=your_password
DB_NAME=rudrakshawff_db
```

### 3. Create Database Schema

Run the SQL script to create the employees table:

```bash
mysql -u root -p rudrakshawff_db < database/schema.sql
```

Or manually execute the SQL commands in `database/schema.sql` using MySQL Workbench or command line.

### 4. Start the Server

Development mode (with auto-restart):
```bash
npm run dev
```

Production mode:
```bash
npm start
```

The server will run on `http://localhost:5000`

## API Endpoints

### Employees

- **GET** `/api/employees` - Get all employees
- **GET** `/api/employees/:id` - Get a single employee by ID
- **POST** `/api/employees` - Create a new employee
- **PUT** `/api/employees/:id` - Update an employee
- **DELETE** `/api/employees/:id` - Delete an employee

### Example POST Request Body

```json
{
  "first_name": "John",
  "middle_name": "Robert",
  "last_name": "Doe",
  "gender": "Male",
  "email": "john.doe@example.com",
  "phone": "1234567890",
  "designation": "Software Engineer",
  "experience": "3 years of experience in web development",
  "father_name": "Richard Doe",
  "mother_name": "Mary Doe",
  "address": "123 Main Street, Apartment 4B",
  "location": "New York, NY",
  "bank_account_no": "1234567890123",
  "bank_name": "ABC Bank",
  "ifsc_code": "ABCD0123456",
  "date_of_joining": "2024-01-15"
}
```

## Project Structure

```
server/
├── config/
│   └── database.js       # Database configuration
├── database/
│   └── schema.sql        # Database schema
├── routes/
│   └── employees.js      # Employee routes
├── .env                  # Environment variables
├── .gitignore
├── package.json
├── server.js             # Main server file
└── README.md
```

## Error Handling

The API returns appropriate HTTP status codes:

- `200` - Success
- `201` - Created
- `400` - Bad Request
- `404` - Not Found
- `409` - Conflict (duplicate email)
- `500` - Server Error
