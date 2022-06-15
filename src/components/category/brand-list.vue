<template>
  <div class="brands row justify-between">
    <brand-item v-for="item in brands" :key="`item${item.id}`" :item="item" />
  </div>
</template>

<script>
import brandItem from "./brand-item.vue";
export default {
  components: { brandItem },
  props: ["brands"],
};
</script>

<style lang="scss" scoped>
.brands {
  height: 39.4444444444vh;
}
</style>
