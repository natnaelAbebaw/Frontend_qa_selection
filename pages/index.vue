<template>
  <main>
    <div class="topbar">
      <nuxt-link class="btn-link" to="/login">
        <i data-v-df211d4a="" class="fa-solid fa-user-plus"></i>
        join us
      </nuxt-link>
    </div>
  </main>
</template>

<script>
export default {
  layout: "default",
};
</script>

<style scoped>
.topbar {
  display: flex;
  justify-content: flex-end;
  background-color: #1f1f1f;
  width: 100%;
  padding: 20px 30px;
}

.btn-link {
  background-color: #1f1f1f;
  color: white;
  border: 1px solid white;
  padding: 10px 20px;
  border-radius: 4px;
  display: flex;
  align-items: center;
  gap: 10px;
  cursor: pointer;
}
</style>
