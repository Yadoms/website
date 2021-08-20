import {getYadomsLatestRelease, LatestReleaseInfos} from "./lib/service";
import {generateDownloadPage, generateResiliencePage} from "./lib/pages";
import './tailwind.css';
import Translator from '@andreasremdt/simple-translator';

const translator = new Translator({
    defaultLanguage: "en",
    detectLanguage: true,
    selector: "[data-i18n]",
    debug: true,
    registerGlobally: "__",
    persist: false,
    persistKey: "preferred_language",
    filesLocation: "/new/i18n"
});

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



