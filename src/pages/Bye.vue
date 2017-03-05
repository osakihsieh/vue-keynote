<template>
  <box>
    <v-title legend="THANKS"></v-title>
      <router-link :to="{name: 'Hello'}">begin again</router-link>
  </box>
</template>

<script>
  export default {
    name: 'bye'
  }
</script>

<style lang="scss">
  @import 'scss/share';

  a {
    color: rgba($white, .6);
    text-decoration: none;
  }
</style>
