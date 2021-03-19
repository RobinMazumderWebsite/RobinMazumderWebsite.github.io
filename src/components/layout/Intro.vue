<template lang="html">
  <section class="intro section" id="intro">
    <FloatingImage />

    <div>
      <h2 class="intro_text intro_text--title">
        Robin Mazumder
      </h2>
      <p class="intro_text intro_text--para">
        Life is about relationships. Relationships with ourselves, others and our world. When I realized how much impact the places we live have on our ability to build and keep these relationships, a light went on in my head. If we can build better environments for our cities and our people, we can dramatically improve our mental and physical health, our friendships and families, our communities, and of course, our relationships. 
      </p>

      <p class="intro_text intro_text--para">
        I believe humans are inherently good, but our environments are built in a way that makes us bad. When our environments don't prioritize our wellbeing it creates a disharmoney within ourselves which then goes on to become a negative pattern, we've all experienced road rage and to feel it build. This is proof that all our relationships are connected and we rely on each of them. 
      </p>

      <p class="intro_text intro_text--para">
        My Thakurma (Bengali for Father's Mother) came to stay with us from Bangladesh when I was young, she helped me connect with my culture, establishing a sense of wonder and curiosity. When I worked in community mental health as an occupational therapist I began connecting the dots between our wellbeing and urban design. I became so curious that I completed my PhD in cognitive neuroscience to study the psychological impacts of urban design. I learned that urban design is not one size fits all. I learned Kimberle Crenshaw's theory of Intersectionality, that aspects of identity, including race, gender, and sexual orientation, can cause people, and systems to treat people inequitably. 
      </p>

      <p class="intro_text intro_text--para">
        Today I propose a conceptual framework called Experiential Equity, which uses neuroscience to measure the disparities in experiences, through looking at physiological indicators like stress and brain activity. It's my mission to heal these disparities, reversing the theory of Intersectionality to create spaces that treat people equitably and thus allow us to bring healthy patterns back into our relationships. 
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
    number_of_leaves: 40,
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

  @media screen and (max-width: 40em) {
    padding: 100px 0 0;
  }

  &_text {
    &--title {
      grid-column-start: 2;
      grid-column-end: 4;
      grid-row-start: 1;
      grid-row-end: 2;
      width: 80%;
      z-index: 0;
      @media screen and (max-width: 40em) {
        width: 100%;
      }
    }

    &--para {
      @media screen and (min-width: 40em) {
        padding: 2% 10%;
      }
    }
  }
}
</style>
