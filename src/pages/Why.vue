<template>
  <box>
    <v-title legend="Why Vue-Cli?"></v-title>
    <v-wrap>
      <ol>
        <li>need a development server for <strong>http:// protocol</strong></li>
        <li>makes it easier to just fork one of the official templates and create your own tailored template</li>
        <li>mess with Yeoman's generator API and publish to npm</li>
        <li>The other factor is branding. <pre>vue init</pre> just feels better than <pre>yo vue</pre></li>
      </ol>
    </v-wrap>
  </box>
</template>

<script>
  export default {
    name: 'why'
  }
</script>
