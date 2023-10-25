import mongoose from 'mongoose';
import cors from 'cors';

import dotenv from 'dotenv';
import express from 'express';
import router from './router/index.js';

dotenv.config();

const PORT = process.env.PORT || 5000;

const app = express();

app.use(express.json());
app.use(
  cors({
    origin: process.env.CLIENT_URL,
  }),
);
app.use('/', router);

const start = async () => {
  try {
    await mongoose.connect(DB_URL);
    app.listen(PORT, () => console.log('listening on port ' + PORT));
  } catch (e) {}
};

start();
