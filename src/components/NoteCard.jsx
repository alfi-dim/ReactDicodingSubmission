import IconButton from './IconButton.jsx';
import NoteCardUtils from './NoteCardUtils.jsx';
import NoteCardBody from './NoteCardBody.jsx';

export default function NoteCard({ note, showFormattedDate, IconButtonProps }) {
  return (
    <article key={note.id} className="bg-[#1e293b] px-2 py-2 flex max-w-xl flex-col items-start justify-between rounded-lg">
      <NoteCardUtils note={note} showFormattedDate={showFormattedDate} IconButtonProps={IconButtonProps} />
      <NoteCardBody note={note} />
    </article>
  );
}