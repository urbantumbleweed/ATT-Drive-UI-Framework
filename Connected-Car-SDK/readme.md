# Downlaod
Fetch project from repo: `git@git.assembla.com:at-t-connected-car.SDK.git`

## Installation
Install nodeJS (nodejs.org)
In Connected Car SDK folder run `npm install -g grunt karma bower`
then `bower install`
then `grunt serve`

## Running the docs website
Default browser should auto-start and run http://localhost:9000

## Running the example app (Accuweather)
- Install http-server (node module) globally `npm install –g http-server`
- CD into example app folder (/examples/accuweather) and run `http-server`
- Using your favorite browser open http://localhost:8080

# Notes:
We have completed our work on the SDK, at least for the initial version.
 
Current version is 0.0.4. Please note that build process is not completely automated, but we will work by CES hackaton.
 
Example Accuweather app can be found in folder /examples/accuweather. You can inspect index.html file to see what css/js files are needed for this sample app. In this instance we used the following files from dist folder:
- Folder fonts: all files copied from dist
- Folder images: all files copied from dist + additional images used in accuweather app
- Folder scripts: connectedCarSDK-tpls-0.0.4.js (sdk toolkit with embedded templates – we recommend that developers use this file during their development)
- Angular.js and angular-route.js is included as we needed it for the accuweather app (these are not distributed with the sdk)
- Folder styles: att-sdk.css, vendor.css and sample-app.css are used
- App folder contains application specific files – controllers/views/services for the accuweather app (those are referenced on the bottom on index.html)

## Few notes from designers:
- Positioning of tabs and the menu seems OK in the documentation, but can behave strange when using the component in a new app. Until we identify why, it's recommended to use overrides found in the sample-app.css (Accuweather app).
- In general, it's useful to take a look at sample-app.css overrides in case of issues with the SDK compiled CSS, until we test these issues further.
- This file also has helpful classes for a lot of the elements present in the comps. In a later version, we'll add these to the SDK as well and write instructions on how to use them.
- There is no docs page for the grid system, even though it’s included in the att-sdk.css. The reason for this is that Tarik had problems using it while building the example app, and we didn’t have time to look into the cause. In any case, it’s really just the bootstrap’s original grid system, if anyone wants to give it a try.