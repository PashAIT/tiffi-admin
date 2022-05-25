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
        <tools-wrapper
          v-show="item.showText"
          @openDeleteModal="openDeleteModal"
        />
      </q-img>
    </div>
    <div class="delete-modal">
      <q-dialog
        v-model="deleteModal"
        persistent
        transition-show="flip-down"
        transition-hide="flip-up"
      >
        <q-card class="bg-white text-black q-pa-sm">
          <q-bar class="bg-white q-mb-md">
            <q-space></q-space>
            <q-btn dense flat icon="close" v-close-popup></q-btn>
          </q-bar>

          <q-card-section class="q-pt-none row justify-center items-center">
            <h3
              class="text-h5 text-center q-mb-lg q-pa-md"
              style="font-family: monserrat; font-size: 1.3vw"
            >
              Вы уверены, что хотите удалить этот элемент?
            </h3>
            <div class="buttons row full-width justify-center">
              <q-btn color="black" label="да" rounded class="q-px-xl q-mr-md" />
              <q-btn
                outline
                color="black"
                label="нет"
                rounded
                class="q-px-xl"
              />
            </div>
          </q-card-section>
        </q-card>
      </q-dialog>
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
      deleteModal: true,
    };
  },
  methods: {
    openDeleteModal() {
      this.deleteModal = true;
    },
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
