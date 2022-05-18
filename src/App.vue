<template>
  <div>
    <header2></header2>
    <body class="bg-Deep-purple">
      <br />
      <RouterLink to="/"></RouterLink>
      <main>
        <RouterView />
      </main>

      <!-- <RouterLink to="/test" class="text-blue-600 underline">test</RouterLink> -->
    </body>
    <footer2></footer2>
  </div>
</template>

<script>
import header2 from "./views/header2.vue";
import axolott from "./views/axolott.vue";
import quete from "./views/quete.vue";
import footer2 from "./views/footer2.vue";

export default {
  components: { header2, axolott, quete, footer2 },
};
</script>