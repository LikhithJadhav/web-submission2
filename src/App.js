import React, { useState, useEffect } from 'react';
import NoteForm from './Note';
import Note from './EditNotes';
import Toggle from './Toggling';
import './../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';

const App = () => {
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    // loads notes from localStorage
    const storedNotes = JSON.parse(localStorage.getItem('notes')) || [];
    setNotes(storedNotes);
  }, []);

  useEffect(() => {
    // saves notes to localStorage whenever 'notes' state changes
    localStorage.setItem('notes', JSON.stringify(notes));
  }, [notes]);

  const addNote = (newNote) => {
    setNotes([...notes, newNote]);
  };

  const editNote = (editedNote) => {
    const updatedNotes = notes.map((note) =>
      note.id === editedNote.id ? editedNote : note
    );
    setNotes(updatedNotes);
  };

  const deleteNote = (id) => {
    const updatedNotes = notes.filter((note) => note.id !== id);
    setNotes(updatedNotes);
  };

  return (
    <div className="container mt-4">
      <Toggle />
      <h1 className="text-center mb-4">Notes Store</h1>
      <NoteForm addNote={addNote} />
      <div className="row">
        {notes.map((note) => (
          <div className="col-md-4" key={note.id}>
            <Note
              note={note}
              editNote={editNote}
              deleteNote={deleteNote}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default App;
