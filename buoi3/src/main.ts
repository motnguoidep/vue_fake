import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import "primevue/resources/themes/saga-blue/theme.css"; //theme
import "primevue/resources/primevue.min.css"; //core CSS
import "primeicons/primeicons.css"; //icons
import Dialog from "primevue/dialog";
import Textarea from "primevue/textarea";
import Button from "primevue/button";
import PrimeVue from "primevue/config"; // here

import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(createPinia()) 
app.use(router)
app.use(PrimeVue);
app.component("Dialog", Dialog);
app.component("Textarea", Textarea);
app.component("Button", Button);
app.mount('#app')
