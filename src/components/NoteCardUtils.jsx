// eslint-disable-next-line no-unused-vars
import React from 'react';
import DeleteButton from './DeleteButton.jsx';
import RestoreArchiveButton from './RestoreArchiveButton.jsx';
import ArchiveButton from './ArchiveButton.jsx';
import PropTypes from 'prop-types';
import {useLocale, useTheme} from '../hooks/customHooks.js';

const NoteCardUtils = ({note, handleArchiveNote, handleDeleteNote, handleRestoreArchiveNote, showFormattedDate}) => {
  const {textColor} = useTheme();
  return (
    <div className="flex gap-x-4 justify-between text-xs w-full">
      <time dateTime={note.createdAt} className={textColor}>
        {showFormattedDate(note.createdAt, useLocale('en', 'id'))}
      </time>
      <div className="flex justify-end gap-x-2">
        <DeleteButton id={note.id} onDelete={handleDeleteNote}/>
        {
          note.archived === true
            ? <RestoreArchiveButton id={note.id} onRestoreArchive={handleRestoreArchiveNote}/>
            : <ArchiveButton id={note.id} onArchive={handleArchiveNote}/>
        }
      </div>
    </div>
  );
};

NoteCardUtils.propTypes = {
  note: PropTypes.object.isRequired,
  showFormattedDate: PropTypes.func.isRequired,
  handleDeleteNote: PropTypes.func.isRequired,
  handleArchiveNote: PropTypes.func,
  handleRestoreArchiveNote: PropTypes.func,
};

export default NoteCardUtils;