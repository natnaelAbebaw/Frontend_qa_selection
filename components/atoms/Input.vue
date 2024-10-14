<template>
  <Field
    as="input"
    :type="props.type"
    :name="props.name"
    :placeholder="props.placeholder"
  />
</template>

<script setup>
import { Field } from "vee-validate";
const props = defineProps({
  type: String,
  name: String,
  placeholder: String,
});
</script>

<style scoped>
input {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid rgb(165, 165, 165);
  padding: 12px 0px 12px 40px;
  width: 100%;
}
</style>
