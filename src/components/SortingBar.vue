<template>
  <div class="container">
    <p class="title">Сортировка:</p>
    <ul class="list">
      <li>
        <label>
          <button @click="sortUsersByRegistrationrDate" />
          Дата регистрации
        </label>
      </li>
      <li>
        <label>
          <button @click="sortUsersByRating" />
          Рейтинг
        </label>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "SortingBar",
  computed: {
    currentSorting() {
      return this.$store.state.sorting;
    },
  },
  methods: {
    sortUsersByRating() {
      const newSorting = { type: "rating", direction: "asc" };

      if (
        this.currentSorting.type === "rating" &&
        this.currentSorting.direction === "asc"
      ) {
        newSorting.direction = "desc";
      } else if (
        this.currentSorting.type === "rating" &&
        this.currentSorting.direction === "desc"
      ) {
        newSorting.direction = "asc";
      } else {
        newSorting.direction = "desc";
      }

      this.$store.commit({
        type: "sortUsers",
        sorting: newSorting,
      });

      this.$store.commit({
        type: "setSorting",
        sorting: newSorting,
      });
    },
    sortUsersByRegistrationrDate() {
      const newSorting = { type: "registrationDate", direction: "asc" };

      if (
        this.currentSorting.type === "registrationDate" &&
        this.currentSorting.direction === "asc"
      ) {
        newSorting.direction = "desc";
      } else if (
        this.currentSorting.type === "registrationDate" &&
        this.currentSorting.direction === "desc"
      ) {
        newSorting.direction = "asc";
      } else {
        newSorting.direction = "desc";
      }

      this.$store.commit({
        type: "sortUsers",
        sorting: newSorting,
      });

      this.$store.commit({
        type: "setSorting",
        sorting: newSorting,
      });
    },
  },
};
</script>

<style scoped>
.container {
  display: flex;
  margin: 0 0 50px 0;
}

.title {
  margin: 0;
}

.list {
  display: flex;
  margin: 0;
  padding: 0;
  list-style: none;
}
</style>
