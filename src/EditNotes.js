import React, { useState } from 'react';

const Note = ({ note, editNote, deleteNote }) => {
  const [editing, setEditing] = useState(false);
  const [title, setTitle] = useState(note.title);
  const [content, setContent] = useState(note.content);
  const [showDeleteConfirm, setShowDeleteConfirm] = useState(false);
  const handleEdit = () => {
    editNote({
      ...note,
      title,
      content,
    });
    setEditing(false);
  };
  const handleDelete = () => {
    setShowDeleteConfirm(true);
  };

  const confirmDelete = () => {
    deleteNote(note.id);
    setShowDeleteConfirm(false);
  };

  const cancelDelete = () => {
    setShowDeleteConfirm(false);
  };
  return (
    <div className="card mb-3">
      <div className="card-body">
        {editing ? (
          <>
            <input
              type="text"
              className="form-control mb-2"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
            <textarea
              className="form-control mb-2"
              value={content}
              onChange={(e) => setContent(e.target.value)}
            ></textarea>
            <button
              className="btn btn-success btn-sm me-2"
              onClick={handleEdit}
            >
              Save
            </button>
            <button
              className="btn btn-secondary btn-sm"
              onClick={() => setEditing(false)}
            >
              Cancel
            </button>
          </>
        ) : (
          <>
            <h5 className="card-title">{note.title}</h5>
            <p className="card-text">{note.content}</p>
            <button
              className="btn btn-primary btn-sm me-2"
              onClick={() => setEditing(true)}
            >
              Edit
            </button>
            <button
              className="btn btn-danger btn-sm"
              onClick={ handleDelete}
            >
              Delete
            </button>
          </>
        )}
           {showDeleteConfirm && (
            <div className="mt-3">
              <p>Are you sure you want to delete this note?</p>
              <button className="btn btn-danger btn-sm me-2" onClick={confirmDelete}>
                Yes
              </button>
              <button className="btn btn-secondary btn-sm" onClick={cancelDelete}>
                No
              </button>
            </div>
          
        )}
      </div>
    </div>
  );
};

export default Note;
