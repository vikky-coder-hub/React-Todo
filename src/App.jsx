import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [todos,seTodos] = useState([{
    title:"go to gym",
    description:"Go to gym from 7 - 10",
    completed:false
  },
  {
    title:"study DSA",
    description:"Go to study from 7 - 10",
    completed:true
  }
   ])

   function addTodo(){
    seTodos([...todos,{
      title:"new title",
      description: "desc of new todo"
    }])
   }

  return (
     <div>
      <button onClick={addTodo} >Add a Random Todo</button> 
        {/* <Todo title = {todos[0].title} description = {todos[0].description} />
        <Todo title = {todos[1].title} description = {todos[1].description} /> */}
        {todos.map(function(todo){
          return <Todo title = {todo.title} description = {todo.description} />

        })}
     </div>
  )
}



function Todo(props){
  return(
    <div>
      <h1>{props.title}</h1>
      <h2>{props.description}</h2>
    </div>
  )
}

export default App
