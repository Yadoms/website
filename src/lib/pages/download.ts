import {LatestReleaseInfos} from "../service";
import {generateDonwloadCard, macOsButton} from "../composants";
import {windowsButton} from "../composants";

export function generateDownloadPage(latestReleaseInfos: LatestReleaseInfos): void {
    addSectionHeader(latestReleaseInfos.tag_name);
    // Windows
    addWindowsCard();
}


function addSectionHeader(tagName: string): void {
    let downloadPackage = document.querySelector('div#DownloadPackage');
    let downloadPackageHeader = document.createElement('h1');
    downloadPackageHeader.className = `text-2xl text-center font-bold text-gray-900 mt-8 2xl:text-4xl p-6`;
    downloadPackageHeader.innerHTML = ` Download yadoms for you platform.
            <br class="2xl:hidden"/>
            <span class="text-bostonBlue-light">Latest version : <span
                    class="bg-gray-300 box-border border-2 p-1 2xl:p-2 text-gray-800 rounded-2xl">${tagName}</span></span>`;
    downloadPackage?.append(downloadPackageHeader);
}

function addWindowsCard(): void {
    // const card = generateDonwloadCard({path: 'static/img/Windows.svg', alt: 'Windows Logo'},
    //     'Windows',
    //     'Choose if you want installer version to use as a service or portable version',
    //     windowsButton);
    // const card2 = generateDonwloadCard({path: 'static/img/Windows.svg', alt: 'Windows Logo'},
    //     'Windows',
    //     'Choose if you want installer version to use as a service or portable version',
    //     windowsButton);


    let donwloadWindows = document.createElement('div');
    donwloadWindows.setAttribute('id', 'DonwloadWindows');
    donwloadWindows.className = 'max-w-sm md:max-w-2xl md:h-96 py-4 bg-white flex flex-col items-center md:flex-row space-x-3 rounded-2xl border-solid border-4 border-bostonBlue shadow-lg hover:-translate-y-0.5 hover:scale-110 hover:z-20 transform transition';
    donwloadWindows.innerHTML = generateDonwloadCard({path: 'img/Windows.svg', alt: 'Windows Logo'},
        'Windows',
        'Choose if you want installer version to use as a service or portable version',
        windowsButton);

    let donwloadMac = document.createElement('div');
    donwloadMac.setAttribute('id', 'DonwloadMac');
    donwloadMac.className = 'max-w-sm md:max-w-2xl md:h-96 py-4 bg-white flex flex-col items-center md:flex-row space-x-3 rounded-2xl border-solid border-4 border-bostonBlue shadow-lg hover:-translate-y-0.5 hover:scale-110 hover:z-20 transform transition';
    donwloadMac.innerHTML = generateDonwloadCard({path: 'img/Apple_logo_black.svg', alt: 'Apple Logo'},
        'Mac OSX',
        'Choose if you want installer version to use as a service or portable version',
        macOsButton);

    const downloadWindowsPackage = document.querySelector('div#DonwloadWindowsAndMac');
    if (downloadWindowsPackage)
        downloadWindowsPackage.append(donwloadWindows, donwloadMac);
}