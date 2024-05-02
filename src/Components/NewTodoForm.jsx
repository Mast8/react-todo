import { useState } from "react"

export function NewTodoForm({ onSubmit }) {
  const [newItem, setNewItem] = useState("")
  const [message, setMessage] = useState("")

  function handleSubmit(e) {
    e.preventDefault()
    //updateMessage(newItem)
    //if( newItem.trim() != "" ){
    if( updateMessage(newItem ) ){
      onSubmit(newItem.trim())
    }
    setNewItem("")
    
  }

  function updateMessage(newItem) {
    let passed = false;
    let todo = newItem.trim();
    if(todo == "") {
      setMessage("Todo can not be empty")
    }else if( todo.length < 3)
            setMessage("Todo needs to be at least 3 characters long")
          else{
            passed = true;
            setMessage("")
          }
    return passed;
  }

  return (
    <form onSubmit={handleSubmit} >
      <div className="form-row">
        <span className="message" value={message}> {message} </span>
        <input className="todo-input"
          placeholder="Add new todo"
          value={newItem}
          onChange={e => {updateMessage(e.target.value) ;setNewItem(e.target.value)  } }  
          type="text"
          id="item"
        />
        <button className="todo-btn">Add</button>
        
      </div>
    </form>
    
  )
}