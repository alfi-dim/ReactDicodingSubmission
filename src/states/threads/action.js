import { hideLoading, showLoading } from 'react-redux-loading-bar';
import toast from 'react-hot-toast';
import fetcher from '../../utils/fetcher';
import { getTokenFromLocalStorage } from '../../utils/index';

const ActionType = {
  RECEIVE_THREADS: 'RECEIVE_THREADS',
  ADD_THREAD: 'ADD_THREAD',
  ADD_COMMENT: 'ADD_COMMENT',
};

function receiveThreadsActionCreator(threads) {
  return {
    type: ActionType.RECEIVE_THREADS,
    payload: {
      threads,
    },
  };
}

function addThreadActionCreator(thread) {
  return {
    type: ActionType.ADD_THREAD,
    payload: {
      thread,
    },
  };
}

function asyncAddComment(body, threadId) {
  return async (dispatch) => {
    dispatch(showLoading());
    const token = getTokenFromLocalStorage();
    await fetcher.addComment(body, threadId, token)
      .then(() => {
        toast.success('Comment added');
      })
      .catch((error) => {
        toast.error(error.message);
      });
    dispatch(hideLoading());
  };
}

function asyncAddThread(payload, redirect) {
  return async (dispatch) => {
    dispatch(showLoading());
    const token = getTokenFromLocalStorage();
    await fetcher.addThread(payload, token)
      .then((res) => {
        const { thread } = res;
        redirect(`/home/thread/${thread.id}`);
        dispatch(addThreadActionCreator(res));
        toast.success('Thread added');
      })
      .catch((error) => {
        toast.error(error.message);
      });
    dispatch(hideLoading());
  };
}

export {
  ActionType,
  receiveThreadsActionCreator,
  addThreadActionCreator,
  asyncAddThread,
  asyncAddComment,
};
