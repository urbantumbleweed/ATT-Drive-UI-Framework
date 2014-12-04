# Head Unit development environment setup
AT&T Head Unit apps are built with HTML5 for AngularJS framework. Sample apps contain directives for UI and essential functionality like app menu, app routes, init and hooks into the middle-ware data and event controller, for which the API is documented [here](link). 

App framework contains automation and helper tools for which we need to install NodeJS, and some of its libraries. 

# Step 1: 
### Before you start
Before you start development make sure you have the following installed:
- NodeJS [http://nodejs.org](http://nodejs.org) (.exe or .dmg installers are available)

Once Node is installed and running, using terminal as sudo (Node shell running as Administrator on Windows): 
- Install globally Grunt, Karma, Bower and Grunt-Cli: `npm install -g grunt bower karma grunt-cli http-server`

# Step 2: 
### Install Head Unit simulator and DEC service
Need instructions here once the SIM is ready. Hacker will need to tie their IDE to the HU running on a tablet. 

# Step 3: 
## Building apps for Head Unit
AT&T Drive automotive app development framework and UI Kit are AngularJS based complete with readily available UI directives built to enable you -the developer, to effortlessly create apps to be deployed on AT&T Drive automotive Services Delivery Platform.

App framework contains all the essentials to build standardized head unit apps, and starting your app from the sample apps is the fastest way to get started. Then take advantage of the [AT&T Drive UI Kit API Docs](Link to Runnung UI Kit preview Site) to visualize the UX, and get the example code. 

Now you are ready to build your first app, and the API is readily available. 

## Head Unit App Framework
You can preview the [AT&T Drive UI Kit API Docs](Link to Runnung UI Kit preview Site) then copy & paste example code into your app. Optionally, you may also install the UI Kit reference site locally by following the instructions below. 

## Installing App Framework
- Verify you have performed **Step 1**
- Download UI Kit Framework [github](url)
- Change directory to Connected-Car-SDK folder 
- Run: `npm install`
- Then: `bower install`

## Seed your first app
Once you download the SDK, using terminal in "Connected-Car-SDK" folder run this command: `grunt seed --dec-host=127.0.0.1 --dec-port=4402 -name=/full/path/to/your/app` (you can change the default IP and port if needed). You can always change this later (see optional commands).

Once the build is completed the app will load in your browser and if you see the first page, the app is connected to span and ready for development. 

Now you are ready to build your first app, and the API is readily available. 

- [In-car Apps API Docs](url)
- [UI Kit API Docs](url)

# Optional stuff
### Running the docs website locally 
Default browser should auto-start and open your localhost URL: [http://localhost:9000](http://localhost:9000) after you execute grunt serve command. `grunt serve`

### Sample apps
Sample apps are the best place to start and you can download them from [github](url). Sample apps contain directives for UI and essential functionality like app menu, app routes, init and hooks into the middle-ware data and event controller.

#### Following sample apps are available:
- Hello World - Blank app with hooks to DEC API
- Navigation app - With an example function to pass an events to navigation app via DEC
- Vehicle Info app - Passes the vehicle information from TCU via the DEC

Once you [download](url) them locally, in terminal CD to that directory and inside the app folder of the app you wish to load, run `http-server`. Browser should pop-up showing you the app running, If your browser is able to communicate with the DEC service you should be able start building your apps.

### Helper commands (run in terminal inside the Connected-Car-SDK folder)
- Change SPAN Host IP: `grunt seed --dec-host=myHost`
- Change SPAN Port: `grunt seed --dec-port=12345`
- Launch UI Kit preview site locally: `grunt serve`
- Start your app (indide the app root folder) `http-server`
- Rebuild SDK (if updated) `grunt build` then copy & paste the dist/ATT-SDK folder to your app

## Building apps on Hand-held device
You can build the external apps to interface with in-vehicle Head Unit and exchange information over [REST API](url). You can also simulate (override) the TCU data via [Luigi](url) interface and see the result in the vehicle app and hand-held app alike.

- [Out-of-car Apps API](url)
- [Luigi Sandbox](url) 

> Example: You can build a wearable app to send navigation instructions to the vehicle Head Unit navigation app, or to remotely control the vehicle.
