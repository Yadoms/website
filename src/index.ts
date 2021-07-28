import {getYadomsLatestRelease, LatestReleaseInfos} from "./lib/service";
import {generateDownloadPage} from "./lib/pages";
import './tailwind.css';

getYadomsLatestRelease().then((latestReleaseInfos: LatestReleaseInfos) => {
    generateDownloadPage(latestReleaseInfos);

    console.log(latestReleaseInfos);
}).catch(error => console.log(error));