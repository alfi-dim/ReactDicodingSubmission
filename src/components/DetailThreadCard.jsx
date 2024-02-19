import React from 'react';
import parser from 'html-react-parser';
import { Card, Tooltip } from 'flowbite-react';
import { HiArrowDown, HiArrowUp } from 'react-icons/hi';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { postedAt } from '../utils/index';
import AddCommentForm from './AddCommentForm';
import UtilsButton from './shared/UtilsButton';
import CategoryBadge from './shared/CategoryBadge';

export default function DetailThreadCard({
  thread, isUpvoteByMe, isDownvoteByMe, upVoteThread, downVoteThread,
}) {
  const { authUser = null } = useSelector((state) => state);
  const [isFormVisible, setIsFormVisible] = React.useState(false);
  const onFormVisible = (state) => setIsFormVisible(state);

  if (thread) {
    return (
      <Card>
        <section className="border-b border-b-gray-500 pb-2 flex flex-col gap-1.5">
          <h2 className="text-xl font-bold dark:text-white">
            {thread?.title}
          </h2>
          <p className="text-xs dark:text-white">
            Posted
            {' '}
            {postedAt(thread?.createdAt)}
          </p>
        </section>
        <section>
          <p className="dark:text-white">
            {parser(thread?.body ?? '')}
          </p>
        </section>
        <section className="flex flex-col gap-2.5">
          <CategoryBadge category={thread?.category} />
          <div className="flex flex-row gap-2.5 justify-between">
            <span className="flex flex-row gap-4 align-middle items-center">
              {
                authUser && (
                  <>
                    <UtilsButton
                      label="upvote button"
                      text={thread?.upVotesBy?.length.toString() ?? ''}
                      icon={<HiArrowUp className="h-5" />}
                      styles={`flex flex-row gap-1.5 align-middle items-center ${isUpvoteByMe ? 'text-blue-500 dark:text-forum-dark-background' : 'dark:text-white'}`}
                      onClickHandler={upVoteThread}
                    />
                    {' '}
                    <UtilsButton
                      label="downvote button"
                      text={thread?.downVotesBy?.length.toString() ?? ''}
                      icon={<HiArrowDown className="h-5" />}
                      styles={`flex flex-row gap-1.5 align-middle items-center ${isDownvoteByMe ? 'text-blue-500 dark:text-forum-dark-background' : 'dark:text-white'}`}
                      onClickHandler={downVoteThread}
                    />
                    {' '}
                    <UtilsButton
                      label="reply button"
                      text="reply"
                      onClickHandler={() => onFormVisible(true)}
                      styles="text-blue-500 dark:text-blue-100"
                    />
                  </>
                )
              }
            </span>
            <span className="grid grid-cols-2">
              <img src={thread?.owner?.avatar} className="rounded-full m-auto h-10" alt={thread?.owner?.name} />
              <span>
                <p className="dark:text-white">
                  {thread?.owner?.name}
                </p>
                <Tooltip content="user score">
                  <p className="text-xs dark:text-white">
                    {thread?.owner?.score}
                  </p>
                </Tooltip>
              </span>
            </span>
          </div>
        </section>
        <AddCommentForm isVisible={isFormVisible} changeVisible={onFormVisible} />
      </Card>
    );
  }

  return null;
}

DetailThreadCard.propTypes = {
  thread: PropTypes.shape({
    id: PropTypes.string,
    title: PropTypes.string,
    body: PropTypes.string,
    category: PropTypes.string,
    createdAt: PropTypes.string,
    owner: PropTypes.shape({
      id: PropTypes.string,
      name: PropTypes.string,
      avatar: PropTypes.string,
      score: PropTypes.number,
    }),
    upVotesBy: PropTypes.arrayOf(PropTypes.string),
    downVotesBy: PropTypes.arrayOf(PropTypes.string),
  }),
  isUpvoteByMe: PropTypes.bool.isRequired,
  isDownvoteByMe: PropTypes.bool.isRequired,
  upVoteThread: PropTypes.func.isRequired,
  downVoteThread: PropTypes.func.isRequired,
};
