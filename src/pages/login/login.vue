<template>
  <div class="login row justify-center items-center">
    <div class="photo col-4 q-mr-xl items-center">
      <img
        src="images/login-page-photo.png"
        alt="men width notebook"
        class="full-width full-height"
      />
    </div>
    <div class="login-form col-4">
      <div class="column items-center justify-center q-pl-xl q-ml-xl">
        <h1>Войти</h1>
        <div class="inputs full-width column items-center q-mb-lg">
          <q-input
            style="width: 90%; font-size: 1.2vw"
            v-model="login"
            label="* Эл. адрес"
            outlined
            class="login-input q-mb-lg"
            :keep-color="false"
            lazy-rules
            :rules="[
              (val) => (val !== null && val !== '') || 'Please type your email',
              (val) => {
                let regex = new RegExp('[a-z0-9]+@[a-z]+\.[a-z]{2,3}');
                return regex.test(val) || 'da mail che';
              },
            ]"
          />
          <q-input
            style="width: 90%; font-size: 1.2vw"
            v-model="password"
            type="password"
            label="* Пароль"
            outlined
            class="login-input q-mb-lg"
            :keep-color="false"
            lazy-rules
            :rules="[
              (val) =>
                (val !== null && val !== '') || 'Please type your password',
              (val) => val.length >= 8 || 'Please any',
            ]"
          />
          <div class="forgot-password" style="width: 90%">
            <p
              class="text-caption q-mb-none cursor-pointer"
              style="text-decoration: underline"
              @click="$router.push('/forgot-password')"
            >
              Забыл пароль
            </p>
          </div>
        </div>
        <q-btn
          label="войти"
          no-caps
          style="border-radius: 20px"
          text-color="white"
          class="q-px-md login-button"
          @click="$router.push('/categories')"
        />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      login: null,
      password: null,
      isvalid: false,
    };
  },
};
</script>

<style lang="scss" scoped>
.login {
  font-family: monserrat;
  height: 100vh;
  .login-form {
    h1 {
      font-style: normal;
      font-weight: 600;
      font-size: 3.33333333333vw;
    }
    .login-button {
      background: linear-gradient(
        98.07deg,
        #8bc7e9 11.47%,
        #479ece 54.31%,
        #1c73a4 96.25%
      );
      font-size: 1.25vw;
      padding: 1.2vh 3vw;
    }
  }
}
</style>
