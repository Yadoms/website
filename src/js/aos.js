import AOS from 'aos/dist/aos';

export default class Aos {
    constructor() {
        console.log('Aos init');
        AOS.init();
    }
}