import { hideLoading, showLoading } from 'react-redux-loading-bar';
import toast from 'react-hot-toast';
import { getTokenFromLocalStorage } from '../../utils/index';
import fetcher from '../../utils/fetcher';

const ActionType = {
  RECEIVE_THREAD_DETAIL: 'threadDetail/receive',
  TOGGLE_LIKE_THREAD: 'threadDetail/toggleLikeThread',
  TOGGLE_LIKE_COMMENT: 'threadDetail/toggleLikeComment',
};

const VoteType = {
  UP: 'up',
  DOWN: 'down',
  NEUTRAL: 'neutral',
};

function receiveThreadDetailActionCreator(threadDetail) {
  return {
    type: ActionType.RECEIVE_THREAD_DETAIL,
    payload: {
      threadDetail,
    },
  };
}

function toggleVoteThreadActionCreator(threadId, userId, voteType) {
  return {
    type: ActionType.TOGGLE_LIKE_THREAD,
    payload: {
      threadId,
      userId,
      voteType,
    },
  };
}

function toggleVoteCommentActionCreator(threadId, commentId, userId, voteType) {
  return {
    type: ActionType.TOGGLE_LIKE_COMMENT,
    payload: {
      threadId,
      commentId,
      userId,
      voteType,
    },
  };
}

function asyncToggleVoteThread(threadId, voteType) {
  return async (dispatch, getState) => {
    dispatch(showLoading());
    const { authUser } = getState();
    const token = getTokenFromLocalStorage();

    dispatch(toggleVoteThreadActionCreator(threadId, authUser.id, voteType));
    if (voteType === VoteType.UP) {
      await fetcher.upVoteThread(threadId, token)
        .then(() => {
          toast.success('Upvoted');
        })
        .catch((error) => {
          toast.error(error.message);
        });
    }
    if (voteType === VoteType.DOWN) {
      await fetcher.downVoteThread(threadId, token)
        .then(() => {
          toast.success('Downvoted');
        })
        .catch((error) => {
          toast.error(error.message);
        });
    }
    if (voteType === VoteType.NEUTRAL) {
      await fetcher.removeVoteThread(threadId, token)
        .then(() => {
          toast.success('Vote removed');
        })
        .catch((error) => {
          toast.error(error.message);
        });
    }
    dispatch(hideLoading());
  };
}

function asyncToggleVoteComment(threadId, commentId, voteType) {
  return async (dispatch, getState) => {
    dispatch(showLoading());
    const { authUser } = getState();
    const token = getTokenFromLocalStorage();

    dispatch(toggleVoteCommentActionCreator(threadId, commentId, authUser.id, voteType));
    if (voteType === VoteType.UP) {
      await fetcher.upVoteComment(threadId, commentId, token)
        .then(() => {
          toast.success('Comment Upvoted');
        })
        .catch((error) => {
          toast.error(error.message);
        });
    }
    if (voteType === VoteType.DOWN) {
      await fetcher.downVoteComment(threadId, commentId, token)
        .then(() => {
          toast.success('Comment Downvoted');
        })
        .catch((error) => {
          toast.error(error.message);
        });
    }
    if (voteType === VoteType.NEUTRAL) {
      await fetcher.removeVoteComment(threadId, commentId, token)
        .then(() => {
          toast.success('Comment Vote removed');
        })
        .catch((error) => {
          toast.error(error.message);
        });
    }
    dispatch(hideLoading());
  };
}

export {
  ActionType,
  VoteType,
  receiveThreadDetailActionCreator,
  asyncToggleVoteThread,
  toggleVoteThreadActionCreator,
  asyncToggleVoteComment,
  toggleVoteCommentActionCreator,
};
