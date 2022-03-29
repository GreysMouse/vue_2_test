import { USERS_TABLE_PAGINATION_STEP } from "../config";
import { SORTING_ORDERS, SORTING_TYPES } from "../constants";
import { usersAPI } from "../utils/APIs/usersAPI";
import { getSortedUsers } from "../utils/features/getSortedUsers";
import { getUsersTablePagesCount } from "../utils/features/getTablePagesCount";

export const usersModule = {
  state() {
    return {
      initialUsers: [],
      sortedUsers: [],
      filteredUsers: [],
      searchQuery: "",
      sorting: {
        type: SORTING_TYPES.NONE,
        order: SORTING_ORDERS.NONE,
      },
      tablePage: 1,
    };
  },
  getters: {
    tablePagesCount(state) {
      return getUsersTablePagesCount(
        state.searchQuery.length
          ? state.filteredUsers.length
          : state.initialUsers.length,
        USERS_TABLE_PAGINATION_STEP
      );
    },
  },
  mutations: {
    getUsers(state) {
      usersAPI
        .getUsers()
        .then((users) => {
          state.initialUsers = [...users];
          state.sortedUsers = [...users];
        })
        .catch((err) => console.log(err));
    },
    searchUsers(state, payload) {
      const formattedSearchQuery = payload.searchQuery.trim().toLowerCase();

      state.filteredUsers = state.sortedUsers.filter((user) => {
        const name = user.username.toLowerCase();
        const email = user.email.toLowerCase();

        return (
          name.indexOf(formattedSearchQuery) !== -1 ||
          email.indexOf(formattedSearchQuery) !== -1
        );
      });

      state.tablePage = 1;
    },
    sortUsers(state, payload) {
      state.sortedUsers = getSortedUsers(
        [...state.initialUsers],
        payload.sorting
      );

      this.commit({
        type: "searchUsers",
        searchQuery: state.searchQuery,
      });
    },
    deleteUser(state, payload) {
      state.initialUsers = state.initialUsers.filter(
        (user) => user.id !== payload.userId
      );
      state.sortedUsers = state.sortedUsers.filter(
        (user) => user.id !== payload.userId
      );
      state.filteredUsers = state.filteredUsers.filter(
        (user) => user.id !== payload.userId
      );
    },
    setSearchQuery(state, payload) {
      state.searchQuery = payload.searchQuery;
    },
    setSorting(state, payload) {
      state.sorting = payload.sorting;
    },
    clearFilters(state) {
      state.searchQuery = "";
      state.sorting = {
        type: SORTING_TYPES.NONE,
        order: SORTING_ORDERS.NONE,
      };
      state.filteredUsers = [];
      state.sortedUsers = [...state.initialUsers];
    },
    setTablePage(state, payload) {
      state.tablePage = payload.page;
    },
  },
  actions: {
    getUsers(context) {
      context.commit({ type: "getUsers" });
    },
  },
};
