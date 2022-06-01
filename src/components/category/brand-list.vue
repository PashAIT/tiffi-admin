<template>
  <div class="brands row">
    <div class="brand col-6" v-for="item in brands" :key="item.id">
      <p>{{ item.title }}</p>
    </div>
  </div>
</template>

<script>
export default {
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
    font-size: 1.71875vw;
    line-height: 2.29166666667vw;
  }
}
</style>
