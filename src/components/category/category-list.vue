<template>
  <div class="category-list row">
    <category-item
      v-for="item in categories"
      :key="`item${item.id}`"
      :item="item"
      :active="activecategoryId"
      @getActive="getActiveItem"
    />
  </div>
</template>

<script>
import categoryItem from "./category-item.vue";
export default {
  components: { categoryItem },
  props: ["categories"],
  data() {
    return {
      activecategoryId: 1,
    };
  },
  methods: {
    getActiveItem(id) {
      this.$emit("getactiveCategory", id);
      this.activecategoryId = id;
    },
  },
};
</script>

<style lang="scss" scoped></style>
