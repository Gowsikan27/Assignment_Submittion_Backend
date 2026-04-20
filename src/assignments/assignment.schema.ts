import { Schema } from 'mongoose';

export const AssignmentSchema = new Schema({
  studentName: String,
  title: String,
  subject: String,
  description: String,
  fileUrl: String,
  status: {
    type: String,
    default: "Pending"
  }
});