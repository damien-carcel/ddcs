<template>
  <div class="flat-input">
    <input type="text" :id="inputId" />
    <label :for="inputId">{{ label }}</label>
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
