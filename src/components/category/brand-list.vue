<template>
  <div class="brands row justify-between">
    <div
      class="brand col-6 relative-position"
      v-for="item in brands"
      :key="item.id"
    >
      <p class="cursor-pointer">{{ item.title }}</p>
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
  props: ["brands"],
};
</script>

<style lang="scss" scoped>
.brands {
  height: 39.4444444444vh;
  .brand {
    font-family: monserrat;
    font-style: normal;
    font-weight: 400;
    font-size: 1.7vw;
    line-height: 2.29166666667vw;
    .tools {
      top: -55%;
      right: 5%;
      display: none;
    }
  }
  .brand:hover {
    .tools {
      display: block;
    }
  }
}
</style>
