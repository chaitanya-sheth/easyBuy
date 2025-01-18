const express = require('express'); 

const app = express(); 

const PORT = 5000; 

// Define a simple route
app.get('/', (req, res) => {
  res.send('Backend run successfully');
});

app.listen(PORT, () => {
  console.log(`Backend is running on ${PORT} PORT`);
});
