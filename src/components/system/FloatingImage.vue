<template lang="html">
  <div>
    <img class="Image desktop" :class="float" :src="require('@/assets/' + this.desktop)" alt="Me looking to the sky smiling, making my dreams for an equitable world reality." />
    <img class="Image mobile" :class="float" :src="require('@/assets/' + this.mobile)" alt="Me looking to the sky smiling, making my dreams for an equitable world reality." />
  </div>
</template>

<script lang="js">

export default  {
  name: 'FloatingImage',
  props: ["type", "float"],
  data () { return {
    desktop: "pics/robin.jpg",
    mobile: "pics/robin-mobile.png",
  } },
  mounted () {
    if (this.type === "speaking") {
      this.desktop = "pics/Robin-Speaking.jpg";
      this.mobile = "pics/Robin-Speaking.jpg";
    }
  }
}
</script>

<style lang="scss">
.Image.desktop {
  width: calc(100% - 15px*2);
  border: 15px solid var(--brand-colour);
  display: block;

  &.right {
    float: right; 
    margin-left: 20px;
  }
}
.Image.mobile {
  display: none;
}
@media screen and (max-width: 600px) {
  .Image.desktop {
    display: none;
  }
  .Image.mobile {
    display: block;
    width: 35%;
    border: 9px solid var(--brand-colour);
    float: left;
    margin-right: 20px;

    &.right {
      float: right; 
      margin-right: 0px;
      margin-left: 20px;
    }
  }
}
</style>
