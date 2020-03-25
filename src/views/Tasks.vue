<template>
  <div class="tasks">
    <h1>Tareas</h1>
    <InputTask/>
    <div class="task-div" v-for="(task, idx) in tasks" :key="idx">
      <p> {{idx + 1}} </p>
      <Task v-bind="task"/>
    </div>
  </div>
</template>


<script lang="ts">
import Vue from 'vue'
import { db } from '../main'
import Component from 'vue-class-component'
import InputTask from '@/components/InputTask.vue'
import Task from '@/components/Task.vue'

// Define the component in class-style
@Component({
    name: 'Tasks',
    components: {
      InputTask,
      Task
    },
})
export default class Tasks extends Vue {
  // Class properties will be component data
  tasks = [];

  // Lifecycle hook
	private created() {
		this.loadTasks();
	}

  // Methods will be component methods
  public loadTasks() {
    db.collection('tasks').onSnapshot(
        snapshot => {
          const tasks = []
          snapshot.forEach((doc) => {
              tasks.push(doc.data())
          });
          this.tasks = tasks;
        }
    );
  }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .task-div {
        max-width: 200px;
        display: flex;
        flex-direction: row;
        margin: 0 auto;
    }
    p{
      margin-right: 12px;
    }
</style>

