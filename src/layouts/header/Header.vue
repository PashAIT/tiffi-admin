<template>
  <header
    class="row items-center q-pb-xl q-mr-md q-pt-xl q-pl-xl q-pr-xl"
    v-if="isLoginPage"
  >
    <div class="logo col-3">
      <img
        src="images/tiffi-logo.png"
        class="cursor-pointer"
        @click="$router.push('/categories')"
        alt="tiffi-logo"
      />
    </div>
    <nav class="col-3">
      <ul class="row items-center justify-around">
        <router-link
          to="/categories"
          class="cursor-pointer nav column items-center justify-center q-mr-md"
          exact-active-class="active"
          >Категория</router-link
        >
        <router-link
          to="/products"
          tag="li"
          class="cursor-pointer nav column items-center justify-center"
          exact-active-class="active"
          >Продукты</router-link
        >
      </ul>
    </nav>
    <div class="add-product-icon col-6">
      <add-product />
    </div>
  </header>
</template>

<script>
import addProduct from "./add-product.vue";
export default {
  components: { addProduct },
  data() {
    return {};
  },
  computed: {
    isLoginPage() {
      if (
        this.$route.path === "/login" ||
        this.$route.path === "/" ||
        this.$route.path === "/forgot-password"
      )
        return false;
      else return true;
    },
  },
};
</script>

<style lang="scss" scoped>
header {
  font-family: monserrat;
  .logo {
    img {
      width: 12.2vw;
      height: 2.83vw;
    }
  }
  nav {
    ul {
      .nav {
        text-decoration: none;
        color: black;
        cursor: pointer;
        font-style: normal;
        font-weight: 400;
        font-size: 1.3vw;
        line-height: 3.3vw;
      }

      .nav::after {
        content: "";
        display: block;
        width: 0;
        height: 3px;
        background: #000;
        transition: width 0.3s;
      }
      .nav:hover::after {
        width: 65%;
      }

      .active::after {
        content: "";
        display: block;
        width: 65%;
        height: 3px;
        background: #000;
      }
    }
  }
  .add-product-icon {
    img {
      width: 3vw;
      height: 3vw;
    }
  }
}
</style>
