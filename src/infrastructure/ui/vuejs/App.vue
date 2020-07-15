<template>
  <div id="app" class="container container-xl mx-auto">
    <CharacterBase />
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import CharacterBase from '@/infrastructure/ui/vuejs/components/CharacterBase/CharacterBase.vue';

export default Vue.extend({
  name: 'App',
  components: {
    CharacterBase,
  },
});
</script>

<style src="./assets/css/tailwind.css" />
