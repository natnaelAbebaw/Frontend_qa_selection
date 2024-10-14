<template>
  <p>{{ text }}</p>
</template>

<script>
export default {
  name: "Text",
  props: {
    text: {
      type: String,
      required: true,
    },
  },
};
</script>

<style scoped>
p {
  color: rgb(139, 139, 139);
  font-size: 14px;
}
</style>
