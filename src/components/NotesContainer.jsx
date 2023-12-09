import NoteCard from './NoteCard.jsx';
import Header from './Header.jsx';
import SearchBox from './SearchBox.jsx';
import React from 'react';

class NotesContainer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      notes: [],
      keyword: '',
    };

    this.onKeywordChangeHandler = this.onKeywordChangeHandler.bind(this);
  }

  componentDidMount() {
    this.setState(() => {
      return {
        notes: this.props.notes,
      };
    });
  }

  onKeywordChangeHandler(keyword) {
    this.setState(() => {
      return {
        keyword,
      };
    });
  }

  render() {
    const notes = this.state.notes.filter((note) => {
      return note.title.toLowerCase().includes(
        this.state.keyword.toLowerCase()
      );
    });

    return (
      <div className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <Header title={this.state.note.headerTitle}/>
          <SearchBox handleSearchNote={this.props.handleSearchNote}/>
          <div
            className="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 pt-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">
            {notes.length !== 0 ? notes.map((note) => (
              <NoteCard note={note} showFormattedDate={showFormattedDate} IconButtonProps={IconButtonProps}
                        key={note.id}/>
            )) : <p className="text-lg leading-8 text-white">
              {ifNoteIsNullValue}
            </p>}
          </div>
        </div>
      </div>
    );
  }
}

export default function NotesContainerf({
                                          notes,
                                          showFormattedDate,
                                          IconButtonProps,
                                          handleSearchNote,
                                          headerTitle,
                                          ifNoteIsNullValue
                                        }) {
  return (
    <div className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <Header title={headerTitle}/>
        <SearchBox handleSearchNote={handleSearchNote}/>
        <div
          className="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 pt-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">
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
