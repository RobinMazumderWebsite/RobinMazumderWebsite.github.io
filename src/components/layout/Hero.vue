<template lang="html">
  <section class="hero section">
    <h1 class="hero_text--header">
      Robin Mazumder
    </h1>
    <p class="hero_text--intro">
      I’ve always been interested in how urban design impacts our psychology, now I’m an environmental neuroscientist.
    </p>
  </section>
</template>

<script lang="js">


  export default  {
    name: 'hero',
    components: {
    },
    props: [],
    mounted () {

    },
    data () {
      return {
        button: {link: "writing", text: "writing", alt: "View my blog" },
        list: [
          {link: "https://twitter.com/arjunkalburgi",     icon: "twitter",  alt: "View my Twitter" },
          {link: "https://github.com/arjunkalburgi",      icon: "github",   alt: "View my GitHub" },
          {link: "https://linkedin.com/in/arjunkalburgi", icon: "linkedin", alt: "View my Linked In" },
          {link: "https://codepen.io/arjunkalburgi",      icon: "codepen",  alt: "View my Code Pen" },
          {link: "mailto:askalburgi@gmail.com",           icon: "email",    alt: "Send me an Email" },
        ]
      }
    },
    methods: {

    },
    computed: {

    }
}
</script>

<style scoped lang="scss">
.hero {
  > * {
    width: 50%;
    @media screen and (max-width: 40em) {
      width: unset;
    }
  }

  &_nameImg {
    width: 200px;
  }

  &_text {
    &--header {
      font: var(--heading-text);
      text-transform: uppercase;
    }
    &--tag {
      margin-top: 7px;
      margin-bottom: 30px;
    }
  }
}
</style>
