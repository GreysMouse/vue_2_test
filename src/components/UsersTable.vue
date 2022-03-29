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
        v-for="user in usersOnPage"
        :key="user.id"
        :user="user"
      />
    </tbody>
  </table>
</template>

<script>
import { USERS_TABLE_PAGINATION_STEP } from "@/config";
import UsersTableRow from "./UsersTableRow.vue";

export default {
  name: "UsersTable",
  components: {
    UsersTableRow,
  },
  computed: {
    inSearching() {
      return !!this.$store.state.users.searchQuery;
    },
    page() {
      return this.$store.state.users.tablePage;
    },
    users() {
      return this.inSearching
        ? this.$store.state.users.filteredUsers
        : this.$store.state.users.sortedUsers;
    },
    usersOnPage() {
      const sliceStart = (this.page - 1) * USERS_TABLE_PAGINATION_STEP;
      const sliceEnd = this.page * USERS_TABLE_PAGINATION_STEP;

      return this.users.slice(sliceStart, sliceEnd);
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
