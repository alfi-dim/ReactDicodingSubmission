import {FiDelete} from 'react-icons/fi';
import {func, string} from 'prop-types';
import {useTheme} from '../hooks/customHooks.js';

function DeleteButton({id, onDelete}) {
  const {textColor} = useTheme();
  return (
    <button className={textColor} onClick={() => onDelete(id)}><FiDelete className="fiIcon"/></button>
  );
}

DeleteButton.propTypes = {
  id: string.isRequired,
  onDelete: func.isRequired,
};

export default DeleteButton;