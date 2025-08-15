import ExerciseRow from './ExerciseRow';

function ExerciseTable({exercises, onDelete, onEdit}) {
    return (
        <>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Reps</th>
                    <th>Weight</th>
                    <th>Units</th>
                    <th>Date</th>
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