export default {
  conactCoach(context, payload) {
    const newRequest = {
      id: new Date().toISOString(),
      coachId: payload.coachId,
      userEmail: payload.email,
      message: payload.message,
    };
    context.commit("addRequest", newRequest); //addRequest from mutations.js
  },
};
