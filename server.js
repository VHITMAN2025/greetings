// server.js
const express = require('express');
const path = require('path');
const app = express();

// Middleware to serve static assets (CSS, JS, images, etc.)
app.use(express.static(path.join(__dirname, 'public')));

// Serve index.html when users visit the root URL
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

// Optional: Example API endpoint (can be used by your JS if needed)
app.get('/hearts', (req, res) => {
  res.json({ count: 10, message: 'API working fine 💖' });
});

// Catch-all route for 404 errors
app.use((req, res) => {
  res.status(404).send('<h2>404 - Page Not Found</h2>');
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`🎉 Birthday Flipbook server running at: http://localhost:${PORT}`);
});
