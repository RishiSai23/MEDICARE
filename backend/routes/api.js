const express = require('express');
const router = express.Router();

// Import controllers
const testController = require('../controllers/testController');

// Test routes
router.get('/test', testController.getTest);
router.post('/test', testController.postTest);

// Health check for API routes
router.get('/health', (req, res) => {
  res.json({
    message: 'API routes are working',
    timestamp: new Date().toISOString(),
    availableEndpoints: [
      'GET /api/test',
      'POST /api/test',
      'GET /api/health'
    ]
  });
});

// Authentication routes
router.use('/auth', require('./auth'));

// Future routes will be added here:
// router.use('/patients', require('./patients'));
// router.use('/doctors', require('./doctors'));
// router.use('/appointments', require('./appointments'));
// router.use('/billing', require('./billing'));
// router.use('/inventory', require('./inventory'));

module.exports = router;