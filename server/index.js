import express from 'express';
import bodyParser from 'body-parser';
import http from 'http';
import morgan from 'morgan';
import mongoose from 'mongoose';

import router from './router';

const MONGOURL = process.env.MONGODB_URI || 'mongodb://localhost/mentor';

mongoose.connect(MONGOURL, err => {
    console.log(err || `MongoDb connected to ${MONGOURL}`);
})

const app = express();

app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
router(app);

const port = process.env.PORT || 4000;
const server = http.createServer(app);
server.listen(port);
console.log('Server listening on:', port );
