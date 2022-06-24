<template>
  <div>
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
<style lang="scss">
* {
  margin: 0%;
  padding: 0%;
  box-sizing: border-box;
  font-family: monserrat;
}
</style>
