import NoteCard from './NoteCard.jsx';
import Header from './Header.jsx';
import SearchBox from './SearchBox.jsx';
import React from 'react';
import PropTypes from 'prop-types';

class NotesContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      notes: [],
      keyword: '',
    };
  }

  render() {
    return (
      <div className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <Header title={this.props.title}/>
          <SearchBox keyword={this.props.keyword} keywordChange={this.props.keywordChange}/>
          <div
            className="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 pt-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3"
          >
            {
              this.props.notes.length !== 0
                ? this.props.notes.map((note) => (
                  <NoteCard
                    note={note}
                    showFormattedDate={this.props.showFormattedDate}
                    handleDeleteNote={this.props.handleDeleteNote}
                    handleArchiveNote={this.props.handleArchiveNote}
                    handleRestoreArchiveNote={this.props.handleRestoreArchiveNote}
                    key={note.id}
                  />
                ))
                : <p className="text-lg leading-8 text-white">
                  Notes tidak ditemukan :(
                </p>
            }
          </div>
        </div>
      </div>
    );
  }
}

NotesContainer.propTypes = {
  notes: PropTypes.array.isRequired,
  showFormattedDate: PropTypes.func.isRequired,
  handleDeleteNote: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
  handleArchiveNote: PropTypes.func,
  handleRestoreArchiveNote: PropTypes.func,
};

export default NotesContainer;