import React from 'react';
import NoteCardUtils from './NoteCardUtils.jsx';
import NoteCardBody from './NoteCardBody.jsx';
import PropTypes from 'prop-types';

class NoteCard extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <article
        key={this.props.note.id}
        className="bg-[#1e293b] px-2 py-2 flex max-w-xl flex-col items-start justify-between rounded-lg"
      >
        <NoteCardUtils
          note={this.props.note}
          showFormattedDate={this.props.showFormattedDate}
          handleArchiveNote={this.props.handleArchiveNote}
          handleDeleteNote={this.props.handleDeleteNote}
          handleRestoreArchiveNote={this.props.handleRestoreArchiveNote}
        />
        <NoteCardBody note={this.props.note}/>
      </article>
    );
  }
}

NoteCard.propTypes = {
  note: PropTypes.object.isRequired,
  showFormattedDate: PropTypes.func.isRequired,
  handleDeleteNote: PropTypes.func.isRequired,
  handleArchiveNote: PropTypes.func,
  handleRestoreArchiveNote: PropTypes.func,
};
export default NoteCard;