import { hideLoading, showLoading } from 'react-redux-loading-bar';
import toast from 'react-hot-toast';
import fetcher from '../../utils/fetcher';
import { asyncAddComment, receiveThreadsActionCreator } from '../threads/action';
import { receiveUsersActionCreator } from '../users/action';
import { receiveThreadDetailActionCreator } from '../threadDetail/action';
import { asyncGetLeaderboard } from '../leaderboard/action';

export function asyncPopulateThreads() {
  return async (dispatch) => {
    dispatch(showLoading());
    try {
      const { threads } = await fetcher.getThreads();
      const { users } = await fetcher.getUsers();
      dispatch(receiveThreadsActionCreator(threads));
      dispatch(receiveUsersActionCreator(users));
    } catch (error) {
      toast.error(error.message);
    }
    dispatch(hideLoading());
  };
}

export function asyncPopulateDetailThread(threadId) {
  return async (dispatch) => {
    dispatch(showLoading());
    const { detailThread } = await fetcher.getThreadDetail(threadId)
      .catch((error) => {
        toast.error(error.message);
      });
    const { leaderboards } = await fetcher.getLeaderboard();
    const populatedDetailThread = (initialThreadData, leaderboardsData) => {
      const { owner: threadOwner } = initialThreadData;

      // get thread owner score by matching the user id from leaderboards data
      const threadOwnerScore = leaderboardsData
        .find((data) => data.user.id === threadOwner.id)?.score;

      // get comment owners score by matching the user id from leaderboards data
      const threadComment = initialThreadData.comments.map((comment) => {
        const { owner: commentOwner } = comment;
        commentOwner.score = leaderboardsData
          .find((data) => data.user.id === comment.owner.id).score;
        return {
          ...comment,
          owner: commentOwner,
        };
      });

      // return the thread with the updated thread and comments owner score
      return {
        ...initialThreadData,
        owner: {
          ...initialThreadData.owner,
          score: threadOwnerScore ?? 0,
        },
        comments: threadComment,
      };
    };
    const thread = populatedDetailThread(detailThread, leaderboards);
    dispatch(receiveThreadDetailActionCreator(thread));
    dispatch(hideLoading());
  };
}

export function asyncAddCommentAction(payload, threadId) {
  return async (dispatch) => {
    dispatch(showLoading());
    await dispatch(asyncAddComment(payload, threadId));
    dispatch(asyncGetLeaderboard());
    dispatch(asyncPopulateDetailThread(threadId));
    dispatch(hideLoading());
  };
}
