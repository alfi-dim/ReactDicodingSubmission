import {archiveNote, deleteNote, editNote, getNote, unarchiveNote} from '../utils/local-data.js';
import NoteDetail from '../components/NoteDetail.jsx';
import React from 'react';
import PropTypes from 'prop-types';
import {useNavigate, useParams} from 'react-router-dom';
import NotFoundPage from './404Page.jsx';

const DetailPage = () => {
  const {id} = useParams();
  const navigate = useNavigate();
  const [note, setNote] = React.useState(getNote(id));

  const onDeleteHandler = (id) => {
    deleteNote (id);
    navigate ('/');
  };

  const onArchiveHandler = (id) => {
    archiveNote (id);
    navigate ('/archive');
  };

  const onRestoreArchiveHandler = (id) => {
    unarchiveNote (id);
    navigate ('/');
  };

  const onEditHandler = ({id, title, body}) => {
    editNote ({
      id,
      title,
      body,
    });
    navigate ('/');
  };

  if (!note) {
    return (
      <section>
        <NotFoundPage/>
      </section>
    );
  }

  return (
    <section>
      <NoteDetail
        id={note.id}
        title={note.title}
        body={note.body}
        createdAt={note.createdAt}
        archived={note.archived}
        onDelete={onDeleteHandler}
        onArchive={onArchiveHandler}
        onRestoreArchive={onRestoreArchiveHandler}
        onEdit={onEditHandler}
      />
    </section>
  );
};

DetailPage.propTypes = {
  id: PropTypes.string.isRequired,
  navigate: PropTypes.func.isRequired,
};

export default DetailPage;