export default class CoinAnimation {
    constructor() {
        console.log('start coin scroll event listener');
        this.start();
    }

    start() {
        let scrollpos = window.scrollY;
        const element = document.querySelector(".y-free__container__img__coin");
        let element_height = element.offsetHeight;

        let rect = element.getBoundingClientRect();
        let bodyRect = document.body.getBoundingClientRect();
        let offset = rect.top - bodyRect.top;
        window.addEventListener('scroll', function () {
                scrollpos = window.scrollY;
                element_height = element.offsetHeight;
                console.log(rect.top, rect.right, rect.bottom, rect.left);
                console.log('scrollpos : ' + scrollpos);
                console.log('offset : ' + offset);
                console.log('element.getBoundingClientRect().top : ' + rect.top);
                if (scrollpos >= (window.scrollY + element.getBoundingClientRect().top) - 200) {
                    element.classList.add("fadeOutDown");
                } else if (scrollpos <= (window.scrollY + element.getBoundingClientRect().top) + 100) {
                    element.classList.add("fadeOutDown");
                } else {
                    element.classList.remove("fadeOutDown")
                }
            }
        )
        ;

    }


}
