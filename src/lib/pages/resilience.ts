

export function generateResiliencePage() {
    const downloadContainer = document.getElementById('DownloadContainer');
    const header = getHeader();
    const imgContainer = getImgContainer();
    downloadContainer?.append(header, imgContainer);
}

function getHeader() {
    let resiliencePageHeader = document.createElement('h1');
    resiliencePageHeader.className = `text-2xl text-center font-bold text-gray-900 mt-8 2xl:text-4xl p-6`;
    resiliencePageHeader.innerHTML = ` Download section is not available.
            <br class="2xl:hidden"/>
            <span class="text-bostonBlue-light">Please retry later`;
    return resiliencePageHeader;
}

function getImgContainer() {
    let imgContainer = document.createElement('div');
    imgContainer.setAttribute('id', 'ResilienceImgContainer');
    imgContainer.className = `max-w-lg`;
    imgContainer.innerHTML = `<img class="w-full h-64 sm:h-auto" src="img/undraw_empty_xct9.svg" alt="Resilience img"
                     loading="lazy">`

    return imgContainer;
}