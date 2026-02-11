<template>
  <div>
    <AnimalList v-for="animal in AnimalParts" :key="animal.Part" :animal="animal" />
  </div>
</template>

<script setup>
import { ref } from 'vue'
import AnimalList from '@/views/AnimalList.vue'
const AnimalParts = ref([
  animalPart = ''
  { origin: 'Lion', Part: 'Tail' },
  { origin: 'Lion', Part: 'Head' },
  { origin: 'Lion', Part: 'RightLegs' },
  { origin: 'Lion', Part: 'LeftLegs' },
  { origin: 'Lion', Part: 'MainBody' },
  { origin: 'Tiger', Part: 'Tail' },
  { origin: 'Tiger', Part: 'Head' },
  { origin: 'Tiger', Part: 'RightLegs' },
  { origin: 'Tiger', Part: 'LeftLegs' },
  { origin: 'Tiger', Part: 'MainBody' },
  { origin: 'Cat', Part: 'Tail' },
  { origin: 'Cat', Part: 'Head' },
  { origin: 'Cat', Part: 'RightLegs' },
  { origin: 'Cat', Part: 'LeftLegs' },
  { origin: 'Cat', Part: 'MainBody' },
  { origin: 'Dog', Part: 'Tail' },
  { origin: 'Dog', Part: 'Head' },
  { origin: 'Dog', Part: 'RightLegs' },
  { origin: 'Dog', Part: 'LeftLegs' },
  { origin: 'Dog', Part: 'MainBody' },
])
</script>

<style scoped>
div {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  padding: 16px;
  margin: 20px;
}

h1 {
  text-align: center;
  margin-bottom: 20px;
}
.container {
  display: flex;
  width: 80vw;
  margin: 20px auto;
  justify-content: space-around;
  align-items: center;
  flex-wrap: wrap;
}
.card {
  border: 1px solid #ccc;
  padding: 12px;
  margin-bottom: 12px;
  border-radius: 6px;
  width: 300px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
}
</style>
