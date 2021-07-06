<template>
  <div id="app">
    <div class="bg" />
    <div class="content">
      <img src="./assets/pics/robinfeet.jpeg" />
      <h1 class="intro_text intro_text--title">
        Robin Mazumder
      </h1>
      <small class="intro_text intro_text--smallcaps">Work in progress</small>
      <p class="intro_text intro_text--para intro_text--desc">
        Neuroscientist interested in helping design cities that support
        well-being, equity, and our planet.
      </p>
      <p>
        I give keynote talks and interactive workshops on urbanism, public
        health, citizenship, mental health and more.
      </p>
      <button
        class="button-success pure-button button-xlarge"
        type="submit"
      >
        View old website
      </button>
      <p>
        This website is a work in progress, in the meantime,     
        book time with me on
        <a target="_blank" href="https://calendly.com/robinmazumder">Calendly</a> ↗,
        <a target="_blank" href="https://twitter.com/RobinMazumder">tweet me</a> ↗, or send me an email below:
      </p>
      <Contact />
    </div>
  </div>
</template>

<script>
import Contact from "./components/layout/Contact.vue";

export default {
  name: "App",
  components: {
    Contact,
  },
};
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Roboto&family=Roboto+Mono&family=Archivo:wght@600&display=swap');

.content {
  width: 90%;
  max-width: 450px;
  margin: 0 auto 0;
  padding-top: 25vh;

  img {
    width: 100%;
  }

  color: white;
  text-shadow: 1px 1px black;

  .intro_text {
    &--title {
      font: var(--bold-text);
      text-transform: uppercase;
      z-index: 0;
      margin-bottom: 0.5rem;
      @media screen and (max-width: 600px) {
        font-size: 20px;
      }
    }

    &--smallcaps {
      text-transform: uppercase;
      font: var(--button-text);
    }

    &--subtitle {
      font-size: 18px;
      text-transform: uppercase;
      z-index: 0;
      margin-bottom: 0.5rem;
    }

    &--desc {
      margin-bottom: 1.5rem;
    }

    &--para {
      line-height: 150%;
      margin-top: 0.5rem;
    }
  }

  button {
    border: none;
    width: 100%;
    cursor: pointer;
    background-color: var(--brand-colour);
    color: var(--brand-contrastlight);
    font-size: 16px;
    @media (prefers-color-scheme: dark) {
      background-color: var(--brand-contrastlight);
      color: var(--brand-contrastdark);
    }
  }
}

.bg {
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  z-index: -1;
  filter: blur(15px);
  background: url("./assets/pics/robinfeet.jpeg");
  background-repeat: no-repeat;
  background-size: cover;
  background-position:center;
}

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

// FONTS
#app, a {
  font: var(--brand-text);
  color: var(--brand-textcolour);
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  position:relative;
}

// SPACING
.section {
  margin: 25vh auto 0;
  padding-bottom: 15vh;
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
