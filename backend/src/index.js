import express from 'express';
import routes from './routes';

const server = express();

server.use(express.json());
console.log('')

server.listen(3333);
