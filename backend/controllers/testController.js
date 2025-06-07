// Test controller for API endpoints
const getTest = (req, res) => {
  try {
    res.status(200).json({
      message: 'API working successfully',
      method: 'GET',
      timestamp: new Date().toISOString(),
      server: 'Hospital AI Backend',
      version: '1.0.0'
    });
  } catch (error) {
    res.status(500).json({
      message: 'Error in test endpoint',
      error: error.message
    });
  }
};

const postTest = (req, res) => {
  try {
    const { message } = req.body;
    res.status(200).json({
      message: 'POST request successful',
      receivedData: message || 'No message provided',
      method: 'POST',
      timestamp: new Date().toISOString(),
      server: 'Hospital AI Backend'
    });
  } catch (error) {
    res.status(500).json({
      message: 'Error in POST test endpoint',
      error: error.message
    });
  }
};

module.exports = {
  getTest,
  postTest
};