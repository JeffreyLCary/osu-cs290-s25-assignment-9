import ExerciseRow from './ExerciseRow';

function ExerciseTable({exercises, onDelete}) {
    return (
        <div className="exercise-table">
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
                        onDelete={onDelete} key={exercise._id} />)}
            </tbody>
        </div>
    );
};

export default ExerciseTable;