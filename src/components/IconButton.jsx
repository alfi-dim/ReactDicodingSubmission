export default function IconButton({ SvgIcon, onClickHandler, noteId }) {
  return (
    <button onClick={() => onClickHandler(noteId)}>{SvgIcon}</button>
  );
}