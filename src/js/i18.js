import i18n from 'i18next'

export default class I18 {
    constructor() {
        console.log('init Navbar');
        this.init();
    }
    init(){
        i18n.init({
            lng: 'en',
            debug: true,
            resources: {
              en: {
                translation: {
                  "key": "hello world"
                }
              }
            }
          }, function(err, t) {
            // initialized and ready to go!
            document.getElementById('output').innerHTML = i18next.t('key');
          });
    }
    
}
