<template>
  <div class="nav-item-container">
    
    <router-link id="nav-item__link" v-bind:to="to">
      <slot />
    </router-link>
    
  </div>
</template>

<style>
.nav-item-container {
  padding-left: 0.5em;
  padding-right: 0.5em;
  white-space: nowrap;
  backdrop-filter: blur(3px);
  font-family: "BeaufortforLOL-Bold";
  font-size: 1em;
  color: #C89B3C;
}
#nav-item__link {
  color: #C89B3C;
  font-family: "BeaufortforLOL-Bold";
}
</style>

<script>
export default {
  props: {
    to: String,
  },
};
</script>
