<template>
  <div class="filter-checklists">
    <q-expansion-item
      size="30px"
      v-for="item in checklists"
      :key="`${item.title}${item.id}`"
      v-model="item.active"
      :label="item.title"
      class="q-mb-md"
    >
      <q-card>
        <q-card-section class="column no-wrap checkLists">
          <q-input outlined rounded label="Я ищу..." class="q-mb-sm" />
          <q-checkbox
            v-for="list in item.lists"
            :key="`${list.title}${list.id}`"
            v-model="list.active"
            color="black"
            class="q-mb-sm"
            size="34px"
            :keep-color="false"
            :label="list.title"
          ></q-checkbox>
        </q-card-section>
      </q-card>
    </q-expansion-item>
    <q-expansion-item
      size="30px"
      v-model="colorChecklist.active"
      :label="colorChecklist.title"
      class="q-mb-md"
    >
      <q-color
        v-model="hex"
        default-view="palette"
        no-header
        no-footer
        :palette="[
          '#019A9D',
          '#D9B801',
          '#E8045A',
          '#B2028A',
          '#2A0449',
          '#019A9D',
        ]"
        class="my-color-picker q-pa-lg"
      ></q-color>
    </q-expansion-item>
  </div>
</template>

<script>
export default {
  data() {
    return {
      hex: "",
      activeHex: [],
      checklists: [
        {
          id: 1,
          title: "Категория",
          active: false,
          lists: [
            {
              id: 1,
              title: "Одежда",
              value: "clothes",
              active: false,
            },
            {
              id: 2,
              title: "Обувь",
              value: "shoes",
              active: false,
            },
            {
              id: 3,
              title: "Одежда",
              value: "clothes",
              active: false,
            },
            {
              id: 4,
              title: "Обувь",
              value: "shoes",
              active: false,
            },
            {
              id: 5,
              title: "Одежда",
              value: "clothes",
              active: false,
            },
            {
              id: 6,
              title: "Обувь",
              value: "shoes",
              active: false,
            },
          ],
        },
        {
          id: 2,
          title: "Подкатегория",
          active: false,
          lists: [
            {
              id: 1,
              title: "Одежда",
              value: "clothes",
              active: false,
            },
            {
              id: 2,
              title: "Обувь",
              value: "shoes",
              active: false,
            },
          ],
        },
      ],
      colorChecklist: {
        title: "Цвет",
        active: false,
        colors: [
          {
            id: 1,
            value: "black",
            active: false,
          },
          {
            id: 2,
            value: "pink",
            active: false,
          },
          {
            id: 3,
            value: "blue",
            active: false,
          },
          {
            id: 4,
            value: "green",
            active: false,
          },
          {
            id: 5,
            value: "red",
            active: false,
          },
          {
            id: 6,
            value: "lightblue",
            active: false,
          },
          {
            id: 7,
            value: "white",
            active: false,
          },
        ],
      },
    };
  },
};
</script>

<style lang="scss" scoped></style>
