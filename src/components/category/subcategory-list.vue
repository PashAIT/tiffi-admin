<template>
  <div class="subcategory-list row content-center">
    <div
      class="col-11 q-mb-lg relative-position subcategory"
      style="height: max-content"
      v-for="item in subCategory"
      :key="item.id"
      @click="openBrands(item.id)"
    >
      <div class="row justify-center">
        <h5
          class="cursor-pointer"
          :class="{
            'active-class': activeSubcategoryId === item.id,
            'subcategory-item': activeSubcategoryId !== item.id,
          }"
        >
          {{ item.title }}
          <q-icon
            :name="
              item.id === activeSubcategoryId
                ? 'keyboard_arrow_right'
                : 'keyboard_arrow_up'
            "
          ></q-icon>
        </h5>
      </div>
      <!-- <tools-wrapper
        :bgColor="`grey`"
        :size="`0.7vw`"
        class="absolute-right tools"
      /> -->
    </div>
  </div>
</template>

<script>
// import toolsWrapper from "../tools-wrapper/delete-tools-wrapper.vue";
export default {
  // components: { toolsWrapper },
  props: ["subCategory"],
  data() {
    return {
      activeSubcategoryId: 1,
    };
  },
  methods: {
    openBrands(id) {
      this.activeSubcategoryId = id;
      this.$emit("getActiveSubCategory", id);
    },
  },
};
</script>

<style lang="scss" scoped>
.subcategory-list {
  .subcategory:hover {
    .tools {
      display: block;
    }
  }
  .subcategory {
    .tools {
      display: none;
      top: -80%;
      right: -12%;
    }
  }
  .subcategory-item {
    font-family: monserrat;
    font-style: normal;
    font-weight: 500;
    font-size: 1.19791666667vw;
    opacity: 0.7;
    transition: all 0.4s;
  }

  .active-class {
    font-family: monserrat;
    font-style: normal;
    font-weight: 500;
    font-size: 1.35vw;
    transition: all 0.4s;
    opacity: 1;
  }
}
</style>
