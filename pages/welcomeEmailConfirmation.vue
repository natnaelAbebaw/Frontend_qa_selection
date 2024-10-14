<template>
  <main>
    <div class="container">
      <div class="imagebox">
        <Image
          type="lg"
          src="https://develop.aladia.io/_nuxt/image.ChQ3biW9.png"
        />
      </div>

      <div class="textBox">
        <Text text="Thanks for joining Aladia." />
      </div>

      <div class="textBox">
        <Text
          text="Please enter below the 6-digit code we sent you through your
        registration e-mail:"
        />
      </div>

      <div class="numberbox">
        <div v-for="n in 6" :key="n"></div>
      </div>

      <div class="textBox">
        <Text text="You didn't receive any mail?" />
      </div>

      <Button class="btn">Send Link</Button>
    </div>
  </main>
</template>

<script>
import Button from "~/components/Button.vue";

export default {
  layout: "default",
  methods: {
    back() {
      this.$router.back();
    },
  },
};
</script>

<style scoped>
.bg {
  display: grid;
  place-items: center;
  height: 100vh;
}

h2 {
  color: white;
}

.container {
  border: 1px solid rgb(90, 90, 90);
  padding: 50px 20px;
  max-width: 400px;
  border-radius: 6px;
  display: flex;
  flex-direction: column;
  align-items: center;
}

p {
  color: white;
}

main {
  display: grid;
  place-items: center;
  height: 100vh;
}

.imagebox {
  margin-bottom: 30px;
}

.textBox {
  text-align: center;
  margin-bottom: 20px;
}

.textBox:last-of-type {
  margin-bottom: 100px;
}

.numberbox {
  display: flex;
  gap: 15px;
  margin-top: 50px;
  margin-bottom: 20px;
}

.numberbox div {
  width: 40px;
  aspect-ratio: 1;
  background-color: #fff;
  border-radius: 4px;
}
</style>
