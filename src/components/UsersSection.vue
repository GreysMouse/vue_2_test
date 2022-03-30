<template>
  <section>
    <h1>{{ sectionData.caption }}</h1>
    <users-section-search-bar />
    <users-section-sorting-bar />
    <users-section-table />
    <users-section-pages-bar />
  </section>
</template>

<script>
import { USERS_SECTION_HEADINGS } from "@/constants";
import UsersSectionSearchBar from "./UsersSectionSearchBar.vue";
import UsersSectionSortingBar from "./UsersSectionSortingBar.vue";
import UsersSectionTable from "./UsersSectionTable.vue";
import UsersSectionPagesBar from "./UsersSectionPagesBar.vue";

export default {
  name: "UsersSection",
  components: {
    UsersSectionSearchBar,
    UsersSectionSortingBar,
    UsersSectionTable,
    UsersSectionPagesBar,
  },
  computed: {
    sectionData() {
      return {
        caption: USERS_SECTION_HEADINGS.CAPTION,
      };
    },
  },
  created() {
    this.$store.dispatch("getUsers");
  },
};
</script>
