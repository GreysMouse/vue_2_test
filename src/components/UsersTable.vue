<template>
  <table class="table">
    <caption class="caption">
      Список пользователей
    </caption>
    <thead>
      <tr>
        <th class="field">Имя пользователя</th>
        <th class="field">E-mail</th>
        <th class="field">Дата регистрации</th>
        <th class="field">Рейтинг</th>
      </tr>
    </thead>
    <tbody>
      <users-table-row
        v-for="user in displayedUsers"
        :key="user.id"
        :user="user"
      />
    </tbody>
  </table>
</template>

<script>
import UsersTableRow from "./UsersTableRow.vue";

export default {
  name: "UsersTable",
  components: {
    UsersTableRow,
  },
  computed: {
    displayedUsers() {
      return this.filteredUsers.length ? this.filteredUsers : this.sortedUsers;
    },
    sortedUsers() {
      return this.$store.state.sortedUsers;
    },
    filteredUsers() {
      return this.$store.state.filteredUsers;
    },
  },
};
</script>

<style scoped>
.table {
  width: 100%;
}

.caption {
  display: none;
}

.field {
  text-align: left;
  padding: 10px 0;
}
</style>
