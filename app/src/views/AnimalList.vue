<template>
  <div class="Allparts">
    <img :src="animal.image" :alt="animal.part" />
    <h2>{{ animal.part }}</h2>
    <button>Implant</button>
  </div>
</template>

<script setup>
defineProps({
  animal: {
    type: Object,
    required: true,
  },
})
</script>

<style scoped>
.Allparts {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  width: 150px;
  height: 200px;

  padding: 10px;
  border: 3px solid cyan;
  border-radius: 10px;
  background: white;
  box-sizing: border-box;
}

img {
  width: 100px;
  height: 100px;
  object-fit: contain;
}

h2 {
  font-size: 14px;
  text-align: center;
  margin: 5px 0;
}

button {
  font-size: 12px;
  padding: 4px 8px;
}
</style>
