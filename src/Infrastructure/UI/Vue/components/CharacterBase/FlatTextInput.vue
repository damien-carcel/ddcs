<template>
  <div class="flex-auto mx-2 px-2">
    <input
      class="appearance-none border-b border-gray-800 w-full py-1"
      type="text"
      :aria-label="label"
      :id="identifier"
      v-model="inputValue"
    />
    <label class="text-sm text-gray-600" :for="identifier">{{ label }}</label>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'FlatTextInput',
  props: {
    identifier: String,
    label: String,
  },
  data: function () {
    return {
      inputValue: this.$store.state.characterBaseInformation.get(this.identifier),
    };
  },
  watch: {
    inputValue(newInputValue: string): void {
      this.$store.commit('updateCharacterBaseInformation', {
        key: this.identifier,
        value: newInputValue,
      });
    },
  },
});
</script>
