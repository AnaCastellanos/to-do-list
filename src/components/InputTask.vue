<template>
    <div class="task">
        <input type="text" placeholder="Ingresa una tarea..." v-model="task">
        <button @click="createTask">Crear</button>
    </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { db } from '../main'
import Component from 'vue-class-component'

// Define the component in class-style
@Component
export default class InputTask extends Vue {
  // Class properties will be component data
    task = '';

  // Methods will be component methods
    public createTask() {
        db.collection('tasks').add({
            'description': this.task
        })
    }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>


    input {
        margin: 10px 0;
        padding: 16px;
    }

    input:focus {
        outline: none;
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
