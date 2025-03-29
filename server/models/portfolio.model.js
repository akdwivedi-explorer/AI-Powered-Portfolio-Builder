// models/PortfolioTemplate.js
import mongoose from 'mongoose';

const portfolioTemplateSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  },
  resumeData: {
    type: Object,
  },
  html: {
    type: String,
  },
  css: {
    type: String,
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

export default mongoose.model('PortfolioTemplate', portfolioTemplateSchema);