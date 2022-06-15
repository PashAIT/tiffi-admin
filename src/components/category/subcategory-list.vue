<template>
  <div class="subcategory-list row content-center">
    <subcategory-item
      v-for="item in subCategory"
      :key="`item${item.id}`"
      :item="item"
      :activeSub="activeSubcategoryId"
      @getActiveSubCategory="openBrands"
    />
  </div>
</template>

<script>
import subcategoryItem from "./subcategory-item.vue";
export default {
  components: { subcategoryItem },
  props: ["subCategory"],
  data() {
    return {
      activeSubcategoryId: 1,
    };
  },
  methods: {
    openBrands(id) {
      this.activeSubcategoryId = id;
      this.$emit("activeSubCategory", id);
    },
  },
};
</script>

<style lang="scss" scoped></style>
