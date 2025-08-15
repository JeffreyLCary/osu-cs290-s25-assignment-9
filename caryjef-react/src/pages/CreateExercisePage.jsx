import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export const CreateExercisePage = () => {

    const [name, setName] = useState('');
    const [reps, setReps] = useState('');
    const [weight, setWeight] = useState('');
    const [unit, setUnit] = useState('');
    const [date, setDate] = useState('');

    const navigate = useNavigate();

    const createExercise = async () => {
        const newExercise = {name, reps, weight, unit, date};
        const response = await fetch(
            '/exercises', {
                method: 'POST',
                headers: {'Content-type': 'application/json'},
                body: JSON.stringify(newExercise)
            }
        );
        if (response.status === 201) {
            alert("Successfully added the exercise to the database.");
        } else {
            alert("Failed to add the exercise, status code = " + response.status)
        };
        navigate('/');
    };

    return (
        <>
            <h1>Create an Exercise</h1>
            <input
                type="text"
                placeholder="Name"
                value={name}
                onChange={e => setName(e.target.value)} />
            <input
                type="number"
                placeholder="Reps"
                value={reps}
                onChange={e => setReps(e.target.valueAsNumber)} />
            <input
                type="number"
                placeholder="Weight"
                value={weight}
                onChange={e => setWeight(e.target.valueAsNumber)} />
            <select onChange={e => setUnit(e.target.value)}>
                <option value="kgs">kgs</option>
                <option value="lbs">lbs</option>
            </select>
            <input
                type="text"
                placeholder="Date (MM-DD-YY)"
                value={date}
                onChange={e => setDate(e.target.value)} />
            <button
                onClick={createExercise}
            >Add Exercise</button>
        </>
    );
}

export default CreateExercisePage;