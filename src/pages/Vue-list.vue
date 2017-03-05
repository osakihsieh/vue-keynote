<template>
  <box>
    <v-title legend="vue list"></v-title>
    <v-wrap>
      <ul>
        <li><b>simple</b><br/>index.html + Vue CDN import</li>
        <li><b>webpack-simple</b><br/>基本的 Webpack + vue-loader 開發流程</li>
        <li><b>webpack</b> ✨<br/>完整的 Webpack + vue-loader 開發流程，包含linting、測試工具</li>
        <li><b>browserify</b><br/>完整的 Browserify + vueify 開發流程，包含linting、測試工具</li>
      </ul>
    </v-wrap>
  </box>
</template>

<script>
  export default {
    name: 'vue-list'
  }
</script>
