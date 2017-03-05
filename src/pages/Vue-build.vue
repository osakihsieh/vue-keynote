<template>
  <box>
    <v-title legend="vue build"></v-title>
    <v-wrap>
      <ul>
        <li><pre>$ vue build [vue-file]</pre></li>
        <li><pre>$ vue build [vue-file] --port [port]</pre></li>
        <li><pre>$ vue build [vue-file] --watch</pre></li>
        <li><pre>$ vue build [vue-file] --prod</pre></li>
      </ul>
    </v-wrap>
  </box>
</template>

<script>
  export default {
    name: 'vue-build'
  }
</script>
