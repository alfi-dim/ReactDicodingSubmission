import {FiDelete} from 'react-icons/fi';
import PropTypes from 'prop-types';
import {useTheme} from '../hooks/customHooks.js';

function DeleteButton({id, onDelete}) {
  const {textColor} = useTheme();
  return (
    <button className={textColor} onClick={() => onDelete(id)}><FiDelete className="fiIcon"/></button>
  );
}

DeleteButton.propTypes = {
  id: PropTypes.string.isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default DeleteButton;