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

  const[count, setCount] = useState ({
    totalTodos:  todos.length, 
    todoCompleted: todos.filter( todo => todo.completed !== false).length
     
  }  )
  console.log(count.todoCompleted + " initial ");

  useEffect(() => {
    localStorage.setItem("ITEMS", JSON.stringify(todos))
  }, [todos])

  function addTodo(title) {
      
      setTodos(currentTodos => {
        return [
          
          ...currentTodos,
          { id: crypto.randomUUID(), title, completed: false },
        ]
      }); setCount( {totalTodos : todos.length+1})

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
    const countCompleted = todos.filter( todo => todo.completed !== false).length;

    setCount( { totalTodos : todos.length ,
      todoCompleted : countCompleted })
    console.log(count.todoCompleted + " completed ")
  }

  function deleteTodo(id) {
    setTodos(currentTodos => {
      
      return currentTodos.filter(todo => todo.id !== id)
      
    }); setCount( {totalTodos : todos.length-1})
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

  return (
    <>
      <h1> To do app</h1>
      <div className="new-item-form">
      <NewTodoForm onSubmit={addTodo} />
      {count.totalTodos > 0 ? <div className="totalTodos"> Tasks: {count.totalTodos}</div> : "no tasks" }
      
      <TodoList todos={todos} toggleTodo={toggleTodo} deleteTodo={deleteTodo} editTodo={editTodo}/>
      </div>
      
    </>
  )
}