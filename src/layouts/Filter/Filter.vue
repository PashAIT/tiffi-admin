<template>
  <div class="filter">
    <div class="newAndSales-checkboxs row q-mb-lg">
      <q-checkbox
        v-model="newProductsCheckbox"
        color="black"
        size="36px"
        class="q-mr-xl"
        :keep-color="false"
        label="Новинки"
      ></q-checkbox>
      <q-checkbox
        v-model="saleCheckbox"
        color="black"
        size="36px"
        :keep-color="false"
        label="Скидки"
      ></q-checkbox>
    </div>
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
        <q-card>
          <q-card-section class="row">
            <q-checkbox
              v-for="color in colorChecklist.colors"
              :key="`${color.title}${color.id}`"
              v-model="color.active"
              :color="color.value"
              class="q-mb-sm"
              size="34px"
              :keep-color="false"
            ></q-checkbox>
          </q-card-section>
        </q-card>
      </q-expansion-item>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      newProductsCheckbox: false,
      saleCheckbox: false,
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
            active: true,
          },
          {
            id: 2,
            value: "pink",
            active: true,
          },
          {
            id: 3,
            value: "blue",
            active: true,
          },
          {
            id: 4,
            value: "green",
            active: true,
          },
          {
            id: 5,
            value: "red",
            active: true,
          },
          {
            id: 6,
            value: "lightblue",
            active: true,
          },
          {
            id: 7,
            value: "white",
            active: true,
          },
        ],
      },
    };
  },
};
</script>

<style lang="scss" scoped>
.filter {
  font-family: monserratLight;
  .newAndSales-checkboxs {
    font-style: normal;
    font-weight: 400;
    font-size: 1.14583333333vw;
    line-height: 20px;
  }
  .filter-checklists {
    width: 70%;
    .q-expansion-item {
      font-size: 1.25vw;
      .checkLists {
        max-height: 200px;
        overflow: auto;
        .q-checkbox {
          font-size: 1.14583333333vw;
        }
      }
    }
  }
}
</style>
