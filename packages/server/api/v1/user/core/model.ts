import mongoose from 'mongoose';
import bcrypt from 'bcrypt';

const Schema = mongoose.Schema;

const UserSchema = new Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
      minLength: 1,
      maxLength: 20,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      minLength: 6,
    },
    password: {
      type: String,
      required: true,
      minLength: 0,
      maxLength: 0,
    },
    roleId: {
      type: Schema.Types.ObjectId,
      required: true,
      ref: 'Role',
    },
    recovery: {
      question: { type: String, enum: [], required: true },
      answer: { type: String, required: true },
    },
  },
  { timestamps: true },
);

export default mongoose.Model('User', UserSchema);
