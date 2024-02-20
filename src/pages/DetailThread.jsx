import React from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import DetailThreadCard from '../components/DetailThreadCard';
import ThreadCommentCard from '../components/ThreadCommentCard';
import { asyncPopulateDetailThread } from '../states/shared/action';
import { asyncToggleVoteThread } from '../states/threadDetail/action';
import useVote from '../hooks/useVote';

export default function DetailThreadPage() {
  const {
    upVoteHandler,
    downVoteHandler,
    removeVoteHandler,
    isUpVote,
    isDownVote,
  } = useVote();
  const { id } = useParams();
  const threadDetail = useSelector((state) => state.threadDetail);
  const authUser = useSelector((state) => state.authUser);

  const dispatch = useDispatch();
  React.useEffect(() => {
    dispatch(asyncPopulateDetailThread(id));
  }, [dispatch, id]);

  const upVoteThread = (e) => {
    e.preventDefault();
    if (isUpVote) {
      removeVoteHandler();
      dispatch(asyncToggleVoteThread(threadDetail?.id, 'neutral'));
      return;
    }
    upVoteHandler();
    dispatch(asyncToggleVoteThread(threadDetail?.id, 'up'));
  };

  const downVoteThread = (e) => {
    e.preventDefault();
    if (isDownVote) {
      removeVoteHandler();
      dispatch(asyncToggleVoteThread(threadDetail?.id, 'neutral'));
      return;
    }
    downVoteHandler();
    dispatch(asyncToggleVoteThread(threadDetail?.id, 'down'));
  };

  React.useEffect(() => {
    if (threadDetail?.upVotesBy?.includes(authUser?.id)) {
      upVoteHandler();
    }
    if (threadDetail?.downVotesBy?.includes(authUser?.id)) {
      downVoteHandler();
    }
  }, [
    authUser,
    downVoteHandler,
    threadDetail?.downVotesBy,
    threadDetail?.upVotesBy,
    upVoteHandler,
  ]);
  return (
    <span className="flex flex-col gap-4 px-10">
      <DetailThreadCard
        thread={threadDetail}
        isUpvoteByMe={isUpVote}
        isDownvoteByMe={isDownVote}
        upVoteThread={upVoteThread}
        downVoteThread={downVoteThread}
      />
      <section>
        {
          threadDetail?.comments?.map((comment, index) => (
            <ThreadCommentCard
              key={comment?.id}
              comment={comment}
              threadId={threadDetail.id}
              isLast={threadDetail?.comments?.length === index + 1}
            />
          ))
        }
      </section>
    </span>
  );
}
