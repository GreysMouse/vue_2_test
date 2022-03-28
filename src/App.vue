<template>
  <div id="app">
    <users-section />
  </div>
</template>

<script>
import UsersSection from "./components/UsersSection.vue";

export default {
  name: "App",
  components: {
    UsersSection,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
