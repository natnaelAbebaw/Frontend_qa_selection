<template>
  <img :src="src" :class="type" alt="image" />
</template>

<script setup>
const props = defineProps({
  src: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    default: "md",
    options: ["md", "sm"],
  },
});
</script>

<style scoped>
.md {
  width: 150px;
  padding: 0 20px 0 0;
}

.sm {
  width: 20px;
  margin-right: 10px;
  justify-self: end;
}

.lg {
  width: 200px;
  padding: 0 20px 0 0;
}
</style>
