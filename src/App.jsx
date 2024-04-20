import { useEffect, useState } from "react"
import { NewTodoForm } from "./Components/NewTodoForm"
import "./App.css"

import { TodoList } from "./Components/TodoList"

export default function App() {
  const [todos, setTodos] = useState(() => {
    const localValue = localStorage.getItem("ITEMS")
    if (localValue == null) return []
    return JSON.parse(localValue)
  })

  const[countTodos, setCountTodos] = useState (todos.length )
  const[countCompleted, setCountCompleted] = 
  useState ( 0 )

  useEffect(() => {
    setCountCompleted( todos.filter( todo => todo.completed !== false).length)
    localStorage.setItem("ITEMS", JSON.stringify(todos))
  }, [todos])

  function addTodo(title) {
      
      setTodos(currentTodos => {
        return [
          ...currentTodos,
          { id: crypto.randomUUID(), title, completed: false },
        ]
      }); setCountTodos( countTodos +1 )

  }

  function toggleTodo(id, completed) {
    
    setTodos(currentTodos => {
      return currentTodos.map(todo => {
        if (todo.id === id) {
          return { ...todo, completed }
        }
        return todo
      })
    }); 
    
  }

  function deleteTodo(id) {
    setTodos(currentTodos => {
      return currentTodos.filter(todo => todo.id !== id)
    }); setCountTodos( countTodos -1)
  }

  function editTodo(id, title) {
    setTodos(currentTodos => {
      return currentTodos.map(todo => {
        if (todo.id === id) {
          return { ...todo, title }
        }
        return todo
      })
    })
  }
  var Percentage = Math.round(countCompleted/countTodos*100) ;
  let classnamePer ;

  if(Percentage > 50 )
     classnamePer = "good" ;
  else  classnamePer = "bad"; 

  return (
    <>
      <h1> To do app</h1>
      <div className="new-item-form">
      <NewTodoForm onSubmit={addTodo} />
      {countTodos > 0 && 
      <div className="totalTodos"> Tasks: {countTodos}
        <div>   Tasks completed: {countCompleted}
        </div>
        <div className={classnamePer}>   Completed Percentage: {Percentage} %
        </div>
      </div>  }
      
      <TodoList todos={todos} toggleTodo={toggleTodo} deleteTodo={deleteTodo} editTodo={editTodo}/>
      </div>
      
    </>
  )
}