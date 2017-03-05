<template>
  <header>
    {{ legend.toUpperCase() }}
    <slot></slot>
  </header>
</template>

<script>
  export default {
    name: 'title',

    props: {
      legend: {
        type: String
      }
    }
  }
</script>

<style lang="scss" scoped>
  @import "scss/share";

  header {
    @include noSelect;
    font-family: 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
    font-size: 3em;
    line-height: 1.2em;
    font-weight: bold;
    color: $gray;
  }
</style>
