import {archiveNote, deleteNote, getNote, unarchiveNote} from '../utils/network-data.js';
import NoteDetail from '../components/NoteDetail.jsx';
import {useEffect, useState} from 'react';
import {useNavigate, useParams} from 'react-router-dom';
import NotFoundPage from './404Page.jsx';
import Loading from '../components/Loading.jsx';

const DetailPage = () => {
  const {id} = useParams();
  const navigate = useNavigate();
  const [note, setNote] = useState(null);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    getNote(id)
      .then(({data}) => {
        setNote(data);
        setLoading(false);
      });
  }, [id]);
  const onDeleteHandler = async (id) => {
    await deleteNote(id)
      .then(() => {
        navigate('/');
      });
  };

  const onArchiveHandler = async (id) => {
    await archiveNote(id)
      .then(() => {
        navigate('/archive');
      });
  };

  const onRestoreArchiveHandler = async (id) => {
    await unarchiveNote(id)
      .then(() => {
        navigate('/');
      });
  };

  if (isLoading) {
    return (
      <section>
        <Loading/>
      </section>
    );
  }

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
        onDelete={onDeleteHandler}
        onArchive={onArchiveHandler}
        onRestoreArchive={onRestoreArchiveHandler}
      />
    </section>
  );
};

export default DetailPage;