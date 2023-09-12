import {getInitialData, showFormattedDate} from '../utils/index.js';
import NoteForm from './NoteForm.jsx';
import {useState} from 'react';
import NotesContainer from './NotesContainer.jsx';

const trashIcon = <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="#ffffff" className="w-5 h-5"><path fillRule="evenodd" d="M8.75 1A2.75 2.75 0 006 3.75v.443c-.795.077-1.584.176-2.365.298a.75.75 0 10.23 1.482l.149-.022.841 10.518A2.75 2.75 0 007.596 19h4.807a2.75 2.75 0 002.742-2.53l.841-10.52.149.023a.75.75 0 00.23-1.482A41.03 41.03 0 0014 4.193V3.75A2.75 2.75 0 0011.25 1h-2.5zM10 4c.84 0 1.673.025 2.5.075V3.75c0-.69-.56-1.25-1.25-1.25h-2.5c-.69 0-1.25.56-1.25 1.25v.325C8.327 4.025 9.16 4 10 4zM8.58 7.72a.75.75 0 00-1.5.06l.3 7.5a.75.75 0 101.5-.06l-.3-7.5zm4.34.06a.75.75 0 10-1.5-.06l-.3 7.5a.75.75 0 101.5.06l.3-7.5z" clipRule="evenodd" /></svg>;
const archiveInIcon = <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="#ffffff" className="w-5 h-5"><path fillRule="evenodd" d="M2 3a1 1 0 00-1 1v1a1 1 0 001 1h16a1 1 0 001-1V4a1 1 0 00-1-1H2zm0 4.5h16l-.811 7.71a2 2 0 01-1.99 1.79H4.802a2 2 0 01-1.99-1.79L2 7.5zM10 9a.75.75 0 01.75.75v2.546l.943-1.048a.75.75 0 111.114 1.004l-2.25 2.5a.75.75 0 01-1.114 0l-2.25-2.5a.75.75 0 111.114-1.004l.943 1.048V9.75A.75.75 0 0110 9z" clipRule="evenodd" /></svg>;
const archiveOutSvg = <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="#ffffff" className="w-5 h-5"><path d="M2 3a1 1 0 00-1 1v1a1 1 0 001 1h16a1 1 0 001-1V4a1 1 0 00-1-1H2z" /><path fillRule="evenodd" d="M2 7.5h16l-.811 7.71a2 2 0 01-1.99 1.79H4.802a2 2 0 01-1.99-1.79L2 7.5zm5.22 1.72a.75.75 0 011.06 0L10 10.94l1.72-1.72a.75.75 0 111.06 1.06L11.06 12l1.72 1.72a.75.75 0 11-1.06 1.06L10 13.06l-1.72 1.72a.75.75 0 01-1.06-1.06L8.94 12l-1.72-1.72a.75.75 0 010-1.06z" clipRule="evenodd" /></svg>;

const getInitialNotes = getInitialData();

const getActiveNotes = getInitialNotes.filter((getInitialNote) => !getInitialNote.archived);
const getArchiveNotes = getInitialNotes.filter((getInitialNote) => getInitialNote.archived);

export default function NoteApps() {
  const [activeNotes, setActiveNotes] = useState(getActiveNotes);
  const [archiveNotes, setArchiveNotes] = useState(getArchiveNotes);
  const [searchedActiveNotes, setSearchedActiveNotes] = useState();
  const [searchedArchiveNotes, setSearchedArchiveNotes] = useState();
  const handleCreateNote = (newNote) => {
    setActiveNotes(activeNotes => [...activeNotes, newNote]);
  };
  const handleArchiveNote = (id) => {
    const noteIndex = activeNotes.findIndex(activeNote => activeNote.id === id);
    const newArchivedNote = activeNotes[noteIndex];
    newArchivedNote.archived = true;
    setArchiveNotes(archiveNotes => [...archiveNotes, newArchivedNote]);
    setActiveNotes(activeNotes.filter((activeNote) => activeNote.id !== id));
  };

  const handleRestoreArchiveNote = (id) => {
    const noteIndex = archiveNotes?.findIndex(archiveNote => archiveNote.id === id);
    const newActiveNote = archiveNotes[noteIndex];
    newActiveNote.archived = false;
    setActiveNotes(activeNotes => [...activeNotes, newActiveNote]);
    setArchiveNotes(archiveNotes.filter((archiveNote) => archiveNote.id !== id));
  };

  const handleDeleteNote = (id) => {
    setActiveNotes(activeNotes.filter((activeNote) => activeNote.id !== id));
    setArchiveNotes(archiveNotes.filter((archiveNote) => archiveNote.id !== id));
  };

  const ActiveNotesIconButtonProps = [
    {
      id: 1,
      icon: trashIcon,
      onClickHandler: handleDeleteNote
    },
    {
      id: 2,
      icon: archiveInIcon,
      onClickHandler: handleArchiveNote,
    }
  ];

  const ArchiveNotesIconButtonProps = [
    {
      id: 1,
      icon: trashIcon,
      onClickHandler: handleDeleteNote
    },
    {
      id: 2,
      icon: archiveOutSvg,
      onClickHandler: handleRestoreArchiveNote
    }
  ];

  const handleSearchActiveNotesByTitle = (title) => {
    const searchRegexPattern = new RegExp(title, 'i');
    setSearchedActiveNotes(activeNotes.filter(activeNote => searchRegexPattern.test(activeNote.title)));
    if (!title.length) {
      setSearchedActiveNotes(undefined);
    }
  };

  const handleSearchArchiveNotesByTitle = (title) => {
    const searchRegexPattern = new RegExp(title, 'i');
    setSearchedArchiveNotes(archiveNotes?.filter(archiveNote => searchRegexPattern.test(archiveNote.title)));
    if (!title.length) {
      setSearchedArchiveNotes(undefined);
    }
  };
  return (
    <>
      <NoteForm handleCreateNote={handleCreateNote} />
      <NotesContainer notes={searchedActiveNotes ?? activeNotes} showFormattedDate={showFormattedDate} IconButtonProps={ActiveNotesIconButtonProps} handleSearchNote={handleSearchActiveNotesByTitle} headerTitle="Active Notes" ifNoteIsNullValue="There's no active notes here!" />
      <NotesContainer notes={searchedArchiveNotes ?? archiveNotes} showFormattedDate={showFormattedDate} IconButtonProps={ArchiveNotesIconButtonProps} handleSearchNote={handleSearchArchiveNotesByTitle} headerTitle="Archive Notes" ifNoteIsNullValue="There's no archive notes here!" />
    </>
  );
}
