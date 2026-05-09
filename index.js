const express = require('express');
const app = express();

app.use(express.json());

app.get('/', (req, res) => {
  res.status(200).send('<h1>Welcome to the app</h1> <h2>Name: Rohit Kumar</h2>');
});

app.post('/add', (req, res) => {
  const { num1, num2 } = req.body || {};
  const a = Number(num1) || 0;
  const b = Number(num2) || 0;
  const result = a + b;
  res.status(200).json({ result });
});

if (require.main === module) {
  const port = 3000;
  app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
  });
}

module.exports = app;
