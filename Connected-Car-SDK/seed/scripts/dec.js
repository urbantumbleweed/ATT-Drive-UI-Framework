/*
1. Set subscriptions
2. Add parsing for all subscriptions and attach result to the $rootScope
3. Set watchers on $rootScope, where received data is going to be consumed(controllers)
*/

function decSetSubscriptions() {
    //*** TODO: Set here subscription to all namespaces you are interested in
    drive.vehicleinfo.subscribe(decCallback, logError);
    drive.navigation.subscribe(decCallback, logError);
    drive.notification.subscribe(decCallback, logError);
    drive.identity.users.subscribe(decCallback, logError);
    drive.commerce.subscribe(decCallback, logError);
}

function decCallback(decResponse) {
    console.info("sample-app: Calling back Dec with response: " + JSON.stringify(decResponse));
    process(decResponse);
};

function process(data) {
    console.info("sample-app: Process = ", data);

    if (data.pois != null) {
        $rootScope.pois = data.pois;
    }
    if (data.position != null) {
        $rootScope.position = data.position;
    }
    if (data.fuel != null) {
        $rootScope.fuel = data.fuel;
    }
    if (data.ignition != null) {
        $rootScope.ignition = data.ignition;
    }
    if (data.parkingBreak != null) {
        $rootScope.parkingBreak = data.parkingBreak;
    }
    if (data.diagnostics != null) {
        $rootScope.diagnostics = data.diagnostics;
    }
    if (data.climateControl != null) {
        $rootScope.climateControl = data.climateControl;
    }
    if (data.sideWindow != null) {
        $rootScope.sideWindow = data.sideWindow;
    }
    if (data.door != null) {
        $rootScope.door = data.door;
    }

    //*** TODO: Add parsing for all made subscriptions
};

function logError(errorMsg) {
    console.log("sample-app: Error = ", errorMsg);
};