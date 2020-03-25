import Vue from 'vue';
import firebase from 'firebase';
import App from './App.vue';
import router from './router';

Vue.config.productionTip = false;

const config = {
  apiKey: "AIzaSyDKdTOn5picuzGykQ5uG3vEexZk1T7kIQw",
  authDomain: "todolist-3b745.firebaseapp.com",
  databaseURL: "https://todolist-3b745.firebaseio.com",
  projectId: "todolist-3b745",
  storageBucket: "todolist-3b745.appspot.com",
  messagingSenderId: "337456393528",
  appId: "1:337456393528:web:5826655bbd32890828e5cd",
  measurementId: "G-HC8J929HHM"
};
firebase.initializeApp(config);
export const db = firebase.firestore()

new Vue({
  router,
  render: (h) => h(App),
}).$mount('#app');
