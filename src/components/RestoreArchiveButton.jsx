import {FiFolderMinus} from 'react-icons/fi';
import PropTypes from 'prop-types';

function RestoreArchiveButton({id, onRestoreArchive}) {
  return (
    <button
      type="button"
      className="icon restore"
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