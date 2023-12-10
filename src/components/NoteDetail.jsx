// eslint-disable-next-line no-unused-vars
import React from 'react';
import PropTypes from 'prop-types';
import Header from './Header.jsx';
import DeleteButton from './DeleteButton.jsx';
import RestoreArchiveButton from './RestoreArchiveButton.jsx';
import ArchiveButton from './ArchiveButton.jsx';
import {showFormattedDate} from '../utils/local-data.js';
import parser from 'html-react-parser';

function NoteDetail({id, title, body, createdAt, archived, onRestoreArchive, onArchive, onDelete}) {
  return (
    <div className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <time dateTime={createdAt} className="text-gray-400">
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
          <div>
            <p className="mt-2 text-xl leading-6 text-gray-200">{parser(body)}</p>
          </div>
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