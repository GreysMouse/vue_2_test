<template>
  <ul class="container">
    <li v-for="page in pagesCount" :key="page">
      <button
        class="button"
        :class="{ button_active: currentPage === page }"
        @click="handlePageSwitching(page)"
      >
        {{ page }}
      </button>
    </li>
  </ul>
</template>

<script>
export default {
  name: "UsersSectionPagesBar",
  computed: {
    pagesCount() {
      return this.$store.getters.tablePagesCount;
    },
    currentPage() {
      return this.$store.state.users.tablePage;
    },
    isSearching() {
      return this.$store.getters.isSearching;
    },
  },
  methods: {
    handlePageSwitching(targetPage) {
      this.$store.commit({
        type: "setTablePage",
        page: targetPage,
      });
    },
  },
  watch: {
    pagesCount(value) {
      if (this.currentPage > value) this.handlePageSwitching(value || 1);
    },
    isSearching(value) {
      if (value) this.handlePageSwitching(1);
    },
  },
};
</script>

<style scoped>
.container {
  display: flex;
  column-gap: 10px;
  margin: none;
  padding: 0;
  list-style: none;
}

.button {
  border: none;
}

.button:hover {
  cursor: pointer;
}

.button_active {
  background-color: #aaa;
}
</style>
