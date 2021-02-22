import Vue from 'vue';
import App from './App.vue';
import router from './router/router';
import firebase from 'firebase';

import axios from 'axios'
import VueAxios from 'vue-axios'
import {
  BootstrapVue,
  IconsPlugin
} from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import '@/style/style.css'

Vue.use(VueAxios, axios)
Vue.use(BootstrapVue)
Vue.use(IconsPlugin)

Vue.config.productionTip = false;

let firebaseConfig = {
  apiKey: "AIzaSyCN8FXXKnRswdaa6AP1qpeKjop0pfNA0io",
  authDomain: "projectopenbank-auth.firebaseapp.com",
  projectId: "projectopenbank-auth",
  storageBucket: "projectopenbank-auth.appspot.com",
  messagingSenderId: "430295514570",
  appId: "1:430295514570:web:f27d9b9732db98a54b6333",
  measurementId: "G-RFMFBZW9NF"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

let app = '';
firebase.auth().onAuthStateChanged(() => {
  if (!app) {
    app = new Vue({
      router,
      render: h => h(App)
    }).$mount('#app');
  }
});