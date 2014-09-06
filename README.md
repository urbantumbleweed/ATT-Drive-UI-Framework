# AT&T Drive UI Framework CTIA

## UI Kit for AT&T Drive Platform
This AT&T Drive Automotive App development UI Kit is built to enable you -the developer, to effortlessly create apps to be deployed on AT&T Drive Automotive Services Delivery Platform.
At this time this is only an UI toolkit, with a goal to by 2015 include Drive Platform APIS and become an all-around SDK.

## App examples
<img src="https://github.com/dmustafic/AT-T-Drive-UI-Framework-CTIA/blob/master/Connected%20Car%20SDK/app/images/att-drive-apps-onesheet.png">

## Installation
With NodeJS installed run as sudo: `$npm install -g grunt bower karma grunt-cli`
In Connected Car SDK folder run: `$npm install`
then: `$bower install`
and finally: `$grunt serve` or `$grunt server --force` if you see any errors

## Running the docs website
Default browser should auto-start and run http://localhost:9000 after you execute grunt serve command. 

## Running the example app (Weather)
- Install http-server (node module) globally `npm install –g http-server`
- CD into example app folder (/examples/accuweather) and run `http-server`
- Using your favorite browser open http://localhost:8080
