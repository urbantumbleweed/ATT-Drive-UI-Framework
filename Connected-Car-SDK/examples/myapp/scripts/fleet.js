/*
1. Set subscriptions
2. Add parsing for all subscriptions and attach result to the $rootScope
3. Set watchers on $rootScope, where received data is going to be consumed(controllers)
*/

var rs = {};

var FIRST_DISTANCE = 1;
var UNLOCK_DISTANCE = 0.5;
var currentRange = 0;

var props = [
  {
    id: 'prop1',
    address: '600 West Peachtree St NE, Atlanta, Georgia 30308',
    latitude: 33.7768223,
    longitude: -84.3873029
  },
  {
    id: 'prop2',
    address: 'asdfasdf',
    latitude: 33.7768223,
    longitude: -84.3873029
  },
  {
    id: 'prop3',
    address: 'asdfads',
    latitude: 33.7768223,
    longitude: -84.3873029
  }
];



function getDistanceFromLatLonInKm(lat1,lon1,lat2,lon2) {
  var R = 6371; // Radius of the earth in km
  var dLat = deg2rad(lat2-lat1);  // deg2rad below
  var dLon = deg2rad(lon2-lon1);
  var a =
    Math.sin(dLat/2) * Math.sin(dLat/2) +
    Math.cos(deg2rad(lat1)) * Math.cos(deg2rad(lat2)) *
    Math.sin(dLon/2) * Math.sin(dLon/2)
    ;
  var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
  var d = R * c; // Distance in km
  return d;
}

function deg2rad(deg) {
  return deg * (Math.PI/180)
}


function decSetSubscriptions() {
    //*** TODO: Set here subscription to all namespaces you are interested in
    drive.vehicleinfo.subscribe(decCallback, logError);
    drive.navigation.subscribe(decCallback, logError);
    drive.notification.subscribe(decCallback, logError);
    //drive.identity.users.subscribe(decCallback, logError);
    //drive.commerce.subscribe(decCallback, logError);
    drive.settings.subscribe(decCallback, logError);
}

function decCallback(decResponse) {
    console.info("sample-app: Calling back Dec with response: " + JSON.stringify(decResponse));
    process(decResponse);
};

function process(data) {
    //console.info("sample-app: Process = ", data);

    if(data && data.position){
        console.log('POSITION UPDATED!', data.position);

        var restClient = restBundle.rest.wrap(restBundle.mime).wrap(restBundle.entity);
        restClient({path:'/log', params: data.position, method: 'POST'}).then(function(resp){
            console.log('logged', resp);
        });

        var dist = getDistanceFromLatLonInKm(props[0].latitude, props[0].longitude, data.position.latitude, data.position.longitude);
        if(currentRange === 0  && dist < FIRST_DISTANCE){
            currentRange = 1;
            //emit AC on:
            restClient({path:'/ac', params: data.position, method: 'GET'}).then(function(resp){
                console.log('logged', resp);
            });
        }else if(currentRange === 1 && dist < UNLOCK_DISTANCE){
            currentRange = 2;
            //unlock doors:
            restClient({path:'/unlock', params: data.position, method: 'GET'}).then(function(resp){
                console.log('logged', resp);
            });
        }
        console.log('dist', dist);
    }


};

function logError(errorMsg) {
    console.log("sample-app: Error = ", errorMsg);
};





// AT&T DRIVE DEC INIT
function initDec() {
    rs.decInstance = {};
    window.DecInstanceConstructor = function (inputParam) {
        var input = inputParam;
        var isOnline = input && input.successCode == '0';

        function getSuccessObject() {
            return isOnline ? input : null;
        }

        function getErrorObject() {
            return !isOnline ? input : null;
        }

        function status() {
            var returnObj = {};

            returnObj.status = isOnline ? 'success' : 'error';
            returnObj.message = isOnline ? input.successMessage : input.errorMessage;
            returnObj.code = isOnline ? input.successCode : input.errorCode;

            return returnObj;
        }

        return {
            isOnline: isOnline,
            status: status,
            getSuccessObject: getSuccessObject,
            getErrorObject: getErrorObject
        };
    };

    function decCallback(decResponse) {
        rs.decInstance = new DecInstanceConstructor(decResponse);

        decSetSubscriptions();

        //hacky ui setup
        $( ".propList div" ).click(function() {

          var selectedId = this.id;
          props.forEach(function(prop){
            console.log(selectedId, prop.id);
            if(prop.id === selectedId){
               $('#' +prop.id).removeClass('unselectedProp');
               $('#' +prop.id).addClass('selectedProp');
            }
            else{
               $('#' +prop.id).removeClass('selectedProp');
               $('#' +prop.id).addClass('unselectedProp');
            }
          });
        });
    };

    try {
        // DO NOT REMOVE THE BELLOW COMMENT - used for grunt build process
        init(decCallback, ["appmanager", "commerce", "connectivity", "identity", "media", "navigation", "notification", "policy", "sa", "search", "settings", "sms", "va", "vehicleinfo"], 'myFirstApp');
    } catch (e) {
        rs.decInstance = new DecInstanceConstructor({
            "errorCode": e.code,
            "errorMessage": e.message,
            "thrownError": e
        });
    }
}

initDec();
