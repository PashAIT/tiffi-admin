<template>
  <div class="products-container row q-col-gutter-md items-center">
    <div
      class="col-3"
      v-for="item in products"
      :key="`${item.title}.${item.id}`"
    >
      <q-img
        :src="`images/${item.image}`"
        @mouseover="item.showText = true"
        @mouseleave="item.showText = false"
      >
        <div
          class="absolute-bottom column items-center justify-start"
          v-show="item.showText"
        >
          <h3 class="text-caption">{{ item.title }}</h3>
          <h4 class="text-h5">{{ item.subtitle }}</h4>
        </div>
        <tools-wrapper v-show="item.showText" />
      </q-img>
    </div>
  </div>
</template>

<script>
import toolsWrapper from "../tools-wrapper/tools-wrapper.vue";
export default {
  components: { toolsWrapper },
  data() {
    return {
      products: [
        {
          id: 1,
          image: "product.png",
          title: "Платья",
          subtitle: "Max Mara",
          showText: false,
        },
        {
          id: 2,
          image: "product.png",
          title: "Платья",
          subtitle: "Max Mara",
          showText: false,
        },
        {
          id: 3,
          image: "product.png",
          title: "Платья",
          subtitle: "Max Mara",
          showText: false,
        },
        {
          id: 4,
          image: "product.png",
          title: "Платья",
          subtitle: "Max Mara",
          showText: false,
        },
        {
          id: 5,
          image: "product.png",
          title: "Платья",
          subtitle: "Max Mara",
          showText: false,
        },
        {
          id: 6,
          image: "product.png",
          title: "Платья",
          subtitle: "Max Mara",
          showText: false,
        },
        {
          id: 7,
          image: "product.png",
          title: "Платья",
          subtitle: "Max Mara",
          showText: false,
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
.products-container {
  font-family: monserrat;
  .icons {
    background: none;
  }
}
</style>
