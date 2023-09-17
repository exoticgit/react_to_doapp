import React, {useState} from "react";
import logo from "../logo.svg";
import './header.css';
import SubHeader from "../header/SubHeader";
import TaskForm from "../Task/TaskForm";
const TodoHeader = (props) => {
    const [initiateForm, setInitiateForm] = useState(false);
    const [themeChanger, setThemeChanger] = useState('white');

    const taskFormHandler = () => {
        if (initiateForm === false) {
            setInitiateForm(true);
        }
    }

    const formCloseHandler = () => {
        setInitiateForm(false);
    }

    const themeChangeHandler = (changedThemeValue) => {
        setThemeChanger(changedThemeValue);
    }
    const formDataHandler = (formDataVal) => {
        props.formDataCardsObj(formDataVal);
    }
    
    return (
        <>
            <div className={`header ${themeChanger === 'black' ? 'dark' : ''}`}>
                <div>
                    <img src={logo} className="App-logo" alt="logo" />
                    <strong>Task Tracker </strong>
                </div>

                <div className="search-box">
                    <input type="text" placeholder="Search..." />
                </div>
                <button type="button" className={`btn btn-info ${themeChanger === 'black' ? 'dark' : ''}`}  onClick={taskFormHandler}>Add New Task</button>
                {initiateForm ? <TaskForm onClose= {formCloseHandler} theme= {themeChanger} formData= {formDataHandler}/> : ''}
            </div>
            <SubHeader cardsLength ={props.cards.length} themeChange= {themeChangeHandler}/>
        </>
    );
}
export default TodoHeader;