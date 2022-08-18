# About

This repo contains all the source code and assets for CmSpeedrunner's game Pixel Railfight. It is set up in a way so that you can easily mod it from the getgo. 

## Compiling

Dependencies:<br>
1. NPM (install: `curl -qL https://www.npmjs.com/install.sh | sh`)
2. Electron (install: `npm install --save-dev electron`)
3. Electron Packager (install: `npm install electron-packager --save-dev`)

Building:<br>
1. Download this repo `git clone https://github.com/relic374/pixel-railfight`
2. `cd` into `PixelRailfight/`
3. Unzip `node_modules.zip`

If you want to create a windows app:
`electron-packager . pixelrailfight-mod --platform=win32 --asar --overwrite`
 
If you want to create a MacOS app:
 `electron-packager . --overwrite --platform=darwin --arch=x64 --prune=true --out=release-builds --asar`

If you want to create a Linux app:
 `electron-packager . pixel-railfight-mod --overwrite --asar --platform=linux --arch=x64 --prune=true --out=release-builds`

**NOTE: If you get an error about your architecture/arch, replace the `x64` in `--arch=x64` with your computer's architecture**

## Guides

1. Getting_Started.md - Guide for getting started if you wanted to create what this repo has from scratch (obsolete, I paraphrased it above)
2. File_Refference - Explainations of what every code##.js file contains

To be added:
1. How to edit main.js
2. How to switch/replace textures
3. What the global modifiers at the top of `data.js` do

## More info

Download the game [here](https://cmspeedrunner.itch.io/pixel-railfight)<br>

Over time I will be adding more guides<br>
I have created a project named Hydro that easily backages electron apps. It's useful for building your mods. It is located on this github.

(Disclaimer: I got permission from the creator to upload this)
