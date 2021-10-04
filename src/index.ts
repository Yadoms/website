import {getYadomsLatestRelease, LatestReleaseInfos} from "./lib/service";
import {generateDownloadPage, generateResiliencePage} from "./lib/pages";
import Translator from '@andreasremdt/simple-translator';
import './tailwind.css';
import Splide from "@splidejs/splide";

window.addEventListener('load', function () {
    new Splide('.splide', {
        type    : 'loop',
        autoplay: true,
        interval: 1250,
        autoWidth: true,
        rewind: true,
        gap: 80,
        pagination: false,
        // padding: {
        //     left: 60,
        //     right: 100
        // },
        arrows: false,
    }).mount();
});

const translator = new Translator({
    defaultLanguage: "en",
    detectLanguage: true,
    selector: "[data-i18n]",
    debug: false,
    registerGlobally: "__",
    persist: false,
    persistKey: "preferred_language",
    filesLocation: "/locales"
});
translatePage();

getYadomsLatestRelease().then((latestReleaseInfos: LatestReleaseInfos) => {
    generateDownloadPage(latestReleaseInfos);
    translatePage();
}).catch(error => {
    console.error('Github api is not available.', error);
    generateResiliencePage();
});

function translatePage() {
    translator.fetch(["fr", "en"]).then(() => {
        translator.translatePageTo();
    });
}



