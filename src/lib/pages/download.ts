import {LatestReleaseInfos} from "../service";
import {
    generateDonwloadCard,
    getLinuxButton,
    getMacOsButton,
    getRaspberryPiButtons,
    getWindownsButtons
} from "../composants";

export function generateDownloadPage(latestReleaseInfos: LatestReleaseInfos): void {
    const downloadContainer = document.getElementById('DownloadContainer');
    const header = getHeader(latestReleaseInfos.tag_name);
    const windowsMacOsContainer = getWindowsMacOsContainer(latestReleaseInfos);
    const linuxRaspberryContainer = getLinuxRaspberryContainer(latestReleaseInfos);
    downloadContainer?.append(header, windowsMacOsContainer, linuxRaspberryContainer);
}

function getHeader(tagName: string): HTMLHeadingElement {
    // let downloadPackage = document.querySelector('div#DownloadPackage');
    let downloadPageHeader = document.createElement('h1');
    downloadPageHeader.className = `text-2xl text-center font-bold text-gray-900 mt-8 2xl:text-4xl p-6`;
    downloadPageHeader.innerHTML = ` Download yadoms for you platform.
            <br class="2xl:hidden"/>
            <span class="text-bostonBlue-light">Latest version : <span
                    class="bg-gray-300 box-border border-2 p-1 2xl:p-2 text-gray-800 rounded-2xl">${tagName}</span></span>`;

    return downloadPageHeader;
    // downloadPackage?.append(downloadPageHeader);
}

function getWindowsMacOsContainer(latestReleaseInfos: LatestReleaseInfos): HTMLDivElement {
    const windowsDownloadLinks = getWindowsDownloadLinks(latestReleaseInfos);
    const windownsButtons = getWindownsButtons(windowsDownloadLinks.installerLink, windowsDownloadLinks.portableAssets);
    const windowsCard = getDownloadCard('DonwloadWindows', {
        path: 'img/Windows.svg',
        alt: 'Windows'
    }, 'Windows', 'Choose if you want installer version to use as a service or portable version', windownsButtons);

    const macOsDownloadLink = getMacOsDownloadLink(latestReleaseInfos);
    const macOsButtons = getMacOsButton(macOsDownloadLink.packageLink);

    const macOsCard = getDownloadCard('DonwloadMac', {
        path: 'img/Apple_logo_black.svg',
        alt: 'Apple'
    }, 'Mac OSX', 'This is an experimental package. You will have to make some skilled manipulation to make it works.', macOsButtons);

    const downloadWindowsMacContainer = document.createElement('div');
    downloadWindowsMacContainer.setAttribute('id', 'DonwloadWindowsMacContainer')
    downloadWindowsMacContainer.className = `flex flex-col xl:flex-row xl:space-x-3 space-y-3 xl:space-y-0`;
    downloadWindowsMacContainer.append(windowsCard, macOsCard);
    return downloadWindowsMacContainer;
}

function getLinuxRaspberryContainer(latestReleaseInfos: LatestReleaseInfos): HTMLDivElement {
    const linuxDownloadLink = getLinuxDownloadLink(latestReleaseInfos);
    const linuxButton = getLinuxButton(linuxDownloadLink.packageLink);
    const linuxCard = getDownloadCard('DonwloadLinux', {
        path: 'img/Tux.svg',
        alt: 'Linux'
    }, 'Linux', 'Download right version based on you Linux distribution', linuxButton);

    const raspberryLink = getRaspberryDownloadLinks(latestReleaseInfos);
    const raspberryButtons = getRaspberryPiButtons(raspberryLink.frSdCardImageLink, raspberryLink.enSdCardImageLink, raspberryLink.packageLink);

    const raspberryCard = getDownloadCard('DonwloadRaspberry', {
        path: 'img/Raspberry_Pi_logo.svg',
        alt: 'Raspberry PI'
    }, 'Raspberry PI', 'Extract the packge on your PI, and have fun (please note that you have to install libpq5 first : sudo apt-get install libpq5)\n' +
        '\n', raspberryButtons);

    const downloadLinuxRaspberryContainer = document.createElement('div');
    downloadLinuxRaspberryContainer.setAttribute('id', 'LinuxRaspberryContainer')
    downloadLinuxRaspberryContainer.className = `flex flex-col xl:flex-row xl:space-x-3 space-y-3 xl:space-y-0`;
    downloadLinuxRaspberryContainer.append(linuxCard, raspberryCard);
    return downloadLinuxRaspberryContainer;
}

function getDownloadCard(htmlElementId: string, asset: { path: string; alt: string }, header: string, paragraph: string, buttonsHtml: string) {
    let donwloadWindows = document.createElement('div');
    donwloadWindows.setAttribute('id', htmlElementId);
    donwloadWindows.className = 'max-w-sm md:max-w-2xl md:h-96 py-4 bg-white flex flex-col items-center md:flex-row space-x-3 rounded-2xl border-solid border-4 border-bostonBlue shadow-lg hover:-translate-y-0.5 hover:scale-110 hover:z-20 transform transition';
    donwloadWindows.innerHTML = generateDonwloadCard({path: asset.path, alt: asset.alt + ' logo'},
        header,
        paragraph,
        buttonsHtml);
    return donwloadWindows;
}


function getWindowsDownloadLinks(latestReleaseInfos: LatestReleaseInfos): { installerLink: string | undefined, portableAssets: string | undefined } {
    const installerAsset = latestReleaseInfos.assets.find(p => p.name.match('Yadoms-2.5.0-Windows.exe'));
    const portableAsset = latestReleaseInfos.assets.find(p => p.name.match('Yadoms-2.5.0-Windows.zip'));

    return {
        installerLink: installerAsset?.browser_download_url,
        portableAssets: portableAsset?.browser_download_url
    }
}

function getLinuxDownloadLink(latestReleaseInfos: LatestReleaseInfos): { packageLink: string | undefined } {
    const packageAsset = latestReleaseInfos.assets.find(p => p.name.match('Yadoms-2.5.0-Linux.tar.gz'));

    return {
        packageLink: packageAsset?.browser_download_url,
    }
}

function getMacOsDownloadLink(latestReleaseInfos: LatestReleaseInfos): { packageLink: string | undefined } {
    const packageAsset = latestReleaseInfos.assets.find(p => p.name.match('Yadoms-2.5.0-Darwin.tar.gz'));

    return {
        packageLink: packageAsset?.browser_download_url,
    }
}

function getRaspberryDownloadLinks(latestReleaseInfos: LatestReleaseInfos):
    { packageLink: string | undefined, frSdCardImageLink: string | undefined, enSdCardImageLink: string | undefined } {

    const packageAsset = latestReleaseInfos.assets.find(p => p.name.match('Yadoms-2.5.0-RaspberryPI.tar.gz'));
    const frSdCardImageAsset = latestReleaseInfos.assets.find(p => p.name.match('Yadoms-2.5.0-RaspberryPI-image-FR.zip'));
    const enSdCardImageAsset = latestReleaseInfos.assets.find(p => p.name.match('Yadoms-2.5.0-RaspberryPI-image-EN.zip'));

    return {
        packageLink: packageAsset?.browser_download_url,
        frSdCardImageLink: frSdCardImageAsset?.browser_download_url,
        enSdCardImageLink: enSdCardImageAsset?.browser_download_url
    }
}