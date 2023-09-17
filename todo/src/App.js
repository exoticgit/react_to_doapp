// import logo from './logo.svg';
import React, {useState} from 'react';
import TodoHeader from './header/header'
import './App.css';
import TaskCards from './Task/TaskCards';
function App() {
  const [todoCards, setTodoCards] = useState([]);
  // const [cardObj, setCardObj] = useState({});
  const formDataCardsHandler = (formDataVal) => {
    setTodoCards(oldArray => [...oldArray, formDataVal]);
    
  }

  const formDataCardsEditHandler = (formDataVal, elem) => {
    console.log(elem);
    setTodoCards(oldArray => {
      const newArray = [...oldArray];
      newArray[elem] = formDataVal;
      return newArray;
    });
  }

  const updateCardHandler = (elem) => {
      setTodoCards(oldArray => {const newArray = [...oldArray]; // Create a copy of the old array
      newArray.splice(elem, 1); // Remove the element at the specified index
      return newArray;
    });
  } 

  return (
    <div className="App">
      <TodoHeader formDataCardsObj= {formDataCardsHandler} cards={todoCards} />
      <TaskCards  formDataCardsObj= {formDataCardsEditHandler} cards={todoCards} updateCards={updateCardHandler} />
    </div>
  );
}

export default App;
