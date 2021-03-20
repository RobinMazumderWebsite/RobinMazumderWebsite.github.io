<template lang="html">
  <div ref="bgani" class="BackgroundAnimation">
    <img
      key="1"
      ref="BackgroundAnimation_icon1"
      class="BackgroundAnimation_icon BackgroundAnimation_icon--1"
      src="../../assets/elements/Rectangle01.svg"
    />
    <img
      key="2"
      ref="BackgroundAnimation_icon2"
      class="BackgroundAnimation_icon BackgroundAnimation_icon--2"
      src="../../assets/elements/Rectangle02.svg"
    />
    <img
      key="3"
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
      const icons = [
        this.$refs.BackgroundAnimation_icon1, 
        this.$refs.BackgroundAnimation_icon2, 
        this.$refs.BackgroundAnimation_icon3];

      for (var i = 0; i < this.total; i++) {
          var icon = icons[i];
          TweenLite.set(icon, { x: this.R(0, w), y: this.R(0, h), z: this.R(-200, 200) }); // place icon
          this.iconRotate(icon, TweenMax);
          this.iconSway(icon, TweenMax);
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
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  z-index: -1;
  overflow: hidden;
  pointer-events: none;

  &_icon {
    position: absolute;
    pointer-events: none;
    z-index: -1;
    // width: 35px;
    // height: 35px;
    background-size: contain;
    background-repeat: no-repeat;
    opacity: 0.5;
  }
}
</style>
