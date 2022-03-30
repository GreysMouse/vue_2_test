<template>
  <div class="container">
    <form class="form" @submit.prevent="handleSearchSubmit">
      <button class="search-button" type="submit">Поиск</button>
      <input
        class="search-input"
        v-model="searchQuery"
        placeholder="Поиск по имени или e-mail"
      />
    </form>
    <button class="clear-button" @click="handleFiltersClear">
      Очистить фильтр
    </button>
  </div>
</template>

<script>
export default {
  name: "UsersSectionSearchBar",
  data() {
    return {
      searchQuery: "",
    };
  },
  methods: {
    handleSearchSubmit() {
      this.$store.commit({
        type: "searchUsers",
        searchQuery: this.searchQuery,
      });

      this.$store.commit({
        type: "setSearchQuery",
        searchQuery: this.searchQuery,
      });
    },
    handleFiltersClear() {
      this.$store.commit({ type: "clearFilters" });
    },
  },
};
</script>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  margin: 50px 0 50px 0;
}

.form {
  display: flex;
}

.search-input {
  width: 100%;
}

.clear-button {
  margin-right: auto;
}
</style>
