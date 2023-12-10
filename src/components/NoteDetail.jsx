// eslint-disable-next-line no-unused-vars
import React, {useEffect, useRef, useState} from 'react';
import PropTypes from 'prop-types';
import Header from './Header.jsx';
import DeleteButton from './DeleteButton.jsx';
import RestoreArchiveButton from './RestoreArchiveButton.jsx';
import ArchiveButton from './ArchiveButton.jsx';
import {showFormattedDate} from '../utils/local-data.js';
import parser from 'html-react-parser';

function NoteDetail({id, title, body, createdAt, archived, onRestoreArchive, onArchive, onDelete, onEdit}) {
  const contentEditableRef = useRef(null);
  useEffect(() => {
    // Set the initial value when the component mounts
    contentEditableRef.current.innerHTML = parser(body);
  }, [body]);
  const [newBody, setNewBody] = useState(body);
  const [changed, isChanged] = useState(false);

  const onInputHandler = () => {
    setNewBody(contentEditableRef.current.innerHTML);
    newBody !== contentEditableRef.current.innerHTML ?
      isChanged(true)
    :
      isChanged(false);

  };
  const onClickHandler = (event) => {
    event.preventDefault();
    const payload = {
      id,
      title,
      body: newBody,
    };
    onEdit(payload);
  };
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
          <div
            className="mt-2 h-fit p-2 block w-full rounded-md border-0 py-1.5 text-white shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            ref={contentEditableRef}
            contentEditable
            onInput={onInputHandler}
          />
          <div className="flex justify-end mt-6">
            <button
              type="submit"
              disabled={!changed}
              onClick={onClickHandler}
              className={`rounded-md px-3 py-2 text-sm font-semibold text-white shadow-sm ${
                !changed ? 'bg-indigo-500' : 'bg-indigo-600 hover:bg-indigo-500'
              } focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600`}
            >
              Save
            </button>
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