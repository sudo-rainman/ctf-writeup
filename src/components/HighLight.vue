<template>
  <highlightjs autodetect v-bind:code="codeComputed" class="high-light" />
</template>

<style scoped>
.high-light {
  /* white-space: no-wrap; */
  overflow: hidden;
  /* white-space: pre-wrap; */
  /* tab-size: 1em; */
  /* font-size: 0.9em; */
  /* text-indent: 1px; */
  /* word-spacing: 1px; */
}
</style>

<script>
import "highlight.js/styles/night-owl.css";
import { computed } from "vue";
import hljsVuePlugin from "@highlightjs/vue-plugin";
export default {
  props: {
    code: {
      type: String,
      default: "",
    },
  },
  components: {
    highlightjs: hljsVuePlugin.component,
  },
  setup(props) {
    const codeComputed = computed(() => props.code.replaceAll("    ", "  "));

    return {
      codeComputed,
    };
  },
};
</script>
