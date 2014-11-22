#Head Unit development environmen setup
AT&T Head Unit apps are built with HTML5 for AngularJS framework. Sample apps contain directives for UI and essential functionality like app menu, app routes, init and hooks into the middleware data and event controller, for which the API is documented [here](link). 
App framework contains automation and helper tools for which we need to install NodeJS, and some of its libraries. 

## Step 1: Before you start
Before you start development make sure you have the following installed:
- NodeJS [http://nodejs.org](http://nodejs.org) (.exe or .dmg installers are available)

Once Node is installed and running, using terminal as sudo (Node shell running as Administrator on Windows): 
- Install globally Grunt, Karma, Bower and Grunt-Cli: `$npm install -g grunt bower karma grunt-cli http-server`

## Step 2: Install Head Unit sumulator and DEC service
Need instructions here once the SIM is ready. Hacker will need to tie their IDE to the HU running on a tablet. 

## Step 3: Download and run Head Unit sample apps with app framework
Sample apps are the best place to start and you can download them from [github](url). Sample apps contain directives for UI and essential functionality like app menu, app routes, init and hooks into the middleware data and event controller.

Following sample apps are available:
- Hello World - Blank app with hooks to DEC API
- Navigation app - With an example funciton to pass an events to navigation app via DEC
- Vehicle Info app - Passes the vehicle information from TCU via the DEC

Once you [download](url) them locally, in terminal CD to that directory and inside the app folder of the app you wish to load, run `http-server`. Browser should pop-up showing you the app running, If your browser is able to communicate with the DEC service you shold be able start building your apps 

## Building apps for Head Unit
AT&T Drive automotive app development framework and UI Kit are AngularJS based complete with readitly available UI directives built to enable you -the developer, to effortlessly create apps to be deployed on AT&T Drive automotive Services Delivery Platform.

App framework contains all the essentials to build standardized head unit apps, and starting your app from the sample apps shown in Step 3 is the fastest way to get started. Then take advanage of the [UI Kit preview site]() to visulize the UX, copy & paste code to extend UI directive's funttionality. 

## Building apps on Handheld device
You can build the external apps to inteface with in-vehicle Head Unit and exchange information over [REST API](url). You can also simulate (override) the TCU data via [Luigi](url) interface and see the result in the vehicle app and handheld app alike.

> Example: You can build a wearable app to send navigation instructions to the vehicle Head Unit navigation app, or to remotely control the vehicle.

## Head Unit app UI framework
AT&T Drive Automotive App development UI Kit is built to enable you -the developer, to effortlessly create apps to be deployed on AT&T Drive Automotive Services Delivery Platform in a standardized faschion to enable OEM to optimize apps in their vehicles without too much effort. 

You can preview the AT&T Drive UI Kit [here](url) then copy & paste example code into your app. You may also install the UI Kit reference site locally by following the instructions below. 

### Installing UI Kit reference site locally
- Verify you have performed Step 1
- Download UI Kit Framework [github](url)
- Change directory to Connected-Car-SDK folder 
- Run: `$npm install`
- Then: `$bower install`
- and finally: `$grunt serve` or `$grunt serve --force` if you see any errors

### Running the docs website
Default browser should auto-start and open your localhost URL: [http://localhost:9000](http://localhost:9000) after you execute grunt serve command.
