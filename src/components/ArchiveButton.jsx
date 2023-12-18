import {FiFolderPlus} from 'react-icons/fi';
import {func, string} from 'prop-types';
import {useTheme} from '../hooks/customHooks.js';

function ArchiveButton({id, onArchive}) {
  const {textColor} = useTheme();
  return <button className={textColor} onClick={() => onArchive(id)}><FiFolderPlus className="fiIcon"/></button>;
}

ArchiveButton.propTypes = {
  id: string.isRequired,
  onArchive: func.isRequired,
};

export default ArchiveButton;