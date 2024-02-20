import { ActionType, VoteType } from './action';
import { handleDownVoteReducer, handleNeutralVoteReducer, handleUpVoteReducer } from '../../utils/index';

export default function threadDetailReducer(threadDetail = {}, action = {}) {
  switch (action.type) {
    case ActionType.RECEIVE_THREAD_DETAIL:
      return action.payload.threadDetail;
    case ActionType.ADD_COMMENT:
      if (threadDetail.id !== action.payload.threadId) {
        return threadDetail;
      }
      return {
        ...threadDetail,
        comments: [action.payload.comment, ...threadDetail.comments],
      };
    case ActionType.TOGGLE_LIKE_THREAD:
      if (threadDetail.id !== action.payload.threadId) {
        return threadDetail;
      }
      switch (action.payload.voteType) {
        case VoteType.UP:
          return handleUpVoteReducer(threadDetail, action.payload.userId);
        case VoteType.DOWN:
          return handleDownVoteReducer(threadDetail, action.payload.userId);
        case VoteType.NEUTRAL:
          return handleNeutralVoteReducer(threadDetail, action.payload.userId);
        default:
          return threadDetail;
      }
    case ActionType.TOGGLE_LIKE_COMMENT:
      if (threadDetail.id !== action.payload.threadId) {
        return threadDetail;
      }

      return {
        ...threadDetail,
        comments: threadDetail.comments.map((comment) => {
          if (comment.id !== action.payload.commentId) {
            return comment;
          }

          switch (action.payload.voteType) {
            case VoteType.UP:
              return handleUpVoteReducer(comment, action.payload.userId);
            case VoteType.DOWN:
              return handleDownVoteReducer(comment, action.payload.userId);
            case VoteType.NEUTRAL:
              return handleNeutralVoteReducer(comment, action.payload.userId);
            default:
              return comment;
          }
        }),
      };
    default:
      return threadDetail;
  }
}
