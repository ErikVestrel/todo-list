import { useState } from 'react'
import './App.css'
import { TodoItem } from './components/TodoItem/index.jsx'
import { TodoCounter } from './components/TodoCounter/index.jsx'

import { TodoSearch } from './components/TodoSearch/index.jsx'

import { TodoList } from './components/TodoList/index.jsx'

import { CreateTodoButton } from './components/CreateTodoButton/index.jsx'
const arr = [
  {
    text: 'hollaaaa',
    completed: false,
  },
  {
    text: 'perro',
    completed: false,
  },
  {
    text: 'hollaaaasdfaa',
    completed: false,
  },
  {
    text: 'hollaaasdfasdfaa',
    completed: false,
  },
  {
    text: 'hollasdfasdaaaa',
    completed: false,
  },
  {
    text: 'hollaaaa',
    completed: false,
  },
  {
    text: 'perro',
    completed: false,
  },
  {
    text: 'hollaaaasdfaa',
    completed: false,
  },
  {
    text: 'hollaaasdfasdfaa',
    completed: false,
  },
  {
    text: 'hollasdfasdaaaa',
    completed: false,
  },
  {
    text: 'hollaaaasdfaa',
    completed: false,
  },
  {
    text: 'hollaaasdfasdfaa',
    completed: false,
  },
  {
    text: 'hollasdfasdaaaa',
    completed: false,
  }
]

function App() {

  const [count, setCount] = useState(0)

  return (
    <>
    <TodoCounter
    todos={count}
    />
    <TodoSearch/>

    <TodoList>
      {arr.map(item => (
        <TodoItem
        key={item.text}
        text={item.text}
        completed={item.completed}
        />
      ))}
    </TodoList>

    <CreateTodoButton
    addTodo={setCount}
    />


    </>
  )
}

export default App
