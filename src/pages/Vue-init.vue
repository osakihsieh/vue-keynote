<template>
  <box>
    <v-title legend="vue init"></v-title>
    <v-wrap>
      <ul>
        <li>
          使用官方樣板<br/>
          <pre>$ vue init [template-name] [project-name]</pre></li>
        <li>
          使用 Github 上的樣板<br/>
          <pre>$ vue init username/repo [project-name]</pre><br/><br/>
          選擇樣板 branch<br/>
          <pre>$ vue init username/repo#branch [project-name]</pre><br/><br/>
          私人樣板 (透過 git clone w/ SSH keys)<br/>
          <pre>$ vue init username/repo [project-name] --clone</pre></li>
        <li>
          使用 Bitbucket 上的樣板<br/>
          <pre>$ vue init bitbucket:username/repo [project-name]</pre></li>
        <li>
          使用本機上的樣板<br/>
          <pre>$ vue init ~/template-path my-project</pre></li>
      </ul>
    </v-wrap>
  </box>
</template>

<script>
  export default {
    name: 'vue-init'
  }
</script>
