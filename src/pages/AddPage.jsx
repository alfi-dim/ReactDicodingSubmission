// eslint-disable-next-line no-unused-vars
import React from 'react';
import NoteForm from '../components/NoteForm.jsx';
import {addNote} from '../utils/network-data.js';
import {useNavigate} from 'react-router-dom';
import toast from 'react-hot-toast';

const AddPage = () => {
  const navigate = useNavigate();

  const onAddNoteHandler = async (note) => {
    await addNote(note)
      .then(() => {
        navigate('/');
        toast.success('Note added', {
          position: 'top-right',
        });
      })
      .catch(() => {
        toast.error('Failed to add note', {
          position: 'top-right',
        });
      });
  };

  return (
    <section>
      <NoteForm addNoteHandler={onAddNoteHandler}/>
    </section>
  );
};

export default AddPage;