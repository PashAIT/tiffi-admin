<template>
  <div class="col-3">
    <q-img
      :src="`images/${product.image}`"
      @mouseover="showText = true"
      @mouseleave="showText = false"
    >
      <div
        class="absolute-bottom column items-center justify-start"
        v-show="showText"
      >
        <h3 class="text-caption">{{ product.title }}</h3>
        <h4 class="text-h5">{{ product.subtitle }}</h4>
      </div>
      <div v-show="showText" class="icons absolute-top-right row">
        <edit-product-tools-wrapper />
        <delete-tools-wrapper />
      </div>
    </q-img>
  </div>
</template>

<script>
import deleteToolsWrapper from "../tools-wrapper/delete-tools-wrapper.vue";
import EditProductToolsWrapper from "../tools-wrapper/edit-product-tools-wrapper.vue";

export default {
  components: { deleteToolsWrapper, EditProductToolsWrapper },
  props: {
    product: Object,
  },
  data() {
    return {
      showText: false,
    };
  },
};
</script>

<style lang="scss" scoped>
.icons {
  background: none;
}
</style>
