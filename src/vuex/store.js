import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex);

let store = new Vuex.Store({
  state: {
    pages: [],
    search: "",
    lastPageStatus: "",
    nextPage: 1,
  },
  mutations: {
    SET_PAGES_TO_STATE: (state, { data, status }) => {
      state.pages.push(data);
      state.lastPageStatus = status;
      console.log(state.pages);
    },

    SET_ERROR_STATUS: (state, status) => {
      state.lastPageStatus = status;
    },

    SET_NEXT_PAGE: (state, number) => {
      state.nextPage = number;
    },

    SEARCHFOR(state, text) {
      state.search = text;
    },
  },
  actions: {
    GET_PAGES({ commit }, { url, index }) {
      return axios(`${url}${index}`, {
        method: "GET",
      })
        .then((page) => {
          commit("SET_PAGES_TO_STATE", {
            data: page.data,
            status: page.status,
          });
          commit("SET_NEXT_PAGE", page.data.page + 1);
          return page;
        })
        .catch((error) => {
          if (error.response) {
            console.log(
              "ошибка при получении данных, статус:",
              error.response.status
            );
            commit("SET_ERROR_STATUS", error.response.status);
          } else {
            console.log("ошибка при получении данных, без статуса");
            commit("SET_ERROR_STATUS", "error");
          }
          return error;
        });
    },
    SEARCH_NAME({ commit }, text) {
      commit("SEARCHFOR", text);
    },
  },
  getters: {
    PAGES(state) {
      return state.pages;
    },
    // Чтобы записи из страниц выводить в каталоге последовательно друг за другом
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
