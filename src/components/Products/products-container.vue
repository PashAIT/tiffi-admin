<template>
  <div
    class="products-container row q-col-gutter-md items-center"
    style="height: max-content"
  >
    <product-item
      v-for="item in products"
      :key="`${item.title}.${item.id}`"
      :product="item"
    />
  </div>
</template>

<script>
import ProductItem from "./product-item.vue";
export default {
  components: { ProductItem },
  data() {
    return {
      products: [
        {
          id: 1,
          image: "product.png",
          title: "Платья",
          subtitle: "Max Mara",
        },
        {
          id: 2,
          image: "product.png",
          title: "Платья",
          subtitle: "Max Mara",
        },
        {
          id: 3,
          image: "product.png",
          title: "Платья",
          subtitle: "Max Mara",
        },
        {
          id: 4,
          image: "product.png",
          title: "Платья",
          subtitle: "Max Mara",
        },
        {
          id: 5,
          image: "product.png",
          title: "Платья",
          subtitle: "Max Mara",
        },
        {
          id: 6,
          image: "product.png",
          title: "Платья",
          subtitle: "Max Mara",
        },
        {
          id: 7,
          image: "product.png",
          title: "Платья",
          subtitle: "Max Mara",
        },
      ],
    };
  },
  methods: {},
};
</script>

<style lang="scss" scoped>
.products-container {
  font-family: monserrat;
}
</style>
