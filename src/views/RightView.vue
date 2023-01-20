<template>
  <img
    v-bind:style="{ 'margin-top': marginTop + 'px' }"
    src="../assets/images/turret.gif"
    alt="The turret in League of Legends"
    id="right-image"
  />
</template>

<style scoped>
/* @keyframes right-image--switch-image{
  0% {
    opacity: 1;
    content: url(../assets/images/turret0.png);
  }
  8.33% {
    opacity: 0;

  }
  16.66% {
    opacity: 0;
    content: url(../assets/images/turret0.png);
  }
} */
img {
  height: calc(100vh - var(--margin) * 4 - var(--border-width) * 6 - 20vh);
  width: auto;
  border: 2px solid orange;
  margin: var(--margin);

  transition: margin-top 2s;
}
@media (max-aspect-ratio: 80/65) {
  img {
    display: none;
  }
}
</style>

<script>
import { ref } from "vue";
import { globalMargin } from "../constants.js";

export default {
  setup() {
    const marginTop = ref(globalMargin);

    function handleScroll() {
      marginTop.value =
        window.scrollY +
        globalMargin -
        Math.min(
          window.scrollY,
          (0.2 * window.screen.height + globalMargin * 2) * 0.5
        );
    }

    return {
      marginTop,
      handleScroll,
    };
  },
  mounted() {
    window.addEventListener("scroll", this.handleScroll);
  },
  onUnmounted() {
    window.removeEventListener("scroll", this.handleScroll);
  },
};
</script>
