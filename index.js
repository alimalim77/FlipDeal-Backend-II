const express = require('express');
const cors = require('cors');

const app = express();
const port = 3010;

app.use(cors());

app.get('/calculate-returns', (req, res) => {
  const { boughtAt, marketPrice, quantity } = req.query;
  const calculateReturn = (boughtAt, marketPrice, quantity) =>
    (marketPrice - boughtAt) * 2;
  res.json(
    calculateReturn(
      parseFloat(boughtAt),
      parseFloat(marketPrice),
      parseFloat(quantity)
    ).toString()
  );
});

app.get('/total-returns', (req, res) => {
  const { stock1, stock2, stock3, stock4 } = req.query;
  const totalReturn = (...args) => args.reduce((acc, sum) => acc + sum, 0);
  res.json(
    totalReturn(
      parseFloat(stock1),
      parseFloat(stock2),
      parseFloat(stock3),
      parseFloat(stock4)
    ).toString()
  );
});

app.get('/calculate-return-percentage', (req, res) => {
  const { boughtAt, returns } = req.query;
  const totalReturn = (boughtAt, returns) => (returns / boughtAt) * 100;
  res.json(totalReturn(parseFloat(boughtAt), parseFloat(returns)).toString());
});

app.get('/total-return-percentage', (req, res) => {
  const { stock1, stock2, stock3, stock4 } = req.query;
  const totalReturn = (...args) => args.reduce((acc, sum) => acc + sum, 0);
  res.json(
    totalReturn(
      parseFloat(stock1),
      parseFloat(stock2),
      parseFloat(stock3),
      parseFloat(stock4)
    ).toString()
  );
});

app.get('/status', (req, res) => {
  const { returnPercentage } = req.query;
  res.json(parseFloat(returnPercentage) > 0 ? 'profit' : 'loss');
});
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
