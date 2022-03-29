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
  name: "UsersPagesBar",
  computed: {
    pagesCount() {
      return this.$store.getters.tablePagesCount;
    },
    currentPage() {
      return this.$store.state.users.tablePage;
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
