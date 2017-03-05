<template>
  <main>
    <nav class="pages">
      <template v-for="name in $store.state.pages">
        <router-link :to="{name}" :style="{width: 100 / $store.getters.totalPage+ '%'}" :title="name">{{ name }}</router-link>
      </template>
    </nav>
    <router-view></router-view>
  </main>
</template>

<script>

  export default {
    name: 'app'
  }
</script>

<style lang="scss">
  @import "scss/share";

  main {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    text-align: center;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  .pages {
    position: fixed;
    top: 0;
    left: 0;
    z-index: 999;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-start;
    width: 100%;
    a {
      @include hide-text;
      display: block;
      width: 20px;
      height: 4px;
      background-color: rgba(#200050, .3);
      transition: all $traisit;
      &:hover {
        background-color: rgba(#200050, .5);
      }
      &.active {
        background-color: rgb(255, 200, 75);
        height: 6px;
      }
    }
    &:hover {
      a {
        height: 16px;
        &.active {
          height: 16px;
        }
      }
    }
  }
</style>
