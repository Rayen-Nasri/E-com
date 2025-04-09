// This file provides mock API responses to simulate backend functionality
// while the actual backend is commented out

import { toast } from 'react-hot-toast';

// Mock user data
const mockUsers = [
  {
    id: '1',
    name: 'Demo User',
    email: 'demo@gmail.com',
    isVerified: true
  }
];

// Mock authentication responses
export const mockAuthService = {
  login: async (email: string, password: string) => {
    // Simulate network delay
    await new Promise(resolve => setTimeout(resolve, 800));

    // Simple validation
    if (email === 'demo@gmail.com' && password === 'password') {
      const user = mockUsers.find(u => u.email === email);
      toast.success('Logged in successfully!');
      return { user, success: true };
    }

    throw new Error('Invalid credentials');
  },

  signup: async (email: string, password: string, name: string) => {
    // Simulate network delay
    await new Promise(resolve => setTimeout(resolve, 1000));

    // Check if user already exists
    if (mockUsers.some(u => u.email === email)) {
      throw new Error('User already exists');
    }

    // Create new user
    const newUser = {
      id: String(mockUsers.length + 1),
      name,
      email,
      isVerified: false
    };

    mockUsers.push(newUser);
    toast.success('Account created! Please verify your email.');
    return { user: newUser, success: true };
  },

  logout: async () => {
    await new Promise(resolve => setTimeout(resolve, 500));
    toast.success('Logged out successfully!');
    return { success: true };
  },

  verifyEmail: async (code: string) => {
    await new Promise(resolve => setTimeout(resolve, 700));

    // Any code will work in mock mode
    if (code) {
      const user = { ...mockUsers[0], isVerified: true };
      toast.success('Email verified successfully!');
      return { user, success: true };
    }

    throw new Error('Invalid verification code');
  },

  checkAuth: async () => {
    await new Promise(resolve => setTimeout(resolve, 600));

    // Simulate being logged in 50% of the time for demo purposes
    const isLoggedIn = localStorage.getItem('mockLoggedIn') === 'true';
    if (isLoggedIn == null) {
      // If not set, default to false
      localStorage.setItem('mockLoggedIn', 'false');
    }
    if (isLoggedIn == undefined) {
      localStorage.setItem('mockLoggedIn', 'false');
    }

    if (isLoggedIn == true) {
      return { user: mockUsers[0], isAuthenticated: true };
    } 
    return { user: null, isAuthenticated: false };


  },

  forgotPassword: async (email: string) => {
    await new Promise(resolve => setTimeout(resolve, 800));

    if (email) {
      toast.success('Password reset link sent to your email!');
      return { success: true };
    }

    throw new Error('Email is required');
  },

  resetPassword: async (token: string, password: string) => {
    await new Promise(resolve => setTimeout(resolve, 900));

    if (token && password) {
      toast.success('Password reset successfully!');
      return { success: true };
    }

    throw new Error('Invalid token or password');
  }
};

// Mock profile service
export const mockProfileService = {
  changeUsername: async (newName: string) => {
    await new Promise(resolve => setTimeout(resolve, 700));

    if (newName) {
      mockUsers[0].name = newName;
      toast.success('Username updated successfully!');
      return { user: mockUsers[0], success: true };
    }

    throw new Error('New username is required');
  },

  changePassword: async (oldPassword: string, newPassword: string) => {
    await new Promise(resolve => setTimeout(resolve, 800));

    if (oldPassword && newPassword) {
      toast.success('Password updated successfully!');
      return { success: true };
    }

    throw new Error('Old and new passwords are required');
  },

  changeTel: async (newTel: string) => {
    await new Promise(resolve => setTimeout(resolve, 600));

    if (newTel) {
      toast.success('Phone number updated successfully!');
      return { success: true };
    }

    throw new Error('New phone number is required');
  }
};

// Helper to simulate backend storage
export const setMockLoggedIn = (status: boolean) => {
  localStorage.setItem('mockLoggedIn', status.toString());
};