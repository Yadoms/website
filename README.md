[![Build status](https://github.com/Yadoms/website/workflows/Build/badge.svg)](https://github.com/Yadoms/website/actions)
[![Publish yadoms Website](https://github.com/Yadoms/website/actions/workflows/deploy.yml/badge.svg)](https://github.com/Yadoms/website/actions/workflows/deploy.yml)

# Installation

```
npm install
npm run start
```

And then go to `localhost:1234`

# Handling changes

If you need to change things such as navbar for example, you will find all the reusable component througout the pages in the folder : `/src/partials`.
Change the html here and modifiy the css in the good file in `/src/scss`.
That is almost everything you need to know.

If you have run : `npm run start`, parcels has an excellent hot reload except if you are on another page than index.html. There is a bug with parcels that requires you to manually refresh the page when you are not working on `index.html`.

# Shoutouts

- We thank all the people who contribute, the project exists because of you<br />
- We thank [JetBrains](https://www.jetbrains.com/?from=yadoms) for the licenses<br />
  <a href="https://www.jetbrains.com/?from=yadoms" target="_blank"><img src="./src/img/jetbrains-variant-3.svg"></a>

This project is generated using those commands :

## Init project
```
npm init -y 
```

## Install dependencies
```
npm install -D autoprefixer postcss tailwindcss vite
```

## init tailwindcss
```
npx tailwindcss init -p
```

## FAQ
1. Parcel is not reloading ? 
```
Disable safe write on your IDE + clean .parcel-cache & dist
```

## Credits

- [https://fontawesome.com/license](Fontawesome)
- [https://heroicons.com/](HeroIcons)
- [https://tailwindcss.com/](Tailwindcss)
- [https://v2.parceljs.org/](Parcel)
- [https://undraw.co/](Undraw)