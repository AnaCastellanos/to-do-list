<template>
    <div class="signin">
        <img alt="Vue logo" src="../assets/logo.png">
        <SigninForm msg="Registro"/>
    </div>
</template>

<script>
// @ is an alias to /src
import SigninForm from '@/components/SigninForm.vue';

export default {
    name: 'Signin',
    components: {
        SigninForm,
    },
};
</script>
