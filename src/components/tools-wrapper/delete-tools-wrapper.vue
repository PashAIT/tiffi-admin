<template>
  <div class="delete-icon">
    <q-btn
      unelevated
      :color="bgColor"
      text-color="white"
      round
      :size="size"
      icon="delete"
      @click="openDeleteModal"
    />
  </div>
  <div class="delete-modal">
    <q-dialog
      v-model="isOpendeleteModal"
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
              @click="closeopenDeleteModal"
            />
          </div>
        </q-card-section>
      </q-card>
    </q-dialog>
  </div>
</template>

<script>
export default {
  props: ["bgColor", "size"],
  data() {
    return {
      isOpendeleteModal: false,
    };
  },
  methods: {
    openDeleteModal() {
      this.isOpendeleteModal = true;
    },
    closeopenDeleteModal() {
      this.isOpendeleteModal = false;
    },
  },
};
</script>

<style lang="scss" scoped></style>
