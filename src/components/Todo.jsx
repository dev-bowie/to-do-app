import React from 'react'

import { AiOutlineCheckCircle } from 'react-icons/ai';
import { BsTrash } from 'react-icons/bs';

const Todo = ({ todo, todos, setTodos }) => {

	const deleteHandler = () => {
		setTodos(todos.filter((el) => el.id !== todo.id));
	};

	const completeHandler = () => {
		setTodos(todos.map((el) => {
			if (el.id === todo.id) {
				return {
					...el, completed: !el.completed
				}
			}
			return el;
		}));
	};

  return (
    <div className="todo">
        <li className={`todo-item ${todo.completed ? "completed" : ''}`}>{todo.text}</li>
        <button onClick={completeHandler} className='complete-button'>
            <AiOutlineCheckCircle />
        </button>

        <button onClick={deleteHandler} className='delete-button'>
            <BsTrash />
        </button>
    </div>
  )
}

export default Todo