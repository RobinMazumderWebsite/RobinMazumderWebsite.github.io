<template lang="html">
  <section class="section contact contact-style b-loaded" id="contact">
    <div class="contact_contents">
      <h4 class="contact_contents--title">lets work together</h4>
      <p>
        email me at <a class="contact_contents--links" href="mailto:robin@robinmazumder.com">robin at robinmazumder dot com</a>.
      </p>
    </div>
  </section>
</template>

<script lang="js">

  export default  {
    name: 'contact',
    components: {
    },
    props: [],
    mounted () {

    },
    data () {
    return {
        number_of_leaves: 24,
        list: [
          {link: "https://arjunkalburgi.com/writing",     icon: "blog",     alt: "View my Blog" },
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
.contact {
  z-index: 1;
  position: relative;

  &_contents {
    padding: 10vh 0;
    width: 100%;
    margin: auto;

    &--title {
      font-weight: bold;
    }

    &--links {
      position: relative;
      margin: auto;
    }
  }
}
</style>
