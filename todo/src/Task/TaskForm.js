import React, {useState, useEffect} from "react";
import './TaskForm.css'
const TaskForm = (props) => {

    let theme = props.theme;
    const [title, setTitle] = useState('');
    const [date, setDate] = useState('');
    const [time, setTime] = useState('');
    const submitTaskHandler = (event) => {
        props.onClose();
        var formDataVal = {};
        event.preventDefault(); 
        const form = event.target;
        for (let i = 0; i < form.elements.length; i++) {
            const element = form.elements[i];
            if (element.type !== "submit") {
                formDataVal[element.name] = element.value;
            }
        }
        formDataVal.id = Math.random().toString();
        props.formData(formDataVal);
    }
    const setTitleHandler = (event) => {
        setTitle(event.target.value);
    }
    const setDateHandler = (event) => {
        setDate(event.target.value);
    }
    const setTimeHandler = (event) => {
        setTime(event.target.value);
    }


    useEffect(() => {
        if (props.editFormObj && Object.keys(props.editFormObj).length > 0 && props.editFormObj.title) {
            setTitle(props.editFormObj.title);
        }
        if (props.editFormObj && Object.keys(props.editFormObj).length > 0 && props.editFormObj.date) {
            setDate(props.editFormObj.date);
        }
        if (props.editFormObj && Object.keys(props.editFormObj).length > 0 && props.editFormObj.time) {
            setTime(props.editFormObj.time);
        }
    }, []);

    return (
        <>
            <div className={`modal ${theme === 'black'? 'modal-dark' : ''}`} id="myModal">
                <div className="modal-content">
                    <div className= "modal-header p-0">
                        <span className= "modal_heading">Add a Task</span>
                        <span className="close-btn" id="closeModalBtn" onClick= {props.onClose}>&times;</span>
                    </div>
                    <form onSubmit= {submitTaskHandler}>
                        <div className="form-group">
                            <label >Title*</label>
                            <input type="text" id="title" value={title} onChange={setTitleHandler} name="title" required/>
                        </div>
                        <div className="form-group">
                            <label >Date*</label>
                            <input type="date" id="Date" name="date" value={date} onChange={setDateHandler} className="w-100" required/>
                        </div>
                        <div className="form-group">
                            <label >Desired Completion Time*</label>
                            <input type="time" id="time" name="time" value={time} onChange={setTimeHandler} className="w-100"  required/>
                        </div>
                        <div className="form-group">
                            <label >Description(optional)</label>
                            <input type="text" id="description" name="description" />
                        </div>
                        <button type="submit" className="w-100" >Submit</button>
                    </form>
                </div>
            </div>
        </>
    );
}

export default TaskForm;