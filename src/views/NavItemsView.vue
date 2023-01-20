<template>
  <div class="nav-container">
    <nav class="nav">
      <img class="--no-hover nav__icon" src="../assets/images/yasuo_hold.png" />
      <img
        id="nav__tornado"
        class="nav__tornado"
        src="../assets/images/tornado.png"
      />
      <NavItem class="nav__nav-item nav__nav-item1" to="/">Home</NavItem>
      <NavItem class="nav__nav-item nav__nav-item2" to="/writeups"
        >Writeups</NavItem
      >
    </nav>
  </div>
</template>

<style scoped>
.nav-container {
  backdrop-filter: blur(10px);
  margin: var(--margin) 0;

  height: 20vh;
  width: 100%;

  opacity: 12vw;

  --tornado-width: 53px;
}
.nav {
  box-sizing: border-box;
  border: 2px solid orangered;
  font-size: 2rem;
  width: 100%;

  height: 100%;
  background-image: url(../assets/images/aram.JPG);
  background-size: contain;

  display: grid;
  grid-auto-columns: min-content;
  grid-template-columns: min-content;
  grid-auto-rows: 100%;
  grid-auto-flow: column;
  align-items: center;
  overflow: hidden;
}
@keyframes nav__tornado--move {
  0% {
    left: 0px;
  }
  100% {
    left: calc(
      100vw - 2 * var(--margin) - 2 * var(--border-width) -
        var(--scroll-bar-width)
    );
  }
}
@keyframes nav__tornado--spin {
  0% {
    transform: scaleX(1);
  }
  50% {
    transform: scaleX(-1);
  }
  100% {
    transform: scaleX(1);
  }
}
@keyframes nav__nav-item--move {
  0% {
    top: 0px;
  }
  100% {
    top: calc(-10vh + 0.5em + var(--margin) + var(--border-width));
  }
}
@keyframes nav__nav-item--spin {
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
}
.nav__tornado {
  position: relative;
  justify-self: center;
  display: none;
  height: 90%;
  /* left: 100vw; */
}
.nav__nav-item {
  font-size: 1em;

  /* for move up animation */
  position: relative;
}
.nav__icon ~ * {
  --time: 3s;
}
.nav__icon:hover ~ .nav__tornado {
  /* forward is for element to stay in its position after animating */
  animation: nav__tornado--move var(--time) ease-out forwards,
    nav__tornado--spin calc(var(--time) / 8) linear infinite;
  display: block;
  transition: display var(--time) linear 0.1s;
}
.nav__icon:hover ~ .nav__nav-item {
  animation: nav__nav-item--move calc(var(--time) / 8)
      cubic-bezier(0.08, 0.72, 0.53, 0.85) alternate 2,
    nav__nav-item--spin calc(var(--time) / 8) linear 2;
}
.nav__icon:hover ~ .nav__nav-item1 {
  animation-delay: calc(var(--time) / 20);
}
.nav__icon:hover~.nav__nav-item2 {
  animation-delay: calc(var(--time) / 7);
}

.nav > * {
  grid-row: 1 / 2;
}
.nav__tornado,
.nav__icon {
  grid-column-start: 1;
}
.nav__icon {
  display: inline-block;
  vertical-align: bottom;

  --image-width: 362;
  --image-height: 366;
  height: 80%;
  width: calc(
    (20vh - 2 * var(--border-width)) * 0.8 / var(--image-height) *
      var(--image-width)
  );
  /* object-fit: contain; */
  z-index: 2;
}
.nav__icon:hover {
  --image-width: 469;
  --image-height: 377;
  content: url(../assets/images/yasuo_draw.png);
}
</style>

<!-- <script>
export default {
  setup() {

  }
}
</script> -->
