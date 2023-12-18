import DeleteButton from './DeleteButton.jsx';
import RestoreArchiveButton from './RestoreArchiveButton.jsx';
import ArchiveButton from './ArchiveButton.jsx';
import {func, object} from 'prop-types';
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
  note: object.isRequired,
  showFormattedDate: func.isRequired,
  handleDeleteNote: func.isRequired,
  handleArchiveNote: func,
  handleRestoreArchiveNote: func,
};

export default NoteCardUtils;