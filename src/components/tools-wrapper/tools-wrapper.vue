<template>
  <div class="absolute-top-right icons">
    <q-btn
      unelevated
      :color="bgColor"
      text-color="white"
      round
      icon="edit"
      class="q-mr-sm"
      :size="size"
    />
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
</template>

<script>
export default {
  props: ["bgColor", "size"],
  methods: {
    openDeleteModal() {
      this.$emit("openDeleteModal");
    },
  },
};
</script>

<style></style>
