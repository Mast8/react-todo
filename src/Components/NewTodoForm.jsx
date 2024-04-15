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
    setNewItem("")
  }

  function updateMessage(newItem) {
    if(newItem.trim() != "") {
      setMessage("")
    }else setMessage("Todo can not be empty")
  }

  return (
    <form onSubmit={handleSubmit} >
      <div className="form-row">
        <span className="message" value={message}> {message} </span>
        <input className="todo-input"
          placeholder="Add new todo"
          value={newItem}
           onChange={e => {updateMessage(newItem) ;setNewItem(e.target.value)  } }  
          
          type="text"
          id="item"
        />
        <button className="todo-btn">Add</button>
        
      </div>
    </form>
    
  )
}