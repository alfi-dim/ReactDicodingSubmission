// eslint-disable-next-line no-unused-vars
import React from 'react';
import PropTypes from 'prop-types';
import Header from './Header.jsx';
import DeleteButton from './DeleteButton.jsx';
import RestoreArchiveButton from './RestoreArchiveButton.jsx';
import ArchiveButton from './ArchiveButton.jsx';
import {showFormattedDate} from '../utils/local-data.js';
import parser from 'html-react-parser';
import {useTheme} from '../hooks/customHooks.js';

function NoteDetail({id, title, body, createdAt, archived, onRestoreArchive, onArchive, onDelete}) {
  const {textColor, ringColor} = useTheme();
  return (
    <div className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <time dateTime={createdAt} className={textColor}>
          {showFormattedDate(createdAt)}
        </time>
        <div className="flex justify-end gap-x-2">
          <DeleteButton id={id} className="w-8 h-8" onDelete={onDelete}/>
          {
            archived === true
              ?
              <RestoreArchiveButton id={id} onRestoreArchive={onRestoreArchive}/>
              : <ArchiveButton className="w-8 h-8" id={id} onArchive={onArchive}/>
          }
        </div>
        <Header title={title}/>
        <div
          className="mx-auto mt-2 pt-2 sm:mt-2 sm:pt-2 lg:mx-0 lg:max-w-none">
          <div className="flex gap-x-4 justify-between text-xs w-full">
          </div>
          <div
            className={`mt-2 h-fit p-2 block w-full rounded-md border-0 py-1.5 ${textColor} shadow-sm ring-1 ring-inset ${ringColor} placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6`}
          > {parser(body)} </div>
        </div>
      </div>
    </div>
  );
}

NoteDetail.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  createdAt: PropTypes.string.isRequired,
  archived: PropTypes.bool.isRequired,
  onRestoreArchive: PropTypes.func.isRequired,
  onArchive: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default NoteDetail;