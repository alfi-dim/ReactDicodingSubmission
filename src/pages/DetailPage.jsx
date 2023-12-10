import {archiveNote, deleteNote, getNote} from '../utils/local-data.js';
import NoteDetail from '../components/NoteDetail.jsx';
import React from 'react';
import PropTypes from 'prop-types';
import {useNavigate, useParams} from 'react-router-dom';
import NotFoundPage from './404Page.jsx';


function DetailPageWrapper() {
  const {id} = useParams();
  const navigate = useNavigate();
  return <DetailPage id={id} navigate={navigate}/>;
}

class DetailPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      note: getNote(props.id),
    };
  }

  onDeleteHandler = (id) => {
    deleteNote(id);

    this.props.navigate('/');
  };

  onArchiveHandler = (id) => {
    archiveNote(id);

    this.props.navigate('/archive');
  };

  onRestoreArchiveHandler = (id) => {
    archiveNote(id);

    this.props.navigate('/');
  };

  render() {
    const {note} = this.state;
    if (!note) {
      return (
        <section>
          <NotFoundPage/>
        </section>
      );
    }
    return (
      <section>
        <NoteDetail
          id={note.id}
          title={note.title}
          body={note.body}
          createdAt={note.createdAt}
          archived={note.archived}
          onDelete={this.onDeleteHandler}
          onArchive={this.onArchiveHandler}
          onRestoreArchive={this.onRestoreArchiveHandler}
        />
      </section>
    );
  }
}

DetailPage.propTypes = {
  id: PropTypes.string.isRequired,
  navigate: PropTypes.func.isRequired,
};

export default DetailPageWrapper;