// eslint-disable-next-line no-unused-vars
import React from 'react';
import NoteCardUtils from './NoteCardUtils.jsx';
import NoteCardBody from './NoteCardBody.jsx';
import PropTypes from 'prop-types';
import {useTheme} from '../hooks/customHooks.js';

const NoteCard = ({note, showFormattedDate, handleArchiveNote, handleDeleteNote, handleRestoreArchiveNote}) => {
  const {bgColor} = useTheme();
  return (
    <article
      key={note.id}
      className={`${bgColor} px-2 py-2 flex max-w-xl flex-col items-start justify-between rounded-lg`}
    >
      <NoteCardUtils
        note={note}
        showFormattedDate={showFormattedDate}
        handleArchiveNote={handleArchiveNote}
        handleDeleteNote={handleDeleteNote}
        handleRestoreArchiveNote={handleRestoreArchiveNote}
      />
      <NoteCardBody note={note}/>
    </article>
  );

};

NoteCard.propTypes = {
  note: PropTypes.object.isRequired,
  showFormattedDate: PropTypes.func.isRequired,
  handleDeleteNote: PropTypes.func.isRequired,
  handleArchiveNote: PropTypes.func,
  handleRestoreArchiveNote: PropTypes.func,
};
export default NoteCard;