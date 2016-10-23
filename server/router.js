import express from 'express';
import { signup } from './controllers/authentication';
import User from './models/user';

export default function(app) {
    app.get('/signup', signup());
}
