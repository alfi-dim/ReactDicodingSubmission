import { hideLoading, showLoading } from 'react-redux-loading-bar';
import toast from 'react-hot-toast';
import fetcher from '../../utils/fetcher';

const ActionType = {
  RECEIVE_LEADERBOARD: 'RECEIVE_LEADERBOARD',
};

function receiveLeaderboardActionCreator(leaderboard) {
  return {
    type: ActionType.RECEIVE_LEADERBOARD,
    payload: {
      leaderboard,
    },
  };
}

function asyncGetLeaderboard() {
  return async (dispatch) => {
    dispatch(showLoading());
    try {
      const { leaderboards } = await fetcher.getLeaderboard();
      dispatch(receiveLeaderboardActionCreator(leaderboards));
    } catch (error) {
      toast.error(`failed when get leaderboard: ${error}`);
    }
    dispatch(hideLoading());
  };
}

export {
  ActionType,
  asyncGetLeaderboard,
};
