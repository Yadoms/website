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
                    fallbackLng: "en", 
                    useDataAttrOptions: true, 
                    debug: false, 
                    backend: {
                        loadPath: '/locales/{{lng}}.json'
                    }
                }, function(err, t) {
                    jqueryI18next.init(i18n, $);
                    $('body').localize();
                  });
        
    }  
}
