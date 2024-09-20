import './styles.css'
function TodoCounter({todos, completed}){
  return(
  <h1 className="todo-header">
    has completado {completed || '0'} todos de {todos || '0'}
  </h1>

  )

}
export { TodoCounter}
