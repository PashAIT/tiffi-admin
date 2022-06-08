<template>
  <div class="category-list row">
    <div
      class="col-11 q-mb-lg cursor-pointer relative-position category"
      v-for="item in categories"
      :key="item.id"
      @click="openSubCategory(item.id)"
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
      <tools-wrapper
        class="absolute-top-right tools"
        :bgColor="`grey`"
        :size="`0.7vw`"
      />
    </div>
  </div>
</template>

<script>
import toolsWrapper from "../tools-wrapper/tools-wrapper.vue";
export default {
  components: { toolsWrapper },
  props: ["categories"],
  data() {
    return {
      activecategoryId: 1,
    };
  },
  methods: {
    openSubCategory(id) {
      this.$emit("getActive", id);
      this.activecategoryId = id;
    },
  },
};
</script>

<style lang="scss" scoped>
.category-list {
  .category:hover {
    .tools {
      display: block;
    }
  }
  .category {
    .tools {
      display: none;
      top: -40%;
    }
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
}
</style>
