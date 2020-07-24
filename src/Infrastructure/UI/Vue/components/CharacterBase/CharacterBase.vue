<template>
  <div class="characterBase grid grid-cols-3 m-5">
    <div class="my-2">
      <div>
        <FlatTextInput identifier="name" label="Nom du personnage" />
      </div>
      <div class="flex">
        <FlatTextInput identifier="class" label="Classe" />
        <FlatNumberInput identifier="level" label="Niveau" />
      </div>
      <div class="flex">
        <FlatTextInput identifier="sizeCategory" label="Catégorie de taille" />
        <FlatTextInput identifier="size" label="Taille" />
        <FlatNumberInput identifier="age" label="Age" />
        <FlatTextInput identifier="sex" label="Sexe" />
      </div>
    </div>
    <div class="my-2">
      <div class="flex">
        <FlatTextInput identifier="playerName" label="Joueur" />
      </div>
      <div class="flex">
        <FlatTextInput identifier="race" label="Race" />
        <FlatTextInput identifier="alignment" label="Alignement" />
        <FlatTextInput identifier="divinity" label="Divinité" />
      </div>
      <div class="flex">
        <FlatNumberInput identifier="weight" label="Poids (kg)" />
        <FlatTextInput identifier="eyes" label="Yeux" />
        <FlatTextInput identifier="hair" label="Cheveux" />
        <FlatTextInput identifier="skin" label="Peau" />
      </div>
    </div>
    <div class="flex justify-center my-2">
      <div class="self-center">
        <img alt="D&D character sheet logo" src="../../assets/images/logo.png" />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import FlatTextInput from '@/Infrastructure/UI/Vue/components/CharacterBase/FlatTextInput.vue';
import FlatNumberInput from '@/Infrastructure/UI/Vue/components/CharacterBase/FlatNumberInput.vue';

export default Vue.extend({
  name: 'CharacterBase',
  components: {
    FlatTextInput,
    FlatNumberInput,
  },
});
</script>
