import gsap from "gsap/all";
import ScrollTrigger from "gsap/ScrollTrigger";

export default class CoinAnimation {
    constructor() {
        console.log('start coin scroll event listener');
        this.start();
    }

    start() {
        gsap.registerPlugin(ScrollTrigger);
        gsap.to(".presentation-card__img__coin", {
            scrollTrigger: {
                trigger: ".presentation-card",
                start: 'top center',
                toggleActions: "play complete restart reset",
            },
            y: 100,
            duration: 3,
            opacity: 0,
            repeat: -1,
        });
    }
}
