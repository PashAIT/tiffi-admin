<template>
  <div
    class="brand col-6 relative-position"
    @mouseover="showTools = true"
    @mouseleave="showTools = false"
  >
    <p class="cursor-pointer">{{ item.title }}</p>
    <div class="tools absolute-top-right row" v-show="showTools">
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
  components: { editCategoriesToolsWrapper, DeleteToolsWrapper },
  props: ["item"],
  data() {
    return {
      showTools: false,
    };
  },
};
</script>

<style lang="scss" scoped>
.brand {
  font-family: monserrat;
  font-style: normal;
  font-weight: 400;
  font-size: 1.7vw;
  line-height: 2.29166666667vw;
  .tools {
    top: -55%;
    right: 5%;
  }
}
</style>
