import { useState } from "react"

export function NewTodoForm({ onSubmit }) {
  const [newItem, setNewItem] = useState("")
  const [message, setMessage] = useState("")

  function handleSubmit(e) {
    e.preventDefault()
    if( newItem.trim() != "" ){
      onSubmit(newItem)
      setMessage("")
    }
    else {
      setMessage("Todo can not be empty")
      console.log(message)
      //alert("Todo can not be empty")
    }
    setNewItem("")
  }

  return (
    <form onSubmit={handleSubmit} >
      <div className="form-row">
        <span className="message" value={message}> {message} </span>
        <input className="todo-input"
          placeholder="Add new todo"
          value={newItem}
          onChange={e => setNewItem(e.target.value) }
          type="text"
          id="item"
        />
        <button className="todo-btn">Add</button>
        
      </div>
    </form>
    
  )
}