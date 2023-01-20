<template>
  <div class="nav-item-container">
    {
    <router-link id="nav-item__link" v-bind:to="to">
      <slot />
    </router-link>
    }
  </div>
</template>

<style>
.nav-item-container {
  padding-left: 0.5em;
  padding-right: 0.5em;
  white-space: nowrap;
  backdrop-filter: blur(3px);

  font-size: 1em;
  color: #ffff00;
}
#nav-item__link {
  color: #ffff00;
  font-style: italic;
  text-shadow: 0 0 0.2em rgb(1, 182, 253), 0 0 0.25em rgba(1, 5, 253, 0.7),
    0 0 0.3em rgba(5, 1, 253, 0.5), 0 0 0.4em rgba(1, 182, 253, 0.3),
    0 0 0.6em rgba(18, 1, 253, 0.493), 0 0 1em rgba(1, 26, 253, 0.1);

  text-decoration: none;
  font-weight: lighter;
}
</style>

<script>
export default {
  props: {
    to: String,
  },
};
</script>
