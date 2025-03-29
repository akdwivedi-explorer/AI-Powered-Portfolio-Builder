// models/Portfolio.js
import mongoose from 'mongoose';

const portfolioSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  },
  personalInfo: {
    name: String,
    email: String,
    phone: { type: String, default: null },
    location: { type: String, default: null },
    website: { type: String, default: null },
    linkedin: { type: String, default: null },
    github: { type: String, default: null },
    summary: { type: String, default: null },
    profilePicture: { type: String, default: null }
  },
  skills: {
    type: [{
      name: String,
      proficiency: { 
        type: String, 
        enum: ['Beginner', 'Intermediate', 'Advanced', 'Expert', null],
        default: null 
      },
      category: { 
        type: String, 
        enum: ['Technical', 'Language', 'Soft', 'Other', null],
        default: null 
      }
    }],
    default: []
  },
  experience: {
    type: [{
      role: String,
      company: String,
      location: { type: String, default: null },
      startDate: { type: Date, default: null },
      endDate: { type: Date, default: null },
      current: { type: Boolean, default: null },
      description: { type: [String], default: [] }
    }],
    default: []
  },
  education: {
    type: [{
      degree: String,
      institution: String,
      fieldOfStudy: { type: String, default: null },
      startDate: { type: Date, default: null },
      endDate: { type: Date, default: null },
      gpa: { type: Number, default: null },
      description: { type: [String], default: [] }
    }],
    default: []
  },
  projects: {
    type: [{
      name: String,
      description: { type: String, default: null },
      technologies: { type: [String], default: [] },
      link: { type: String, default: null },
      startDate: { type: Date, default: null },
      endDate: { type: Date, default: null }
    }],
    default: []
  },
  certifications: {
    type: [{
      name: String,
      issuer: String,
      dateIssued: { type: Date, default: null },
      expirationDate: { type: Date, default: null },
      credentialId: { type: String, default: null },
      credentialUrl: { type: String, default: null }
    }],
    default: []
  },
  languages: {
    type: [{
      name: String,
      proficiency: { 
        type: String, 
        enum: ['Basic', 'Conversational', 'Professional', 'Native', null],
        default: null 
      }
    }],
    default: []
  },
  meta: {
    theme: { type: String, default: 'default' },
    lastUpdated: { type: Date, default: Date.now }
  }
}, { 
  timestamps: true,
  minimize: false // Ensures empty objects are stored
});

export default mongoose.model('Portfolio', portfolioSchema);