const generateSummary = async (req, res) => {
  try {
    const { partnerName, skill, duration } = req.body;

    // Demo summary — interview ke liye perfect!
    const summary = `Great session with ${partnerName}! You covered key concepts in ${skill} over ${duration} minutes. Your teaching approach was clear and engaging, making complex topics easy to understand. Keep up the excellent work — consistency is key to mastering ${skill}. Consider exploring advanced topics in your next session!`;

    res.json({ summary });

  } catch (error) {
    res.status(500).json({ message: 'AI error!', error: error.message });
  }
};

const getMatchSuggestion = async (req, res) => {
  try {
    const { teachSkill, learnSkill } = req.body;

    const suggestion = `Perfect skill exchange opportunity! Teaching ${teachSkill} while learning ${learnSkill} creates a balanced learning environment. Start with fundamentals, use real examples, and take regular breaks. This exchange will significantly boost both your skills!`;

    res.json({ suggestion });

  } catch (error) {
    res.status(500).json({ message: 'AI error!', error: error.message });
  }
};

module.exports = { generateSummary, getMatchSuggestion };