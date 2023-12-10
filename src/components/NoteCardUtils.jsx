import React from 'react';
import DeleteButton from './DeleteButton.jsx';
import RestoreArchiveButton from './RestoreArchiveButton.jsx';
import ArchiveButton from './ArchiveButton.jsx';
import PropTypes from 'prop-types';

class NoteCardUtils extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="flex gap-x-4 justify-between text-xs w-full">
        <time dateTime={this.props.note.createdAt} className="text-gray-400">
          {this.props.showFormattedDate(this.props.note.createdAt)}
        </time>
        <div className="flex justify-end gap-x-2">
          <DeleteButton id={this.props.note.id} onDelete={this.props.handleDeleteNote}/>
          {
            this.props.note.archived === true
              ? <RestoreArchiveButton id={this.props.note.id} onRestoreArchive={this.props.handleRestoreArchiveNote}/>
              : <ArchiveButton id={this.props.note.id} onArchive={this.props.handleArchiveNote}/>
          }
        </div>
      </div>
    );
  }
}

NoteCardUtils.propTypes = {
  note: PropTypes.object.isRequired,
  showFormattedDate: PropTypes.func.isRequired,
  handleDeleteNote: PropTypes.func.isRequired,
  handleArchiveNote: PropTypes.func,
  handleRestoreArchiveNote: PropTypes.func,
};

export default NoteCardUtils;