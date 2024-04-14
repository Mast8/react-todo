import { useState } from "react"

export function NewTodoForm({ onSubmit }) {
  const [newItem, setNewItem] = useState("")

  function handleSubmit(e) {
    e.preventDefault()
    if( newItem.trim() != "" ){

      onSubmit(newItem)
      setNewItem("")
    }
    else {
      setNewItem("")
      alert("Todo can not be empty")
    }
  }

  return (
    <form onSubmit={handleSubmit} >
      <div className="form-row">
       
        <input className="todo-input"
          placeholder="Add new todo"
          value={newItem}
          onChange={e => setNewItem(e.target.value)}
          type="text"
          id="item"
        />
        <button className="todo-btn">Add</button>
      </div>
    </form>
  )
}