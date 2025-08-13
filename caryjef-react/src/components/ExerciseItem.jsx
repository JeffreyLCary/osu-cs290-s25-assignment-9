import '../App.css';

function ExerciseItem({ exercise }) {

    const onDelete = async () => {
        const response = await fetch(
            `/exercises/${exercise._id}`,
            {method: 'DELETE'}
        );
        if (response.status == 204){
            alert(`Successfully deleted the exercise with _id = ${exercise._id}`);
        } else {
            alert(`Failed to delete the exercise with _id = ${exercise._id}, status code = ${response.status}`);
        };
    };
    
    return (
        <div className="collection-item">
            <h3>{exercise.name}</h3>
            <p></p>
        </div>
    )
};

export default ExerciseItem;