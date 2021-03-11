var express = require('express');
var app = express();

app.get('/url', (req, res, next) => {
  res.json(['Hello', 'World']);
});

app.listen(3300, () => {
  console.log('Server running on port 3300');
});
