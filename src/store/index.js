import Vue from "vue";
import Vuex from "vuex";
import { usersModule } from "./usersModule";

Vue.use(Vuex);
Vue.config.devtools = true;

export default new Vuex.Store({
  strict: true,
  modules: {
    users: usersModule,
  },
});
