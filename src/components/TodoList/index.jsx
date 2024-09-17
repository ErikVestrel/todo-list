import './styles.css'
function TodoList(props){
  return(
  <ul className='todos-container'>
    {props.children}
  </ul>

  )
}

export {
  TodoList
}
