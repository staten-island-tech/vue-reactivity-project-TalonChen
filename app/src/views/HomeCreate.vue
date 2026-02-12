<template>
  <div class="AnimalContainerList">
    <AnimalList v-for="animal in AnimalParts" :key="animal.part" :animal="animal" />
  </div>
</template>

<script setup>
import { ref } from 'vue'
import AnimalList from '@/views/AnimalList.vue'
const AnimalParts = ref([
  { part: 'Lion - Tail' },
  { part: 'Lion - Head' },
  { part: 'Lion - RightLegs' },
  { part: 'Lion - LeftLegs' },
  { part: 'Lion - MainBody' },

  { part: 'Tiger - Tail' },
  { part: 'Tiger - Head' },
  { part: 'Tiger - RightLegs' },
  { part: 'Tiger - LeftLegs' },
  { part: 'Tiger - MainBody' },

  { part: 'Cat - Tail' },
  { part: 'Cat - Head' },
  { part: 'Cat - RightLegs' },
  { part: 'Cat - LeftLegs' },
  { part: 'Cat - MainBody' },

  { part: 'Dog - Tail' },
  { part: 'Dog - Head' },
  { part: 'Dog - RightLegs' },
  { part: 'Dog - LeftLegs' },
  { part: 'Dog - MainBody' },
])
</script>

<style scoped>
.AnimalContainerList {
  position: absolute;
  right: 5%;
  top: 50%;
  transform: translateY(-50%);

  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;

  width: 40%;
  max-height: 80vh;
  overflow-y: auto;
  padding: 1.5rem;

  background: #f9fafc;
  border-radius: 12px;
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.08);
}
</style>
