import { USERS_TABLE_PAGINATION_STEP, USER_DATA } from "../config";
import { SORTING_ORDERS, SORTING_TYPES } from "../constants";
import { usersAPI } from "../utils/APIs/usersAPI";
import { getSortedUsers } from "../utils/features/getSortedUsers";
import { getUsersTablePagesCount } from "../utils/features/getUsersTablePagesCount";
import { normalizeUser } from "../utils/features/normalizeUser";

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
    isSearching(state) {
      return !!state.searchQuery;
    },
  },
  mutations: {
    getUsers(state) {
      usersAPI
        .getUsers()
        .then((users) => {
          for (let user of users) {
            state.initialUsers.push(normalizeUser(user));
            state.sortedUsers.push(normalizeUser(user));
          }
        })
        .catch((err) => console.log(err));
    },
    searchUsers(state, payload) {
      const formattedSearchQuery = payload.searchQuery.trim().toLowerCase();

      state.filteredUsers = state.sortedUsers.filter((user) => {
        const name = user[USER_DATA.NAME].toLowerCase();
        const email = user[USER_DATA.EMAIL].toLowerCase();

        return (
          name.indexOf(formattedSearchQuery) !== -1 ||
          email.indexOf(formattedSearchQuery) !== -1
        );
      });
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
        (user) => user[USER_DATA.ID] !== payload.userId
      );
      state.sortedUsers = state.sortedUsers.filter(
        (user) => user[USER_DATA.ID] !== payload.userId
      );
      state.filteredUsers = state.filteredUsers.filter(
        (user) => user[USER_DATA.ID] !== payload.userId
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
