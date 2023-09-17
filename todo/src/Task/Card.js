import React from 'react';
import './Card.css'

const Card = (props) => {
    return (
        <tr key= {props.id}>
            <td data-toggle="tooltip" data-placement="top" title={props.description}>
                {props.title} 
                {/* <span class="tooltiptext">{props.description}</span> */}
            </td>
            <td>{props.date}</td>
            <td>{props.time}</td>
            <td>
                <div className="card-buttons">
                    <button className="btn" dataindex={props.cardIndex} onClick={props.onEdit}><i className="fa fa-pencil" style={{fontSize:'26px', color:'black'}}></i></button>
                    <button className="btn" onClick={props.onDelete} dataindex={props.cardIndex}><i className="fa fa-trash-o" style={{fontSize:'26px', color:'red'}}></i> </button>
                </div>
            </td>
        </tr>
    );

}
export default Card;