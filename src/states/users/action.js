import { hideLoading, showLoading } from 'react-redux-loading-bar';
import toast from 'react-hot-toast';
import fetchers from '../../utils/fetcher';

const ActionType = {
  RECEIVE_USERS: 'users/receive',
};

function receiveUsersActionCreator(users) {
  return {
    type: ActionType.RECEIVE_USERS,
    payload: {
      users,
    },
  };
}

function asyncRegisterUser({ name, email, password }, redirect) {
  return async (dispatch) => {
    dispatch(showLoading());
    try {
      await fetchers.registerUser({ name, email, password })
        .then((response) => {
          if (!response) {
            toast.error('failed when register user');
            return;
          }
          toast.success('User registered successfully');
          redirect('/auth/login');
        });
    } catch (error) {
      const { response } = error;
      toast.error(`failed when register user: ${response.data.message}`);
    }
    dispatch(hideLoading());
  };
}

export {
  ActionType,
  receiveUsersActionCreator,
  asyncRegisterUser,
};
