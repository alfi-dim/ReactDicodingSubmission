import IconButton from './IconButton.jsx';

export default function NoteCardUtils({ note, showFormattedDate, IconButtonProps}) {
  return (
    <div className="flex gap-x-4 justify-between text-xs w-full">
      <time dateTime={note.createdAt} className="text-gray-400">
        {showFormattedDate(note.createdAt)}
      </time>
      <div className="flex justify-end gap-x-2">
        {IconButtonProps.map(IconButtonProp => <IconButton SvgIcon={IconButtonProp.icon} onClickHandler={IconButtonProp.onClickHandler} noteId={note.id} key={IconButtonProp.id} />)}
      </div>
    </div>
  );
}