const express = require('express');
const router = express.Router();
const { generateSummary, getMatchSuggestion, generateQuiz } = require('../controllers/aiController');

// POST /api/ai/summary
router.post('/summary', generateSummary);

// POST /api/ai/match-suggestion
router.post('/match-suggestion', getMatchSuggestion);

// POST /api/ai/quiz
router.post('/quiz', generateQuiz);

module.exports = router;