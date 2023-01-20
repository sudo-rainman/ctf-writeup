<template>
  <NavItemsView />

  <main>
    <LeftView />
    <router-view class="main__router-view" />
    <RightView />
  </main>
</template>

<style scoped>
/* #app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
*/
main {
  display: flex;

  border: 2px solid var(--color-blue);
  background: var(--color-dark-blue);
}
.main__router-view {
  flex-grow: 1000;
  width: 0;
  padding: 5px;
  margin: var(--margin) 0;
  border: var(--border-width) solid purple;
}
</style>

<script>
import NavItemsView from "./views/NavItemsView.vue";
import LeftView from "./views/LeftView.vue";
import RightView from "./views/RightView.vue";

export default {
  components: {
    NavItemsView,
    LeftView,
    RightView,
  },
};
</script>
