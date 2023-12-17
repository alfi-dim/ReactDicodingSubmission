import {FiFolderPlus} from 'react-icons/fi';
import PropTypes from 'prop-types';
import {useTheme} from '../hooks/customHooks.js';

function ArchiveButton({id, onArchive}) {
  const {textColor} = useTheme();
  return <button className={textColor} onClick={() => onArchive(id)}><FiFolderPlus className="fiIcon"/></button>;
}

ArchiveButton.propTypes = {
  id: PropTypes.string.isRequired,
  onArchive: PropTypes.func.isRequired,
};

export default ArchiveButton;