export interface LatestReleaseInfos {
    tag_name: string;
    assets: Assets[];
}

export interface Assets {
    browser_download_url: string;
    created_at: string;
    name: string;
}

export async function getYadomsLatestRelease(): Promise<LatestReleaseInfos> {
    const url: string = 'https://api.github.com/repos/Yadoms/yadoms/releases/latest';
    return fetch(url).then(res => res.json())
        .then(data => {
            let latestReleaseInfos: LatestReleaseInfos = {
                tag_name: data["tag_name"],
                assets: data["assets"].map((d: Assets) => {
                    let asset: Assets = {
                        created_at: d['created_at'],
                        browser_download_url: d['browser_download_url'],
                        name: d['name']
                    }
                    return asset;
                })
            };
            return latestReleaseInfos;
        })
}
