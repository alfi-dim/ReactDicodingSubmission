import { ActionType } from './action';

export default function leaderboardReducer(state = [], action = {}) {
  switch (action.type) {
    case ActionType.RECEIVE_LEADERBOARD:
      return action.payload.leaderboard;
    default:
      return state;
  }
}
