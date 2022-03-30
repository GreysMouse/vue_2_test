<template>
  <table class="table">
    <caption class="caption">
      {{
        tableHeadings.caption
      }}
    </caption>
    <thead>
      <tr>
        <th class="field">{{ tableHeadings.userName }}</th>
        <th class="field">{{ tableHeadings.userEmail }}</th>
        <th class="field">{{ tableHeadings.userRegisterDate }}</th>
        <th class="field">{{ tableHeadings.userRating }}</th>
      </tr>
    </thead>
    <tbody>
      <users-section-table-row
        v-for="user in usersOnPage"
        :key="getUserId(user)"
        :user="user"
      />
    </tbody>
  </table>
</template>

<script>
import { USERS_SECTION_TABLE_HEADINGS } from "../constants";
import { USERS_TABLE_PAGINATION_STEP, USER_DATA } from "../config";
import UsersSectionTableRow from "./UsersSectionTableRow.vue";

export default {
  name: "UsersSectionTable",
  components: {
    UsersSectionTableRow,
  },
  computed: {
    tableHeadings() {
      return {
        caption: USERS_SECTION_TABLE_HEADINGS.CAPTION,
        userName: USERS_SECTION_TABLE_HEADINGS.COLUMN_1,
        userEmail: USERS_SECTION_TABLE_HEADINGS.COLUMN_2,
        userRegisterDate: USERS_SECTION_TABLE_HEADINGS.COLUMN_3,
        userRating: USERS_SECTION_TABLE_HEADINGS.COLUMN_4,
      };
    },
    inSearching() {
      return this.$store.getters.isSearching;
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
  methods: {
    getUserId(user) {
      return user[USER_DATA.ID];
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
