import React, { useState } from 'react';

const NoteForm = ({ addNote }) => {
  const [isExpanded, setIsExpanded] = useState(false); // State to track if form is expanded
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const handleExpand = () => {
    setIsExpanded(true);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title.trim() || !content.trim()) return;
    const newNote = {
      id: Date.now(),
      title,
      content,
    };
    addNote(newNote);
    setTitle('');
    setContent('');
    setIsExpanded(false); // Reset to initial state after adding note
  };

  return (
    <form onSubmit={handleSubmit}>
      {!isExpanded ? (
        <div className="form-group mb-2" onClick={handleExpand}>
          <input
            type="text"
            className="form-control"
            placeholder="Take a note"
          />
        </div>
      ) : (
        <>
          <input
            type="text"
            className="form-control mb-2"
            placeholder="Enter title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <textarea
            className="form-control mb-2"
            placeholder="Enter note content"
            value={content}
            onChange={(e) => setContent(e.target.value)}
          ></textarea>
          <button type="submit" className="btn btn-primary">
            Add Note
          </button>
        </>
      )}
    </form>
  );
};

export default NoteForm;
