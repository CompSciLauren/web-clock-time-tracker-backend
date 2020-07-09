import { Schema, model } from 'mongoose';

const UserSchema = new Schema({
  email: String,
  password: String,
}, { collection: 'Users' });

UserSchema.methods.validPassword = (password) => password === this.password;

const User = model('User', UserSchema);

export default User;
