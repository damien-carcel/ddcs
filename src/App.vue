<template>
  <div id="app">
    <CharacterBase />
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import CharacterBase from "./components/CharacterBase/CharacterBase.vue";

export default Vue.extend({
  name: "App",
  components: {
    CharacterBase,
  },
});
</script>

<style lang="less">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
