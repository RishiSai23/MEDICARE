const mongoose = require('mongoose');
const User = require('./models/User');
require('dotenv').config();

const seedUsers = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/hospitalai');
    
    // Clear existing users
    await User.deleteMany({});
    
    // Create demo users
    const demoUsers = [
      {
        email: 'patient@demo.com',
        password: 'password123',
        name: 'John Patient',
        role: 'patient'
      },
      {
        email: 'doctor@demo.com',
        password: 'password123',
        name: 'Dr. Sarah Smith',
        role: 'doctor'
      },
      {
        email: 'admin@demo.com',
        password: 'password123',
        name: 'Admin User',
        role: 'admin'
      }
    ];
    
    await User.insertMany(demoUsers);
    console.log('Demo users created successfully');
    process.exit(0);
  } catch (error) {
    console.error('Error seeding data:', error);
    process.exit(1);
  }
};

seedUsers();