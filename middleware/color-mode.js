import Vue from "vue";

export default ({ store, route, redirect }) => {
  // Check Switch Color Mode
  if (store.getters.getDarkMode === true) {
    Vue.$colorMode.preference = "dark";
  } else {
    Vue.$colorMode.preference = "light";
  }


};
