import i18n from 'i18next'

export default class I18 {
    constructor() {
        console.log('init i18next');
        this.init();
    }
    init(){
        i18n.init({
            lng: 'en',
            debug: true,
            resources: {
              en: {
                translation: {
                  "key": "The ultimate home automation solution"
                }
              },    
              fr: {
                translation: {
                  "key": "La solution domotique ultime"
                }
              }
            }
          }, function(err, t) {
            // initialized and ready to go!
            console.log('init i18next' + i18n);
            document.getElementById('output').innerHTML = i18n.t('key');
          });
    }
    
}
