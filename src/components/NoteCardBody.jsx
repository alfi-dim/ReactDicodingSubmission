export default function NoteCardBody({ note }) {
  return (
    <div className="group relative">
      <h3 className="mt-3 text-lg font-semibold leading-6 text-white group-hover:text-gray-400">
        <span className="absolute inset-0" />
        {note.title}
      </h3>
      <p className="mt-5 line-clamp-3 text-sm leading-6 text-gray-200">{note.body}</p>
    </div>
  );
}