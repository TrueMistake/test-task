import { createApp } from 'vue'
import App from './App.vue'
import router from "@/router/router";
import store from "@/store";
import {createStore} from "vuex";

const stores = new createStore(store)

createApp(App).use(router).use(stores).mount('#app')
