const { Router } = require("express");
const {
  quoteGet,
  allQuotesGet,
} = require("../controllers/quote");

const router = Router();

// All quotes
router.get("/", allQuotesGet);

router.get("/random", quoteGet);

module.exports = router;
