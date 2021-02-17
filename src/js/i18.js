import i18n from 'i18next'
import LanguageDetector from 'i18next-browser-languagedetector';
import Backend from 'i18next-http-backend';
import jqueryI18next from 'jquery-i18next';

export default class I18 {
    constructor() {
        console.log('init i18next');
        this.init();
    }
    
    init()
    { 
        i18n.use(LanguageDetector)
                .use(Backend)
                .init({
                    lng:"fr",
                    fallbackLng: "en", 
                    useDataAttrOptions: true, 
                    debug: true, 
                    backend: {
                        loadPath: '/locales/{{lng}}.json'
                    }
                }, function(err, t) {
                    if (err) {
                        console.log(err.message);
                    }
                    jqueryI18next.init(i18n, $);
                    $('body').localize();
                  });
        
    }  
}
