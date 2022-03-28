<template>
  <div class="container">
    <form class="form" @submit.prevent="submitSearch">
      <button class="search-button" type="submit">Поиск</button>
      <input
        class="search-input"
        v-model="searchQuery"
        placeholder="Поиск по имени или e-mail"
      />
    </form>
    <button class="clear-button">Очистить фильтр</button>
  </div>
</template>

<script>
export default {
  name: "SearchBar",
  data() {
    return {
      searchQuery: "",
    };
  },
  methods: {
    submitSearch() {
      this.$store.commit({
        type: "searchUsers",
        searchQuery: this.searchQuery,
      });
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
