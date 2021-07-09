export default {
  requests(state, getters, rootState, rootGetters) {
    const coachId = rootGetters.userId;
    return state.requests.filter((req) => req.coachId === coachId); // return all requests received to loggedin User
  },
  hasRequests(_, getters) {
    return getters.requests && getters.requests.length > 0; // it yeilds true if satisfy the cond.
  },
};
