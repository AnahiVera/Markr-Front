const Note = ({ note, handleUpdate, handleDelete }) => {
  return (
    <div>
      <li onClick={handleUpdate}>{note.content} </li>
      <button onClick={handleDelete}>delete</button>
    </div>
    
  )
}

export default Note