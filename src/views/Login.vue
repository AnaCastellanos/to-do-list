<template>
  <div class="login">
    <img alt="Vue logo" src="../assets/logo.png">
    <LoginForm msg="Inicio de sesión"/>
  </div>
</template>

<script>
// @ is an alias to /src
import LoginForm from '@/components/LoginForm.vue';

export default {
  name: 'Login',
  components: {
    LoginForm,
  },
};
</script>
