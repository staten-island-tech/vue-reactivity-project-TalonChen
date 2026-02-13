<template>
  <div class="Allparts">
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
  flex-direction: row;
  flex-wrap: wrap;
  gap: 1rem;
  justify-content: space-around;
  align-items: center;
  height: 200px;
  width: 75%;
  border: 3px solid cyan;
}
</style>
