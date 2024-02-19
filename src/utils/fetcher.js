import axios from 'axios';

const baseUrl = 'https://forum-api.dicoding.dev/v1';

const fetcher = {
  getThreads: async () => axios(`${baseUrl}/threads`)
    .then((response) => response.data.data),
  getUsers: async () => axios(`${baseUrl}/users`)
    .then((response) => response.data.data),
  addThread: async (thread, token) => axios.post(`${baseUrl}/threads`, thread, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  })
    .then((response) => response.data.data),
  registerUser: async (user) => axios.post(`${baseUrl}/register`, user)
    .then((response) => response.data.data),
  login: async (user) => axios.post(`${baseUrl}/login`, user)
    .then((response) => response.data.data),
  getOwnProfile: async (token) => axios.get(`${baseUrl}/users/me`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  })
    .then((response) => response.data.data),
  getLeaderboard: async () => axios(`${baseUrl}/leaderboards`)
    .then((response) => response.data.data),
  getThreadDetail: async (threadId) => axios.get(`${baseUrl}/threads/${threadId}`)
    .then((response) => response.data.data),
  addComment: async (comment, threadId, token) => axios.post(`${baseUrl}/threads/${threadId}/comments`, comment, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  })
    .then((response) => response.data.data),
  upVoteThread: async (threadId, token) => axios.post(`${baseUrl}/threads/${threadId}/up-vote`, {}, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  })
    .then((response) => response.data.data),
  downVoteThread: async (threadId, token) => axios.post(`${baseUrl}/threads/${threadId}/down-vote`, {}, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  })
    .then((response) => response.data.data),
  removeVoteThread: async (threadId, token) => axios.post(`${baseUrl}/threads/${threadId}/neutral-vote`, {}, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  })
    .then((response) => response.data.data),
  upVoteComment: async (threadId, commentId, token) => axios.post(`${baseUrl}/threads/${threadId}/comments/${commentId}/up-vote`, {}, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  })
    .then((response) => response.data.data),
  downVoteComment: async (threadId, commentId, token) => axios.post(`${baseUrl}/threads/${threadId}/comments/${commentId}/down-vote`, {}, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  })
    .then((response) => response.data.data),
  removeVoteComment: async (threadId, commentId, token) => axios.post(`${baseUrl}/threads/${threadId}/comments/${commentId}/neutral-vote`, {}, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  })
    .then((response) => response.data.data),
};

export default fetcher;
