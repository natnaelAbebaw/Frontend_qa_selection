<template>
  <button class="btn-second">
    <div>
      <Image :src="img" type="sm" alt="icon" />
      <span>{{ label }}</span>
    </div>
  </button>
</template>
<script>
export default {
  name: "LinkButton",
  props: {
    img: {
      type: String,
      required: true,
    },
    label: {
      type: String,
      required: true,
    },
  },
};
</script>

<style scoped>
.btn-second {
  width: 100%;
  padding: 12px 20px;
  background-color: transparent;
  color: white;
  border: 1px solid rgb(59, 59, 59);
  border-radius: 4px;
  margin-bottom: 10px;
  cursor: pointer;
  transition: background-color 0.3s;
}

.btn-second:hover {
  background-color: rgb(74, 74, 74);
}
.btn-second img {
  width: 20px;
  margin-right: 10px;
  justify-self: end;
}
.btn-second span {
  justify-self: start;
}

.btn-second > div {
  display: grid;
  grid-template-columns: 1fr 2fr;
  align-items: center;
}
</style>
