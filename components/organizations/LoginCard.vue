<template>
  <div class="container">
    <TopBox />
    <Loginforms />
    <div class="or">
      <div></div>
      <div>Or</div>
      <div></div>
    </div>
    <LinkButtonGroup />

    <div class="termCondtions">Team & Conditions</div>
  </div>
</template>

<style scoped>
.container {
  border: 1px solid rgb(90, 90, 90);
  padding: 40px 20px 10px 20px;
  max-width: 400px;
  border-radius: 6px;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.or {
  color: white;
  width: 100%;
  display: grid;
  grid-template-columns: 1fr auto 1fr;
  gap: 10px;
  align-items: center;
  margin-bottom: 20px;
}

.or div:first-child,
.or div:last-child {
  /* border-top: 1px solid rgb(165, 165, 165); */
  width: 100%;
  margin: 10px 0;
  height: 1px;
  background-image: linear-gradient(to right, #fff0, #fff);
}
.or div:last-child {
  background-image: linear-gradient(to left, #fff0, #fff);
}

.termCondtions {
  margin-top: 30px;
  color: #5f5f5f;
}
</style>
