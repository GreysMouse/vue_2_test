<template>
  <div class="container">
    <p class="title">Сортировка:</p>
    <ul class="list">
      <li>
        <label
          class="label"
          :class="{
            label_selected: isSortingByRegiserDateActive,
          }"
        >
          <button @click="handleSortingByRegisterDate" />
          Дата регистрации
        </label>
      </li>
      <li>
        <label
          class="label"
          :class="{
            label_selected: isSortingByRatingActive,
          }"
        >
          <button @click="handleSortingByRating" />
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
  name: "UsersSectionSortingBar",
  computed: {
    currentSorting() {
      return this.$store.state.users.sorting;
    },
    isSortingByRegiserDateActive() {
      return this.currentSorting.type === SORTING_TYPES.REGISTER_DATE;
    },
    isSortingByRatingActive() {
      return this.currentSorting.type === SORTING_TYPES.RATING;
    },
  },
  methods: {
    commitSorting(sorting) {
      this.$store.commit({
        type: "sortUsers",
        sorting: sorting,
      });

      this.$store.commit({
        type: "setSorting",
        sorting: sorting,
      });
    },
    handleSortingByRating() {
      const updatedSorting = getUpdatedSorting(this.currentSorting, {
        type: SORTING_TYPES.RATING,
        order: SORTING_ORDERS.NONE,
      });

      this.commitSorting(updatedSorting);
    },
    handleSortingByRegisterDate() {
      const updatedSorting = getUpdatedSorting(this.currentSorting, {
        type: SORTING_TYPES.REGISTER_DATE,
        order: SORTING_ORDERS.NONE,
      });

      this.commitSorting(updatedSorting);
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

.label_selected {
  font-weight: 900;
}
</style>
