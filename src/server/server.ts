// Código base do serve
import express from 'express';
import {router} from './routes'
import './shared/services/translationsYup'

const server = express();

server.use(express.json());
server.use(router);

export {server};