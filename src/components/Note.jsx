import { FaTrashAlt } from "react-icons/fa";

// Note must be a text area? can be changed in size

const Note = ({ note, handleUpdate, handleDelete }) => {
  return (
    <div className="noteHeader">
      <button onClick={(e) => {
        e.stopPropagation();
        handleDelete();
      }}><FaTrashAlt/></button>
      <div className="noteBody">
        <li onClick={handleUpdate}>{note.content}</li>
      </div>
    </div>
  )
}

export default Note