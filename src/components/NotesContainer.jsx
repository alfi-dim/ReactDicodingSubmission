import NoteCard from './NoteCard.jsx';
import Header from './Header.jsx';
import SearchBox from './SearchBox.jsx';

export default function NotesContainer({ notes, showFormattedDate, IconButtonProps, handleSearchNote, headerTitle, ifNoteIsNullValue }) {
  return (
    <div className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <Header title={headerTitle} />
        <SearchBox handleSearchNote={handleSearchNote} />
        <div className="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 pt-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {notes.length !== 0 ? notes.map((note) => (
            <NoteCard note={note} showFormattedDate={showFormattedDate} IconButtonProps={IconButtonProps} key={note.id} />
          )) : <p className="text-lg leading-8 text-white">
            {ifNoteIsNullValue}
          </p>}
        </div>
      </div>
    </div>
  );
}
