<template>
  <div class="absolute-top-right icons">
    <q-btn
      push
      color="gray"
      text-color="white"
      round
      icon="edit"
      class="q-mr-sm"
    />
    <q-btn
      push
      color="gray"
      text-color="white"
      round
      icon="delete"
      @click="openDeleteModal"
    />
  </div>
</template>

<script>
export default {
  methods: {
    openDeleteModal() {
      this.$emit("openDeleteModal");
    },
  },
};
</script>

<style></style>
