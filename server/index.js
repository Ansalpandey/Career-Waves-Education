const express = require('express');
const path = require('path');
const app = express();

// Serve static files from the Vite build directory located in the client/dist folder
app.use(express.static(path.join(__dirname, '../client', 'dist')));

// Handle all requests to serve the index.html file from the dist folder
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../client', 'dist', 'index.html'));
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
