import {FiFolderPlus} from 'react-icons/fi';
import PropTypes from 'prop-types';

function archiveButton({id, onArchive}) {
  return <button className='icon archive' onClick={() => onArchive(id)}><FiFolderPlus className="fiIcon"/></button>;
}

archiveButton.propTypes = {
  id: PropTypes.string.isRequired,
  onArchive: PropTypes.func.isRequired,
};

export default archiveButton;