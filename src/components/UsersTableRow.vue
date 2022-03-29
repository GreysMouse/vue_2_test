<template>
  <tr>
    <td class="field">{{ user.username }}</td>
    <td class="field">{{ user.email }}</td>
    <td class="field">{{ registrationDate }}</td>
    <td class="field">{{ user.rating }}</td>
    <button @click="handleUserDelete">Удалить</button>
  </tr>
</template>

<script>
import { getDateFromISO } from "../utils/methods/getDateFromISO";

export default {
  name: "UsersTableRow",
  props: {
    user: {
      type: Object,
      required: true,
    },
  },
  computed: {
    registrationDate() {
      return getDateFromISO(this.user.registration_date);
    },
  },
  methods: {
    handleUserDelete() {
      this.$store.commit({
        type: "deleteUser",
        userId: this.user.id,
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
