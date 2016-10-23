import express from 'express';
import bodyParser from 'body-parser';
import http from 'http';
import morgan from 'morgan';

const app = express();



//Server Setup
const port = process.env.PORT || 3000;
const server = http.createServer(app);
server.listen(port);
console.log('Server listening on:', port );
