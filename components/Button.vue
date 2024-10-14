<template>
  <button class="btn">Enter</button>
</template>

<style scoped>
.btn {
  padding: 12px 20px;
  background-color: none;
  border: none;
  width: 100%;
  color: rgb(190, 190, 190);
  opacity: 0.8;
  border-radius: 4px;
  background: linear-gradient(
    15deg,
    #fff0 9.55%,
    #fff0 30.28%,
    #fff6,
    #fff0 41.58%,
    #fff0 59.02%,
    #fff 67.97%,
    #fff0 74.56%,
    #fff
  );
  background-position: right bottom;
  margin-bottom: 20px;
}

.btn--primary {
  background-color: #777;
  color: white;
  opacity: 1;
}

.btn--secondary {
  background-color: #444;
  color: white;
  opacity: 1;
}

.btn--tertiary {
  background-color: #333;
  color: white;
  opacity: 1;
}
</style>
