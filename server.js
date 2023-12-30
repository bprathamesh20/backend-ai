// index.js
import express from 'express'
import fetchData from '.';

const app = express();
const port = 3000;


// Define a route
app.get('/', (req, res) => {

  res.send('Hello, Express!');
});


// Start the server
app.listen(port, () => {
  console.log(`Server is listening at http://localhost:${port}`);
});



