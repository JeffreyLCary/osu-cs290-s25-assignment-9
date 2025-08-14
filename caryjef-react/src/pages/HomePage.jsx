import { Link } from 'react-router-dom';
import ExerciseTable from '../components/ExerciseTable';
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

    const onDelete = async (_id) => {
        const response = await fetch(
            `/exercises/${_id}`,
            {method: 'DELETE'}
        );
        if (response.status == 204){
            setExercises(exercises.filter(e => e._id !== _id));
        } else {
            alert(`Failed to delete the exercise with _id = ${_id}, status code = ${response.status}`);
        };
    };

    return (
        <>
            <h2>List of Exercises</h2>
            <ExerciseTable exercises={exercises} onDelete={onDelete}></ExerciseTable>
            <Link to="/create-exercise">Add an exercise</Link>
        </>
    );
};

export default HomePage;