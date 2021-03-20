<template lang="html">
  <section class=" section">
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
    number_of_leaves: 3,
  } },
  methods: { },
  computed: { }
}
</script>

<style scoped lang="scss">
.intro {

  &_bgani {
  }
}
</style>
