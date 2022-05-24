<template>
  <header class="row items-center q-pt-xl q-pl-xl">
    <div class="logo col-3">
      <img
        src="images/tiffi-logo.png"
        class="cursor-pointer"
        @click="$router.push('/')"
        alt="tiffi-logo"
      />
    </div>
    <nav class="col-3">
      <ul class="row items-center justify-around">
        <router-link
          to="/categories"
          class="cursor-pointer nav column items-center justify-center"
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
  </header>
</template>

<script>
export default {
  data() {
    return {
      //
    };
  },
};
</script>

<style lang="scss" scoped>
header {
  font-family: monserrat;
  nav {
    ul {
      .nav {
        text-decoration: none;
        color: black;
        cursor: pointer;
        font-style: normal;
        font-weight: 400;
        font-size: 30px;
        line-height: 56px;
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
}
</style>
