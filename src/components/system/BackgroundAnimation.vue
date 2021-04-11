<template lang="html">
  <div ref="bgani" class="BackgroundAnimation">
    <img
      key="1"
      aria-hidden="true"
      alt="large transparent rectangle moving slowly in an unrecognizable pattern - symbolizing the human mind."
      ref="BackgroundAnimation_icon1"
      class="BackgroundAnimation_icon BackgroundAnimation_icon--1"
      src="../../assets/elements/Rectangle01.svg"
    />
    <img
      key="2"
      aria-hidden="true"
      alt="large transparent rectangle moving slowly in an unrecognizable pattern - symbolizing the human mind."
      ref="BackgroundAnimation_icon2"
      class="BackgroundAnimation_icon BackgroundAnimation_icon--2"
      src="../../assets/elements/Rectangle02.svg"
    />
    <img
      key="3"
      aria-hidden="true"
      alt="large transparent rectangle moving slowly in an unrecognizable pattern - symbolizing the human mind."
      ref="BackgroundAnimation_icon3"
      class="BackgroundAnimation_icon BackgroundAnimation_icon--3"
      src="../../assets/elements/Rectangle03.svg"
    />
  </div>
</template>

<script lang="js">
  import { TweenLite } from 'gsap';
  import { TweenMax } from 'gsap';

  export default  {
    name: 'BackgroundAnimation',
    props: ["total"],
    mounted () {
      const container = this.$refs.bgani, w = container.clientWidth - 100, h = container.clientHeight;
      const icons = [
        this.$refs.BackgroundAnimation_icon1,
        this.$refs.BackgroundAnimation_icon2,
        this.$refs.BackgroundAnimation_icon3];

      for (var i = 0; i < this.total; i++) {
          var icon = icons[i];
          TweenLite.set(icon, { x: this.R(0, w/2), y: this.R(-h/2, h/2) }); // place icon

          if (!window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
            this.iconRotate(icon, TweenMax);
            this.iconSway(icon, TweenMax);
          }
      }
    },
    data () {
      return {
      }
    },
    methods: {
      R (min, max) { return min + (Math.floor(10 * Math.random() * (max - min)) / 10) },
      S () { return Math.random() < 0.5 ? -1 : 1 },
      iconRotate (icon, tween_max) {
        // make icon rotate
        tween_max.to(icon, this.R(2, 5), {
            repeat: 1,
            yoyo: true,
            ease: "easeInOut",
            onComplete: () => { this.iconRotate(icon, tween_max); }
        });
      },
      iconSway (icon, tween_max) {
        // make icon sway
        tween_max.to(icon, this.R(2, 8), {
            x: '+=' + this.R(-80, 80),
            y: '+=' + this.R(-80, 80),
            repeat: 0,
            yoyo: false,
            ease: "easeInOut",
            onComplete: () => { this.iconSway(icon, tween_max); }
        });
      },
    },
    computed: {

    }
}
</script>

<style scoped lang="scss">
.BackgroundAnimation {
  position: relative;
  z-index: -1;
  pointer-events: none;
  width: 100%;
  padding: 0 0 200px 0;
  overflow-x: -moz-hidden-unscrollable;

  &_icon {
    position: absolute;
    pointer-events: none;
    z-index: -1;
    // width: 35px;
    // height: 35px;
    background-size: contain;
    background-repeat: no-repeat;
    opacity: 0.5;
    @media screen and (max-width: 600px) {
      width: 70%;
    }
  }
}
</style>
