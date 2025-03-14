const express = require('express');
const app = express();
const port = 3000;

// Define a route '/test' that sends a JSON response
app.get('/test', (req, res) => {
  res.json({ message: 'Express is working! Espinosa, Adonis Henry M.' });
});

// Start the server and listen on port 3000
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
