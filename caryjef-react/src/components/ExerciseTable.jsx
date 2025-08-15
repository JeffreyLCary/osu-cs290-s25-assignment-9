import '../App.css';
import ExerciseRow from './ExerciseRow';

function ExerciseTable({exercises, onDelete, onEdit}) {
    return (
        <>
            <thead>
                <tr>
                    <td>Name</td>
                    <td>Reps</td>
                    <td>Weight</td>
                    <td>Units</td>
                    <td>Date</td>
                    <td>Edit</td>
                    <td>Delete</td>
                </tr>
            </thead>
            <tbody>
                {exercises.map((exercise) => <ExerciseRow exercise={exercise}
                        onDelete={onDelete} onEdit={onEdit} key={exercise._id} />)}
            </tbody>
        </>
    );
};

export default ExerciseTable;