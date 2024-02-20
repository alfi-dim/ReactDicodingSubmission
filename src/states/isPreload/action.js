import { hideLoading, showLoading } from 'react-redux-loading-bar';
import { setAuthUserActionCreator } from '../auth/action';
import fetcher from '../../utils/fetcher';
import { getTokenFromLocalStorage } from '../../utils/index';

const ActionType = {
  SET_IS_PRELOAD: 'preload/set',
};

function setIsPreloadActionCreator(isPreload) {
  return {
    type: ActionType.SET_IS_PRELOAD,
    payload: {
      isPreload,
    },
  };
}

function asyncPreloadProcess() {
  return async (dispatch) => {
    dispatch(showLoading());
    try {
      // preload process
      const token = getTokenFromLocalStorage();
      const { user } = await fetcher.getOwnProfile(token);
      dispatch(setAuthUserActionCreator(user));
    } catch (error) {
      // fallback process
      dispatch(setAuthUserActionCreator(null));
    } finally {
      // end preload process
      dispatch(setIsPreloadActionCreator(false));
    }

    dispatch(hideLoading());
  };
}

export {
  ActionType,
  setIsPreloadActionCreator,
  asyncPreloadProcess,
};
