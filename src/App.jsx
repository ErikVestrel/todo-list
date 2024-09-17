import { useState } from 'react'
import './App.css'
import { TodoItem } from './components/TodoItem/index.jsx'
import { TodoCounter } from './components/TodoCounter/index.jsx'

import { TodoSearch } from './components/TodoSearch/index.jsx'

import { TodoList } from './components/TodoList/index.jsx'

import { CreateTodoButton } from './components/CreateTodoButton/index.jsx'


function App() {

  const [count, setCount] = useState(0)

  return (
    <>
    <TodoCounter
    todos={count}
    />
    <TodoSearch/>

    <TodoList>
      <TodoItem/>
    </TodoList>

    <CreateTodoButton
    addTodo={setCount}
    />


    </>
  )
}

export default App
