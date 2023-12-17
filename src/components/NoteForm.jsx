import Header from './Header.jsx';
import React from 'react';
import PropTypes from 'prop-types';
import {useInput, useLocale} from '../hooks/customHooks.js';

const NoteForm = ({addNoteHandler}) => {
  const [title, onTitleChange] = useInput('');
  const [usedCharacter, setUsedCharacter] = React.useState(0);
  const [description, setDescription] = React.useState('');

  const handleTitleChange = (e) => {
    if (e.target.value.length > 50) {
      return;
    }
    onTitleChange(e);
    setUsedCharacter(e.target.value.length);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newNote = {
      title,
      body: description,

    };
    addNoteHandler(newNote);
  };

  const onInputHandler = (event) => {
    setDescription(event.target.innerHTML);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="space-y-12 py-24 px-16">
        <Header title={useLocale('Create Note', 'Buat Catatan')}/>
        <div className="border-b border-gray-900/10 pb-12">
          <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
            <div className="sm:col-span-4">
              <label htmlFor="title" className="block text-sm font-medium leading-6 text-white">
                {useLocale('Title', 'Judul')}
              </label>
              <div className="mt-2">
                <div
                  className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md"
                >
                    <span
                      className="flex select-none items-center pl-3 text-white sm:text-sm">
                      {usedCharacter} {useLocale('of', 'dari')} 50:
                    </span>
                  <input
                    type="text"
                    name="title"
                    id="title"
                    autoComplete="title"
                    className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-white placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                    placeholder={useLocale('Title', 'Judul')}
                    onChange={handleTitleChange}
                    value={title}
                  />
                </div>
              </div>
            </div>
            <div className="col-span-full">
              <label htmlFor="description" className="block text-sm font-medium leading-6 text-white">
                {useLocale('Description', 'Deskripsi')}
              </label>
              <div
                className="mt-2 h-24 p-2 bg-white block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                data-placeholder={useLocale('This is contenteditable, please type here...', 'Ini contenteditable, silahkan ketik disini...')}
                contentEditable
                onInput={onInputHandler}
              />
            </div>
            <button
              type="submit"
              className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              {useLocale('Create', 'Buat')}
            </button>
          </div>
        </div>
      </div>
    </form>
  );
};

NoteForm.propTypes = {
  addNoteHandler: PropTypes.func.isRequired,
};

export default NoteForm;