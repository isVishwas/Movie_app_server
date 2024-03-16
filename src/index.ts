import express from 'express';
import http from 'http';
import cookieParser from 'cookie-parser';
import compression from 'compression';
import db from "../src/db/prisma";
import cors from 'cors';
import dotenv from 'dotenv';
import validateEnv from '@utils/validateEnv'
dotenv.config();
validateEnv();

import router from './router';

const app = express();

app.use(cors({
  credentials: true,
}));

app.use(compression());
app.use(cookieParser());
app.use(express.json());

const server = http.createServer(app);
const PORT = process.env.PORT || 8081;

server.listen(PORT, () => {
  console.log(`Server running on ${PORT}`);
});

app.use('/', router());

app.get('/home', (req, res) => {
  res.send("welcome home")
})
