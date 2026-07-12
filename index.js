const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const http = require('http');
const { Server } = require('socket.io');

dotenv.config();

const app = express();
const server = http.createServer(app);
const io = new Server(server, {
  cors: {
    origin: 'http://localhost:3000',
    methods: ['GET', 'POST']
  }
});

const PORT = process.env.PORT || 5001;

// Middleware
app.use(cors());
app.use(express.json());

// Database connect karo
require('./src/db');

// Routes
const authRoutes = require('./src/routes/auth');
app.use('/api/auth', authRoutes);
const aiRoutes = require('./src/routes/ai');
app.use('/api/ai', aiRoutes);

// Test route
app.get('/', (req, res) => {
  res.json({ message: 'SkillTenso Backend is running! 🚀' });
});

// Online users track karne ke liye
const onlineUsers = {};

// Socket.io events
io.on('connection', (socket) => {
  console.log('User connected:', socket.id);

  // User online hua
  socket.on('user-online', (userId) => {
    onlineUsers[userId] = socket.id;
    io.emit('online-users', Object.keys(onlineUsers));
    console.log('Online users:', Object.keys(onlineUsers));
  });

  // WebRTC Signaling
  socket.on('call-user', (data) => {
    const targetSocket = onlineUsers[data.to];
    if (targetSocket) {
      io.to(targetSocket).emit('incoming-call', {
        from: data.from,
        signal: data.signal
      });
    }
  });

  socket.on('answer-call', (data) => {
    const targetSocket = onlineUsers[data.to];
    if (targetSocket) {
      io.to(targetSocket).emit('call-accepted', data.signal);
    }
  });

  // Chat message
  socket.on('send-message', (data) => {
    const targetSocket = onlineUsers[data.to];
    if (targetSocket) {
      io.to(targetSocket).emit('receive-message', data);
    }
  });

  // User disconnect hua
  socket.on('disconnect', () => {
    const userId = Object.keys(onlineUsers).find(
      key => onlineUsers[key] === socket.id
    );
    if (userId) {
      delete onlineUsers[userId];
      io.emit('online-users', Object.keys(onlineUsers));
    }
    console.log('User disconnected:', socket.id);
  });
});

// Start server
server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});