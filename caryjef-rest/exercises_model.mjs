/**
 * Jeffrey Cary
 */
import mongoose from 'mongoose';
import 'dotenv/config';

const EXERCISE_DB_NAME = 'exercise_db';

let connection = undefined;

/**
 * This function connects to the MongoDB server and to the database
 *  'exercise_db' in that server.
 */
async function connect(){
    try{
        connection = await mongoose.connect(process.env.MONGODB_CONNECT_STRING, 
                {dbName: EXERCISE_DB_NAME});
        console.log("Successfully connected to MongoDB using Mongoose!");
    } catch(err){
        console.log(err);
        throw Error(`Could not connect to MongoDB ${err.message}`)
    }
}

const exerciseSchema = mongoose.Schema({
    name : {type: String, required: true},
    reps : {type: Number, required: true},
    weight : {type: Number, required: true},
    unit : {type: String, required: true},
    date : {type: String, required: true}
});

const Exercise = mongoose.model('Exercise', exerciseSchema);

const createExercise = async (name, reps, weight, unit, date) => {
    const exercise = new Exercise({ name: name, reps: reps, weight: weight, unit: unit, date: date});
    return exercise.save();
};

const readExercises = async (_id) => {
    if (_id === null) {
        const myQuery = Exercise.find({});
        return myQuery.exec();
    }
    else {
        return Exercise.findById(_id).exec();
    };
};

const updateExercise = async (_id, body) => {
    const updateResult = await Exercise.updateOne({"_id": _id}, body);
    if (updateResult.matchedCount === 0) {
        return {};
    }
    else {
        return await Exercise.findById(_id).exec();
    };
};

const deleteExercise = async (_id) => {
    const result = await Exercise.deleteOne({_id: _id});
    return result.deletedCount;
};

export { connect, createExercise, readExercises, updateExercise, deleteExercise };