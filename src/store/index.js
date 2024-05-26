import Vue from "vue";
import Vuex from "vuex";
import credentials from "./credentials/credentials.js";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {},
  getters: {},
  mutations: {},
  actions: {},
  modules: {
    credentials
  },
});
