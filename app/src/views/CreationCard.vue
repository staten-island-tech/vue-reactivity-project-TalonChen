<template>
  <div>
    <AnimalList v-for="animal in animals" :key="animal.origin" :animal="animal" />
  </div>
</template>

<script setup>
import AnimalList from '@/views/AnimalList.vue'
import { ref } from 'vue'
const AnimalParts = ref([
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

<style scoped></style>
