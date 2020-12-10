<template>
  <b-container id="app" fluid class="my-3">
    <h1>My Favourite Memes</h1>

    <MemeEditor />
  </b-container>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import MemeEditor from "@/components/MemeEditor.vue";

@Component({
  components: {
    MemeEditor,
  },
})
export default class App extends Vue {}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
</style>
