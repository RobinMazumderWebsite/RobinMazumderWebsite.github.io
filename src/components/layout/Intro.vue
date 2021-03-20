<template lang="html">
  <section class="intro section" id="intro">
    <FloatingImage />

    <div>
      <h2 class="intro_text intro_text--title">
        Robin Mazumder
      </h2>
      <p class="intro_text intro_text--para">
        Life is about relationships. Relationships with ourselves, others and our world. When I realized how much impact the places we live have on our ability to build and keep these relationships, a light went on in my head. If we can build better environments for our cities and our people, we can dramatically improve our mental and physical health, our friendships and families, our communities, and of course, our relationships. <span v-if="!showText"><button class="intro_button" v-on:click="showText = !showText">read on</button></span>
      </p>

      <p class="intro_text intro_text--para hidden-start" :class="showText ? 'show' : 'hide'">
        I believe humans are inherently good, but our environments are built in a way that makes us bad. My Thakurma (Bengali for Father's Mother) came to stay with us from Bangladesh when I was young, connecting me with my culture and building positive patterns for my life. When our relationships don't prioritize our wellbeing it creates disharmony and negative patterns. Too many of us live with the anxiety that our disharmony causes.
      </p>

      <p class="intro_text intro_text--para hidden-start" :class="showText ? 'show' : 'hide'">
        When I worked in community mental health as an occupational therapist I began connecting the dots between our wellbeing and our cities. I completed my PhD in cognitive neuroscience to study the psychological impacts of urban design; and learned that our urban design is not one size fits all, it’s not built for everyone. I learned Kimberle Crenshaw's theory of Intersectionality, that aspects of identity, including race, gender, and sexual orientation, can cause people, and systems to treat people inequitably.
      </p>

      <p class="intro_text intro_text--para hidden-start" :class="showText ? 'show' : 'hide'">
        Today I propose a conceptual framework called Experiential Equity, which uses neuroscience to measure the disparities in experiences, through looking at physiological indicators like stress and brain activity. It's my mission to heal these disparities, reversing the theory of Intersectionality to create spaces that treat people equitably and allow us to bring healthy patterns back into our relationships.
      </p>
    </div>
  </section>
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
  padding: 100px 0 0;
  display: grid; 
  grid-template-columns: 30% auto;
  gap: 5%;

  @media screen and (max-width: 80em) {
    display: block;
    padding: 0;
  }

  &_button {
    border: none;
    background-color: var(--brand-colour);
    color: var(--brand-contrastlight);
    @media (prefers-color-scheme: dark) {
      background-color: var(--brand-contrastlight);
      color: var(--brand-contrastdark);
    }
  }

  &_text {
    &--title {
      font: var(--bold-text);
      text-transform: uppercase;
      z-index: 0;
      @media screen and (max-width: 80em) {
        font-size: 20px;
      }
    }

    &--para {
      line-height: 150%;

      &.hidden-start {
        transition: all 2s ease-out;
        &:nth-of-type(2) {
          transition-delay: .3s;
        }
        &:nth-of-type(3) {
          transition-delay: .6s;
        }
        &:nth-of-type(4) {
          transition-delay: .9s;
        }
        opacity: 0;
        max-height: 0px;
        &.show {
          opacity: 1;
          max-height: 1000px;
        }
      }
    }
  }
}

.show {
  max-height: 100000px;
}
.hide {
}
</style>
