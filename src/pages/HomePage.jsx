import React from 'react';
import NotesContainer from '../components/NotesContainer';
import {archiveNote, deleteNote, getActiveNotes} from '../utils/network-data.js';
import {showFormattedDate} from '../utils/helpers.js';
import {useSearchParams} from 'react-router-dom';
import PropTypes from 'prop-types';
import {useLocale} from '../hooks/customHooks.js';
import toast from 'react-hot-toast';

const HomePage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [notes, setNotes] = React.useState([]);
  const [keyword, setKeyword] = React.useState(() => {
    return searchParams.get('keyword') || '';
  });


  React.useEffect(() => {
    getActiveNotes()
      .then(({data}) => {
        setNotes(data);
      });
  }, []);

  async function onDeleteHandler(id) {
    await deleteNote(id)
      .then(() => {
        toast.success('Note deleted', {
          position: 'top-right',
        });
      })
      .catch(() => {
        toast.error('Failed to delete note', {
          position: 'top-right',
        });
      });
  }

  async function onArchiveNote(id) {
    await archiveNote(id)
      .then(() => {
        toast.success('Note archived', {
          position: 'top-right',
        });
      })
      .catch(() => {
        toast.error('Failed to archive note', {
          position: 'top-right',
        });
      });
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
        title={useLocale('Active Notes', 'Daftar Catatan Aktif')}
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