<template>
  <div class="grid grid-cols-3 m-5">
    <div class="my-2">
      <div>
        <FlatInput identifier="name" label="Nom du personnage" />
      </div>
      <div class="flex">
        <FlatInput identifier="class" label="Classe" />
        <FlatInput identifier="level" label="Niveau" />
      </div>
      <div class="flex">
        <FlatInput identifier="sizeCategory" label="Catégorie de taille" />
        <FlatInput identifier="size" label="Taille" />
        <FlatInput identifier="age" label="Age" />
        <FlatInput identifier="sex" label="Sexe" />
      </div>
    </div>
    <div class="my-2">
      <div class="flex">
        <FlatInput identifier="playerName" label="Joueur" />
      </div>
      <div class="flex">
        <FlatInput identifier="race" label="Race" />
        <FlatInput identifier="alignment" label="Alignement" />
        <FlatInput identifier="divinity" label="Divinité" />
      </div>
      <div class="flex">
        <FlatInput identifier="weight" label="Poids" />
        <FlatInput identifier="eyes" label="Yeux" />
        <FlatInput identifier="hair" label="Cheveux" />
        <FlatInput identifier="skin" label="Peau" />
      </div>
    </div>
    <div class="flex justify-center my-2">
      <div class="self-center">
        <img
          alt="D&D character sheet logo"
          src="../../assets/images/logo.png"
        />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import FlatInput from "@/components/CharacterBase/FlatInput.vue";

export default Vue.extend({
  name: "CharacterBase",
  components: {
    FlatInput,
  },
});
</script>
