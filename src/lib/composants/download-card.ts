export function generateDonwloadCard(asset: { path: string; alt: string }, header: string, paragraph: string, buttonsHtml: string): string {
    return `<img class="download-card-img" src="${asset.path}" alt="${asset.alt}" loading="lazy"/>
            <div class="download-card-content">
                <h1 class="download-card-content-header">${header}</h1>
                <p class="download-card-content-paragraph">${paragraph}</p>
                <hr class="download-card-content-separator"/>
                ${buttonsHtml}
            </div>
            `
}

export function getWindownsButtons(installerLink: string | undefined, portableLink: string | undefined) {
    return `<a href="${installerLink}" class="btn-primary mb-3" target="_blank" rel="noopener noreferrer">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 inline-block relative -top-0.5"
                             fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                  d="M12 10v6m0 0l-3-3m3 3l3-3M3 17V7a2 2 0 012-2h6l2 2h6a2 2 0 012 2v8a2 2 0 01-2 2H5a2 2 0 01-2-2z"/>
                        </svg>
                        <span data-i18n="download.btn.installer">Installer</span>
                    
                    </a>
                              <a href="${portableLink}" class="btn-secondary" target="_blank" rel="noopener noreferrer">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 inline-block relative -top-0.5"
                             viewBox="0 0 20 20" fill="currentColor">
                            <path d="M2 6a2 2 0 012-2h5l2 2h5a2 2 0 012 2v6a2 2 0 01-2 2H4a2 2 0 01-2-2V6z"/>
                            <path stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                  d="M10 9v4m0 0l-2-2m2 2l2-2"/>
                        </svg>
                          <span data-i18n="download.btn.portable">Portable</span>
                    </a>`;
}

export function getMacOsButton(installerLink: string | undefined) {
    return ` <a href="#${installerLink}" class="btn-primary mb-3" target="_blank" rel="noopener noreferrer">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 inline-block relative -top-0.5"
                             fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                  d="M12 10v6m0 0l-3-3m3 3l3-3M3 17V7a2 2 0 012-2h6l2 2h6a2 2 0 012 2v8a2 2 0 01-2 2H5a2 2 0 01-2-2z"/>
                        </svg>
                        <span data-i18n="download.btn.installer">Installer</span>
                    </a>`;
}

export function getLinuxButton(packageLink: string | undefined) {
    return ` <a href="${packageLink}" class="btn-primary mb-3" target="_blank" rel="noopener noreferrer">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 inline-block relative -top-0.5"
                             fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                  d="M12 10v6m0 0l-3-3m3 3l3-3M3 17V7a2 2 0 012-2h6l2 2h6a2 2 0 012 2v8a2 2 0 01-2 2H5a2 2 0 01-2-2z"/>
                        </svg>
                        <span data-i18n="download.btn.package">Package</span>
                    </a>`;
}

export function getRaspberryPiButtons(frCardImageLink: string | undefined, enCardImageLink: string | undefined, packageLink: string | undefined) {
    return ` <a href="${packageLink}" class="btn-primary" target="_blank" rel="noopener noreferrer">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 inline-block relative -top-0.5"
                             fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                  d="M12 10v6m0 0l-3-3m3 3l3-3M3 17V7a2 2 0 012-2h6l2 2h6a2 2 0 012 2v8a2 2 0 01-2 2H5a2 2 0 01-2-2z"/>
                        </svg>
                        <span data-i18n="download.btn.package">Package</span>
                    </a>
                    <a href="${frCardImageLink}" class="btn-secondary" target="_blank" rel="noopener noreferrer">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 inline-block relative -top-0.5"
                             viewBox="0 0 20 20" fill="currentColor">
                            <path d="M2 6a2 2 0 012-2h5l2 2h5a2 2 0 012 2v6a2 2 0 01-2 2H4a2 2 0 01-2-2V6z"/>
                            <path stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                  d="M10 9v4m0 0l-2-2m2 2l2-2"/>
                        </svg>
                        <span data-i18n="download.btn.sdCradImgFr">SD Card image(FR)</span>
                    </a>
                    <a href="${enCardImageLink}" class="btn-secondary" target="_blank" rel="noopener noreferrer">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 inline-block relative -top-0.5"
                             viewBox="0 0 20 20" fill="currentColor">
                            <path d="M2 6a2 2 0 012-2h5l2 2h5a2 2 0 012 2v6a2 2 0 01-2 2H4a2 2 0 01-2-2V6z"/>
                            <path stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                  d="M10 9v4m0 0l-2-2m2 2l2-2"/>
                        </svg>
                         <span data-i18n="download.btn.sdCradImgEn">SD Card image(EN)</span>
                    </a>`;
}