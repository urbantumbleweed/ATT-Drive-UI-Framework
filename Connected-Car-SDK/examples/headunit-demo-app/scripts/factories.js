app.factory('decFactory', function ($interval,$timeout) {

    var vehicleInfoInit = {
        "identification": {
            "vin": "112233",
            "vehicleType": "Car",
            "model": "S60",
            "brand": "Volvo",
            "wmi": "3 doors",
            "year": 2000
        },
        "fuel": {
            "level": 5
        },
        "ignition": {
            "vehiclePowerMode": false
        },
        "parkingBreak": {
            "status":"inactive"
        },
        "diagnostics":{
            "engine": "ok",
            "antilockBrakingSystem": "ok",
            "airBags":"ok",
            "troubleCodes": ""
        },
        "climateControl": {
            "airConditioning": false,
            "airflowDirection": "frontpanel",
            "fanSpeedLevel":5,
            "targetTemperature":23,
            "heater": false,
            "seatHeater":0,
            "seatCooler":0,
            "steeringWheelHeater":0,
            "temperature":{
                "interiorTemperature":23,
                "exteriorTemprerature":24
            }
        },
        "sideWindow": {
            lock: false,
            openess: 0
        },
        "door": {
            lock: true,
            status: "close"
        }
    }
    var navInfoInit = {
        position: {
            "latitude": 1.1,
            "longitude": 2.2,
            "altitude": "3",
            "heading": "4.4",
            "precision": "",
            "velocity": "5"
        }
    };
    var notificationInit = {
        message: {
            "text": ""
        }
    }

    var factory = {};

    $interval(function(){
        console.log("sample-app: Pulling storage. This should happen evey second and is a non-ideal work-around for DecSDK.");
        factory.pullStorage();
    },1000);

    factory.init = function () {

        this.testmode = false;
        this.welcomepage = true;
        this.testSingleton = 0;

        // Initializing data
        console.log("sample-app: Initializing DecFactory...");

        this.vehicleInfo = vehicleInfoInit;
        this.position = navInfoInit.position;
        this.notification = notificationInit.message;

        console.log("sample-app: Initializing listeners");
        localStorage.clear();

        // Intialialize state
        this.listenerInitialized = false;

        init(new function() {},["vehicleinfo","navigation","notification"],"myApp");

        // Initialising handles - set to null to set switches to off
        this.handleVI = drive.vehicleinfo.subscribe(this.decCallbackVI);
        this.handleNotif = drive.notification.subscribe(this.decCallbackNotif);
        //this.handleNav = null;
        this.handleNav = drive.navigation.position.subscribe(new function() {});
    }

    factory.init();

    factory.toggleWelcome = function(){
        this.welcomepage = !this.welcomepage;
    }

    factory.getNotification = function(){
        return this.notification;
    }

    factory.clearNotification = function(){
        console.log("sample-app: Clearing notification");
        this.notification.text = "";
    }

    factory.getVehicleInfo = function () {
        return this.vehicleInfo;
    };

    factory.postVehicleInfo = function (vehicleInfo){
        console.log("sample-app: Posting to Vehicle Info to factory...");
        this.vehicleInfo = vehicleInfo;
        if (!this.testmode)
            drive.vehicleinfo.identification.set(this.vehicleInfo).then(logResult, logError);
    };

    factory.getPosition = function () {
        return this.position;
    };

    factory.postNavInfo = function (position){
        console.log("sample-app: Posting to Navigation Info to factory...");
        this.position = position;
        if (!this.testmode)
            drive.navigation.position.set(this.position).then(logResult, logError);

    };

    factory.postNotification = function (notification){
       // alert("Ohh " + notification.text);
        this.notification.text = notification;
    };

    factory.showStorageData = function(content){
        console.log("sample-app: Showing storage");
        var datastruct = "";
        var e = "",
            o = 0;
        for (console.log("Local Storage length is" + localStorage.length), o = 0; o <= localStorage.length - 1; o++){
            e = localStorage.key(o);
            var n = /\d/g;
            n.test(e)||(datastruct += e + " : " + localStorage.getItem(e) + "\n");
        }
        alert(datastruct);
    }

    factory.stringToObj = function(path,value,obj) {
        var parts = path.split("."), part;
        var l = parts.length;
        var key = parts[l-1];
        var restparts = parts.slice(0,l-1);

        //alert("Parts " + parts + " Key " + key + "  Rest " + restparts);
        while(part = restparts.shift()) {
            if( typeof obj[part] != "object") obj[part] = {};
            obj = obj[part]; // update "pointer"
        }
        obj[key] = value;
    }

    factory.pullStorage = function() {
        console.log("sample-app: Showing storage");
        var obj = {};
        var e = "",
            o = 0;
        for (o = 0; o <= localStorage.length - 1; o++) {
            e = localStorage.key(o);
            console.log("key", e);
            var n = /\d/g;
            if (!n.test(e)) {
                this.stringToObj(e, localStorage.getItem(e), obj);
            }
        }
        var jsonString = JSON.stringify(obj);
        var jsonObject = JSON.parse(jsonString);

        //Merge JSON objects to keep existing information
        if (jsonObject.vehicleinfo != null)
            this.vehicleInfo = $.extend( this.vehicleInfo, jsonObject.vehicleinfo);
        else
            console.log("sample-app: No vehicle info in local storage");
        if (jsonObject.navigation != null)
            this.position = $.extend( this.position, jsonObject.navigation.position);
        else
            console.log("sample-app: No navigation info in local storage");
        if (jsonObject.notification != null)
            this.notification = $.extend( this.notification, jsonObject.notification.message);
        else
            console.log("sample-app: No notifications in local storage");

    }


    factory.showStorageSubscriptions = function(content){
        console.log("sample-app: Showing storage subscriptions");
        var datastruct = "";
        var e = "",
            o = 0;
        for (console.log("Local Storage length is" + localStorage.length), o = 0; o <= localStorage.length - 1; o++){
            e = localStorage.key(o);
            var n = /\d/g;
            n.test(e)&&(datastruct += e + " : " + localStorage.getItem(e) + "\n");
        }
        alert(datastruct);
    }

    factory.clearStorage = function(content){
        console.log("sample-app: Clearing storage");
        localStorage.clear();
    }

    factory.initListener = function () {
        if (this.listenerInitialized || this.testmode)
            console.log("sample-app: Listener initialized. Doing nothing.");
        else {
            console.log("sample-app: Listener not initialized. Doing nothing as this is test function.");
            //localStorage.clear();
            init(new this.decCallback(),["vehicleinfo","navigation","notification"],"myApp");
        }
    }

    function logResult(value){
        console.log("sample-app: Values updated. Get function retrieved: " + value);
        //if (!value.match("success"))
            alert("Values updated. Get function retrieved " + JSON.stringify(value));
    };

    function logError(value){
        console.log("sample-app: Failure setter: " + value);
    };


    factory.decCallback = function () {
        console.log("sample-app: Generic Info Updated");
    };

    factory.decCallbackVI = function () {
        console.log("sample-app: Promise fulfilled. Vehicle Info update recieved.");
       // alert("Vehicle Info Updated");
    };

    factory.decCallbackNav = function () {
        console.log("sample-app: Promise fulfilled. Position update recieved.");
       // alert("Position Updated");
    };

    factory.decCallbackNotif = function () {
        console.log("sample-app: Promise fulfilled. Notification recieved");
        //alert(Notification Recieved");
    };

    factory.subscribeVI = function () {
        this.initListener();
        console.log("sample-app: Subscribing to Vehicle Information...");
        if (this.testmode)
            this.handleVI =  this.$watchCollection('vehicleInfo', this.decCallbackVI);
        else
            this.handleVI = drive.vehicleinfo.subscribe(this.decCallbackVI);

    }

    factory.unsubscribeVI = function () {
        console.log("sample-app: Unsubscribing to Vehicle Information... ");
        if (this.testmode)
            this.handleVI();
        else
            drive.vehicleinfo.unsubscribe(this.handleVI);
        this.handleVI = null;
    }


    factory.subscribeNav = function () {
        this.initListener();
        console.log("sample-app: Subscribing to Navigation...");
        if (this.testmode)
            this.handleNav =  this.$watchCollection('navInfo', this.decCallbackNav);
        else
            this.handleNav = drive.navigation.position.subscribe(this.decCallbackNav);
    }

    factory.unsubscribeNav = function () {
        console.log("sample-app: Unsubscribing to Navigation...");
        if (this.testmode)
            this.handleNav();
        else
            drive.navigation.position.unsubscribe(this.handleNav);

        this.handleNav = null;
    }


    factory.subscribeNotif = function () {
        this.initListener();
        console.log("sample-app: Subscribing to Notifications...");
        if (this.testmode)
            this.handleNotif = this.$watchCollection('notification', this.decCallbackNotif);
        else
            this.handleNotif = drive.notification.subscribe(this.decCallbackNotif);

    }

    factory.unsubscribeNotif = function () {
        console.log("sample-app: Unsubscribing to Notifications...");
        if (this.testmode)
            this.handleNotif();
        else
            drive.notification.unsubscribe(this.handleNotif);

        this.handleNotif = null;
    }


    factory.simulate = function() {
        console.log("sample-app: Simulating updates");

        this.position.latitude += 0.02;
        this.position.longitude += 0.02;
        this.vehicleInfo.climateControl.airConditioning = !this.vehicleInfo.climateControl.airConditioning
        this.vehicleInfo.climateControl.fanSpeedLevel++;
        this.vehicleInfo.fuel.level++;
        this.vehicleInfo.door.lock = !this.vehicleInfo.door.lock;
        this.vehicleInfo.door.status = "ajar";
        this.vehicleInfo.sideWindow.openess++;
      //  this.notification.text = "I am an incoming notification";
    }

    return factory;

})