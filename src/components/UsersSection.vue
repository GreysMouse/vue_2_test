<template>
  <section>
    <h1>Список пользователей</h1>
    <search-bar />
    <sorting-bar />
    <users-table />
  </section>
</template>

<script>
import SearchBar from "./SearchBar.vue";
import SortingBar from "./SortingBar.vue";
import UsersTable from "./UsersTable.vue";

export default {
  name: "UsersSection",
  components: {
    SearchBar,
    SortingBar,
    UsersTable,
  },
  created() {
    this.$store.dispatch("getUsers");
  },
};
</script>
