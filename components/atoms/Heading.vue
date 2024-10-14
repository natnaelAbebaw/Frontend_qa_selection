<template>
  <component class="heading" :is="level">
    {{ text }}
  </component>
</template>

<script>
export default {
  name: "Heading",
  props: {
    level: {
      type: String,
      default: "h1",
      validator: (value) =>
        ["h1", "h2", "h3", "h4", "h5", "h6"].includes(value),
    },
    text: {
      type: String,
      required: true,
    },
  },
};
</script>

<style scoped>
.heading {
  color: white;
  font-size: 16px;
  margin-bottom: 10px;
}
</style>
