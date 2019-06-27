const fs = require('fs');
const path = require('path');
const express = require('express');

const port = process.env.PORT || 4444;
const server = express();

server.use(express.static('public'));

server.get('/add/:n1/:n2', (req, res) => {
  const { n1, n2 } = req.params;
  console.log(req.params)
  res.json({
    result: +n1 + +n2
  });
});

server.get('/mpy/:n1/:n2', (req, res) => {
  const { n1, n2 } = req.params;
  res.json({
    result: +n1 * +n2
  });
});

server.listen(port, () => {
  console.log(`http://localhost:${port}`);
});
