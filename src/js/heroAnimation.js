import gsap from "gsap/all";

export default class HeroAnimation {

    constructor() {
        console.log('Hero Animation');
        this.start();
    }

    start() {
        // Fade in left on content
        gsap.fromTo(".y-hero__container__main-banner__container__content", {opacity: 0, x: -2000}, {opacity: 1, x: 0});
        // fade In Right on img
        gsap.fromTo(".y-hero__container__main-banner__container__img", {opacity: 0, x: 2000}, {opacity: 1, x: 0});
    }
}