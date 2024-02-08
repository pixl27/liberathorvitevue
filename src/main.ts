import { createApp } from 'vue'
import App from './App.vue'
import '@fortawesome/fontawesome-free/css/all.css'
import { createRouter, createWebHistory ,useRoute} from "vue-router";
import PrimeVue from 'primevue/config';
import 'primevue/resources/themes/aura-light-green/theme.css'
import InputText from 'primevue/inputtext';
import InputNumber from 'primevue/inputnumber';
import Checkbox from 'primevue/checkbox';
import Button from 'primevue/button';
import HomeVue from './views/Home.vue';
import SignupVue from './views/Signup.vue';
import LoginVue from './views/Login.vue';

const router = createRouter({
    history: createWebHistory(),
    routes: [
      { path: "/", name: "Home", component: HomeVue },
      { path: "/signup", name: "Signup", component: SignupVue },
      { path: "/login", name: "Login", component: LoginVue },

    ],
  });
createApp(App)
.component('InputText', InputText)
.component('InputNumber', InputNumber)
.component('Checkbox', Checkbox)
.component('Button', Button)
.use(router)
.use(PrimeVue)
.mount('#app')
