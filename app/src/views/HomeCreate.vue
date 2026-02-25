<template>
  <div class="AnimalContainerList">
    <AnimalList v-for="animal in AnimalParts" :key="animal.part" :animal="animal" />
  </div>
</template>

<script setup>
import { ref } from 'vue'
import AnimalList from '@/views/AnimalList.vue'
const AnimalParts = ref([
  { part: 'Lion - Tail', image: '/app/' },
  { part: 'Lion - Head' },
  { part: 'Lion - Legs' },
  { part: 'Lion - MainBody' },
  { part: 'Tiger - Tail' },
  { part: 'Tiger - Head' },
  { part: 'Tiger - Legs' },
  { part: 'Tiger - MainBody' },
  { part: 'Cat - Tail' },
  { part: 'Cat - Head' },
  { part: 'Cat - Legs' },
  { part: 'Cat - MainBody' },
  { part: 'Dog - Tail' },
  { part: 'Dog - Head' },
  { part: 'Dog - Legs' },
  { part: 'Dog - MainBody' },
])
</script>

<style scoped>
.AnimalContainerList {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  position: absolute;
  right: 5%;
  top: 10%;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;
  width: 40%;
  padding: 1.5rem;
  background: beige;
  border-radius: 12px;
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.08);
}
</style>
