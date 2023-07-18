import {createApp, ref} from 'vue'
import {createPinia} from "pinia";
import App from './App.vue'
import vuetify from "@/plugins/vuetify";
import router from "@/router";


// veevalidate
import { defineRule, configure } from 'vee-validate';
import AllRules from '@vee-validate/rules';
import { localize, setLocale } from '@vee-validate/i18n';
import de from '@vee-validate/i18n/dist/locale/de.json';

Object.keys(AllRules).forEach(rule => {
    defineRule(rule, AllRules[rule]);
});

configure({
    generateMessage: localize({
        de,
    }),
});

setLocale('de');

// veevalidate - Ende

const pinia = createPinia();
const app = createApp(App);

app.use(router);
app.use(pinia);
app.use(vuetify);


app.mount('#app');