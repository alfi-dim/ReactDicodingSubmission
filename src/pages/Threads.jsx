import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import ThreadCard from '../components/ThreadCard';
import useFilter from '../hooks/useFilter';

export default function Threads({ threads }) {
  const { getFilter } = useFilter();
  const [filteredThreads, setFilteredThreads] = React.useState(threads);
  const filter = getFilter();

  React.useEffect(() => {
    if (filter) {
      setFilteredThreads(threads.filter((thread) => thread.category === filter));
      return;
    }
    setFilteredThreads(threads);
  }, [filter, threads]);
  return filteredThreads?.map((thread) => (
    <Link to={`thread/${thread.id}`}>
      <ThreadCard key={thread.id} thread={thread} />
    </Link>
  ));
}

Threads.propTypes = {
  threads: PropTypes.arrayOf(PropTypes.shape({
    upVotesBy: PropTypes.arrayOf(PropTypes.string),
    downVotesBy: PropTypes.arrayOf(PropTypes.string),
    totalComments: PropTypes.number,
    title: PropTypes.string,
    category: PropTypes.string,
    user: PropTypes.shape({
      avatar: PropTypes.string,
      name: PropTypes.string,
    }),
    createdAt: PropTypes.string,
  })).isRequired,
};
