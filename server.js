const express = require('express');
const app = express();
const port = 3000;

// Define routes or middleware
// Example route
app.get('/api/users', (req, res) => {
  // Handle the request and send a response
  res.json({ message: 'Hello from Express!' });
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
