<template lang="html">
  <section class="intro section" id="intro">
    <BackgroundAnimation class="intro_bgani" :total="number_of_leaves" />

  </section>
</template>

<script lang="js">

import BackgroundAnimation from './../system/BackgroundAnimation.vue'

export default  {
  name: 'intro',
  components: {
    BackgroundAnimation
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

  @media screen and (max-width: 40em) {
    padding: 100px 0 0;
    display: block;
  }

  &_bgani {
    left: calc((0.3 * 100vw) / -2);
    bottom: -10vw;
    right: calc((0.3 * 100vw) / -2);

    @media screen and (max-width: 80em) {
      left: calc((0.15 * 100vw) / -2);
      right: calc((0.15 * 100vw) / -2);
    }
  }
}
</style>
