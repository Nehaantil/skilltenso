 
const express = require('express');
const router = express.Router();
const { generateSummary, getMatchSuggestion } = require('../controllers/aiController');

// POST /api/ai/summary
router.post('/summary', generateSummary);

// POST /api/ai/match-suggestion
router.post('/match-suggestion', getMatchSuggestion);

module.exports = router;