const express = require('express');
const path = require('path');
const app = express();

// Serve static Angular files
app.use(express.static(path.join(__dirname, '../dist/sample')));

// Example API
app.get('/api/hello', (req, res) => {
  res.json({ message: 'Hello from backend!' });
});

// Fallback for Angular routes
app.get(/^\/.*/, (req, res) => {
  res.sendFile(path.join(__dirname, '../dist/sample/index.html'));
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));