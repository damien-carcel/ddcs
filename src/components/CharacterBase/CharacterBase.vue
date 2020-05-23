<template>
  <div class="character-base">
    <FlatInput label="Nom du personnage" />
    <FlatInput label="Joueur" />
    <FlatInput label="Classe" />
    <FlatInput label="Niveau" />
    <FlatInput label="Race" />
    <FlatInput label="Alignement" />
    <FlatInput label="Divinité" />
    <FlatInput label="Catégorie de taille" />
    <FlatInput label="Age" />
    <FlatInput label="Sexe" />
    <FlatInput label="Taille" />
    <FlatInput label="Poids" />
    <FlatInput label="Yeux" />
    <FlatInput label="Cheveux" />
    <FlatInput label="Peau" />
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import FlatInput from "./FlatInput.vue";

export default Vue.extend({
  name: "CharacterBase",
  components: {
    FlatInput,
  },
});
</script>

<!--<style scoped lang="less"></style>-->
