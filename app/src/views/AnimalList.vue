<template>
  <div>
    <h1>haiioi</h1>
  </div>
</template>

<script setup>
import { ref, reactive } from 'vue'
const AnimalParts = ref([
  { animal: Lion, Part: Tail },
  { animal: Lion, Part: Head },
  { animal: Lion, Part: RightLegs },
  { animal: Lion, Part: LeftLegs },
  { animal: Lion, Part: MainBody },
  { animal: Tiger, Part: Tail },
  { animal: Tiger, Part: Head },
  { animal: Tiger, Part: RightLegs },
  { animal: Tiger, Part: LeftLegs },
  { animal: Tiger, Part: MainBody },
  { animal: Cat, Part: Tail },
  { animal: Cat, Part: Head },
  { animal: Cat, Part: RightLegs },
  { animal: Cat, Part: LeftLegs },
  { animal: Cat, Part: MainBody },
  { animal: Dog, Part: Tail },
  { animal: Dog, Part: Head },
  { animal: Dog, Part: RightLegs },
  { animal: Dog, Part: LeftLegs },
  { animal: Dog, Part: MainBody },
])
</script>

<style scoped></style>
