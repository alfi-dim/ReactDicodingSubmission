import React from 'react';

import NotesContainer from '../components/NotesContainer';
import {deleteNote, getArchivedNotes, showFormattedDate, unarchiveNote} from '../utils/local-data.js';
import {useSearchParams} from 'react-router-dom';
import PropTypes from 'prop-types';

const ArchivePage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [notes, setNotes] = React.useState([]);
  const [keyword, setKeyword] = React.useState(() => {
    return searchParams.get('keyword') || '';
  });

  React.useEffect(() => {
    setNotes(getArchivedNotes());
  }, []);

  function onDeleteHandler(id) {
    deleteNote (id);

    // update the contact state from data.js
    setNotes(getArchivedNotes());
  }

  function onRestoreArchiveNote (id) {
    unarchiveNote (id);
    setNotes(getArchivedNotes());
  }

  function onKeywordChangeHandler(keyword) {
    setKeyword(keyword);
    setSearchParams({keyword});
  }

  const filteredNotes = notes.filter((note) => {
    return note.title.toLowerCase().includes(
      keyword.toLowerCase()
    );
  });

  return (
    <section>
      <NotesContainer
        notes={filteredNotes}
        title="Archive Notes"
        handleSearchNote={onKeywordChangeHandler}
        handleDeleteNote={onDeleteHandler}
        handleRestoreArchiveNote={onRestoreArchiveNote}
        showFormattedDate={showFormattedDate}
        keyword={keyword}
        keywordChange={onKeywordChangeHandler}
      />
    </section>
  );
};

ArchivePage.propTypes = {
  defaultKeyword: PropTypes.string,
  keywordChange: PropTypes.func,
};

export default ArchivePage;