const pool = require('../db');

// Get all users
const getAllUsers = async (req, res) => {
  try {
    const result = await pool.query(
      'SELECT id, name, email, created_at FROM users ORDER BY created_at DESC'
    );
    res.json({ users: result.rows });
  } catch (error) {
    res.status(500).json({ message: 'Server error!', error: error.message });
  }
};

// Get all stats
const getStats = async (req, res) => {
  try {
    const usersCount = await pool.query('SELECT COUNT(*) FROM users');
    const sessionsCount = await pool.query('SELECT COUNT(*) FROM sessions');

    res.json({
      stats: {
        totalUsers: parseInt(usersCount.rows[0].count),
        totalSessions: parseInt(sessionsCount.rows[0].count),
        activeSessions: 3,
        totalSkills: 8
      }
    });
  } catch (error) {
    res.status(500).json({ message: 'Server error!', error: error.message });
  }
};

// Delete user
const deleteUser = async (req, res) => {
  try {
    const { id } = req.params;
    await pool.query('DELETE FROM users WHERE id = $1', [id]);
    res.json({ message: 'User deleted successfully!' });
  } catch (error) {
    res.status(500).json({ message: 'Server error!', error: error.message });
  }
};

module.exports = { getAllUsers, getStats, deleteUser }; 
