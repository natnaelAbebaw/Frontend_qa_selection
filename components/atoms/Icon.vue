<template>
  <i :class="icon" />
</template>

<script setup>
const props = defineProps({
  icon: {
    type: String,
    required: true,
  },
});
</script>

<style>
i {
  color: #333;
}
</style>
