import AOS from 'aos';

export default class AosAnimation {
    constructor() {
        console.log('AosAnimation init');
        AOS.init({disable: 'mobile'});
    }
}