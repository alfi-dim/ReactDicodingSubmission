import NoteCard from './NoteCard.jsx';
import Header from './Header.jsx';
import SearchBox from './SearchBox.jsx';
import {array, func, string} from 'prop-types';
import NotFoundNotesLottie from './NotFoundNotesLottie.jsx';
import {useTheme} from '../hooks/customHooks.js';

const NotesContainer = ({
                          notes,
                          title,
                          handleArchiveNote,
                          keywordChange,
                          keyword,
                          handleDeleteNote,
                          showFormattedDate,
                          handleRestoreArchiveNote
                        }) => {
  const { textColor } = useTheme();
  return (
    <div className="py-24 sm:py-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <Header title={title}/>
        <SearchBox keyword={keyword} keywordChange={keywordChange}/>
        <div
          className="mx-auto mt-6 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 pt-10 sm:mt-16 sm:pt-2 lg:mx-0 lg:max-w-none lg:grid-cols-3"
        >
          {
            notes.length !== 0
              ? notes.map((note) => (
                <NoteCard
                  note={note}
                  showFormattedDate={showFormattedDate}
                  handleDeleteNote={handleDeleteNote}
                  handleArchiveNote={handleArchiveNote}
                  handleRestoreArchiveNote={handleRestoreArchiveNote}
                  key={note.id}
                />
              ))
              : <div className="col-span-full text-center">
                <NotFoundNotesLottie/>
                <p className={`text-xl ${textColor}`}>Nothing to show here :(</p>
              </div>
          }
        </div>
      </div>
    </div>
  );
};

NotesContainer.propTypes = {
  notes: array.isRequired,
  showFormattedDate: func.isRequired,
  handleDeleteNote: func.isRequired,
  title: string.isRequired,
  handleArchiveNote: func,
  handleRestoreArchiveNote: func,
  keyword: string.isRequired,
  keywordChange: func.isRequired,
};

export default NotesContainer;