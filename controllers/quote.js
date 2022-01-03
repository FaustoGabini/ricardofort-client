const { response } = require("express");
const frases = require("../quotes.json");

const quoteGet = (req, res = response) => {
  const randomQuote =
    frases[Math.floor(Math.random() * frases.length)];

  res.json({ frase: randomQuote });
};
const allQuotesGet = (req, res = "response") => {
  res.json({ frases });
};

module.exports = {
  quoteGet,
  allQuotesGet,
};
