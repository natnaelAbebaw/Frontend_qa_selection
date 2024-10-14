<template>
  <div class="topBox">
    <Image
      src="https://develop.aladia.io/_nuxt/image.ChQ3biW9.png"
      type="md"
      alt="icon"
    />
    <div>
      <Heading text="Welcome to aladia," type="h1" />
      <Text text="Create or access your account from here" />
    </div>
  </div>
</template>

<style scoped>
.topBox {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  align-items: center;
  border: 1px solid rgb(59, 59, 59);
  border-radius: 4px;
  margin-bottom: 30px;
}

.topBox div {
  padding: 30px 0px;
}

.topBox img {
  width: 150px;
  padding: 0 20px 0 0;
}

.topBox p {
  color: rgb(139, 139, 139);
  font-size: 14px;
}
</style>
