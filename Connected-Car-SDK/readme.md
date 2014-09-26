# Downlaod
Fetch project from repo: `git@git.assembla.com:at-t-connected-car.SDK.git`

## Installation
Install nodeJS (nodejs.org)
In Connected Car SDK folder run `npm install -g grunt karma bower`
then `bower install`
then `grunt serve`

## Running the docs website
Default browser should auto-start and run http://localhost:9000

## Hello World app seed
To compile directives into a blank app in Connected Car SDK folder run `grunt seed -name=/path/to/AppName` where AppName is your app name like: `grunt seed -name=/Users/damirmustafic/Sites/myFirstApp`
You will see a two view app example (just add your background image)...

Go nuts!

## Running the example app (Accuweather)
- Install http-server (node module) globally `npm install –g http-server`
- CD into example app folder (/examples/accuweather) and run `http-server`
- Using your favorite browser open http://localhost:8080
