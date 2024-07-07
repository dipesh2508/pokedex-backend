const express = require('express');
const fs = require('fs').promises;
const cors = require('cors');

const app = express();
const PORT = 8000;

// Middleware to parse JSON bodies
app.use(express.json());
app.use(cors())

// Custom middleware example (logging)
app.use((req, res, next) => {
  console.log(`${req.method} ${req.url}`);
  next();
});

// Route to serve the JSON data
app.get('/pokemon', async (req, res) => {
  try {
    const data = await fs.readFile('./pokemon-data.json', 'utf8');
    const jsonData = JSON.parse(data);
    res.json(jsonData);
  } catch (error) {
    console.error('Error reading JSON file:', error);
    res.status(500).json({ error: 'Failed to fetch data' });
  }
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something broke!');
});

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
