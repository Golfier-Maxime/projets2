<template>
  <div>
    <axolott></axolott>
    <br />
    <quete></quete>
    <!-- v-for="i in 1" :key="i" -->
  </div>
</template>

<script>
import Axolott from "./axolott.vue";
import quete from "./quete.vue";

export default { components: { Axolott, quete } };
</script>