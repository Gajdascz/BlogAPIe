import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const BlogSchema = new Schema(
  {
    category: { type: String, required: true, unique: true },
  },
  { timestamps: true },
);
