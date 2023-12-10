import React from 'react';

import NotesContainer from '../components/NotesContainer';
import {deleteNote, getArchivedNotes, showFormattedDate, unarchiveNote} from '../utils/local-data.js';
import {useSearchParams} from 'react-router-dom';
import PropTypes from 'prop-types';

function ArchivePageWrapper() {
  const [searchParams, setSearchParams] = useSearchParams();
  const keyword = searchParams.get('keyword');

  function changeSearchParams(keyword) {
    setSearchParams({keyword});
  }

  return <ArchivePage defaultKeyword={keyword} keywordChange={changeSearchParams}/>;
}

class ArchivePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      notes: getArchivedNotes() || [],
      keyword: props.defaultKeyword || '',
    };
  }

  onDeleteHandler = (id) => {
    deleteNote(id);

    this.setState(() => {
      return {
        notes: getArchivedNotes(),
      };
    });
  };

  onRestoreArchiveNote = (id) => {
    unarchiveNote(id);
    this.setState(() => {
      return {
        notes: getArchivedNotes(),
      };
    });
  };

  onKeywordChangeHandler = (keyword) => {
    this.setState(() => {
      return {
        keyword,
      };
    });
    this.props.keywordChange(keyword);
  };

  render() {
    const notes = this.state.notes.filter((note) => {
      return note.title.toLowerCase().includes(
        this.state.keyword.toLowerCase()
      );
    });

    return (
      <section>
        <NotesContainer
          notes={notes}
          title="Archive Notes"
          handleSearchNote={this.onKeywordChangeHandler}
          handleDeleteNote={this.onDeleteHandler}
          handleRestoreArchiveNote={this.onRestoreArchiveNote}
          showFormattedDate={showFormattedDate}
          keyword={this.state.keyword}
          keywordChange={this.onKeywordChangeHandler}
        />
      </section>
    );
  }
}

ArchivePage.propTypes = {
  defaultKeyword: PropTypes.string,
  keywordChange: PropTypes.func,
};

export default ArchivePageWrapper;