import express from 'express';
import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const userSchema = new Schema({
    email: { type: String, required: true, unique: true , lowercase: true },
    password: String
});

const User = mongoose.model('User', userSchema);

export default User;
