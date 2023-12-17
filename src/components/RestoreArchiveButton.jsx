import {FiFolderMinus} from 'react-icons/fi';
import PropTypes from 'prop-types';
import {useTheme} from '../hooks/customHooks.js';

function RestoreArchiveButton({id, onRestoreArchive}) {
  const {textColor} = useTheme();
  return (
    <button
      type="button"
      className={textColor}
      onClick={() => onRestoreArchive(id)}
    >
      <FiFolderMinus className="fiIcon"/>
    </button>
  );
}

RestoreArchiveButton.propTypes = {
  id: PropTypes.string.isRequired,
  onRestoreArchive: PropTypes.func.isRequired
};

export default RestoreArchiveButton;