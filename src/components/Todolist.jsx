import React from 'react';

import Todo from './Todo';

const Todolist = ({ todos, setTodos, filteredTodos }) => {
  return (
    <div className="todo-containter">
      <ul className="todo-list">
        {filteredTodos.map(todo => (
          <Todo 
            key={todo.id} 
            todo={todo}
            todos={todos}
            setTodos={setTodos}
          />
        ))}
      </ul>
    </div>
  )
}

export default Todolist;