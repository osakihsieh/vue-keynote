<template>
  <article>
    <slot></slot>
  </article>
</template>

<script>
  export default {
    name: 'box'
  }
</script>

<style lang="scss" scoped>
  @import "scss/share";

  article {
    position: relative;
    padding: 5vh 10%;
    width: 100vw;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    color: $white;
  }
</style>
