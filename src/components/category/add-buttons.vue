<template>
  <div class="add-buttons row justify-evenly items-center">
    <q-btn
      color="black "
      no-caps
      label="Добавить категорию  +"
      @click="addCategoryModal"
    />
    <q-btn
      color="black "
      no-caps
      label="Добавить подкатегорию  +"
      @click="addSubCategoryModal"
    />
    <q-btn
      color="black "
      no-caps
      label="Добавить бренды  +"
      @click="addBrandsModal"
    />
  </div>
  <div class="add-category-modal">
    <q-dialog
      v-model="addCategoryModalOpen"
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
              Добавить категорию
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
              @click="closeAddCategoryModal"
            />
          </div>
        </q-card-section>
      </q-card>
    </q-dialog>
  </div>
  <div class="add-subCategory-modal">
    <q-dialog
      v-model="addSubCategoryModalOpen"
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
              Добавить подкатегорию
            </h3>
            <div
              class=""
              style="display: flex; flex-direction: column; align-items: center"
            >
              <q-select
                v-model="activeCategory"
                borderless
                :options="category"
                label="Категория"
                style="
                  width: 70%;
                  border: 3px solid #000000;
                  border-radius: 20px;
                  font-family: monserrat;
                  font-size: 20px;
                  padding: 0vw 0 0.6vw 0.5vw;
                "
                class="q-mb-md"
                popup-content-style="font-family: monserrat;
                  font-size: 20px;"
              ></q-select>
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
              @click="closeAddSubCategoryModal"
            />
          </div>
        </q-card-section>
      </q-card>
    </q-dialog>
  </div>
  <div class="add-brands-modal">
    <q-dialog
      v-model="addBrandsModalOpen"
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
              Добавить подкатегорию
            </h3>
            <div
              class=""
              style="display: flex; flex-direction: column; align-items: center"
            >
              <q-select
                v-model="activeCategory"
                borderless
                :options="category"
                label="Категория"
                style="
                  width: 70%;
                  border: 3px solid #000000;
                  border-radius: 20px;
                  font-family: monserrat;
                  font-size: 20px;
                  padding: 0vw 0 0.6vw 0.5vw;
                "
                class="q-mb-md"
                popup-content-style="font-family: monserrat;
                  font-size: 20px;"
              ></q-select>
              <q-select
                v-model="activeSubCategory"
                borderless
                :disable="!activeCategory"
                :options="subcategories"
                label="Подкатегория"
                style="
                  width: 70%;
                  border: 3px solid #000000;
                  border-radius: 20px;
                  font-family: monserrat;
                  font-size: 20px;
                  padding: 0vw 0 0.6vw 0.5vw;
                "
                class="q-mb-md"
                popup-content-style="font-family: monserrat;
                  font-size: 20px; max-height:150px !important;overflow:auto;"
              ></q-select>
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
              @click="closeAddBrandsModal"
            />
          </div>
        </q-card-section>
      </q-card>
    </q-dialog>
  </div>
</template>

<script>
export default {
  data() {
    return {
      activeCategory: null,
      activeSubCategory: null,
      addCategoryModalOpen: false,
      addSubCategoryModalOpen: false,
      addBrandsModalOpen: false,
      categories: [
        {
          id: 1,
          title: "Одежда",
          active: false,
          subcategories: [
            {
              id: 1,
              title: "Платья",
              active: false,
              brands: [
                {
                  id: 1,
                  title: "MAX Mara",
                },
                {
                  id: 2,
                  title: "MONCLER",
                },
                {
                  id: 3,
                  title: "NENEETTE",
                },
                {
                  id: 4,
                  title: "MARYLAY",
                },
                {
                  id: 5,
                  title: "MILVA.MI",
                },
                {
                  id: 6,
                  title: "OTTOD’AME",
                },
                {
                  id: 7,
                  title: "P.A.R.O.S.H",
                },
                {
                  id: 8,
                  title: "TWINSET",
                },
                {
                  id: 9,
                  title: "PINKO",
                },
                {
                  id: 10,
                  title: "J.B.",
                },
              ],
            },
            {
              id: 2,
              title: "Брюки",
              brands: [
                {
                  id: 1,
                  title: " Mara Armen",
                },
                {
                  id: 2,
                  title: "NCLER maxa  ",
                },
                {
                  id: 3,
                  title: "METRE",
                },
                {
                  id: 4,
                  title: "MARYLAY",
                },
                {
                  id: 5,
                  title: "NiVLVA.MI",
                },
                {
                  id: 6,
                  title: "OTTOD’AME",
                },
                {
                  id: 7,
                  title: "P.A.R.O.S.H",
                },
                {
                  id: 8,
                  title: "TWINSET",
                },
                {
                  id: 9,
                  title: "PINKO",
                },
                {
                  id: 10,
                  title: "J.B.",
                },
              ],
            },
            {
              id: 3,
              title: "Шорты",
            },
            {
              id: 4,
              title: "Юбки",
            },
            {
              id: 5,
              title: "Блузы",
            },
            {
              id: 6,
              title: "Куртки",
            },
          ],
        },
        {
          id: 2,
          title: "Обувь",
          active: false,
          subcategories: [
            {
              id: 1,
              title: "auuu",
              active: false,
              brands: [],
            },
            {
              id: 2,
              title: "buu",
            },
            {
              id: 3,
              title: "cuuu",
            },
            {
              id: 4,
              title: "Юбки",
            },
            {
              id: 5,
              title: "Блузы",
            },
            {
              id: 6,
              title: "Куртки",
            },
          ],
        },
        {
          id: 3,
          title: "Сумки",
          active: false,
          subcategories: [
            {
              id: 1,
              title: "naaa",
              active: false,
              brands: [],
            },
            {
              id: 2,
              title: "kaaaaa",
            },
            {
              id: 3,
              title: "baaaa",
            },
            {
              id: 4,
              title: "Юбки",
            },
            {
              id: 5,
              title: "Блузы",
            },
            {
              id: 6,
              title: "Куртки",
            },
          ],
        },
        {
          id: 4,
          title: "Аксессуары",
          active: false,
          subcategories: [
            {
              id: 1,
              title: "Платья",
              active: false,
              brands: [],
            },
            {
              id: 2,
              title: "Брюки",
            },
            {
              id: 3,
              title: "Шорты",
            },
            {
              id: 4,
              title: "Юбки",
            },
            {
              id: 5,
              title: "Блузы",
            },
            {
              id: 6,
              title: "Куртки",
            },
          ],
        },
      ],
      subcategories: [],
    };
  },
  methods: {
    addCategoryModal() {
      this.addCategoryModalOpen = true;
    },
    closeAddCategoryModal() {
      this.addCategoryModalOpen = false;
    },
    addSubCategoryModal() {
      this.addSubCategoryModalOpen = true;
    },
    closeAddSubCategoryModal() {
      this.activeCategory = null;
      this.addSubCategoryModalOpen = false;
    },
    addBrandsModal() {
      this.activeCategory = null;
      this.activeSubCategory = null;
      this.addBrandsModalOpen = true;
    },
    closeAddBrandsModal() {
      this.activeCategory = null;
      this.addBrandsModalOpen = false;
    },
    findActiveCategoryForModal() {
      let cat = [...this.categories];
      let sub = cat.filter((el) => {
        return el.title === this.activeCategory;
      })[0].subcategories;
      sub.forEach((el) => {
        this.subcategories.push(el.title);
      });
    },
  },
  watch: {
    activeCategory() {
      if (this.activeCategory) {
        this.activeSubCategory = null;
        if (this.subcategories.length == 0) {
          this.findActiveCategoryForModal();
        } else {
          this.subcategories = [];
          this.findActiveCategoryForModal();
        }
      }
    },
  },
  computed: {
    category() {
      let newArr = [];
      this.categories.forEach((el) => {
        newArr.push(el.title);
      });
      return newArr;
    },
  },
};
</script>

<style lang="scss" scoped>
.add-buttons {
  .q-btn {
    padding: 18px 21px;
    border-radius: 15px !important;
    font-family: monserrat;
    font-style: normal;
    font-weight: 400;
    font-size: 1.04166666667vw;
    line-height: 1.25vw;
  }
}
</style>
