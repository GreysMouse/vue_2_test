import Vue from "vue";
import Vuex from "vuex";
import { usersModule } from "./usersModule";
// import { SORTING_ORDERS, SORTING_TYPES } from "../constants";
// import { usersAPI } from "../utils/APIs/usersAPI";
// import { getSortedUsers } from "../utils/features/getSortedUsers";

Vue.use(Vuex);
Vue.config.devtools = true;

export default new Vuex.Store({
  modules: {
    users: usersModule,
  },
});
