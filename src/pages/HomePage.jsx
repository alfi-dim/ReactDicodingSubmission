import React from 'react';
import NotesContainer from '../components/NotesContainer';
import {archiveNote, deleteNote, getActiveNotes, showFormattedDate} from '../utils/local-data.js';
import {useSearchParams} from 'react-router-dom';
import PropTypes from 'prop-types';

function HomePageWrapper() {
  const [searchParams, setSearchParams] = useSearchParams();
  const keyword = searchParams.get('keyword');

  function changeSearchParams(keyword) {
    setSearchParams({keyword});
  }

  return <HomePage defaultKeyword={keyword} keywordChange={changeSearchParams}/>;
}

class HomePage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      notes: getActiveNotes() || [],
      keyword: props.defaultKeyword || '',
    };
  }

  onDeleteHandler = (id) => {
    deleteNote(id);

    // update the contact state from data.js
    this.setState(() => {
      return {
        notes: getActiveNotes(),
      };
    });
  };

  onArchiveNote = (id) => {
    archiveNote(id);
    this.setState(() => {
      return {
        notes: getActiveNotes(),
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
          title="Active Notes"
          handleSearchNote={this.onKeywordChangeHandler}
          handleDeleteNote={this.onDeleteHandler}
          handleArchiveNote={this.onArchiveNote}
          showFormattedDate={showFormattedDate}
          keyword={this.state.keyword}
          keywordChange={this.onKeywordChangeHandler}
        />
      </section>
    );
  }
}

HomePage.propTypes = {
  defaultKeyword: PropTypes.string,
  keywordChange: PropTypes.func,
};

export default HomePageWrapper;