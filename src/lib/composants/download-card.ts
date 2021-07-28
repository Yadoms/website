export const windowsButton = `<a href="#" class="btn-primary mb-3" target="_blank" rel="noopener noreferrer">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 inline-block relative -top-0.5"
                             fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                  d="M12 10v6m0 0l-3-3m3 3l3-3M3 17V7a2 2 0 012-2h6l2 2h6a2 2 0 012 2v8a2 2 0 01-2 2H5a2 2 0 01-2-2z"/>
                        </svg>
                        Installer
                    </a>
                              <a href="#" class="btn-secondary" target="_blank" rel="noopener noreferrer">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 inline-block relative -top-0.5"
                             viewBox="0 0 20 20" fill="currentColor">
                            <path d="M2 6a2 2 0 012-2h5l2 2h5a2 2 0 012 2v6a2 2 0 01-2 2H4a2 2 0 01-2-2V6z"/>
                            <path stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                  d="M10 9v4m0 0l-2-2m2 2l2-2"/>
                        </svg>
                        Portable
                    </a>`;
export const macOsButton = ` <a href="#" class="btn-primary mb-3" target="_blank" rel="noopener noreferrer">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 inline-block relative -top-0.5"
                             fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                  d="M12 10v6m0 0l-3-3m3 3l3-3M3 17V7a2 2 0 012-2h6l2 2h6a2 2 0 012 2v8a2 2 0 01-2 2H5a2 2 0 01-2-2z"/>
                        </svg>
                        Installer
                    </a>`;

export const linuxButton = ` <a href="#" class="btn-primary mb-3" target="_blank" rel="noopener noreferrer">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 inline-block relative -top-0.5"
                             fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                  d="M12 10v6m0 0l-3-3m3 3l3-3M3 17V7a2 2 0 012-2h6l2 2h6a2 2 0 012 2v8a2 2 0 01-2 2H5a2 2 0 01-2-2z"/>
                        </svg>
                        Package
                    </a>
                             <a href="#" class="btn-secondary" target="_blank" rel="noopener noreferrer">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 inline-block relative -top-0.5"
                             viewBox="0 0 20 20" fill="currentColor">
                            <path d="M2 6a2 2 0 012-2h5l2 2h5a2 2 0 012 2v6a2 2 0 01-2 2H4a2 2 0 01-2-2V6z"/>
                            <path stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                  d="M10 9v4m0 0l-2-2m2 2l2-2"/>
                        </svg>
                        Synology DS218+
                    </a>`;

export const raspberryPiButton = ` <a href="#" class="btn-primary" target="_blank" rel="noopener noreferrer">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 inline-block relative -top-0.5"
                             fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                  d="M12 10v6m0 0l-3-3m3 3l3-3M3 17V7a2 2 0 012-2h6l2 2h6a2 2 0 012 2v8a2 2 0 01-2 2H5a2 2 0 01-2-2z"/>
                        </svg>
                        Package
                    </a>
                    <a href="#" class="btn-secondary" target="_blank" rel="noopener noreferrer">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 inline-block relative -top-0.5"
                             viewBox="0 0 20 20" fill="currentColor">
                            <path d="M2 6a2 2 0 012-2h5l2 2h5a2 2 0 012 2v6a2 2 0 01-2 2H4a2 2 0 01-2-2V6z"/>
                            <path stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                  d="M10 9v4m0 0l-2-2m2 2l2-2"/>
                        </svg>
                        SD Card image(FR)
                    </a>
                    <a href="#" class="btn-secondary" target="_blank" rel="noopener noreferrer">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 inline-block relative -top-0.5"
                             viewBox="0 0 20 20" fill="currentColor">
                            <path d="M2 6a2 2 0 012-2h5l2 2h5a2 2 0 012 2v6a2 2 0 01-2 2H4a2 2 0 01-2-2V6z"/>
                            <path stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                  d="M10 9v4m0 0l-2-2m2 2l2-2"/>
                        </svg>
                        SD Card image(EN)
                    </a>`;

export function generateDonwloadCard(asset: { path: string; alt: string }, header: string, paragraph: string, buttonsHtml: string): string {
    return `<img class="h-48 p-8" src="${asset.path}" alt="${asset.alt}" loading="lazy"/>
            <div class="flex flex-col p-3 items-center">
                <h1 class="mt-6 text-2xl font-bold text-gray-900 sm:mt-3 sm:text-4xl text-center">${header}</h1>
                <p class="mt-2 mb-3 text-gray-600 sm:mr-4 sm:text-xl text-left">${paragraph}</p>
                <hr class="mt-4 mb-3 border-1 border-gray-500 w-full"/>
                ${buttonsHtml}
            </div>
            `
}