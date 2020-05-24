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

<style src="./assets/css/tailwind.css" />
