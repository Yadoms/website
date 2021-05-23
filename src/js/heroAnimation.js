import gsap from "gsap/all";
import ScrollTrigger from "gsap/ScrollTrigger";
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

        function animateFrom(elem, direction) {
            direction = direction | 1;

            var x = 0,
                y = direction * 100;
            if(elem.classList.contains("gs_reveal_fromLeft")) {
                x = -100;
                y = 0;
            } else if(elem.classList.contains("gs_reveal_fromRight")) {
                x = 100;
                y = 0;
            }
            gsap.fromTo(elem, {x: x, y: y, autoAlpha: 0}, {
                duration: 1.25,
                x: 0,
                y: 0,
                autoAlpha: 1,
                ease: "expo",
                overwrite: "auto"
            });
        }

        function hide(elem) {
            gsap.set(elem, {autoAlpha: 0});
        }

        document.addEventListener("DOMContentLoaded", function() {
            gsap.registerPlugin(ScrollTrigger);

            gsap.utils.toArray(".gs_reveal").forEach(function(elem) {
                hide(elem); // assure that the element is hidden when scrolled into view

                ScrollTrigger.create({
                    trigger: elem,
                    onEnter: function() { animateFrom(elem) },
                    onEnterBack: function() { animateFrom(elem, -1) },
                    onLeave: function() { hide(elem) } // assure that the element is hidden when scrolled into view
                });
            });
        });
    }
}