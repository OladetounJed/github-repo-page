import { JSONParse } from "../common/utils";

export const state = () => ({
  darkMode: localStorage.getItem("nuxt-color-mode") || null,
  userObject: JSONParse(localStorage.getItem("userObject", null))
});

export const getters = {
  getDarkMode: state => {
    return state.darkMode;
  },
  getUserObject: state => {
    return state.userObject || JSON.parse(localStorage.userObject);
  }
};

export const mutations = {
  switchColorMode: (state, payload) => {
    if (payload === true) {
      state.darkMode = "dark";
      localStorage.setItem("nuxt-color-mode", "dark");
    } else {
      state.darkMode = "light";
      localStorage.setItem("nuxt-color-mode", "light");
    }
  },
  updateUserObject: (state, payload) => {
    localStorage.setItem("userObject", JSON.stringify(payload));
    state.userObject = payload;
  }
};
export const actions = {
  getUserProfile( context , payload) {
    return new Promise((resolve, reject) => {
      this.$axios
        .$get(`/users/oladetounjed`)
        .then(response => {
          resolve(response);
          context.commit("updateUserObject", response);
        })
        .catch(error => {
          reject(error);
        });
    });
  },
  getUserRepositories(commit , payload) {
    return new Promise((resolve, reject) => {
      this.$axios
        .$get(`/users/oladetounjed/repos`)
        .then((response, headers) => {
          resolve(response);
        
        })
        .catch(error => {
          reject(error);
        });
    });
  },
  searchUserRepositories(commit , payload) {
    return new Promise((resolve, reject) => {
      this.$axios
        .$get(`/search/repositories?q=${payload}user:oladetounjed`)
        .then((response, headers) => {
          resolve(response);
       
        })
        .catch(error => {
          reject(error);
        });
    });
  },

};
