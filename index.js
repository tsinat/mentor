import express from 'express';
import bodyParser from 'body-parser';
import http from 'http';
import morgan from 'morgan';
import mongoose from 'mongoose';

import router from './router';

mongoose.connect('mongodb://localhost:auth/mentor');

const app = express();

app.use(morgan('combined'));
app.use(bodyParser.json({ type: '*/*'}));
router(app);

const port = process.env.PORT || 4000;
const server = http.createServer(app);
server.listen(port);
console.log('Server listening on:', port );
