import { useState } from 'react';

export default function useVote() {
  const [upVote, setUpVote] = useState(false);
  const [downVote, setDownVote] = useState(false);

  const upVoteHandler = () => {
    setUpVote(true);
    setDownVote(false);
  };
  const downVoteHandler = () => {
    setUpVote(false);
    setDownVote(true);
  };
  const removeVoteHandler = () => {
    setUpVote(false);
    setDownVote(false);
  };

  return {
    upVoteHandler,
    downVoteHandler,
    removeVoteHandler,
    isUpVote: upVote,
    isDownVote: downVote,
  };
}
