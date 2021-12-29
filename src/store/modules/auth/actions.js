let timer;

export default {
  async login(context, payload) {
    return context.dispatch("auth", {
      ...payload,
      mode: "login",
    });
  },
  async signup(context, payload) {
    return context.dispatch("auth", {
      ...payload,
      mode: "signup",
    });
  },
  async auth(context, payload) {
    const mode = payload.mode;

    // let url = `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${process.env.VUE_APP_API_KEY}`;
    let url = `http://127.0.0.1:8000/api/login/`;
    if (mode === "signup") {
      // url = `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${process.env.VUE_APP_API_KEY}`;
      url = `http://127.0.0.1:8000/api/register_user/`;
    }

    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=UTF-8",
      },
      body: JSON.stringify({
        email: payload.email,
        password: payload.password,
        returnSecureToken: true,
      }),
    });

    const responseData = await response.json();

    if (!response.ok) {
      const error = new Error(responseData.detail || "Failed to authenticate");
      throw error;
    }

    const expiresIn = +responseData.expiresIn * 1000;
    // const expiresIn = 5000;
    const expirationDate = new Date().getTime() + expiresIn;

    localStorage.setItem("token", responseData.access);
    localStorage.setItem("userId", responseData.user_id);
    localStorage.setItem("tokenExpiration", expirationDate);

    timer = setTimeout(function () {
      context.dispatch("setAutoLogout");
    }, expiresIn);

    context.commit("setUser", {
      token: responseData.access,
      userId: responseData.user_id,
    });
  },
  tryLogin(context) {
    const token = localStorage.getItem("token");
    const userId = localStorage.getItem("userId");
    const tokenExpiration = localStorage.getItem("tokenExpiration");

    const expiresIn = +tokenExpiration - new Date().getTime();

    if (expiresIn < 0) {
      return;
    }

    timer = setTimeout(function () {
      context.dispatch("setAutoLogout");
    }, expiresIn);

    if (token && userId) {
      context.commit("setUser", {
        token: token,
        userId: userId,
      });
    }
  },
  logout(context) {
    localStorage.removeItem("token");
    localStorage.removeItem("userId");
    localStorage.removeItem("tokenExpiration");

    clearTimeout(timer);

    context.commit("setUser", {
      userId: null,
      token: null,
    });
  },
  addLogout(context) {
    context.dispatch("logout");
    context.commit("setAutoLogout");
  },
};
