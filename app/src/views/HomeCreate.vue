<template>
  <div class="MainLayout">
    <div class="BigBox">
      <div class="head"><img :src="implantedParts.head" class="part" /></div>
      <div class="body"><img :src="implantedParts.body" class="part" /></div>
      <div class="legs"><img :src="implantedParts.legs" class="part" /></div>
      <div class="tail"><img :src="implantedParts.tail" class="part" /></div>
    </div>

    <div class="AnimalContainerList">
      <AnimalList v-for="animal in AnimalParts" :key="animal.part" :animal="animal">
        <button @click="implant(animal)">Implant</button>
      </AnimalList>
    </div>
  </div>
</template>

<script setup>
import { reactive, ref } from 'vue'
import AnimalList from '@/views/AnimalList.vue'

let implantedParts = reactive({ head: null, body: null, legs: null, tail: null })

function implant(animalPart) {
  implantedParts[animalPart.type] = animalPart.image
}

const AnimalParts = ref([
  { part: 'Lion Head', type: 'head', image: '/lionhead.png' },
  { part: 'Lion MainBody', type: 'body', image: '/lionbody.png' },
  { part: 'Lion Legs', type: 'legs', image: '/lionlegs.png' },
  { part: 'Lion Tail', type: 'tail', image: '/liontail.png' },
  { part: 'Tiger Head', type: 'head', image: '/tigerhead.png' },
  { part: 'Tiger MainBody', type: 'body', image: '/tigerbody.png' },
  { part: 'Tiger Legs', type: 'legs', image: '/tigerlegs.png' },
  { part: 'Tiger Tail', type: 'tail', image: '/realtigertail.png' },
  { part: 'Cat Head', type: 'head', image: '/cathead.png' },
  { part: 'Cat MainBody', type: 'body', image: '/catbody.png' },
  { part: 'Cat Legs', type: 'legs', image: '/catlegs.png' },
  { part: 'Cat Tail', type: 'tail', image: '/cattail.png' },
  { part: 'Dog Head', type: 'head', image: '/doghead.png' },
  { part: 'Dog MainBody', type: 'body', image: '/dogbody.png' },
  { part: 'Dog Legs', type: 'legs', image: '/doglegs.png' },
  { part: 'Dog Tail', type: 'tail', image: '/dogtail.png' },
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
  position: relative;
  width: 400px;
  height: 600px;
  background: white;
  border-radius: 16px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  overflow: hidden;
}

.part {
  width: 200px;
  height: 200px;
  object-fit: contain;
}

.head,
.body,
.legs,
.tail {
  position: absolute;
}

.body {
  top: 220px;
  left: 50%;
  transform: translateX(-50%);
  z-index: 1;
}

.head {
  top: 60px;
  left: 25%;
  transform: translateX(-50%);
  z-index: 2;
}

.tail {
  top: 190px;
  right: -90px;
  z-index: 0;
}

.legs {
  bottom: 42px;
  left: 50%;
  transform: translateX(-50%);
  z-index: 0;
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
