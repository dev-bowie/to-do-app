import React from "react";
import './form.css';
import { v4 as uuidv4 } from "uuid";

import { AiOutlinePlusCircle } from "react-icons/ai";

const Form = ({ todos, setTodos, inputText, setInputText, setStatus }) => {
  const inputTextHandler = (e) => {
    setInputText(e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    
    if (inputText.length > 0) {
      setTodos([
        ...todos,
        {
          text: inputText,
          completed: false,
          id: uuidv4(),
        },
      ]);
      setInputText("");
    }
    else {
      alert("Please enter a task");
    }
  };

  const statusHandler = (e) => {
    setStatus(e.target.value);
  };

  return (
    <form>
      <input
        value={inputText}
        onChange={inputTextHandler}
        type="text"
        className="todo-input"
        placeholder="Add a new todo item"
      />
      <button onClick={submitHandler} className="todo-button" type="submit">
        <AiOutlinePlusCircle />
      </button>
      <div className="select">
        <select onChange={statusHandler} name="todos" className="filter-todo">
          <option value="all">All</option>
          <option value="completed">Completed</option>
          <option value="uncompleted">Uncompleted</option>
        </select>
      </div>
    </form>
  );
};

export default Form;
