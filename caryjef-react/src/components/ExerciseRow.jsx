import { MdDelete, MdEdit } from 'react-icons/md';
import { useNavigate } from 'react-router-dom';

function ExerciseRow({ exercise, onDelete, onEdit }) {

    const navigate = useNavigate();

    return (
        <>
            <tr>
                <td>{exercise.name}</td>
                <td>{exercise.reps}</td>
                <td>{exercise.weight}</td>
                <td>{exercise.unit}</td>
                <td>{exercise.date}</td>
                <MdEdit onClick={e => { e.preventDefault(); onEdit(exercise) }}/>
                <MdDelete onClick={e => { e.preventDefault(); onDelete(exercise._id) }}/>
            </tr>
        </>
    )
};

export default ExerciseRow;