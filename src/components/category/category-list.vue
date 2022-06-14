<template>
  <div class="category-list row">
    <category-item v-for="item in categories" :key="item.id" :item="item" />
  </div>
</template>

<script>
import categoryItem from "./category-item.vue";
export default {
  components: { categoryItem },
  props: ["categories"],
};
</script>

<style lang="scss" scoped></style>
