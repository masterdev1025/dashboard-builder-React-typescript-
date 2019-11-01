const path = require('path');

const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());

const port = 8001;

app.get('/api/products', (req, res) => {
  res.sendFile(path.join(__dirname, 'data', 'products.json'));
});
app.get('/api/cars', (req, res) => {
	res.sendFile(path.join(__dirname, 'data', 'car-models.json'));
  });
  app.get('/api/brands', (req, res) => {
	res.sendFile(path.join(__dirname, 'data', 'car-brands.json'));
  });
  app.get('/api/maker', (req, res) => {
	res.sendFile(path.join(__dirname, 'data', 'maker.json'));
  });
app.listen(port, () => {
  console.log(`[products] API listening on port ${port}.`);
});
