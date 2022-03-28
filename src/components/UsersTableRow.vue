<template>
  <tr>
    <td class="field">{{ user.username }}</td>
    <td class="field">{{ user.email }}</td>
    <td class="field">{{ registerDate }}</td>
    <td class="field">{{ user.rating }}</td>
    <button>Удалить</button>
  </tr>
</template>

<script>
export default {
  name: "UsersTableRow",
  props: {
    user: {
      type: Object,
      required: true,
    },
  },
  computed: {
    registerDate() {
      const date = new Date(this.user.registration_date);

      const DD = ("0" + date.getDate()).slice(-2);
      const MM = ("0" + date.getMonth()).slice(-2);
      const YY = ("0" + date.getFullYear()).slice(-2);

      return DD + "." + MM + "." + YY;
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
