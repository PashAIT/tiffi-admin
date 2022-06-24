<template>
  <div class="products q-py-lg row q-pl-xl q-pr-xl">
    <Filter class="col-3" />
    <products-container class="col-9" />
  </div>
</template>

<script>
import { Filter } from "layouts";
import { ProductsContainer } from "components";

export default {
  data() {
    return {
      //
    };
  },
  components: {
    Filter,
    ProductsContainer,
  },
};
</script>

<style lang="scss" scoped></style>
