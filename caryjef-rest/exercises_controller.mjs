/**
 * Jeffrey Cary
 */
import 'dotenv/config';
import express from 'express';
import asyncHandler from 'express-async-handler';
import * as exercises from './exercises_model.mjs';

const PORT = process.env.PORT;
const app = express();

app.use(express.json());

app.listen(PORT, async () => {
    await exercises.connect()
    console.log(`Server listening on port ${PORT}...`);
});