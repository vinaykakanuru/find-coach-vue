export default {
  async registerCoach(context, data) {
    const userId = context.rootGetters.userId;
    const coachData = {
      firstName: data.first,
      lastName: data.last,
      description: data.desc,
      hourlyRate: data.rate,
      areas: data.areas,
      image: data.image,
    };

    const token = context.rootGetters.token;

    console.log("Token #coaches/action.js:: " + token);
    console.log("CoachData #coaches/action.js:: " + coachData.image.name);

    const response = await fetch(
      `https://vue-test-632d4-default-rtdb.firebaseio.com/coaches/${userId}.json?auth=` +
        token,
      {
        method: "PUT",
        body: JSON.stringify(coachData),
      }
    );

    const responseData = await response.json();
    console.log(
      "Response after registering the coach #coaches/actions.js:: ",
      responseData
    );

    if (!response.ok) {
      // error ...
    }

    context.commit("registerCoach", {
      ...coachData,
      id: userId,
    });
  },
  async loadCoaches(context, payload) {
    if (!payload.forceRefresh && !context.getters.shouldUpdate) {
      return;
    }

    const response = await fetch(
      `https://vue-test-632d4-default-rtdb.firebaseio.com/coaches.json`
    );

    const responseData = await response.json();

    if (!response.ok) {
      const error = new Error(
        responseData.message || "Failed to fetch data..!"
      );
      throw error;
    }

    const coaches = [];

    for (const key in responseData) {
      const coach = {
        id: key,
        firstName: responseData[key].firstName,
        lastName: responseData[key].lastName,
        description: responseData[key].description,
        hourlyRate: responseData[key].hourlyRate,
        areas: responseData[key].areas,
        image: responseData[key].image,
      };
      coaches.push(coach);
    }
    console.log("from loadcoaches:: " + coaches[0]);
    context.commit("setCoaches", coaches);
    context.commit("setFetchTimestamp");
  },
};
