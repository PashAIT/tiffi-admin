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
    <q-card style="width: 83vw; max-width: 90vw">
      <q-bar class="bg-white text-black q-pa-lg q-mt-sm">
        <q-space />
        <q-btn dense flat icon="close" style="" v-close-popup> </q-btn>
      </q-bar>

      <q-card-section class="row justify-center">
        <div class="photo-container col-4">photo</div>
        <div class="form-container col-6 q-ml-md">
          <div class="checkboxes row justify-evenly">
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

<style></style>
