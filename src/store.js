import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";
const baseURL =
  process.env.NODE_ENV === "production"
    ? "http://taxi.inkoko.rw/"
    : "http://localhost/yego-api/index.php";
axios.defaults.baseURL = baseURL;
Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    status: "",
    token: localStorage.getItem("token") || "",
    user: {},
    isLoading: false,
    activeBtn: null,
    currentRow: null,
    toggled: false,
    offlineMode: false,
    drawerOpen: false,
    drawerBottomOpen: false,
    coords: {},
    pendingRequest: false,
    driver: JSON.parse(localStorage.getItem("driver")) || null,
    requestId: localStorage.getItem("requestId") || null,
  },
  mutations: {
    auth_request(state) {
      state.status = "loading";
      state.offlineMode = false;
    },
    auth_success(state, response) {
      state.status = "success";
      state.token = response.token;
      state.user = response.user;
    },
    offline_mode(state) {
      state.offlineMode = true;
    },
    logout(state) {
      state.status = "";
      state.token = "";
    },
    set_user(state, user) {
      state.user = user;
    },
    set_current_location(state, coords) {
      state.coords = { ...coords };
    },
    toggle_pending_request(state, bool) {
      state.pendingRequest = bool;
    },
    cancel_request(state) {
      state.driver = null;
      state.requestId = null;
      state.pendingRequest = false;
    },
  },
  actions: {
    togglePendingRequest({ commit }, playload) {
      return new Promise((resolve) => {
        localStorage.setItem("requestId", playload.data.requestId);
        localStorage.setItem("driver", JSON.stringify(playload.data.driver));
        commit("toggle_pending_request", playload.bool);
        resolve();
      });
    },
    cancelRequest({ commit }) {
      return new Promise((resolve) => {
        commit("cancel_request");
        localStorage.removeItem("driver");
        localStorage.removeItem("requestId");
        resolve();
      });
    },
    setUser({ commit }, user) {
      return new Promise((resolve) => {
        commit("set_user", user);
        resolve();
      });
    },
    setCurrentLocation({ commit }, coords) {
      return new Promise((resolve) => {
        commit("set_current_location", coords);
        resolve();
      });
    },
    authRequest({ commit }, dataParams) {
      return new Promise((resolve, reject) => {
        commit("auth_request");
        axios({
          url: dataParams.url,
          data: dataParams.formData,
          method: "POST",
        })
          .then((resp) => {
            const token = resp.data.token;
            if (token) {
              localStorage.removeItem("token");
              localStorage.setItem("token", token);
              axios.defaults.headers.common["Authorization"] = token;
              commit("auth_success", resp.data);
            }

            resolve(resp);
          })
          .catch((err) => {
            if (!err.response) {
              commit("offline_mode");
            }
            localStorage.removeItem("token");
            reject(err);
          });
      });
    },
    logUser({ commit }, user) {
      return new Promise((resolve, reject) => {
        commit("auth_request");
        axios
          .post("login", user)
          .then((resp) => {
            const token = resp.data.token;
            if (token) {
              localStorage.setItem("token", token);
              axios.defaults.headers.common["Authorization"] = token;
              commit("auth_success", resp.data);
            }
            resolve(resp);
          })
          .catch((err) => {
            if (!err.response) {
              commit("offline_mode");
            }
            localStorage.removeItem("token");
            reject(err);
          });
      });
    },
    logout({ commit }) {
      return new Promise((resolve) => {
        commit("logout");
        localStorage.removeItem("token");
        delete axios.defaults.headers.common["Authorization"];
        resolve();
      });
    },
    postRequest({ commit }, dataParams) {
      return new Promise((resolve, reject) => {
        const token = localStorage.getItem("token");
        if (token) {
          dataParams.formData.append("token", token);
        }
        commit("auth_request");
        axios
          .post(dataParams.url, dataParams.formData)
          .then((resp) => {
            if (resp.data.unauthorized) {
              this.dispatch("logout").then(() => {
                window.location.replace("/");
              });
            }
            resolve(resp);
          })
          .catch((err) => {
            if (!err.response) {
              commit("offline_mode");
            } else {
              if (err.response.status == 401) {
                this.dispatch("logout").then(() => {
                  window.location.replace("/");
                });
              }
            }
            reject(err);
          });
      });
    },
    getRequest({ commit }, getURL) {
      return new Promise((resolve, reject) => {
        commit("auth_request");
        const token = localStorage.getItem("token");
        var fd = new FormData();
        if (token) {
          fd.append("token", token);
        }
        axios
          .post(getURL, fd)
          .then((resp) => {
            if (resp.data.unauthorized) {
              this.dispatch("logout").then(() => {
                window.location.replace("/");
              });
            }
            resolve(resp);
          })
          .catch((err) => {
            if (!err.response) {
              commit("offline_mode");
            } else {
              if (err.response.status == 401) {
                this.dispatch("logout").then(() => {
                  window.location.replace("/");
                });
              }
            }
            reject(err);
          });
      });
    },
    handleNewRequest({ commit }, givenRequest) {
      return new Promise((resolve) => {
        localStorage.setItem("currentRequest", JSON.stringify(givenRequest));
        commit("request_confirmed", givenRequest);
        resolve();
      });
    },
  },
  getters: {
    isLoggedIn: (state) => !!state.token,
    authStatus: (state) => state.status,
    driver: (state) => state.driver,
    requestId: (state) => state.requestId,
    pendingRequest: (state) => state.pendingRequest,
    currentRequest: (state) => state.currentRequest,
  },
});
