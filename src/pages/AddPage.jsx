// eslint-disable-next-line no-unused-vars
import React from 'react';
import NoteForm from '../components/NoteForm.jsx';
import {addNote} from '../utils/local-data.js';
import {useNavigate} from 'react-router-dom';

const AddPage = () => {
  const navigate = useNavigate();

  const onAddNoteHandler = (note) => {
    addNote(note);
    navigate('/');
  };

  return (
    <section>
      <NoteForm addNoteHandler={onAddNoteHandler}/>
    </section>
  );
};

export default AddPage;