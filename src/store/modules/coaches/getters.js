export default {
  coaches(state) {
    return state.coaches;
  },
  hasCoaches(state) {
    return state.coaches && state.coaches.length > 0;
  },
  isCoach(_, getters, _2, rootGetters) {
    const coaches = getters.coaches;
    const userId = rootGetters.userId; // fetching userID from rootGetters i.e from main index.js
    return coaches.some((coach) => coach.id === userId); // not a good solution, instead maintain a state userIsCoach as T/F once user signedUp.
  },
};
