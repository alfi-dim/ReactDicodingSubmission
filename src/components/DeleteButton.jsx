import {FiDelete} from 'react-icons/fi';
import PropTypes from 'prop-types';

function deleteButton({id, onDelete}) {
  return <button className='icon delete' onClick={() => onDelete(id)}><FiDelete className="fiIcon"/></button>;
}

deleteButton.propTypes = {
  id: PropTypes.string.isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default deleteButton;