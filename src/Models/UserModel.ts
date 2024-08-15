import { Schema, model } from 'mongoose';

const userSchema = new Schema({
  index: Number,
  identifier: String,
  name: String,
  address: String,
  phone: String,
}, { timestamps: true });

export default model('User', userSchema);
