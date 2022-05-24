<template>
  <div class="q-pt-xl q-pl-xl q-pr-xl">
    <Header />
    <router-view />
  </div>
</template>
<script>
import { defineComponent } from "vue";
import { Header } from "layouts";

export default defineComponent({
  components: { Header },
  name: "App",
});
</script>
<style lang="scss"></style>
