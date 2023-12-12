import React from 'react';
import NotesContainer from '../components/NotesContainer';
import {archiveNote, deleteNote, getActiveNotes, showFormattedDate} from '../utils/local-data.js';
import {useSearchParams} from 'react-router-dom';
import PropTypes from 'prop-types';

const HomePage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [notes, setNotes] = React.useState([]);
  const [keyword, setKeyword] = React.useState(() => {
    return searchParams.get('keyword') || '';
  });

  React.useEffect(() => {
    setNotes(getActiveNotes());
  }, []);

  function onDeleteHandler(id) {
    deleteNote(id);

    // update the contact state from data.js
    setNotes(getActiveNotes());
  }

  function onArchiveNote (id) {
    archiveNote (id);
    setNotes(getActiveNotes());
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
        title="Active Notes"
        handleSearchNote={onKeywordChangeHandler}
        handleDeleteNote={onDeleteHandler}
        handleArchiveNote={onArchiveNote}
        showFormattedDate={showFormattedDate}
        keyword={keyword}
        keywordChange={onKeywordChangeHandler}
      />
    </section>
  );
};

HomePage.propTypes = {
  defaultKeyword: PropTypes.string,
  keywordChange: PropTypes.func,
};

export default HomePage;