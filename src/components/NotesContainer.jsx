// eslint-disable-next-line no-unused-vars
import React from 'react';
import NoteCard from './NoteCard.jsx';
import Header from './Header.jsx';
import SearchBox from './SearchBox.jsx';
import PropTypes from 'prop-types';
import NotFoundNotesLottie from './NotFoundNotesLottie.jsx';

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
              : <div className="col-span-full text-white text-center">
                <NotFoundNotesLottie/>
                <p className="text-xl">Nothing to show here :(</p>
              </div>
          }
        </div>
      </div>
    </div>
  );
};

NotesContainer.propTypes = {
  notes: PropTypes.array.isRequired,
  showFormattedDate: PropTypes.func.isRequired,
  handleDeleteNote: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
  handleArchiveNote: PropTypes.func,
  handleRestoreArchiveNote: PropTypes.func,
  keyword: PropTypes.string.isRequired,
  keywordChange: PropTypes.func.isRequired,
};

export default NotesContainer;