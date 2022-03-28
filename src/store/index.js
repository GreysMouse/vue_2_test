import Vue from "vue";
import Vuex from "vuex";
import { SORTING_ORDERS, SORTING_TYPES } from "../constants";
import { usersAPI } from "../utils/APIs/usersAPI";
import { getSortedUsers } from "../utils/features/getSortedUsers";

Vue.use(Vuex);
Vue.config.devtools = true;

export default new Vuex.Store({
  state: {
    initialUsers: [],
    sortedUsers: [],
    filteredUsers: [],
    sorting: {
      type: SORTING_TYPES.NONE,
      order: SORTING_ORDERS.NONE,
    },
  },
  getters: {},
  mutations: {
    getUsers(state) {
      usersAPI
        .getUsers()
        .then((users) => {
          state.initialUsers = users;
          state.sortedUsers = users;
        })
        .catch((err) => console.log(err));
    },
    searchUsers(state, payload) {
      const formattedQuery = payload.searchQuery.toLowerCase();

      state.filteredUsers = state.initialUsers.filter((user) => {
        const name = user.username.toLowerCase();
        const email = user.email.toLowerCase();

        return (
          name.indexOf(formattedQuery) !== -1 ||
          email.indexOf(formattedQuery) !== -1
        );
      });
    },
    sortUsers(state, payload) {
      state.sortedUsers = getSortedUsers(state.initialUsers, payload.sorting);
      console.log("here");
      state.filteredUsers = getSortedUsers(
        state.filteredUsers,
        payload.sorting
      );
    },
    setSorting(state, payload) {
      state.sorting = payload.sorting;
    },
  },
  actions: {
    getUsers(context) {
      context.commit({ type: "getUsers" });
    },
  },
  modules: {},
});
