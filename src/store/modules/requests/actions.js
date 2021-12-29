export default {
  async conactCoach(context, payload) {
    const newRequest = {
      email: payload.email,
      message: payload.message,
      coach: payload.coachId,
    };

    const response = await fetch(
      // `https://vue-test-632d4-default-rtdb.firebaseio.com/requests/${payload.coachId}.json`,
      `http://127.0.0.1:8000/api/contact/`,
      {
        method: "POST",
        body: JSON.stringify(newRequest),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    const responseData = await response.json();

    if (!response.ok) {
      const error = new Error(
        responseData.message || "Failed to Send request..!"
      );
      throw error;
    }

    newRequest.id = responseData.name;
    newRequest.coachId = payload.coachId;

    context.commit("addRequest", newRequest); //addRequest from mutations.js
  },

  async fetchRequests(context) {
    const coachId = context.rootGetters.userId;
    const token = context.rootGetters.token;
    const response = await fetch(
      // `https://vue-test-632d4-default-rtdb.firebaseio.com/requests/${coachId}.json?auth=` + token
      `http://127.0.0.1:8000/api/requests/`,
      {
        method: "GET",
        headers: {
          Authorization: "Bearer " + token,
        },
      }
    );
    const responseData = await response.json();

    if (!response.ok) {
      const error = new Error(
        responseData.message +
          " As You are not a registered coach you cannot have any requests" ||
          "Failed to Send request..!"
      );
      throw error;
    }
    const requests = [];
    for (const key in responseData["requests"]) {
      const request = {
        id: key,
        coachId: coachId,
        userEmail: responseData["requests"][key].email,
        message: responseData["requests"][key].message,
      };
      requests.push(request);
    }
    context.commit("setRequests", requests);
  },
};
