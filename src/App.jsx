import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { TodoItem } from './components/TodoItem'

function App() {

  const [count, setCount] = useState(0)

  return (
    <>
    <TodoCounter/>
    <TodoSearch/>

    <TodoList>
      <TodoItem/>
    </TodoList>

    <CreateTodoButton/>


    </>
  )
}

export default App
