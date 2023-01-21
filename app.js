const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.sendFile('./index.html', { root: __dirname });
});


app.use('/', (req, res) => {
  res.status(404);
  res.send('ERROR 404');
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
});