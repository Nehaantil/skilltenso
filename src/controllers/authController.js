 
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

// Temporary users array — database baad mein add karenge
const users = [];

// SIGNUP
const signup = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    // Check karo email already exist karta hai ya nahi
    const existingUser = users.find(u => u.email === email);
    if (existingUser) {
      return res.status(400).json({ message: 'Email already exists!' });
    }

    // Password hash karo
    const hashedPassword = await bcrypt.hash(password, 10);

    // User banao
    const newUser = {
      id: users.length + 1,
      name,
      email,
      password: hashedPassword,
    };

    users.push(newUser);

    // JWT token banao
    const token = jwt.sign(
      { id: newUser.id, email: newUser.email },
      process.env.JWT_SECRET,
      { expiresIn: '7d' }
    );

    res.status(201).json({
      message: 'Account created successfully!',
      token,
      user: { id: newUser.id, name: newUser.name, email: newUser.email }
    });

  } catch (error) {
    res.status(500).json({ message: 'Server error!', error });
  }
};

// SIGNIN
const signin = async (req, res) => {
  try {
    const { email, password } = req.body;

    // User dhundo
    const user = users.find(u => u.email === email);
    if (!user) {
      return res.status(400).json({ message: 'User not found!' });
    }

    // Password check karo
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ message: 'Wrong password!' });
    }

    // JWT token banao
    const token = jwt.sign(
      { id: user.id, email: user.email },
      process.env.JWT_SECRET,
      { expiresIn: '7d' }
    );

    res.json({
      message: 'Login successful!',
      token,
      user: { id: user.id, name: user.name, email: user.email }
    });

  } catch (error) {
    res.status(500).json({ message: 'Server error!', error });
  }
};

module.exports = { signup, signin };