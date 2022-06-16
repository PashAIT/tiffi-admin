<template>
  <div class="edit-product">
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
  <q-dialog v-model="isEditModalOpen" persistent>
    <q-card style="width: 83vw; max-width: 90vw" class="q-pb-xl">
      <q-bar class="bg-white text-black q-pa-md q-mt-sm">
        <q-space />
        <q-btn dense flat icon="close" style="" v-close-popup> </q-btn>
      </q-bar>

      <q-card-section class="row justify-center">
        <div class="photo-container col-4"></div>
        <div class="form-container col-6 q-ml-md">
          <div class="row justify-center">
            <div
              class="checkboxes row justify-between full-width q-mb-md q-py-lg"
            >
              <q-checkbox
                v-model="newProductsCheckbox"
                color="black"
                size="30px"
                :keep-color="false"
                label="Новинки"
              ></q-checkbox>
              <q-checkbox
                v-model="saleCheckbox"
                color="black"
                size="30px"
                :keep-color="false"
                label="Скидки"
              ></q-checkbox>
              <q-checkbox
                v-model="female"
                color="black"
                size="30px"
                :keep-color="false"
                label="Женская"
              ></q-checkbox>
              <q-checkbox
                v-model="male"
                color="black"
                size="30px"
                :keep-color="false"
                label="Мужская"
              ></q-checkbox>
            </div>
            <div class="input-container full-width row justify-between q-mb-lg">
              <div class="left-part col-5 q-gutter-y-lg">
                <q-input
                  v-model="text"
                  label="*имя"
                  outlined
                  class="add-product-modal-input"
                  :keep-color="false"
                />
                <q-select
                  v-model="model"
                  :options="options"
                  outlined
                  label="*категория"
                  style="font-family: monserrat; font-size: 18px"
                  :keep-color="false"
                  class="add-product-modal-input"
                  popup-content-style="font-family: monserrat;font-size: 20px;"
                />
                <q-select
                  v-model="model"
                  :options="options"
                  outlined
                  label="*бренд"
                  style="font-family: monserrat; font-size: 18px"
                  :keep-color="false"
                  class="add-product-modal-input"
                  popup-content-style="font-family: monserrat;font-size: 20px;"
                />
              </div>
              <div class="right-part col-5 q-gutter-y-lg q-mb-lg">
                <q-input
                  v-model="text"
                  label="*имя"
                  outlined
                  class="add-product-modal-input"
                  :keep-color="false"
                />
                <q-select
                  v-model="model"
                  :options="options"
                  outlined
                  label="*категория"
                  style="font-family: monserrat; font-size: 18px"
                  :keep-color="false"
                  class="add-product-modal-input"
                  popup-content-style="font-family: monserrat;font-size: 20px;"
                />
                <q-input
                  v-model="text"
                  label="*имя"
                  outlined
                  class="add-product-modal-input"
                  :keep-color="false"
                />
              </div>
              <div
                class="textarea full-width row q-gutter-x-lg"
                style="height: 136px"
              >
                <q-input
                  full-width
                  label="*информация"
                  outlined
                  class="add-product-modal-input full-width full-height modal-textarea"
                  :keep-color="false"
                  style="height: 100%"
                />
              </div>
            </div>
            <q-btn
              color="black "
              no-caps
              label="Редактировать"
              class="editing"
            />
          </div>
        </div>
      </q-card-section>
    </q-card>
  </q-dialog>
</template>

<script>
export default {
  data() {
    return {
      isEditModalOpen: false,
      saleCheckbox: false,
      newProductsCheckbox: false,
      female: false,
      male: false,
    };
  },
  methods: {
    openEditModal() {
      this.isEditModalOpen = true;
    },
  },
};
</script>

<style lang="scss" scoped>
.editing {
  padding: 1.48148148148vh 1.48148148148vw;
  border-radius: 15px !important;
  font-family: monserrat;
  font-style: normal;
  font-weight: 400;
  font-size: 1.04166666667vw;
  line-height: 1.25vw;
}
</style>
