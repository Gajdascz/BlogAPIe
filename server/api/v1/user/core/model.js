import mongoose from "mongoose";
import bcrypt from "bcrypt";
import { User } from "../../../../../utils/constants";
const { MIN_EMAIL_LENGTH } = User;
const Schema = mongoose.Schema;

const UserSchema = new Schema({
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
    minLength: MIN_EMAIL_LENGTH,
  },
});
