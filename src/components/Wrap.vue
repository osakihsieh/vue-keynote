<template>
  <section>
    <slot></slot>
  </section>
</template>

<script>
  export default {
    name: 'wrap'
  }
</script>

<style lang="scss" scoped>
  @import "scss/share";

  section {
    position: relative;
    padding: 5vh 10%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-shadow: rgba($white, .2) 1px 1px .5px;
  }
</style>
