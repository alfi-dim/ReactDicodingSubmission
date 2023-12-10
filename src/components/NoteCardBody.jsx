import {Link} from 'react-router-dom';
import parser from 'html-react-parser';
import PropTypes from 'prop-types';

export default function NoteCardBody({note}) {
  return (
    <div className="group relative">
      <h3 className="mt-3 text-lg font-semibold leading-6 text-white group-hover:text-gray-400">
        <Link to={`/note/${note.id}`}>{note.title}</Link>
      </h3>
      <p className="mt-5 line-clamp-3 text-sm leading-6 text-gray-200">{parser(note.body)}</p>
    </div>
  );
}

NoteCardBody.propTypes = {
  note: PropTypes.object.isRequired,
};