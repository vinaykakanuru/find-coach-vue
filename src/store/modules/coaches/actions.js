export default {
  async registerCoach(context, data) {
    const userId = context.rootGetters.userId;
    const coachData = {
      firstName: data.first,
      lastName: data.last,
      description: data.desc,
      hourlyRate: data.rate,
      areas: data.areas,
      experience: data.experience,
      image: data.image,
    };

    const token = context.rootGetters.token;

    const response = await fetch(
      `https://vue-test-632d4-default-rtdb.firebaseio.com/coaches/${userId}.json?auth=` +
        token,
      {
        method: "PUT",
        body: JSON.stringify(coachData),
      }
    );

    // const responseData = await response.json();

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
      // `https://vue-test-632d4-default-rtdb.firebaseio.com/coaches.json`
      `http://127.0.0.1:8000/api/coaches/`
    );

    const responseData = await response.json();

    if (!response.ok) {
      const error = new Error(
        responseData.message || "Failed to fetch data..!"
      );
      throw error;
    }

    const coaches = [];

    // for (const key in responseData) {
    //   const coach = {
    //     id: key,
    //     firstName: responseData[key].firstName,
    //     lastName: responseData[key].lastName,
    //     description: responseData[key].description,
    //     hourlyRate: responseData[key].hourlyRate,
    //     areas: responseData[key].areas,
    //     experience: responseData[key].experience,
    //     // image: responseData[key].image,
    //   };
    //   coaches.push(coach);
    // }

    for (const key in responseData["coaches"]) {
      const coach = {
        id: responseData["coaches"][key].id,
        firstName: responseData["coaches"][key].first_name,
        lastName: responseData["coaches"][key].last_name,
        description: responseData["coaches"][key].description,
        hourlyRate: responseData["coaches"][key].hourly_rate,
        areas: responseData["coaches"][key].area_of_expertise,
        experience: responseData["coaches"][key].experience,
        // image: responseData[key].image,
      };
      coaches.push(coach);
    }

    context.commit("setCoaches", coaches);
    context.commit("setFetchTimestamp");
  },
};
