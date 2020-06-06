<template>
  <div class="flex-auto mx-2 px-2">
    <input
      class="appearance-none border-b border-gray-800 w-full py-1"
      type="text"
      :aria-label="label"
      :id="inputId"
    />
    <label class="text-sm text-gray-600" :for="inputId">{{ label }}</label>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { v4 as uuidv4 } from "uuid";

export default Vue.extend({
  data() {
    const inputId: string = uuidv4();

    return {
      inputId: inputId,
    };
  },

  name: "FlatInput",
  props: {
    label: String,
  },
});
</script>
