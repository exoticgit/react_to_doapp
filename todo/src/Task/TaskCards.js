import React, {useState} from 'react';
import '../Task/TaskCards.css';
import TaskForm from './TaskForm';
import Card from './Card';

const TaskCard = (props) => {
    const [editCard, setEditCard] = useState({});
    const [initiateEditForm, setInitiateEditForm] = useState(false);
    let cards = props.cards && props.cards.length ? props.cards : [];
    const deleteTaskHandler = (event) => {
        if(window.confirm('Are You Sure!'))
        {
            console.log('deleted');
            let elem = event.target.parentElement.getAttribute('dataindex');
            props.updateCards(elem); 
        }

    }

    const editCardHandler = (event) => {
        var elemIndex = event.target.parentElement.getAttribute('dataindex');
        const prevCards = [...cards];
        if (prevCards[elemIndex]) {
            prevCards[elemIndex].elemIndex = elemIndex;
        }
        setEditCard(prevCards[elemIndex]);
        if (initiateEditForm === false) {
            setInitiateEditForm(true);
        }
    }
    const formDataHandler = (formDataVal) => {
        console.log(editCard);
        props.formDataCardsObj(formDataVal, editCard.elemIndex);
    }
    const formCloseHandler = () => {
        setInitiateEditForm(false);
    }
    return (
    <>
        <table className="table table-hover">
        <thead>
            <tr>
                <th scope="col">Title</th>
                <th scope="col">Date</th>
                <th scope="col">Time</th>
            </tr>
        </thead>
        <tbody>
            {cards.length > 0 && cards.map((card, index) =>
                        <Card key= {card.id} title={card.title} description={card.description} date={card.date} time={card.time} onDelete={deleteTaskHandler} onEdit={editCardHandler} cardIndex={index}/>
                    )}
            {/* {updateCard.length === 0 && <p> No cards to Display</p>} */}
        </tbody>
        </table>
        {initiateEditForm ? <TaskForm onClose= {formCloseHandler} theme= {'white'} formData= {formDataHandler} editFormObj= {editCard} /> : ''}
    </>
    );
}

export default TaskCard;