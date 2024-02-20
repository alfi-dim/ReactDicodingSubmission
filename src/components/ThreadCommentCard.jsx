import React from 'react';
import { Card, Tooltip } from 'flowbite-react';
import { HiArrowDown, HiArrowUp } from 'react-icons/hi';
import { RxDotFilled } from 'react-icons/rx';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import parser from 'html-react-parser';
import { postedAt } from '../utils/index';
import UtilsButton from './shared/UtilsButton';
import { asyncToggleVoteComment } from '../states/threadDetail/action';
import useVote from '../hooks/useVote';

export default function ThreadCommentCard({
  comment, threadId, isLast,
}) {
  const authUser = useSelector((states) => states.authUser);
  const dispatch = useDispatch();
  const {
    upVoteHandler,
    downVoteHandler,
    removeVoteHandler,
    isUpVote,
    isDownVote,
  } = useVote();
  const upVoteThread = (e) => {
    e.preventDefault();
    if (isUpVote) {
      removeVoteHandler();
      dispatch(asyncToggleVoteComment(threadId, comment?.id, 'neutral'));
      return;
    }
    upVoteHandler();
    dispatch(asyncToggleVoteComment(threadId, comment?.id, 'up'));
  };

  const downVoteThread = (e) => {
    e.preventDefault();
    if (isDownVote) {
      removeVoteHandler();
      dispatch(asyncToggleVoteComment(threadId, comment?.id, 'neutral'));
      return;
    }
    downVoteHandler();
    dispatch(asyncToggleVoteComment(threadId, comment?.id, 'down'));
  };

  React.useEffect(() => {
    if (comment?.upVotesBy?.includes(authUser?.id)) {
      upVoteHandler();
    }
    if (comment?.downVotesBy?.includes(authUser?.id)) {
      downVoteHandler();
    }
  }, [
    authUser,
    downVoteHandler,
    comment?.downVotesBy,
    comment?.upVotesBy,
    upVoteHandler,
  ]);
  return (
    <Card
      className={`h-fit bg-transparent border-transparent shadow-none dark:bg-transparent ${!isLast ? 'border-b-gray-500 dark:border-transparent dark:border-b-white' : ''}`}
    >
      <section className="w-fit">
        <span className="flex flex-row gap-4">
          <span className="w-fit">
            <img src={comment.owner.avatar} className="rounded-full m-auto h-10" alt={comment.owner.name} />
          </span>
          <span>
            <p className="dark:text-white">
              {comment.owner.name}
            </p>
            <span className="flex flex-row gap-1.5">
              <Tooltip content="user score">
                <p className="text-xs dark:text-white">
                  {comment.owner.score}
                </p>
              </Tooltip>
              <RxDotFilled />
              <p className="text-xs dark:text-white">
                Posted
                {' '}
                {postedAt(comment.createdAt)}
              </p>
            </span>
          </span>
        </span>
      </section>
      <section>
        <p className="dark:text-white">
          {parser(comment.content)}
        </p>
      </section>
      <section className="flex flex-col gap-2.5">
        <div className="flex flex-row gap-2.5 justify-between">
          <span className="flex flex-row gap-4 align-middle items-center">
            <UtilsButton
              label="upvote button"
              text={comment?.upVotesBy?.length.toString() ?? ''}
              icon={<HiArrowUp className="h-5" />}
              styles={`flex flex-row gap-1.5 align-middle items-center ${isUpVote ? 'text-blue-500 dark:text-forum-dark-primary' : 'dark:text-white'}`}
              onClickHandler={upVoteThread}
            />
            {' '}
            <UtilsButton
              label="downvote button"
              text={comment?.downVotesBy?.length.toString() ?? ''}
              icon={<HiArrowDown className="h-5" />}
              styles={`flex flex-row gap-1.5 align-middle items-center ${isDownVote ? 'text-blue-500 dark:text-forum-dark-primary' : 'dark:text-white'}`}
              onClickHandler={downVoteThread}
            />
          </span>
        </div>
      </section>
    </Card>
  );
}

ThreadCommentCard.propTypes = {
  comment: PropTypes.shape({
    id: PropTypes.string,
    content: PropTypes.string,
    createdAt: PropTypes.string,
    owner: PropTypes.shape({
      id: PropTypes.string,
      name: PropTypes.string,
      avatar: PropTypes.string,
      score: PropTypes.number,
    }),
    upVotesBy: PropTypes.arrayOf(PropTypes.string),
    downVotesBy: PropTypes.arrayOf(PropTypes.string),
  }).isRequired,
  threadId: PropTypes.string.isRequired,
  isLast: PropTypes.bool.isRequired,
};
