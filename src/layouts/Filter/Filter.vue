<template>
  <div class="filter">
    <div class="newAndSales-checkboxs row q-mb-lg">
      <q-checkbox
        v-model="newProductsCheckbox"
        color="black"
        size="36px"
        class="q-mr-xl"
        :keep-color="false"
        label="Новинки"
      ></q-checkbox>
      <q-checkbox
        v-model="saleCheckbox"
        color="black"
        size="36px"
        :keep-color="false"
        label="Скидки"
      ></q-checkbox>
    </div>
    <filter-chacklist />
  </div>
</template>

<script>
import filterChacklist from "./filter-chacklist.vue";
export default {
  components: { filterChacklist },
  data() {
    return {
      newProductsCheckbox: false,
      saleCheckbox: false,
    };
  },
};
</script>

<style lang="scss" scoped>
.filter {
  font-family: monserratLight;
  .newAndSales-checkboxs {
    font-style: normal;
    font-weight: 400;
    font-size: 1.14583333333vw;
    line-height: 20px;
  }
  .filter-checklists {
    width: 70%;
    .q-expansion-item {
      font-size: 1.25vw;
      .checkLists {
        max-height: 200px;
        .q-checkbox {
          font-size: 1.14583333333vw;
        }
      }
    }
  }
}
</style>
