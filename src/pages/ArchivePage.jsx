import React from 'react';

import NotesContainer from '../components/NotesContainer';
import {deleteNote, getArchivedNotes, unarchiveNote} from '../utils/network-data.js';
import {showFormattedDate} from '../utils/helpers.js';
import {useSearchParams} from 'react-router-dom';
import {useLocale} from '../hooks/customHooks.js';
import toast from 'react-hot-toast';

const ArchivePage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [notes, setNotes] = React.useState([]);
  const [keyword, setKeyword] = React.useState(() => {
    return searchParams.get('keyword') || '';
  });

  React.useEffect(() => {
    getArchivedNotes()
      .then(({data}) => {
        setNotes(data);
      });
  }, []);

  async function onDeleteHandler(id) {
    await deleteNote(id)
      .then(() => {
        toast.success('Note Deleted', {
          position: 'top-right',
        });
      })
      .catch(() => {
        toast.error('Failed to delete note', {
          position: 'top-right',
        });
      });
  }

  async function onRestoreArchiveNote(id) {
    await unarchiveNote(id)
      .then(() => {
        toast.success('Note restored from archive', {
          position: 'top-right',
        });
      })
      .catch(() => {
        toast.error('Failed to restore note', {
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
        title={
          useLocale('Archive Notes', 'Arsip Catatan')
        }
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

export default ArchivePage;