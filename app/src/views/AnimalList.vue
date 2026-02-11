<template>
  <div>
    <h2>{{ animal.Part }}</h2>
    <h2>{{ animal.origin }}</h2>
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
div {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  height: 200px;
  width: 150px;
  border: 3px solid cyan;
}
</style>
