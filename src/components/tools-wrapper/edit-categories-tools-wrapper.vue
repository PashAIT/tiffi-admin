<template>
  <div class="edit-icon">
    <q-btn
      unelevated
      :color="bgColor"
      text-color="white"
      round
      icon="edit"
      class="q-mr-sm"
      :size="size"
      @click="openEditModal"
    />
  </div>
  <div class="edit-category-modal">
    <q-dialog
      v-model="editCategoryModal"
      persistent
      transition-show="flip-down"
      transition-hide="flip-up"
    >
      <q-card
        class="bg-white text-black q-pa-sm"
        style="width: 36.4583333333vw; max-width: 75vw"
      >
        <q-bar class="bg-white q-mb-md">
          <q-space></q-space>
          <q-btn dense flat icon="close" v-close-popup></q-btn>
        </q-bar>

        <q-card-section class="q-pt-none items-center">
          <div class="col items-center q-mb-xl">
            <h3
              class="text-h5 text-center q-mb-xl"
              style="font-family: monserrat; font-size: 1.5625vw"
            >
              Редактировать категорию
            </h3>
            <div class="row justify-center">
              <input
                type="text"
                style="
                  width: 70%;
                  border: 3px solid #000000;
                  border-radius: 20px;
                  font-family: monserrat;
                  font-size: 20px;
                  padding: 1vw 0 1vw 0.5vw;
                "
              />
            </div>
          </div>
          <div class="buttons row full-width justify-evenly q-mb-md">
            <q-btn
              color="black"
              label="Добавить "
              no-caps
              class="q-px-lg"
              style="font-size: 1.2vw; border-radius: 20px"
            />
            <q-btn
              outline
              color="black"
              label="Отменить"
              class="q-px-lg"
              no-caps
              style="font-size: 1.2vw; border-radius: 20px"
              @click="closeEditCategoryModal"
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
      editCategoryModal: false,
    };
  },
  methods: {
    openEditModal() {
      this.editCategoryModal = true;
    },
    closeEditCategoryModal() {
      this.editCategoryModal = false;
    },
  },
};
</script>

<style></style>
