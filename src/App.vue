<template>
  <div>
    <Header />
    <router-view />
  </div>
</template>
<script>
import { defineComponent } from "vue";
import Header from "./components/header/header.vue";

export default defineComponent({
  components: { Header },
  name: "App",
});
</script>
<style lang="scss"></style>
