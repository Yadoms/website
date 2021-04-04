import gsap from "gsap/all";
import ScrollTrigger from "gsap/ScrollTrigger";

export default class CoinAnimation {
    constructor() {
        console.log('start coin scroll event listener');
        this.start();
    }

    start() {
        gsap.registerPlugin(ScrollTrigger);

        gsap.to('.presentation-card__img__coin',
            {
                scrollTrigger: {
                    trigger: "presentation__container",
                    // start: 'top+100 center',
                    markers: true,
                    toggleActions: "play none none none"
                }, y: 100, duration: 3, animationIterationCount: 'infinite'
            });
    }
}
