import '../App.css';

function ExerciseItem({ exercise }) {
    return (
        <div className="collection-item">
            <h3>{exercise.name}</h3>
            <p></p>
        </div>
    )
};

export default ExerciseItem;