import PropTypes from 'prop-types';

export default function SearchBox({keyword, keywordChange}) {
  return (
    <div className="sm:col-span-4">
      <div className="mt-2">
        <div
          className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
          <span className="flex select-none items-center pl-3 text-white sm:text-sm">Search by title: </span>
          <input
            type="text"
            name="title"
            id="title"
            autoComplete="title"
            className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-white placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
            placeholder="title"
            value={keyword}
            onChange={(event) => keywordChange(event.target.value)}/>
        </div>
      </div>
    </div>
  );
}

SearchBox.propTypes = {
  keyword: PropTypes.string.isRequired,
  keywordChange: PropTypes.func.isRequired
};