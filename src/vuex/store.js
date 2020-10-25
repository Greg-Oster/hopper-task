import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex);

let store = new Vuex.Store({
  state: {
    pages: [],
  },
  mutations: {
    SET_PAGES_TO_STATE: (state, page) => {
      state.pages.push(page);
    },
  },
  actions: {
    GET_PAGES({ commit }, index) {
      return axios(`http://localhost:3000/pages/${index}`, {
        method: "GET",
      })
        .then((page) => {
          commit("SET_PAGES_TO_STATE", page.data);
          return page;
        })
        .catch((error) => {
          console.log(error);
          return error;
        });
    },
  },
  getters: {
    PAGES(state) {
      return state.pages;
    },
    INLINEPOSTS(state) {
      let inlineContent = [];

      state.pages.forEach((element) => {
        element.content.forEach((item) => {
          inlineContent.push(item);
        });
      });

      return inlineContent;
    },
  },
});

export default store;
