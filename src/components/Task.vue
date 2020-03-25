<template>
    <div class="task">
        <p>{{ task }}</p>
    </div>
</template>

<script lang="ts">
    import Vue from 'vue'
    import { db } from '../main'
    import Component from 'vue-class-component'

    // Define the component in class-style
    @Component({
        props: {
            task: {
                required: true
            }
        },
    })
    export default class Task extends Vue {}
</script>


