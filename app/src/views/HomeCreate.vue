<template>
  <div class="AnimalContainerList">
    <AnimalList v-for="animal in AnimalParts" :key="animal.part" :animal="animal" />
  </div>
</template>

<script setup>
import { ref } from 'vue'
import AnimalList from '@/views/AnimalList.vue'
const AnimalParts = ref([
  { part: 'Lion - Tail', image: '/liontail.png' },
  { part: 'Lion - Head', image: '/lionhead.png' },
  { part: 'Lion - Legs', image: '/lionlegs.png' },
  { part: 'Lion - MainBody', image: '/lionbody.png' },
  { part: 'Tiger - Tail', image: '/tigertail.png' },
  { part: 'Tiger - Head', image: '/tigerhead.png' },
  { part: 'Tiger - Legs', image: '/tigerlegs.png' },
  { part: 'Tiger - MainBody', image: '/tigerbody.png' },
  { part: 'Cat - Tail', image: '/cattail.png' },
  { part: 'Cat - Head', image: '/cathead.png' },
  { part: 'Cat - Legs', image: '/catlegs.png' },
  { part: 'Cat - MainBody', image: '/catbody.png' },
  { part: 'Dog - Tail', image: '/dogtail.png' },
  { part: 'Dog - Head', image: '/doghead.png' },
  { part: 'Dog - Legs', image: '/doglegs.png' },
  { part: 'Dog - MainBody', image: '/dogbody.png' },
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
