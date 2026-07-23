 
const express = require('express');
const router = express.Router();
const { getAllUsers, getStats, deleteUser } = require('../controllers/adminController');

// GET /api/admin/users
router.get('/users', getAllUsers);

// GET /api/admin/stats
router.get('/stats', getStats);

// DELETE /api/admin/users/:id
router.delete('/users/:id', deleteUser);

module.exports = router;