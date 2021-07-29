import {getYadomsLatestRelease, LatestReleaseInfos} from "./lib/service";
import {generateDownloadPage} from "./lib/pages";
import './tailwind.css';

// TODO: Display resilience page when github api is down
getYadomsLatestRelease().then((latestReleaseInfos: LatestReleaseInfos) => {
    generateDownloadPage(latestReleaseInfos);
}).catch(error => console.log(error));