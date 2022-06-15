<template>
  <div class="col justify-center items-center">
    <div class="categories row justify-evenly q-pt-xl q-pl-xl q-pr-xl q-mb-xl">
      <category-list
        :categories="categories"
        @getactiveCategory="getActiveIndex"
        class="col-2"
      />
      <subcategory-list
        class="col-2"
        :subCategory="activeSubCategory"
        @getActiveSubCategory="getActiveSubCategory"
      />
      <brand-list :brands="activeBrands" class="col-4" />
    </div>
    <add-buttons />
  </div>
</template>

<script>
import categoryList from "src/components/category/category-list.vue";
import subcategoryList from "src/components/category/subcategory-list.vue";
import BrandList from "src/components/category/brand-list.vue";
import AddButtons from "src/components/category/add-buttons.vue";

export default {
  data() {
    return {
      activecategoryId: 1,
      activeSubCategoryId: 1,
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
    };
  },
  computed: {
    activeSubCategory() {
      return this.categories.find((el) => el.id === this.activecategoryId)
        ?.subcategories;
    },
    activeBrands() {
      return this.categories[this.activecategoryId - 1].subcategories[
        this.activeSubCategoryId - 1
      ].brands;
    },
  },
  methods: {
    getActiveIndex(id) {
      this.activecategoryId = id;
    },
    getActiveSubCategory(id) {
      this.activeSubCategoryId = id;
    },
  },

  components: { categoryList, subcategoryList, BrandList, AddButtons },
};
</script>

<style lang="scss" scoped></style>
