<template>
  <div id="app">
    <Intro />
    <Animation />
    <Contact />
  </div>
</template>

<script>
import Intro from "./components/layout/Intro.vue";
import Animation from "./components/layout/Animation.vue";
import Contact from "./components/layout/Contact.vue";

export default {
  name: "App",
  components: {
    Intro,
    Animation,
    Contact,
  },
};
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Roboto&family=Roboto+Mono&family=Archivo:wght@600&display=swap');

:root {
  --brand-colour: #384722;
  --brand-colourlight: #BD8732;
  --brand-colourdark: #BD8732;

  --brand-contrastlight: #efefef;
  --brand-contrastdark: #202020;

  --brand-textcolour: --brand-contrastdark;
  --brand-backgroundcolour: #F3ECE0;

  --brand-text: normal 18px/1.3 "Roboto";
  --bold-text: normal 700 30px/1.3 "Archivo";
  --heading-text: normal 700 45px/1.3 "Roboto Mono";
  --button-text: normal 15px "Archivo";
  --icon-text: normal 20px/1.3 "Roboto";
}

body {
  background-color: var(--brand-backgroundcolour);
}

// FONTS
#app, a {
  font: var(--brand-text);
  color: var(--brand-textcolour);
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

// SPACING
.section {
  width: 70%;
  max-width: 800px;
  margin: 25vh auto 15vh;
}

// DARK MODE
@media (prefers-color-scheme: dark) {
  :root {
    --brand-colour: var(--brand-colourdark);
    --brand-textcolour: var(--brand-contrastlight);
  }
  body {
    background: var(--brand-contrastdark) !important;
  }
}
</style>
