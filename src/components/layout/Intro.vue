<template lang="html">
  <main class="intro section" id="intro">
    <ul>
      <li>
        <a href="https://robinmazumder.com">Home</a>
      </li>
      <li>
        <a href="https://robinmazumderdotcom.wordpress.com/blog/">Blog</a>
      </li>
      <li>
        <a href="#speaking"
          >Speaking</a
        >
      </li>
      <li>
        <a href="#media"
          >Media</a
        >
      </li>
      <li>
        <a href="#contact">Contact</a>
      </li>
    </ul>

    <div class="content">
      <FloatingImage type="intro" />

      <div>
        <h1 class="intro_text intro_text--title">
          Robin Mazumder
        </h1>
        <p class="intro_text intro_text--para intro_text--desc">
          Neuroscientist interested in helping design cities that support
          well-being, equity, and our planet.
        </p>

        <p>
          I give keynote talks and interactive workshops on urbanism, public
          health, citizenship, mental health and more.
        </p>

        <span v-if="!showText">
          <button class="intro_button" v-on:click="showText = !showText">
            read more
          </button>
        </span>

        <section
          class="hidden-start"
          :aria-hidden="!showText"
          :class="showText ? 'show' : 'hide'"
          aria-live="polite"
        >
          <h2 class="intro_text intro_text--subtitle">
            My mindset
          </h2>
          <p class="intro_text intro_text--para">
            Life is about relationships. Relationships with ourselves, others
            and our world. I'm interested in how the places we live impact these
            connections, particularly how the design of our communities, from
            architecture to greenspace, can contribute to a sense of harmony.
            How does our social and physical environment influence our sense of
            well-being?
          </p>
        </section>

        <section
          class="hidden-start"
          :aria-hidden="!showText"
          :class="showText ? 'show' : 'hide'"
          aria-live="polite"
        >
          <h2 class="intro_text intro_text--subtitle">
            My belief
          </h2>
          <p class="intro_text intro_text--para">
            I believe humans are inherently good, but our environments are built
            in a way that makes us bad. My Thakurma (Bengali for Father's
            Mother) came to stay with us from Bangladesh when I was young,
            connecting me with my culture and instilling my values. When our
            relationships don't prioritize our wellbeing it creates disharmony
            and negative patterns. Too many of us live with the anxiety that our
            disharmony causes.
          </p>
        </section>

        <section
          class="hidden-start"
          :aria-hidden="!showText"
          :class="showText ? 'show' : 'hide'"
          aria-live="polite"
        >
          <h2 class="intro_text intro_text--subtitle">
            My background
          </h2>
          <p class="intro_text intro_text--para">
            When I worked as an occupational therapist I began connecting the
            dots between our wellbeing and our cities. I completed my PhD in
            cognitive neuroscience to study the psychological impacts of urban
            design; and learned that our cities are not built for everyone. In
            fact, from Kimberle Crenshaw's theory of Intersectionality, it's our
            own aspects of identity that can cause us to treat people
            inequitably.
          </p>
        </section>

        <section
          class="hidden-start"
          :aria-hidden="!showText"
          :class="showText ? 'show' : 'hide'"
          aria-live="polite"
        >
          <h2 class="intro_text intro_text--subtitle">
            My mission
          </h2>
          <p class="intro_text intro_text--para">
            But I propose the framework of
            <a
              href="https://citymonitor.ai/community/equity/public-spaces-are-essential-but-not-yet-equal"
              >Experiential Equity</a
            >, which uses neuroscience to measure the disparities in
            experiences. It's my mission to heal the disparities, reversing the
            theory of Intersectionality, designing cities that treat people
            equitably and make all our relationships healthy once more.
          </p>
        </section>
      </div>
    </div>
  </main>
</template>

<script lang="js">

import FloatingImage from './../system/FloatingImage.vue'

export default  {
  name: 'intro',
  components: {
    FloatingImage,
  },
  props: [],
  mounted () { },
  data () { return {
    showText: false
  } },
  methods: { },
  computed: { }
}
</script>

<style scoped lang="scss">
.intro {
  position: relative;
  margin: 25vh auto 15vh;

  ul {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    list-style: none;
    margin: 0;
    max-width: none;
    padding-left: 0;
    position: relative;

    li {
      display: flex;
      align-items: center;
      padding: 13.2px;

      a {
        font-size: 16px;
        color: #202020;
        text-decoration: none;

        &:hover {
          border-bottom: 1px solid #bd8732;
          color: #6a932e;
        }

        &:active {
          color: #384722;
        }
      }
    }
  }

  .content {
    padding: 100px 0 0;
    display: grid;
    grid-template-columns: 30% auto;
    gap: 5%;

    @media screen and (max-width: 600px) {
      display: block;
      padding: 0;
    }

    .intro_button {
      border: none;
      background-color: var(--brand-colour);
      color: var(--brand-contrastlight);
      font-size: 16px;
      &:hover {
        cursor: pointer;
      }
      @media (prefers-color-scheme: dark) {
        background-color: var(--brand-contrastlight);
        color: var(--brand-contrastdark);
      }
    }

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
  }
}

.hidden-start {
  transition: opacity 2s ease-out, max-height 2s ease-out;
  &:nth-of-type(2) {
    transition-delay: 0.3s;
  }
  &:nth-of-type(3) {
    transition-delay: 0.6s;
  }
  &:nth-of-type(4) {
    transition-delay: 0.9s;
  }
  &:nth-of-type(5) {
    transition-delay: 1.2s;
  }
  opacity: 0;
  max-height: 0px;
  overflow: hidden;
  &.show {
    opacity: 1;
    max-height: 1000px;
    display: block;
  }
}
</style>
