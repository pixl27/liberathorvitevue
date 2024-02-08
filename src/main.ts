import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import '@fortawesome/fontawesome-free/css/all.css'

import PrimeVue from 'primevue/config';
import 'primevue/resources/themes/aura-light-green/theme.css'
import InputText from 'primevue/inputtext';
import InputNumber from 'primevue/inputnumber';
import Checkbox from 'primevue/checkbox';
import Button from 'primevue/button';

createApp(App)
.component('InputText', InputText)
.component('InputNumber', InputNumber)
.component('Checkbox', Checkbox)
.component('Button', Button)
.use(router)
.use(PrimeVue)
.mount('#app')
