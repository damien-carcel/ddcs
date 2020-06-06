<template>
  <div class="grid grid-cols-3 m-5">
    <div class="my-2">
      <div>
        <FlatInput label="Nom du personnage" />
      </div>
      <div class="flex">
        <FlatInput label="Classe" />
        <FlatInput label="Niveau" />
      </div>
      <div class="flex">
        <FlatInput label="Catégorie de taille" />
        <FlatInput label="Taille" />
        <FlatInput label="Age" />
        <FlatInput label="Sexe" />
      </div>
    </div>
    <div class="my-2">
      <div class="flex">
        <FlatInput label="Joueur" />
      </div>
      <div class="flex">
        <FlatInput label="Race" />
        <FlatInput label="Alignement" />
        <FlatInput label="Divinité" />
      </div>
      <div class="flex">
        <FlatInput label="Poids" />
        <FlatInput label="Yeux" />
        <FlatInput label="Cheveux" />
        <FlatInput label="Peau" />
      </div>
    </div>
    <div class="flex justify-center my-2">
      <div class="self-center">
        <img
          alt="D&D character sheet logo"
          class="h-40"
          src="../../assets/images/logo.png"
        />
      </div>
    </div>
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
