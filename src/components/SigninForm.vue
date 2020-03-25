<template>
    <div class="signin">
        <h1>{{ msg }}</h1>
        <div class="form">
        <input type="email" placeholder="Correo electrónico" v-model="email">
        <p class="error" v-if="showError">El usuario ya existe.</p>
        <input type="password" placeholder="Contraseña" v-model="password">
        <p class="login"><router-link to="/">Ir a inicio de sesión</router-link></p>
        <button @click="signin">Registrarse</button>
        </div>
    </div>
</template>

<script lang="ts">
import Vue from 'vue'
import firebase from 'firebase'
import Component from 'vue-class-component'

// Define the component in class-style
@Component({
    props: {
        msg: {
            type: String,
            required: true
        }
    },
})
export default class Signin extends Vue {
    // Class properties will be component data
    email = '';
    password = '';
    showError = false;

    // Methods will be component methods
    public signin() {
        firebase
        .auth()
        .createUserWithEmailAndPassword(this.email, this.password).then(
            (user) => {
                this.$router.replace('/');
            }, error => {
                this.showError = true;
            }
        );
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .form {
        max-width: 360px;
        display: flex;
        flex-direction: column;
        margin: 0 auto;
    }

    h1{
        text-align: center
    }

    input {
        margin: 10px 0;
        padding: 16px;
    }

    input:focus {
        outline: none;
    }

    .error{
        font-size: 12px;
        color: red;
        margin: 0 0 0 8px;
        text-align: left;

    }

    .login{
        font-size: 16px;
        margin: 0 0 0 8px;
        text-align: right;
        cursor: pointer
    }

    a{
        color: #41B883;
    }

    button {
        margin-top: 15px;
        cursor: pointer;
        padding: 16px;
        background-color: #41B883;
        color: #ffffff;
        font-size: 16px;
        border-radius: 8px;
    }
</style>
