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
// Quiz Generate karo
const generateQuiz = async (req, res) => {
  try {
    const { skill } = req.body;

    // Demo quiz — interview ke liye perfect!
    const quiz = {
      skill,
      questions: [
        {
          id: 1,
          question: `What is the most important concept in ${skill}?`,
          options: ['Fundamentals', 'Advanced topics', 'Practical application', 'Theory only'],
          correct: 0
        },
        {
          id: 2,
          question: `Which approach is best for learning ${skill}?`,
          options: ['Reading only', 'Practice + theory', 'Watching videos', 'Trial and error'],
          correct: 1
        },
        {
          id: 3,
          question: `How long does it typically take to master ${skill}?`,
          options: ['1 week', '1 month', '3-6 months', '10 years'],
          correct: 2
        },
        {
          id: 4,
          question: `What is the best resource for ${skill}?`,
          options: ['Books only', 'Online courses', 'Peer learning', 'All of the above'],
          correct: 3
        },
        {
          id: 5,
          question: `Which skill complements ${skill} the most?`,
          options: ['Communication', 'Problem solving', 'Critical thinking', 'All of the above'],
          correct: 3
        },
      ]
    };

    res.json({ quiz });

  } catch (error) {
    res.status(500).json({ message: 'Quiz generation error!', error: error.message });
  }
};

module.exports = { generateSummary, getMatchSuggestion, generateQuiz };