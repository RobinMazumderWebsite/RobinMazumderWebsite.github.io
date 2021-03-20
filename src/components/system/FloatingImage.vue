<template lang="html">
  <img class="Image" src="../../assets/pics/robin.jpg" alt="Me looking to the sky smiling, making my dreams for an equitable world reality." />
</template>

<script lang="js">

export default  {
  name: 'FloatingImage',
}
</script>

<style lang="scss">
.Image {
  width: calc(100% - 15px*2);
  border: 15px solid var(--brand-colour);

  @media screen and (max-width: 80em) {
    width: 35%;
    border-width: 9px;
    float: left;
    margin-right: 20px;
  }
}
</style>
