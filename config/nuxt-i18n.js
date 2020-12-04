import en from "../locales/en";
import fr from "../locales/fr";

export default {
    locales: ['en', 'fr'],
    defaultLocale: 'fr',
    strategy: 'prefix_and_default',
    vueI18n: {
        fallbackLocale: 'fr',
        messages: {
            en: en,
            fr: fr
        }
    }
}
