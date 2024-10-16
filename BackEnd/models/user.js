const mongoose = require('mongoose');
const { z } = require('zod');

const ValidateUser = z.object({
    username: z.string().min(1,{message: 'Require name'}),
    email: z.string().email({message: 'Invalid email'}),
    password: z.string().min(6,{message: 'Password should have minimum 6 characters'})
});

const UserSchema = mongoose.Schema({
    username: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true}
});

const User = mongoose.model('user',UserSchema);

module.exports = {
    ValidateUser,
    User
};