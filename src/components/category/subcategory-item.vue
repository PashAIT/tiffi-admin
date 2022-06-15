<template>
  <div
    class="col-11 q-mb-lg relative-position subcategory"
    style="height: max-content"
    @click="openBrands(item.id)"
    @mouseover="showTools = true"
    @mouseleave="showTools = false"
  >
    <div class="row justify-center">
      <h5
        class="cursor-pointer"
        :class="{
          'active-class': activeSub === item.id,
          'subcategory-item': activeSub !== item.id,
        }"
      >
        {{ item.title }}
        <q-icon
          :name="
            item.id === activeSub ? 'keyboard_arrow_right' : 'keyboard_arrow_up'
          "
        ></q-icon>
      </h5>
      <div
        class="icons tools absolute-top-right row"
        v-show="showTools"
        style="top: -40%"
      >
        <edit-categories-tools-wrapper
          :bgColor="`grey`"
          :size="`0.7vw`"
          class="col-6"
        />
        <delete-tools-wrapper :bgColor="`grey`" :size="`0.7vw`" class="col-6" />
      </div>
    </div>
  </div>
</template>

<script>
import DeleteToolsWrapper from "../tools-wrapper/delete-tools-wrapper.vue";
import editCategoriesToolsWrapper from "../tools-wrapper/edit-categories-tools-wrapper.vue";
export default {
  props: ["item", "activeSub"],
  data() {
    return {
      showTools: false,
    };
  },
  methods: {
    openBrands(id) {
      this.activeSubcategoryId = id;
      this.$emit("getActiveSubCategory", id);
    },
  },
  components: { editCategoriesToolsWrapper, DeleteToolsWrapper },
};
</script>

<style lang="scss" scoped>
.subcategory {
  .tools {
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
</style>
