# Employee Management System - Setup Guide

This guide will help you set up and run the complete Employee Management System with frontend and backend.

## Project Structure

```
RudrakshaWFF/
├── client/                          # React frontend
│   ├── src/
│   │   ├── pages/
│   │   │   ├── Dashboard.js         # Dashboard with navigation
│   │   │   └── ManageEmployee.js    # Employee management page
│   │   └── App.js                   # Updated with routing
│   └── package.json
│
└── server/                          # Node.js backend
    ├── config/
    │   └── database.js              # MySQL connection
    ├── database/
    │   └── schema.sql               # Database schema
    ├── routes/
    │   └── employees.js             # API endpoints
    ├── .env                         # Environment variables
    ├── server.js                    # Main server file
    ├── package.json
    └── README.md
```

## Prerequisites

Before starting, ensure you have installed:
- Node.js (v14 or higher)
- MySQL (v5.7 or higher)
- npm or yarn

## Setup Instructions

### Step 1: Set Up MySQL Database

1. Open MySQL Command Line Client or MySQL Workbench

2. Create the database:
```sql
CREATE DATABASE IF NOT EXISTS rudrakshawff_db;
```

3. Navigate to the server folder and run the schema file:
```bash
cd server
mysql -u root -p rudrakshawff_db < database/schema.sql
```

Or manually copy and execute the SQL from `server/database/schema.sql`

### Step 2: Configure Backend

1. Navigate to the server folder:
```bash
cd server
```

2. Install dependencies:
```bash
npm install
```

3. Update the `.env` file with your MySQL credentials:
```env
PORT=5000
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=your_mysql_password
DB_NAME=rudrakshawff_db
```

4. Start the backend server:
```bash
npm start
```

Or for development mode with auto-restart:
```bash
npm run dev
```

The server will run on `http://localhost:5000`

### Step 3: Configure Frontend

1. Open a new terminal and navigate to the client folder:
```bash
cd client
```

2. Install dependencies (if not already installed):
```bash
npm install
```

3. Start the React development server:
```bash
npm start
```

The frontend will run on `http://localhost:3000`

## Testing the Application

### 1. Access the Dashboard
- Navigate to `http://localhost:3000/crm` (if authentication is required)
- Or directly go to `http://localhost:3000/dashboard`

### 2. Navigate to Employee Management
- Click on the "Manage Employee" button in the Quick Actions section
- Or directly navigate to `http://localhost:3000/manage-employee`

### 3. Add a New Employee
- Fill in all required fields in the form
- Click "Add Employee" to save
- The employee will be saved to the MySQL database

### 4. View Employee List
- All added employees will appear in the table below the form
- The list automatically refreshes after adding a new employee

## API Endpoints

The backend provides the following REST API endpoints:

- **GET** `/api/employees` - Fetch all employees
- **GET** `/api/employees/:id` - Fetch single employee
- **POST** `/api/employees` - Add new employee
- **PUT** `/api/employees/:id` - Update employee
- **DELETE** `/api/employees/:id` - Delete employee

## Employee Form Fields

The form includes all specified fields:
- **Personal Information**: First Name, Middle Name, Last Name, Gender, Email, Phone, Father's Name, Mother's Name
- **Professional Information**: Designation, Date of Joining, Experience
- **Address Information**: Address, Location
- **Bank Information**: Bank Name, Account Number, IFSC Code

## Features Implemented

✅ Complete employee form with all required fields
✅ Form validation (required fields marked with *)
✅ Save employee data to MySQL database
✅ Fetch and display all employees from database
✅ Header and Footer components
✅ Back to Dashboard navigation
✅ Success/Error message display
✅ Responsive design with Tailwind CSS
✅ Real-time employee list updates
✅ Auto-increment employee ID
✅ Unique email validation
✅ Timestamp for created_at field

## Troubleshooting

### Database Connection Issues
- Verify MySQL is running
- Check credentials in `.env` file
- Ensure database `rudrakshawff_db` exists

### Port Already in Use
- Change PORT in `server/.env` file
- Update API endpoint in `client/src/pages/ManageEmployee.js`

### CORS Errors
- Ensure the backend server is running
- Check if CORS is properly configured in `server/server.js`

### Cannot Add Employee
- Check browser console for errors
- Verify backend is running on port 5000
- Check MySQL connection in backend logs

## Next Steps

You can extend this system by:
- Adding edit functionality for employees
- Adding delete functionality with confirmation
- Adding search and filter options
- Implementing pagination for large employee lists
- Adding employee profile photos
- Exporting employee data to Excel/PDF
- Adding more dashboard features

## Support

For any issues or questions, check:
1. Browser console for frontend errors
2. Server terminal for backend errors
3. MySQL logs for database issues
