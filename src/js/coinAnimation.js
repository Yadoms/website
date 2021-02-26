export default class CoinAnimation {
    constructor() {
        console.log('start coin scroll event listener');
        this.start();
    }

    start() {
        let scrollpos = window.scrollY;
        const element = document.querySelector(".y-free__container__img__coin");
        let rect = element.getBoundingClientRect();
        window.addEventListener('scroll', function () {
                scrollpos = window.scrollY;
                if (scrollpos >= rect.top) {
                    element.classList.add("fadeOutDown");
                } else {
                    element.classList.remove("fadeOutDown")
                }
            }
        );

    }


}
