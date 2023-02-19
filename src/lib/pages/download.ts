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
    const latestTagName = getHeader(latestReleaseInfos.tag_name);
    const windowsMacOsContainer = getWindowsMacOsContainer(latestReleaseInfos);
    const linuxRaspberryContainer = getLinuxRaspberryContainer(latestReleaseInfos);
    downloadContainer?.append(latestTagName, windowsMacOsContainer, linuxRaspberryContainer);
}

function getHeader(tagName: string): HTMLHeadingElement {
    let downloadPageHeader = document.createElement('h1');
    downloadPageHeader.className = `download-header`;
    downloadPageHeader.innerHTML = ` 
            <div data-i18n="download.header.part1">Download yadoms for your favourite platform.</div>
            <div class="text-bostonBlue-light mt-2">
                <span data-i18n="download.header.part2">Latest version : </span>
                <span
                    class="download-header-yadoms-version">${tagName}
                </span>
            </div>`;

    return downloadPageHeader;
}

function getWindowsMacOsContainer(latestReleaseInfos: LatestReleaseInfos): HTMLDivElement {
    const windowsDownloadLinks = getWindowsDownloadLinks(latestReleaseInfos);
    const windownsButtons = getWindownsButtons(windowsDownloadLinks.installerLink, windowsDownloadLinks.portableAssets);
    const windowsCard = getDownloadCard(
        'DonwloadWindows',
        {
            path: 'img/Windows.svg',
            alt: 'Windows'
        }, 'Windows',
        'Choose if you want installer version to use as a service or portable version',
        windownsButtons);

    const windowsParagraph = windowsCard.getElementsByClassName('download-card-content-paragraph');
    windowsParagraph.item(0)?.setAttribute('data-i18n', 'download.windows.paragraph');

    const macOsDownloadLink = getMacOsDownloadLink(latestReleaseInfos);
    console.log(macOsDownloadLink.packageLink)
    const macOsButtons = getMacOsButton(macOsDownloadLink.packageLink);

    const macOsCard = getDownloadCard(
        'DonwloadMac',
        {
            path: 'img/Apple_logo_black.svg',
            alt: 'Apple'
        },
        'Mac OSX',
        'This is an experimental package. You will have to make some skilled manipulation to make it works.',
        macOsButtons);

    const macOsParagraph = macOsCard.getElementsByClassName('download-card-content-paragraph');
    macOsParagraph.item(0)?.setAttribute('data-i18n', 'download.macOs.paragraph');

    const downloadWindowsMacContainer = document.createElement('div');
    downloadWindowsMacContainer.setAttribute('id', 'DonwloadWindowsMacContainer')
    downloadWindowsMacContainer.className = `download-platforms-container`;
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

    const linuxParagraph = linuxCard.getElementsByClassName('download-card-content-paragraph');
    linuxParagraph.item(0)?.setAttribute('data-i18n', 'download.linux.paragraph');

    const raspberryLink = getRaspberryDownloadLinks(latestReleaseInfos);
    const raspberryButtons = getRaspberryPiButtons(raspberryLink.frSdCardImageLink, raspberryLink.enSdCardImageLink, raspberryLink.packageLink);

    const raspberryCard = getDownloadCard('DonwloadRaspberry', {
        path: 'img/Raspberry_Pi_logo.svg',
        alt: 'Raspberry PI'
    }, 'Raspberry PI', 'Extract the packge on your PI, and have fun (please note that you have to install libpq5 first : sudo apt-get install libpq5)', raspberryButtons);

    const raspberryParagraph = raspberryCard.getElementsByClassName('download-card-content-paragraph');
    raspberryParagraph.item(0)?.setAttribute('data-i18n', 'download.rapsberryPi.paragraph');

    const downloadLinuxRaspberryContainer = document.createElement('div');
    downloadLinuxRaspberryContainer.setAttribute('id', 'LinuxRaspberryContainer')
    downloadLinuxRaspberryContainer.className = `download-platforms-container`;
    downloadLinuxRaspberryContainer.append(linuxCard, raspberryCard);
    return downloadLinuxRaspberryContainer;
}

function getDownloadCard(htmlElementId: string, asset: { path: string; alt: string }, header: string, paragraph: string, buttonsHtml: string) {
    let donwloadWindows = document.createElement('div');
    donwloadWindows.setAttribute('id', htmlElementId);
    donwloadWindows.className = 'download-card';
    donwloadWindows.innerHTML = generateDonwloadCard({path: asset.path, alt: asset.alt + ' logo'},
        header,
        paragraph,
        buttonsHtml);
    return donwloadWindows;
}


function getWindowsDownloadLinks(latestReleaseInfos: LatestReleaseInfos): { installerLink: string | undefined, portableAssets: string | undefined } {
    const installerAsset = latestReleaseInfos.assets.find(p => p.name.match(`Yadoms-${latestReleaseInfos.tag_name}-Windows.exe`));
    const portableAsset = latestReleaseInfos.assets.find(p => p.name.match(`Yadoms-${latestReleaseInfos.tag_name}-Windows.zip`));

    return {
        installerLink: installerAsset?.browser_download_url,
        portableAssets: portableAsset?.browser_download_url
    }
}

function getLinuxDownloadLink(latestReleaseInfos: LatestReleaseInfos): { packageLink: string | undefined } {
    const packageAsset = latestReleaseInfos.assets.find(p => p.name.match(`Yadoms-${latestReleaseInfos.tag_name}-Linux.tar.gz`));

    return {
        packageLink: packageAsset?.browser_download_url,
    }
}

function getMacOsDownloadLink(latestReleaseInfos: LatestReleaseInfos): { packageLink: string | undefined } {
    const packageAsset = latestReleaseInfos.assets.find(p => p.name.match(`Yadoms-${latestReleaseInfos.tag_name}-Darwin.tar.gz`));

    return {
        packageLink: packageAsset?.browser_download_url,
    }
}

function getRaspberryDownloadLinks(latestReleaseInfos: LatestReleaseInfos):
    { packageLink: string | undefined, frSdCardImageLink: string | undefined, enSdCardImageLink: string | undefined } {

    const packageAsset = latestReleaseInfos.assets.find(p => p.name.match(`Yadoms-${latestReleaseInfos.tag_name}-RaspberryPI.tar.gz`));
    const frSdCardImageAsset = latestReleaseInfos.assets.find(p => p.name.match(`Raspbian-EN-lite-yadoms.zip`));
    const enSdCardImageAsset = latestReleaseInfos.assets.find(p => p.name.match(`Raspbian-FR-lite-yadoms.zip`));

    return {
        packageLink: packageAsset?.browser_download_url,
        frSdCardImageLink: frSdCardImageAsset?.browser_download_url,
        enSdCardImageLink: enSdCardImageAsset?.browser_download_url
    }
}