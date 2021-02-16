import i18n from 'i18next'
import LanguageDetector from 'i18next-browser-languagedetector';
import Backend from 'i18next-http-backend';

export default class I18 {
    constructor() {
        console.log('init i18next');
        this.init();
    }
    
    init(){ i18n.use(LanguageDetector)
                .use(Backend)
                .init({
                    fallbackLng: "en", 
                    useDataAttrOptions: true, 
                    debug: true, 
                    backend: {
                        loadPath: '/locales/{{lng}}.json'
                    }
                })
                .then(function(t) {
                    document.getElementById('output').innerHTML = i18n.t('title.ultimate');
                }
            );
    }  
}
