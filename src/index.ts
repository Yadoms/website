import {getYadomsLatestRelease, LatestReleaseInfos} from "./lib/service";

getYadomsLatestRelease().then((res: LatestReleaseInfos) => {
    console.log(res);
}).catch(error => console.log(error));

