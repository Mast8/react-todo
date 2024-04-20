export function TodoItem({ completed, id, title, toggleTodo, deleteTodo,editTodo }) {
  return (
    <div className="todo">
      
      <input
          type="checkbox"
          checked={completed}
          onChange={e => toggleTodo(id, e.target.checked)}
      />

      <input
            className={`${completed ? "completed" : "incompleted"}`}
            type="text"
            value={title}
              
            id="item"
            onChange={e => editTodo(id, e.target.value)}
      />
      
      <button onClick={() => deleteTodo(id)} className="btn btn-danger">
        Delete
      </button>
    </div>
  )
}