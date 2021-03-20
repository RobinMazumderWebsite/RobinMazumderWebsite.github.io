<template lang="html">
  <div>
    <img class="Image desktop" src="../../assets/pics/robin.jpg" alt="Me looking to the sky smiling, making my dreams for an equitable world reality." />
    <img class="Image mobile" src="../../assets/pics/robin-mobile.png" alt="Me looking to the sky smiling, making my dreams for an equitable world reality." />
  </div>
</template>

<script lang="js">

export default  {
  name: 'FloatingImage',
}
</script>

<style lang="scss">
.Image.desktop {
  width: calc(100% - 15px*2);
  border: 15px solid var(--brand-colour);
  display: block;
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
  }
}
</style>
