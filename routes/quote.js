const { Router } = require("express");
const {
  quoteGet,
  allQuotesGet,
} = require("../controllers/quote");

const router = Router();

// All quotes
router.get("/all", allQuotesGet);

router.get("/", quoteGet);

module.exports = router;
