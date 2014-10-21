# AT&T Drive UI Framework

## UI Kit for AT&T Drive Platform
This AT&T Drive Automotive App development UI Kit is built to enable you -the developer, to effortlessly create apps to be deployed on AT&T Drive Automotive Services Delivery Platform.
At this time this is only an UI toolkit, with a goal to by 2015 include Drive Platform APIS and become an all-around SDK.

## Installation
- Install NodeJS http://nodejs.org
- Using terminal as sudo install globally Grunt, Karma, Bower and Grunt-Cli: `$npm install -g grunt bower karma grunt-cli`
- Change directory to Connected Car SDK folder and run: `$npm install`
- Then: ```$bower install```
- and finally: `$grunt serve` or `$grunt serve --force` if you see any errors

## Running the docs website
Default browser should auto-start and open your localhost URL: [http://localhost:9000](http://localhost:9000) after you execute grunt serve command.

## Hello World app seed
To compile directives into a blank app in Connected Car SDK folder run `grunt seed -name=/path/to/AppName` where AppName is your app name like: `grunt seed -name=/Users/damirmustafic/Sites/myFirstApp`
You will see a two view app example (just add your background image)...

## Updating to latest UI Kit
- Pull the latest from [Github](https://github.com/ericsson-innovate/ATT-Drive-UI-Framework)
- Run `grunt build` inside the Connected Car SDK
- New build of att-sdk will be created in <code>dist</code> folder
- Copy the folder and files from 'dist' folder and paste them (overwrite) files in yourapp/att-sdk folder

## Running the example app (Weather)
- Install http-server (node module) globally `npm install –g http-server`
- CD into example app folder (/examples/accuweather) and run `http-server`
- Using your favorite browser open [http://localhost:8080](http://localhost:8080)

## App examples
<img src="/att-drive-apps-onesheet.png">
