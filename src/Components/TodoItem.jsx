export function TodoItem({ completed, id, title, toggleTodo, deleteTodo,editTodo }) {
  return (
    <li>
      <label>
        <input
          type="checkbox"
          checked={completed}
          onChange={e => toggleTodo(id, e.target.checked)}
        />

        <input
          type="text"
          value={title}
          
          id="item"
          onChange={e => editTodo(id, e.target.value)}
        />
        {/* {title} */}
      </label>
      <button onClick={() => deleteTodo(id)} className="btn btn-danger">
        Delete
      </button>
    </li>
  )
}