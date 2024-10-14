<script>
import LinkButtonGroup from "~/components/molecules/LinkButtonGroup.vue";
import LoginCard from "~/components/organizations/LoginCard.vue";

export default {
  layout: "default",
};
</script>

<template>
  <main>
    <LoginCard />
  </main>
</template>

<style scoped>
.bg {
  display: grid;
  place-items: center;
  height: 100vh;
}

h1 {
  color: white;
}

p {
  color: white;
}

main {
  display: grid;
  place-items: center;
  height: 100vh;
}
</style>
