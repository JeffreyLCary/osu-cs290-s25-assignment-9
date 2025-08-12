import { Link } from 'react-router-dom';
import ExerciseCollection from '../components/ExerciseCollection';
import { useEffect, useState } from 'react';

function HomePage() {
    const [exercises, setExercises] = useState([]);

    const loadExercises = async () => {
        const response = await fetch('/exercises');
        const data = await response.json();
        setExercises(data);
    };

    useEffect( () => {
        loadExercises();
    }, []);

    return (
        <>
            <h2>List of Exercises</h2>
            <ExerciseCollection exercises={exercises}></ExerciseCollection>
            <Link to="/create-exercise">Add an exercise</Link>
        </>
    );
};

export default HomePage;