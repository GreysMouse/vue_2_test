<template>
  <tr>
    <td class="field">{{ userData.name }}</td>
    <td class="field">{{ userData.email }}</td>
    <td class="field">{{ userData.registerDate }}</td>
    <td class="field">{{ userData.rating }}</td>
    <button @click="handleUserDelete">Удалить</button>
  </tr>
</template>

<script>
import { USER_DATA } from "../config";
import { getDateFromISO } from "../utils/methods/getDateFromISO";

export default {
  name: "UsersSectionTableRow",
  props: {
    user: {
      type: Object,
      required: true,
    },
  },
  computed: {
    userData() {
      return {
        id: this.user[USER_DATA.ID],
        name: this.user[USER_DATA.NAME],
        email: this.user[USER_DATA.EMAIL],
        registerDate: getDateFromISO(this.user[USER_DATA.REGISTER_DATE]),
        rating: this.user[USER_DATA.RATING],
      };
    },
  },
  methods: {
    handleUserDelete() {
      this.$store.commit({
        type: "deleteUser",
        userId: this.userData.id,
      });
    },
  },
};
</script>

<style scoped>
.field {
  padding: 6px 0;
  text-align: left;
}
</style>
