<template>
  <div class="MainLayout">
    <div class="BigBox"></div>

    <div class="AnimalContainerList">
      <AnimalList v-for="animal in AnimalParts" :key="animal.part" :animal="animal">
        <button @click="implant(animal)">Implant</button>
      </AnimalList>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import AnimalList from '@/views/AnimalList.vue'

function implant(animalPart) {
  console.log(animalPart.part)
}

const AnimalParts = ref([
  { part: 'Lion Head', image: '/lionhead.png' },
  { part: 'Lion MainBody', image: '/lionbody.png' },
  { part: 'Lion Legs', image: '/lionlegs.png' },
  { part: 'Lion Tail', image: '/liontail.png' },
  { part: 'Tiger Head', image: '/tigerhead.png' },
  { part: 'Tiger MainBody', image: '/tigerbody.png' },
  { part: 'Tiger Legs', image: '/tigerlegs.png' },
  { part: 'Tiger Tail', image: '/realtigertail.png' },
  { part: 'Cat Head', image: '/cathead.png' },
  { part: 'Cat MainBody', image: '/catbody.png' },
  { part: 'Cat Legs', image: '/catlegs.png' },
  { part: 'Cat Tail', image: '/cattail.png' },
  { part: 'Dog Head', image: '/doghead.png' },
  { part: 'Dog MainBody', image: '/dogbody.png' },
  { part: 'Dog Legs', image: '/doglegs.png' },
  { part: 'Dog Tail', image: '/dogtail.png' },
])
</script>

<style scoped>
.MainLayout {
  display: flex;
  gap: 2rem;
  align-items: flex-start;
  padding: 2rem;
}

.BigBox {
  width: 400px;
  min-height: 600px;
  background: white;
  border-radius: 16px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  padding: 2rem;
}

.AnimalContainerList {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1rem;
  width: 40%;
  padding: 1.5rem;
  background: beige;
  border-radius: 12px;
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.08);
}
</style>
