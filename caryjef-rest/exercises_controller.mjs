/**
 * Jeffrey Cary
 */
import 'dotenv/config';
import express from 'express';
import asyncHandler from 'express-async-handler';
import * as exercises from './exercises_model.mjs';

const INVALID_REQUEST = { Error: "Invalid request"};
const NOT_FOUND = { Error: "Not found"}

const PORT = process.env.PORT;
const app = express();

app.use(express.json());

app.listen(PORT, async () => {
    await exercises.connect()
    console.log(`Server listening on port ${PORT}...`);
});

/**
*
* @param {string} date
* Return true if the date format is MM-DD-YY where MM, DD and YY are 2 digit integers
*/
function isDateValid(date) {
    // Test using a regular expression. 
    // To learn about regular expressions see Chapter 6 of the text book
    const format = /^\d\d-\d\d-\d\d$/;
    return format.test(date);
};

function isBodyValid(body) {
    // Check for a total of 5 properties
    if (Object.keys(body).length !== 5) {
        return false;
    };
    // Check for the presence of the 5 specific properties
    for (const item of ['name', 'reps', 'weight', 'unit', 'date']) {
        if (!(item in body)) {
            return false;
        };
    };
    // Check for valid types
    if (typeof body.name !== 'string' ||
        typeof body.reps !== 'number' ||
        typeof body.weight !== 'number' ||
        typeof body.unit !== 'string' ||
        typeof body.date !== 'string') {
            return false;
    };
    // Check for valid values
    if (body.name.length < 1 ||
        body.reps < 1 ||
        body.weight < 1 ||
        !(body.unit === 'kgs' || body.unit === 'lbs') ||
        !(isDateValid(body.date))) {
            return false;
        };
    return true;
}

app.post('/exercises', asyncHandler(async (req, res) => {
    if (!(isBodyValid(req.body))) {
        res.status(400).json(INVALID_REQUEST);
    }
    else {
        const exercise = await exercises.createExercise(req.body.name,
                                                        req.body.reps,
                                                        req.body.weight,
                                                        req.body.unit,
                                                        req.body.date);
        res.status(201).json(exercise);
    };
}));

app.get('/exercises', asyncHandler(async (req, res) => {
    let resultArray = [];
    resultArray.push(await exercises.readExercises(null));
    res.status(200).json(resultArray);
}));

app.get('/exercises/:_id', asyncHandler(async (req, res) => {
    let result = await exercises.readExercises(req.params._id);
    if (result === null) {
        res.status(404).json(NOT_FOUND);
    }
    else {
        res.status(200).json(result);
    };
}));

app.put('/exercises/:_id', asyncHandler(async (req, res) => {
    if (!(isBodyValid(req.body))) {
        res.status(400).json(INVALID_REQUEST);
    };
    let result = await exercises.updateExercise(req.params._id, req.body);
    if (Object.keys(result).length === 0) {
        res.status(404).json(NOT_FOUND);
    }
    else {
        res.status(200).json(result);
    };
}));

app.delete('/exercises/:_id', asyncHandler(async (req, res) => {
    let result = await exercises.deleteExercise(req.params._id);
    if (result > 0) {
        res.status(204).send();
    }
    else {
        res.status(404).json(NOT_FOUND);
    };
}));