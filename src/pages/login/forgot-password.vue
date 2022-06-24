<template>
  <div class="forgot-password row justify-center items-center">
    <div class="form column items-center">
      <h1 class="q-mb-lg">Забыл пароль</h1>
      <q-input
        style="width: 90%; font-size: 1.2vw"
        v-model="emial"
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
      <q-btn
        label="дальше"
        no-caps
        style="border-radius: 20px; font-size: 1.25vw; padding: 1.2vh 3vw"
        text-color="white"
        class="q-px-md"
        color="black"
        @click="$router.push('/reset-password')"
      />
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.forgot-password {
  height: 100vh;
  font-family: monserrat;
  .form {
    width: 28.125vw;
    h1 {
      font-style: normal;
      font-weight: 500;
      font-size: 3.33333333333vw;
      line-height: 5.05208333333vw;
    }
  }
}
</style>
