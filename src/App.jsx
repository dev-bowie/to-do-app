import './App.css'
import React, { useState } from 'react'
import Form from './components/Form'
import Todolist from './components/Todolist'

function App() {

  const [inputText, setInputText] = useState('');
  const [todos, setTodos] = useState([]);

  return (
    <div className='App'>
      <header>
        <h1>To-do list</h1>
      </header>
      <Form 
        todos={todos} 
        setTodos={setTodos} 
        inputText={inputText}
        setInputText={setInputText} 
      />
      <Todolist 
        todos={todos}
        setTodos={setTodos}
      />
    </div>
  )
}

export default App
