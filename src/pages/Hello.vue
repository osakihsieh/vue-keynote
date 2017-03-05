<template>
  <box>
    <h1>Vue-cli from scratch by Osaki Hsieh</h1>
    <p>By 謝介源</p>
    <aside>
      <a href="https://www.linkedin.com/in/%E4%BB%8B%E6%BA%90-%E8%AC%9D-a42a7855/" target="_blank">LinkedIn</a>
      <a href="https://medium.com/osakihsieh" target="_blank">Medium</a>
      <a href="https://www.facebook.com/aspdoctor" target="_blank">Facebook</a>
    </aside>
  </box>
</template>

<script>
  export default {
    name: 'hello'
  }
</script>

<style lang="scss" scoped>
  @import "scss/share";

  h1 {
    @include hide-text;
    width: 80vw;
    height: 155px;
    max-width: 770px;
    background-image: url(../../static/images/vuecli.svg);
    background-position: 50% 50%;
    background-repeat: no-repeat;
    background-size: 100% auto;
  }

  p {
    margin-top: 1.6em;
    font-size: 1.8em;
    line-height: 1.6em;
  }

  a {
    margin: 0 1em;
    color: rgba($white, .3);
    transition: all .6s;
    text-decoration: none;
    &:hover {
      color: rgba($white, .8);
    }
    &:before {
      content: '✨';
      margin-right: .6em;
      color: rgba($white, .8);
    }
  }

  aside {
    margin-top: 1.6em;
  }
</style>
