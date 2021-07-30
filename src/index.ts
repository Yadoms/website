import {getYadomsLatestRelease, LatestReleaseInfos} from "./lib/service";
import {generateDownloadPage, generateResiliencePage} from "./lib/pages";
import './tailwind.css';

getYadomsLatestRelease().then((latestReleaseInfos: LatestReleaseInfos) => {
    generateDownloadPage(latestReleaseInfos);
}).catch(error => {
    console.error('Github api is not available.', error);
    generateResiliencePage()
});