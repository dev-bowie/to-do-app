import React from 'react';
import { v4 as uuidv4 } from 'uuid';

import { AiOutlinePlusCircle } from 'react-icons/ai'

const Form = ({ todos, setTodos, inputText, setInputText }) => {
  
  const inputTextHandler = (e) => {
    setInputText(e.target.value);
  }

  const submitHandler = (e) => {
    e.preventDefault();

    setTodos([
      ...todos, {
        text: inputText, 
        completed: false,
        id: uuidv4()
      }
    ]);
    setInputText('');
  }

  return (
    <form>
      <input value={inputText} onChange={inputTextHandler} type='text' className='todo-input' placeholder='Add a new todo item' />
      <button onClick={submitHandler} className='todo-button' type='submit'>
        <AiOutlinePlusCircle />
      </button>
      <div className='select'>
        <select name='todos' className='filter-todo'>
          <option value='all'>All</option>
          <option value='completed'>Completed</option>
          <option value='uncompleteted'>Uncompleted</option>
        </select>
      </div>
    </form>
  )
}

export default Form;
