import { defineRule, configure } from 'vee-validate';
import { localize, setLocale } from '@vee-validate/i18n';
import AllRules from '@vee-validate/rules';
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
