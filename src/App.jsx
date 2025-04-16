import { useState, useEffect } from 'react'
import Note from './components/Note'
import noteService from './services/notes'
import './App.css'

const App = () => {
  const [notes, setNotes] = useState([])
  const [newNote, setNewNote] = useState(
    'a new note...'
  )

  useEffect(() => { //get all notes
    console.log('effect')
    noteService.getAll()
      .then(initialNotes => {
        setNotes(initialNotes)
      })
  }, [])
  console.log('render', notes.length, 'notes')

  const addNote = event => { //add a new note
    event.preventDefault()
    const noteObject = {
      content: newNote,
    }
    noteService
      .create(noteObject)
      .then(returnedNote => {
        setNotes(notes.concat(returnedNote))
        setNewNote('')
      })
  }

  /* const updateNote = (id) => {
    const note = notes.find(n => n.id === id)
    const changedNote = { ...note}

    noteService
      .update(id, changedNote)
      .then(returnedNote => {
        setNotes(notes.map(note => note.id !== id ? note : returnedNote))
      })
  } */

      //Agregar funciones de actualización y eliminación

      //agregar la form inside cada note? signo + creacion en blanco 
      //dist-> conectar/terminar back con MogoDB 
      //Empacketar en Docker (branch?)
      //Desplegar en Render.

  const handleNoteChange = (event) => {
    setNewNote(event.target.value)
  }
  return (
    <div className="app-container">
      <h1>My Sticky Notes</h1>
      <form onSubmit={addNote}>
        <input 
          value={newNote} 
          onChange={handleNoteChange} 
          placeholder="Add a new note..."
        />
        <button type="submit">Save</button>
      </form>
      <div className="notes-container">
        
        <ul>
          {notes.map(note =>
            <Note 
              key={note.id} 
              note={note} 
              handleUpdate={() => handleUpdate(note.id)}
              handleDelete={() => handleDelete(note.id)}
            />
          )}
        </ul>
      </div>
      
    </div>
  )
}


export default App
