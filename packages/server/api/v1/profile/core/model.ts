import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const ProfileSchema = new Schema({
  userId: { type: Schema.Types.ObjectId, required: true, ref: 'User' },
  name: {
    first: { type: String, required: false },
  },
});
