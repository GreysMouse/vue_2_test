<template>
  <div class="container">
    <p class="title">Сортировка:</p>
    <ul class="list">
      <li>
        <label>
          <button @click="sortUsersByRegisterDate" />
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
import { SORTING_ORDERS, SORTING_TYPES } from "../constants";
import { getUpdatedSorting } from "../utils/features/getUpdatedSorting";

export default {
  name: "SortingBar",
  computed: {
    currentSorting() {
      return this.$store.state.sorting;
    },
  },
  methods: {
    sortUsersByRating() {
      const updatedSorting = getUpdatedSorting(this.currentSorting, {
        type: SORTING_TYPES.RATING,
        order: SORTING_ORDERS.NONE,
      });

      this.$store.commit({
        type: "sortUsers",
        sorting: updatedSorting,
      });

      this.$store.commit({
        type: "setSorting",
        sorting: updatedSorting,
      });
    },
    sortUsersByRegisterDate() {
      const updatedSorting = getUpdatedSorting(this.currentSorting, {
        type: SORTING_TYPES.REGISTER_DATE,
        order: SORTING_ORDERS.NONE,
      });

      this.$store.commit({
        type: "sortUsers",
        sorting: updatedSorting,
      });

      this.$store.commit({
        type: "setSorting",
        sorting: updatedSorting,
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
