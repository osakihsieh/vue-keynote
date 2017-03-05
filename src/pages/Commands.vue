<template>
  <box>
    <v-title legend="commands"></v-title>
    <v-wrap>
      <ul>
        <li>
          初始化一個 Vue 專案<br/>
          <pre>$ vue init [template-name] [project-name]</pre></li>
        <li>
          官方 Vue Template 列表<br/>
          <pre>$ vue list</pre></li>
        <li>
          測試 .vue 單檔<br/>
          <pre>$ vue build [entry]</pre></li>
        <li>
          恩..對<br/>
          <pre>$ vue help [cmd]</pre></li>
      </ul>
    </v-wrap>
  </box>
</template>

<script>
  export default {
    name: 'vue-list'
  }
</script>
