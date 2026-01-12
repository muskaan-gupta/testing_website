const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const path = require('path');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Serve uploaded files statically
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

// Routes
const employeeRoutes = require('./routes/employees');
const eventRoutes = require('./routes/events');
const vendorRoutes = require('./routes/vendors');
const projectEventRoutes = require('./routes/project-events');
const feedbackRoutes = require('./routes/feedback');
const leaveRoutes = require('./routes/leaves');
app.use('/api', employeeRoutes);
app.use('/api', eventRoutes);
app.use('/api', vendorRoutes);
app.use('/api', projectEventRoutes);
app.use('/api', feedbackRoutes);
app.use('/api', leaveRoutes);

// Root route
app.get('/', (req, res) => {
  res.json({ message: 'RudrakshaWFF API Server is running' });
});

// Health check endpoint
app.get('/health', (req, res) => {
  res.json({ status: 'OK', timestamp: new Date() });
});

// 404 handler
app.use((req, res) => {
  res.status(404).json({ message: 'Route not found' });
});

// Error handler
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ message: 'Something went wrong!', error: err.message });
});

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
  console.log(`API endpoint: http://localhost:${PORT}/api`);
});

module.exports = app;
