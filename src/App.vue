<template>
  <div>
  <header2></header2>
    <body class="font_deg">
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
import footer2 from "./views/footer2.vue";



export default {
  components: { header2, footer2,  },
};
</script>

<style>
.font_deg {
  background: linear-gradient(#DA9DFF, #9CEDFF);
}
</style>