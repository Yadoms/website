import i18n from 'i18next'
import LanguageDetector from 'i18next-browser-languagedetector';
import Backend from 'i18next-http-backend';
import jqueryI18next from 'jquery-i18next';

export default class I18 {
    constructor() {
        console.log('init i18next');
        this.init();
    }

    init() {
        i18n.use(LanguageDetector)
            .use(Backend)
            .init({
                // lng: 'en',
                fallbackLng: "en",
                useDataAttrOptions: true,
                debug: true,
                preload: ['en', 'fr'],
                ns: ['translation'],
                defaultNS: 'translation',
                backend: {
                    // TODO: remove /new when we do the first official deployement
                    loadPath: '/new/locales/{{lng}}/{{ns}}.json'
                }
            }, (err, t) => {
                if (err) return console.error(err)
                jqueryI18next.init(i18n, $);
                $('body').localize();
            });
    }
}
