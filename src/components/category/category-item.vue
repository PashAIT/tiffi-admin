<template>
  <div
    class="col-11 q-mb-lg cursor-pointer relative-position category"
    @click="openSubCategory(item.id)"
    @mouseover="showTools = true"
    @mouseleave="showTools = false"
  >
    <h3
      :class="{
        'active-class': activecategoryId === item.id,
        'category-item': activecategoryId !== item.id,
      }"
    >
      {{ item.title }}
      <q-icon
        :name="
          item.id === activecategoryId
            ? 'keyboard_arrow_right'
            : 'keyboard_arrow_up'
        "
      ></q-icon>
    </h3>
    <div class="line"></div>

    <!-- <tools-wrapper
        class="absolute-top-right tools"
        :bgColor="`grey`"
        :size="`0.7vw`"
      /> -->
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
</template>

<script>
import DeleteToolsWrapper from "../tools-wrapper/delete-tools-wrapper.vue";
import editCategoriesToolsWrapper from "../tools-wrapper/edit-categories-tools-wrapper.vue";
export default {
  props: ["item"],
  data() {
    return {
      activecategoryId: 1,
      showTools: false,
    };
  },
  methods: {
    openSubCategory(id) {
      this.$emit("getActive", id);
      this.activecategoryId = id;
    },
  },
  components: { editCategoriesToolsWrapper, DeleteToolsWrapper },
};
</script>

<style lang="scss" scoped>
.category {
  .category-item {
    font-family: monserrat;
    font-style: normal;
    font-weight: 500;
    font-size: 1.35416666667vw;
    line-height: 3vw;
    transition: all 0.4s;
    opacity: 0.7;
  }
  .line {
    height: 1.5px;
    background: #9d9d9d;
  }
  .active-class {
    font-size: 1.71875vw;
    font-style: normal;
    font-weight: 500;
    font-family: monserrat;
    line-height: 3vw;
    transition: all 0.4s;
    opacity: 1;
  }
}
</style>
