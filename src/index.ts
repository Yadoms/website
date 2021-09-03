import {getYadomsLatestRelease, LatestReleaseInfos} from "./lib/service";
import {generateDownloadPage, generateResiliencePage} from "./lib/pages";
import Translator from '@andreasremdt/simple-translator';
import Swiper, { Navigation, Pagination, Autoplay } from "swiper";
import './tailwind.css';

Swiper.use([Navigation, Pagination, Autoplay]);
const swiper = new Swiper(".supportedDeviceSwiper", {
    breakpoints: {
        375: {
            slidesPerView: 2,
            spaceBetween: 10
        },
        // when window width is <= 499px
        640: {
            slidesPerView: 3,
            spaceBetween: 1
        },
        // when window width is <= 999px
        999: {
            slidesPerView: 6,
            spaceBetween: 10
        }
    },
    autoplay: {
        delay: 1000,
    },
    pagination: {
        clickable: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },

});
const translator = new Translator({
    defaultLanguage: "en",
    detectLanguage: true,
    selector: "[data-i18n]",
    debug: false,
    registerGlobally: "__",
    persist: false,
    persistKey: "preferred_language",
    filesLocation: "/new/locales"
});
translatePage();

getYadomsLatestRelease().then((latestReleaseInfos: LatestReleaseInfos) => {
    generateDownloadPage(latestReleaseInfos);
    translatePage();
}).catch(error => {
    console.error('Github api is not available.', error);
    generateResiliencePage();
});

function translatePage()
{
    translator.fetch(["fr", "en"]).then(() => {
        translator.translatePageTo();
    });
}



