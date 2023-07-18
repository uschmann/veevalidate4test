import {createApp, ref} from 'vue'
import {createPinia} from "pinia";
import App from './App.vue'
import vuetify from "@/plugins/vuetify";
import router from "@/router";
import '@/plugins/veevalidate'

const pinia = createPinia();
const app = createApp(App);

app.use(router);
app.use(pinia);
app.use(vuetify);


app.mount('#app');