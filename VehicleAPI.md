#AT&T Drive Vehicle API

## Context initialization
Application must call the init function to setup the context of a given SDK before usage.
The callback function will be called by DEC to notify the application of any changes made to its data store space made by external applications or components.
`callback InterfaceCallback = void(object value, EventType eventType); ();`

For instance, if an application wants to use the vehicle information SDK, the application would have to call:
`init(appId, callBack, ["vehicleinfo","navigation"]);`

## Vehicle Information
This Javascript SDK allows retrieving and setting vehicle information.
The following interface represents a base interface to all vehicle properties (from W3C):

```javascript
interface VehicleInterface {
    Promise get (optional object options);
    Promise set (object value, optional object options);
    Promise delete (object value, optional object options);
    Integer subscribe (VehicleInterfaceCallback callback, optional object options);
    void unsubscribe (Integer handle);
    Availability available ();
    readonly attribute Zone[] zones;
};
callback VehicleInterfaceCallback = void(object value, EventType eventType); ();

interface Zone {
    const String Front = "Front";
    const String Middle = "Middle";
    const String Right = "Right";
    const String Left = "Left";
    const String Rear = "Rear";
    const String Center = "Center";
                attribute String[] value;
    readonly    attribute Zone        driver;
    readonly    attribute Zone        passenger;
    Boolean equals (Zone zone);
    Boolean contains (Zone zone);
};

enum Availability {
"available",
"readonly",
"not_supported",           
"not_supported_yet",       
"not_supported_security",
"not_supported_policy",
"not_supported_other"
};

enum EventType {
"create",
"read",
"update",
"delete"
};

interface VehicleCommonDataType {
    readonly    attribute Zone         zone;
    readonly    attribute DOMTimeStamp timeStamp;
};
```

Object options can be of type Zone or extended options (to keep compatibility with W3C).
Optional parameter "options" allows filtering the set of attributes the method is applied to. For instance, chose logical or physical vehicle zone.

VehicleCommonDataType interface represents common data type for all vehicle data types.

### Vehicle properties
Below properties is a subset of possible attributes that a Vehicle Information Controller may support. More attributes shall be added in the next version of this SDK.

Vehicle properties that are not supported by a given VIC will not be returned in a get method performed on parent object but will trigger an error if methods (get, set, delete, subscribe) are called on a specific unsupported property.

|Parameter   	        |Type   	    |Required  	|Read only  	|Description  	|
|---	|---	|---	|---	|---	|
|**Vehicle identification** 
|identification.vin   	|String   	    |True   	|Yes   	        |Vehicle |identification number   	|
|identification.wmi	|String	|False	|Yes	|World Manufacture Identifier|
|identification.iccid	|String	|False	|Yes	|Integrated Circuit Card Identifier|
|identification.imsi	|String	|False	|Yes	|International Mobile Subscriber Identity|
|identification.tcusn	|String	|False	|Yes	|TCU Serial Number|
|identification.vehicleType	|String	|False	|Yes	|Vehicle type|
|identification.brand	|String	|False	|Yes	|Vehicle brand|
|identification.model	|String	|False	|Yes	|Vehicle model|
|identification.description	|String	|False	|Yes	|Model name description|
|identification.year	|Integer	|False	|Yes	|Vehicle model year|
|identification.deliveryMileage	|Long	|False	|Yes	|Odometer at delivery|
|identification.deliveryDate	|Date	|False	|Yes	|Sale date (retail)|
|identification.licenseNumber	|String	|False	|Yes	|License plate number|
|identification.transmissionNumber	|String	|False	|Yes	|Transmission serial number|
|identification.engineNumber	|String	|False	|Yes	|Serial number of the engine|
|identification.ignitionKeyNumber	|String	|False	|Yes	|Vehicle ignition key number|
|identification.doorKeyNumber	|String	|False	|Yes	|Door key number|
|identification.category	|String	|True	|Yes	|Sedan, SUV, …|
|identification.owner.id	|String	|True	|Yes	|Owner ID|
|identification.owner.type	|String	|True	|Yes	|Owner Type: subscriber, dealer, oem|
|**Vehicle equipment**				
|devices	|{array}	|False	|Yes	|Vehicle devices: HU, TCU, Rear screens, DAC, etc|
|devices.deviceId	|String	|True	|Yes	|Device identifier|
|devices.description	|String	|False	|Yes	|Device description|
|devices.metas	|{array}	|False	|Yes	|Device metadata (array of attribute:value)|
|**Vehicle life cycle**				
|lifecycle.status	|String	|True	|Yes	|Inventory, demo, trial, retail, service, junk|
|lifecycle.condition	|String	|False	|Yes	|Vehicle condition. Excellent, Good, Poor, Unknown.|
|**Vehicle configuration**	
|configuration.totalDoors	|Integer	|False	|Yes	|Number of doors|
|configuration.fuelType	|String	|False	|Yes	|Fuel type|
|configuration.refuelPosition	|String	|False	|Yes	|Side of the vehicle with access to the fuel door|
|configuration.color.interior	|{array}	|False	|Yes	|Vehicle interior colors|
|configuration.color.interior.colorCode	|String	|True	|Yes	|Color code|
|configuration.color.interior.colorName	|String	|False	|Yes	|Color description|
|configuration.color.exterior	|{array}	|False	|Yes	|Vehicle exterior colors|
|configuration.color.exterior.colorCode	|String	|True	|Yes	|Color code|
|configuration.color.exterior.colorName	|String	|False	|Yes	|Color description|
|configuration.transmissionType	|String	|False	|Yes	|Vehicle transmission type|
|configuration.weight	|Float	|False	|Yes	|Vehicle weight|
|configuration.options	|{array}	|False	|Yes	|Vehicle options (array of attribute: value)|
|**Vehicle status**	
|vehicleSpeed.speed	|Integer	|False	|Yes	|Vehicle speed (KM/h or MP/h|
|vehicleSpeed.averageSpeed	|Integer	|False	|Yes	|Estimated average speed in KM/h |
|vehicleCompass.direction	|Float	|False	|Yes	|Degree direction of the vehicle compass to be used by navigation identify the car direction| inside garage or when it is not moving|
|engineSpeed.speed	|Integer	|False	|Yes	|Engine RPM 10X1000.|
|transmission.transmissionMode	|String	|False	|Yes	|Transmission mode: P R N D |
|chime.status	|Boolean	|False	|Yes	|Chime status when a door is open: T/F|
|fuel.level	|Integer	|False	|Yes	|Fuel level as a percentage of fullness|
|fuel.range	|Integer	|False	|Yes	|Estimated fuel range in kilometers/miles (depending on unit configuration)|
|engineOil.remaining	|Integer	|False	|Yes	|Remaining engine oil as percentage of fullness|
|engineOil.temperature	|Long	|False	|Yes	|Engine Oil Temperature(in degrees Celsius)|
|engineOil.pressure	|Integer	|False	|Yes	|Engine Oil Pressure in PSi|
|engineOil.change	|Boolean	|False	|Yes	|Engine oil change indicator status|
|engineCoolant.level	|Integer	|False	|Yes	|Engine coolant level as percentage of fullness|
|engineCoolant.temperature	|Integer	|False	|Yes	|Engine coolant temperature(in degrees Celsius)|
|**Vehicle climate control**	
|climateControl.airflowDirection	|String	|False	|No	|Airflow direction: "frontpanel", "floorduct",   "bilevel", "defrostfloor"|
|climateControl.fanSpeedLevel	|Integer	|False	|No	|Fan speed of the air flowing (0: off, 1: weakest ~ 10: strongest )|
|climateControl.targetTemperature	|Integer	|False	|No	|Desired temperature(in degrees Celsius)|
|climateControl.airConditioning	|Boolean	|False	|No	|Air conditioning system T/F|
|climateControl.heater	|Boolean	|False	|No	|Heating system T/F|
|climateControl.seatHeater	|Integer	|False	|No	|Seat warmer (0: off, 1: least warm ~ 10: warmest)|
|climateControl.seatCooler	|Integer	|False	|No	|Seat ventilation (0: off, 1: least warm ~ 10: warmest)|
|climateControl.airRecirculation	|Boolean	|False	|No	|Air recirculation. (True : on, False : pulling in outside air)|
|climateControl.steeringWheelHeater	|Integer	|False	|No	|Steering wheel heater (0: off, 1: least warm ~ 10: warmest)|
|sideWindow.lock	|Boolean	|False	|No	|Whether or not the window is locked T/F|
|sideWindow.openness	|Integer	|False	|No	|Side window as a percentage of openness. (0:Closed, 100:Fully Opened)|
|**Driving safety**	
|door.status	|String	|False	|Yes	|Door status enum: "open", "ajar", "close"|
|door.lock	|Boolean	|False	|No	|Whether or not the door is locked T/F|
|airBagStatus.activated	|Boolean	|False	|Yes	|Whether or not the airbag is activated T/F|
|airBagStatus.deployed	|Boolean	|False	|Yes	|Whether the airbag is deployed T/F|
|seat.occupant	|String	|False	|Yes	|Status of seat occupant enum: "adult", "child", "vacant"|
|seat.seatbelt	|Boolean	|False	|Yes	|Whether or not the seat belt is fasten T/F|

##Get Vehicle information
**Usage:** `drive.vehicleinfo.get(options).then(resolve, reject);`

**Description:** The get method returns vehicle information object.

**Parameters:**
- {function} resolve - Function called with vehicle information data object if the operation is successful. See data object format below.
- {function} reject Optional - Function called in case of error retrieving vehicle information.
- {object} options Optional - "options" object corresponds to a Zone (See Zone data structure below) or any other {attribute : value} that will be used as a filter for returned result.
    
**Returns:** Promise

####Example: GET vehicle speed
```javascript
var vehicleinfo = drive.vehicleinfo;

function getVehicleSpeed(data){
  console.log(data.timeStamp +":"+ data.speed);
}

function logError(err){
  console.log("code:"+err.error+" message:"+ err.message);
}

function getVehicleSpeed(){
    vehicleinfo.vehicleSpeed.get().then(getVehicleSpeed,logError);
}
```

####Example: GET vehicle climate information (HVAC)
```javascript
var vehicleinfo = drive.vehicleinfo;

function logHVAC(data){
  console.log(data.targetTemperature+","+data.airConditioning);
}

function logError(error){
  console.log(error);
}

function getClimateInfo(){
 vehicleinfo.climateControl.get(zone.driver).then(logHVAC,logError);
}
```

####Example: GET door status
```javascript
var vehicleinfo = drive.vehicleinfo;

function getDoorStatus(door){
  console.log(door.status);
}

function logError(error){
  console.log(error);
}

function getDoorStatus(){
 vehicleinfo.door.get(zone.passenger).then(getDoorStatus,logError);
}
```

####Example: GET all vehicle information
```javascript
var vehicleinfo = drive.vehicleinfo;

function logVehicleInfo(data){
  console.log(data);
}

function logError(error){
  console.log(error);
}

function getVehicleInfo(){
     vehicleinfo.get().then(logVehicleInfo,logError);
}
```

##Set Vehicle information
**Usage:** `drive.vehicleinfo.set(settings,options).then(resolve, reject);`

**Description:** The set method allows setting some vehicle parameters like climate control (HVAC).

**Parameters:**
- {object} settings - Settings object value (attributes values) 
- {object} options - Optional "options" object corresponds to a Zone (See Zone data structure above) or any other attribute value that will be used as a filter to limite update scope.
- {function} resolve - Function called if the operation is successful. 
- {function} reject Optional - Function called in case of error setting vehicle information.

**Returns:** Promise

####Example: lock driver side door
```javascript
var zone = Zone;
var vehicleinfo = drive.vehicleinfo;

function resolve(){
///success	
}

function reject(error){
  console.log(error);
}

function setVehicleInfo(){
vehicleinfo.door.set({"lock":true},zone.driver).then(resolve,reject);
}
```

####Example: turn on AC
```javascript 
var zone = new Zone;
var vehicleinfo = drive.vehicleinfo;
var zones = vehicleinfo.climateControl.zones;

for(var i in zones)
{
   if(i.equals(zone.driver))
   {
      var value = {};
      value["acStatus"] = true;
      vehicleinfo.climateControl.set(value,zone.driver).then(   
          function(){
             console.log("successfully set acStatus");
          },
          function(error) {
              console.log("there was an error");
          }
      );
   }        
}
```

###Delete vehicle information settings
**Usage:** `drive.vehicleinfo.delete(settings,options).then(resolve, reject)`

**Description:** The delete method allows delete previous settings.

**Parameters:**
- {object} settings - Settings attribute names 
- {object} options Optional - Options object allows specifying filters.
- {function} resolve - Function called if the operation is successful. 
- {function} reject Optional - Function called in case of error setting vehicle information.

**Returns:** Promise

> Note: in the current data model there is no attribute that requires delete settings. This method should be supported for tha sake of uniformity and future use.

###Subscribe to vehicle information
**Usage:** `handle = drive.vehicleinfo.subscribe(callBack, options);`

**Description:** The subscribe method allows registering for value change events. Specified callback function will be called when that event occurs.

**Parameters:**
- {function} callBack - Function called on value change with vehicle information data object. See data object format below.
- {object} options Optional - "options" object corresponds to a Zone or any other attribute value that will be used as a filter to limite subscription scope.

**Returns:** {Integer} handle
Subscribe returns handle to subscription or 0 if error. 

####Example: subscribe to vehicle speed
```javascript
function logSpeedInfo(vehicleSpeed){
  console.log(vehicleSpeed.speed);
}

function subscribe(){
     handle=drive.vehicleinfo.vehicleSpeed.subscribe(logSpeedInfo);
}
```

####Example: subscribe to any vehicle information
```javascript
function logVehicleInfo(data){
  console.log(data);
}

function subscribe(){
     handle=drive.vehicleinfo.subscribe(logVehicleInfo);
}
```

###Unsubscribe from vehicle information
**Usage:** `drive.vehicleinfo.unsubscribe(handle);`

**Description:** The unsubscribe method allows application to stop data notifications.

**Parameters:**
- {object} handle - "handle" corresponds to subscription handle object returned by subscribe method. 

**Returns:** void

####Example:
```javascript
function unsubscribe(){
    drive.vehicleinfo.unsubscribe(handle);
}
```

###Access/Availability check
**Usage:** `drive.vehicleinfo.available();`

**Description:** This method allows to check whether a given attribute or object is supported and accessible. 
When available method returns not_supported_policy, application can subscribe to policy manager to get notifications when resource state changes. See policy manager section for more details.

**Parameters:**
- None.

**Returns:** String
- "available": resource is available (read/write).
- "readonly": resource is available in read only mode.
- "not_supported": resource is not supported by current vehicle or head unit.
- "not_supported_yet": resource is not currently supported by current vehicle or head unit but planned to be supported in future releases.
- "not_supported_security": the resource is not accessible by other applications (private access).
- "not_supported_policy": resource cannot be accessed at this time because of policy constraints. Application can subscribe to policy events to get notified when state of resource changes (allowed, denied or restricted).

####Example:
```javascript
function isAvailable(){
    return drive.vehicleinfo.vehicleSpeed.available();
}
```

##Navigation
This Javascript SDK allows interacting with navigation system.
The following interface represents a base interface to all navigation properties:
```javascript
interface NavigationInterface {
    Promise get (optional object options);
    Promise set (object value, optional object options);
    Promise delete (object value, optional object options);
    Integer subscribe (InterfaceCallback callback, optional object options);
    void unsubscribe (Integer handle);
    Availability available ();
};
callback InterfaceCallback = void(object value, EventType eventType); ();

enum EventType {
"create",
"read",
"update",
"delete"
};

interface CommonDataType {
    readonly    attribute DOMTimeStamp timeStamp;
};
```
CommonDataType interface represents common data type for all data types

###Navigation properties

Below properties is a subset of possible attributes that a navigation system may support. More attributes shall be added in the next version of this SDK. Navigation properties that are not supported by a given navigation system will not be returned in a get method performed on parent object but will trigger an error if methods (get, set, subscribe, delete) are called on a specific unsupported property.

|Parameter|Type|Required|Read only|Description|
|--- |--- |--- |--- |--- |
|**Current positon**|
|position.latitude|Float|False|Yes|
|position.longitude|Float|False|Yes|
|position.altitude|Float|False|Yes|Location altitude in meters|
|position.heading|Float|False|Yes|Azimuth values calculated in degree with reference to north |
|position.velocity|Integer|False|Yes|GPS estimated velocity (in km/h).|
|position.precision |Float|False|Yes|GPS position precision |
|**Current destination**|
|destination.id|String|False|No|Destination ID|
|destination.name|String|False|No|Destination name |
|destination.selected|Boolean|Yes|No|This flag is ture if the destination object is selected on the map, other wise false. The default is false|
|destination.street|String|False|No|Destination street including street number|
|destination.city|String|False|No|Destination city|
|destination.region|String|False|No|Destination state/province|
|destination.country|String|False|No|Destination Country|
|destination.postalCode|Integer|False|No|5 digits ZIP code or postalCode alphanumeric|
|destination.display.latitude|Float|False|No|Displayed latitude in degrees|
|destination.display.longitude|Float|False|No|Displayed longitude in degrees|
|destination.display.altitude|Float|False|No|Displayed altitude in meters|
|destination.routing.latitude|Float|False|No|Routing latitude in degrees|
|destination.routing.longitude|Float|False|No|Routing Longitude in degrees|
|destination.routing.altitude|Float|False|No|Routing altitude in meters|
|destination.phone|String|False|No|Primary destination phone number|
|destination.type |String|False|No|list of POI type|
|destination.categories|{array}|False|No|POI categories. Example: ["grossery", "gas station"]|
|destination.comments|String|False|No|Comments on distination|
|destination.link|String|False|No|POI URL|
|destination.symbol|String|False|No|Symbol (icon)|
|destination.formattedAddress|String|False|No|Full address format based on the country|
|destination.metas|{array}|False|No|Array of {attribute: value}|
|**Current location**|
|location.id|String|False|No|Current location ID|
|location.name|String|False|No|Current location name |
|location.street|String|False|No|Current location street including street number|
|location.city|String|False|No|Current location city|
|location.region|String|False|No|Current location state/province|
|location.country|String|False|No|Current location Country|
|location.postalCode|Integer|False|No|5 digits ZIP code or postalCode alphanumeric|
|**Navigation session information**|
|session.timeToDestination|Integer|False|Yes|Estimated remaining time to arrive at |destination in minutes |
|session.arrivalTime|Date|False|Yes|Estimated arrival time |
|session.distanceToDestination|Integer|False|Yes|Remaining distance to destination in km|
|session.speedLimit|Integer|False|Yes|Current speed limit in km/h|
|session.started|Boolean|True|No|Navigation session started|
|**Current routes**|
|routes|{array}|False|No|Current route|
|route.name|String|False|No|Route name|
|routes.selected|Boolean|Yes|No|This flag is ture if the route object is selected on the map, other wise false. The default is false|
|routes.bounds|{object}|False|No|Route bounding box|
|routes.distance|Float|False|No|Route distance in meters|
|routes.delay|Float|False|No|Total delay time in seconds|
|routes.waypoints|{array}|False|No|Way points array|
|routes.waypoints.latitude|Float|False|No|Track latitude in degrees|
|routes.waypoints.longitude|Float|False|No|Track Longitude in degrees|
|routes.waypoints.altitude|Float|False|No|Track altitude in meters|
|routes.waypoints.time|Date|False|No|Track Date/time|
|routes.waypoints.name|String|False|No|Track name|
|routes.waypoints.description|String|False|No|Track description|
|routes.waypoints.symbol|String|False|No|Track symbol: dot, crossing, etc.|
|routes.waypoints.type|String|False|No|Track type: crossing, intersection|
|routes.waypoints.visible|Boolean|False|No|When set to True route waypoint will be visible on the map|
|routes.metas|{array}|False|No|Array of {attribute: value}|
|**Tracking waypoints**|
|track|{object}|No|No|Tracking waypoints|
|track.name|String|Yes|Yes|
|track.selected|Boolean|Yes|No|This flag is ture if the track object is selected on the map, other wise false. The default is false|
|track.waypoints|{array}|Yes|No|Array of waypoints|
|track.waypoints.latitude|Float|False|Yes|Track latitude in degrees|
|track.waypoints.longitude|Float|False|Yes|Track Longitude in degrees|
|track.waypoints.altitude|Float|False|Yes|Track altitude in meters|
|track.waypoints.heading|Float|False|Yes|Azimuth values calculated in degree with reference to north|
|track.waypoints.velocity|Integer|False|Yes|Speed in km/h|
|track.waypoints.time|Date|False|Yes|Track Date/time|
|track.waypoints.name|String|False|Yes|Track name|
|track.waypoints.description|String|False|Yes|Track description|
|track.waypoints.symbol|String|False|Yes|Track symbol: dot, crossing, etc.|
|track.waypoints.type|String|False|Yes|Track type: crossing, intersection|
|track.waypoints.visible|Boolean|False|Yes|When set to True track waypoint will be visible on the map|
|track.metas|{array}|False|Yes|Array of {attribute: value}|
|**Current POIs**|
|pois|{array}|False|No|Array of POIs|
|pois.id|String|False|No|POI ID|
|pois.name|String|False|No|POI name |
|pois.selected|Boolean|Yes|No|This flag is ture if the POI object is selected on the map, other wise false. The default is false|
|pois.street|String|False|No|Street|
|pois.city|String|False|No|City|
|pois.region|String|False|No|state/province|
|pois.postalCode|String|False|No|5 digits ZIP code or postalCode alphanumeric|
|pois.country|String|False|No|Country|
|pois.formattedAddress|String|False|No|Full address format based on the country|
|pois.latitude|Float|False|Yes|
|pois.longitude|Float|False|Yes|
|pois.altitude|Float|False|Yes|Location altitude in meters|
|pois.heading|Float|False|Yes|Azimuth values calculated in degree with reference to north |
|pois.velocity|Integer|False|Yes|POI speed (in km/h).|
|pois.phone|String|False|No|Phone number|
|pois.type|String|False|No|POI type/category|
|poi.categories|{array}|False|No|POI categories. Example: ["grossery", "gas station"]|
|pois.comments|String|False|No|General comments|
|pois.link|String|False|No|POI URL|
|pois.symbol|String|False|No|POI symbol|
|pois.visible|Boolean|False|No|When set to True POI will be visible on the map|
|pois.|destination|{object}|False|No|POI object representing the |destination (same format as current |destination).|
|pois.timeToExpire|Integer|False|No|Time to expire the POI in seconds|
|pois.metas|{array}|False|No|Array of {attribute: value}|
|**POI Tracking Waypoints** |
|pois.track.name|String||Yes|
|pois.track.selected|Boolean|Yes|No|This flag is ture if the |track object is selected on the map, other wise false. The default is false|
|pois.track.waypoints|{array}|False|No|Waypoints array|
|pois.track.waypoints.latitude|Float|False|Yes|Track latitude in degrees|
|pois.track.waypoints.longitude|Float|False|Yes|Track Longitude in degrees|
|pois.track.waypoints.altitude|Float|False|Yes|Track altitude in meters|
|pois.track.waypoints.heading|Float|False|Yes|Azimuth values calculated in degree with reference to north|
|pois.track.waypoints.velocity|Integer|False|Yes|Speed in km/h|
|pois.track.waypoints.time|Date|False|Yes|Track Date/time|
|pois.track.waypoints.name|String|False|Yes|Track name|
|pois.track.waypoints.description|String|False|Yes|Track description|
|pois.track.waypoints.symbol|String|False|Yes|Track symbol: dot, crossing, etc.|
|pois.track.waypoints.type|String|False|Yes|Track type: crossing, intersection|
|pois.track.waypoints.visible|Boolean|False|Yes|When set to True |track waypoint will be visible on the map|
|pois.track.metas|{array}|False|Yes|Array of {attribute: value}|
|map.zoomLevel|Integer|False|No|0 to 20+ (20 is street level)|
|map.zoomToPoiType|{array}|False|No|"String array of POI types: This makes the map to zoom in/out so that all POI of specified types are visible. 
Values:
Empty array/null: normal mode
[“all”]: zoom to all POI types
[“all”, “<me>”]: all POI type and include the vehicle.
[“type1”,”type2”,…]: zoom to specified POI types (parking, restaurant, etc). POI type <me> refers to the vehicle."|
|map.zoomToPoiId|String|False|No|POI ID: This makes the map to zoom in/out so that specified poi ID becomes visible (center to).|
"map.follow|String|False|No|"Make map follow a specific POI name instead of following the car. Values:
“<me>” empty null: follow vehicle
<poi ID>: follow specified POI ID. This parameter should be ignored if the specified POI ID does not exist."|


###Get Navigation Information
**Usage:** `drive.navigation.get(options).then(resolve, reject);`

**Description:** The get method returns navigation information object.

**Parameters:**
- {object} options Optional - Options object allows specifying filters.
- {function} resolve - Function called with navigation information data object if the operation is successful. See data object format below.
- {function} reject Optional - Function called in case of error retrieving navigation information.

**Returns:** Promise

####Example: get current position
```javascript
function getPosition(position){
console.log(position.latitude+","+position.longitude+","+ position.altitude+","+position.direction;
}

function logError(error){
   console.log(error);
}

function getPositionInfo(){
     drive.navigation.position.get().then(getPosition,logError);
}
```

####Example: get all navigation information
```javascript
function getNavigationInfo(data){
   console.log(data);
}

function logError(error){
   console.log(error);
}

function getNavigationInfo(){
     drive.navigation.get().then(getNavigationInfo,logError);
}
```

###Set Navigation information
**Usage:** `drive.navigation.set(settings,options).then(resolve, reject)`

**Description:** The set method allows setting some navigation parameters like destination.

**Parameters:**
- {object} settings - Settings object value (attributes values) 
- {object} options Optional - Options object allows specifying filters.
- {function} resolve - Function called if the operation is successful. 
- {function} reject Optional - Function called in case of error setting vehicle information.

**Returns:** Promise

####Example: set new destination by poi
```javascript
var settings = {"poi":"DFW Airport"};

function resolve(){
///success
}

function reject(error){
  console.log(error);
}

function setNavigationInfo(){
   drive.navigation.destination.set(settings).then(resolve,reject);
}
```

####Example: set new destination by latitude and Longitude
```javascript
var settings = {"latitude":45.5009320, "longitude":-73.6628050};

function resolve(){
///success
}

function reject(error){
  console.log(error);
}

function setNavigationInfo(){
   drive.navigation.destination.routing.set(settings).then(resolve,reject);
}
```

####Example: add new poi to the map and make it visible
```javascript
var settings = {"poi":"DFW Airport", "visible": true};

function resolve(){
///success
}

function reject(error){
  console.log(error);
}

function setNavigationInfo(){
   drive.navigation.pois.set(settings).then(resolve,reject);
}
```

####Example: Hide POI
```javascript
var settings = {"poi":"DFW Airport", "visible": false};

function resolve(){
///success
}

function reject(error){
  console.log(error);
}

function setNavigationInfo(){
   drive.navigation.pois.set(settings).then(resolve,reject);
}
```

####Example: Start navigation session
```javascript
var settings = {"started":true};

function resolve(){
///success
}

function reject(error){
  console.log(error);
}

function setNavigationInfo(){
   drive.navigation.session.set(settings).then(resolve,reject);
}
```

###Delete Navigation settings
**Usage:** `drive.navigation.delete(settings,options).then(resolve, reject)`

**Description:** The delete method allows delete previous settings.

**Parameters:**
- {object} settings - Settings attribute names 
- {object} options Optional - Options object allows specifying filters.
- {function} resolve - Function called if the operation is successful. 
- {function} reject Optional - Function called in case of error setting navigation information.

**Returns:** Promise

####Example: delete a specific poi
```javascript
var settings = {"poi":"DFW Airport"};

function resolve(){
///success
}

function reject(error){
  console.log(error);
}

function setNavigationInfo(){
  drive.navigation.pois.delete(settings).then(resolve,reject);
}
```

####Example: delete all POIs by type (parking)
```javascript
var settings = {"type":"parking"};

function resolve(){
///success
}

function reject(error){
  console.log(error);
}

function setNavigationInfo(){
  drive.navigation.pois.delete(settings).then(resolve,reject);
}
```

###Subscribe to navigation information
**Usage:** `handle = drive.navigation.subscribe(callBack,options);`

**Description:** The subscribe method allows registering for value change events. Specified callback function will be called when that event occurs.

**Parameters:**
- {function} callBack - Function called on value change with navigation information data object. See data object format below.
- {object} options Optional - Options object allows specifying filters.

**Returns:** {Integer} handle

Subscribe returns handle to subscription or 0 if error. 
####Example: subscribe to destination
```javascript
function getDestinationInfo(data){
  console.log(data.latitude+":"+data.Longitude);
}

function subscribe(){
handle=drive.navigation.destination.subscribe(getDestinationInfo);
}
```

###Unsubscribe from navigation information
**Usage:** `drive.navigation.unsubscribe(handle);`

**Description:** The unsubscribe method allows application to stop data notifications.

**Parameters:**
- {object} handle - "handle" corresponds to subscription handle object returned by subscribe method. 

**Returns:** void

####Example:
```javascript
function unsubscribe(){
     drive.navigation.destination.unsubscribe(handle);
}
```

###Access/Availability check
**Usage:** `drive.navigation.available();`

**Description:** This method allows to check whether a given attribute or object is supported and accessible. 
When available method returns not_supported_policy, application can subscribe to policy manager to get notifications when resource state changes.
See policy manager section for more details.

**Parameters:**
- None

**Returns:** String
- "available": resource is available (read/write).
- "readonly": resource is available in read only mode.
- "not_supported": resource is not supported by current vehicle or head unit.
- "not_supported_yet": resource is not currently supported by current vehicle or head unit but planned to be supported in future releases.
- "not_supported_security": the resource is not accessible by other applications (private access).
- "not_supported_policy": resource cannot be accessed at this time because of policy constraints. Application can subscribe to policy events to get notified when state of resource changes (allowed, denied or restricted).

####Example:
```javascript
function isAvailable(){
    return drive.navigation.destination.available();
}
```

##Identity
This Javascript SDK allows interacting with Identity Manager.
The following interface represents a base interface to all identity properties:
```javascript
 interface IdentityInterface {
    Promise get (optional object options);
    Promise set (object value, optional object options);
    Promise delete (object value, optional object options);
    Integer subscribe (InterfaceCallback callback, optional object options);
    void unsubscribe (Integer handle);
    Availability available ();
};
callback InterfaceCallback = void(object value, EventType eventType); ();

enum EventType {
"create",
"read",
"update",
"delete"
};

interface CommonDataType {
    readonly    attribute DOMTimeStamp timeStamp;
};
```
- CommonDataType interface represents common data type for all data types.

###Identity properties
Below properties is a subset of possible attributes that identity manager supports. More attributes shall be added in the next version of this SDK.

|Parameter	|Type	|Required	|Read only	|Description|
|---    |---    |---    |---    |--- |
|**Current Session**	|
|session.loggedInTime	 |Long	|False	    |Yes	|Session duration in milliseconds |
|session.timeOut	|Long	|False	|Yes	|Session timeout in milliseconds |
|session.loggedIn	|Boolean |True	|Yes	|Set to true is user is logged in.|
|session.reset	|Boolean	|False	|No	|When reset is true, the user should be prompted to change PIN. Default is false.|
|session.login	|{array}	|False	|No	|Request to login. Identity manager will remove this request when processed and set loggedIn to true if susccessfull. |
|session.login.userId	|String	|True	|No	|userId |
|session.login.pin	|String	|True	|No	|PIN|
|session.login.oldPin	|String	|False	|No	|If specified, identity manager will change current oldPin with specified PIN.|
|session.status	|String	|False	|Yes	|Status of current login request. Possible values:
connecting, connected or failure: with error message|
|**Current User**|	
|currentUser	|{object}	|True	|Yes	|Current user info|
|currentUser.uid	|String	|True	|Yes	|If not specified subscriber identifier is automatically generated (unique identifier).|
|currentUser.language	|String	|False	|No	|User preferred language|
|currentUser.firstName	|String	|False	|Yes	| 
|currentUser.lastName	|String	|False	|Yes	|
|currentUser.middleName	|String	|False	|Yes	|
|currentUser.namePrefix	|String	|False	|Yes	|
|currentUser.picture	|String	|False	|Yes	|URI (Link) to picture|
|currentUser.dob	|Date	|False	|Yes	|Date of birth|
|currentUser.owner	|Boolean	|False	|Yes	|Owner of the vehicle if set to true.|
|currentUser.company	|String	|False	|Yes	|Company name|
|currentUser.address.default	|{object}	|False	|Yes	|Default address|
|currentUser.address.default.addressType	|String	|True	|Yes	|Address type: home, work.|
|currentUser.address.default.street	|String	|False	Yes	|
|currentUser.address.default.city	|String	|True	Yes	|
|currentUser.address.default.region	|String	|False	|Yes	|State, province or region|
|currentUser.address.default.country	|String	|False	|Yes|	
|currentUser.address.default.postalCode	|String	|False	|Yes zip or postalCode|
|currentUser.address.default.metas	|{array}	|False	|Yes, Array of {attribute: value}|
|currentUser.addresses	|{array}	|False	|Yes	|Array of other addresses. Same attributes as default address.|
|currentUser.default.phone	|{object}	|False	|Yes | Default phone|
|currentUser.default.phone.phoneType	|String	|False	|Yes | Phone type: mobile, home, work, etc.|
|currentUser.default.phone.phoneNumber	|String	|True	|Yes|	
|currentUser.default.phone.deviceId	|String	|False	|Yes	|DeviceId from device repository|
|currentUser.default.phone.metas	|{array}	|False |Yes	Array of {attribute: value}|
|currentUser.phones	|{array}	|False	|Yes	|Array of phones (same attribute as default phone).|
|currentUser.default.email |{object}	|False	|Yes	|Default email.|
|currentUser.default.email.emailType	|String	|False	|Yes	| Email type: personal, work, etc.|
|currentUser.default.email.emailAddress	|String	|True	|Yes|	
|currentUser.default.email.metas	|{array}	|False	|Yes	|Array of {attribute: value}|
|currentUser.emails	|{array}	|False	|Yes	|Other emails (same attributes as default email).|
|currentUser.metas	|{array}	|False	|Yes	|Array of {attribute: value}|
|currentUser.groups	|{object}	|False	|Yes	|Contact groups array|
|currentUser.groups.id	|String	|True	|Yes	|Group identifier|
|currentUser.groups.name	|String	|True	|Yes	|Group name|
|currentUser.contacts	|{object}	|False	|Yes	|Contacts array|
|currentUser.contacts.uid	|String	|True	|Yes	|User identifier|
|currentUser.contacts.firstName	|String	|False	|Yes	|First name|
|currentUser.contacts.lastName	|String	|False	|Yes|	Last name|
|currentUser.contacts.middleName	|String	False	yes	Middle name|
|currentUser.contacts.namePrefix	|String	|False	|Yes	|Name prefix|
|currentUser.contacts.picture	|String	|False	|Yes	|URI (link) to picture|
|currentUser.contacts.dob	|Date	|False |Yes	|Date of birth|
|currentUser.contacts.company	|String	|False	|Yes	|Company name|
|currentUser.contacts.address	|{object}	|False	|Yes	Array of addresses|
|currentUser.contacts.address.id	|String	|True	|Yes	Address identifier|
|currentUser.contacts.address.type |String	|False	|Yes	|Address type: home, work, ...|
|currentUser.contacts.address.street	|String	|False	|Yes	|Address street number, name, apartment, etc.|
|currentUser.contacts.address.city	|String	|False	|Yes	|City name|
|currentUser.contacts.address.region	|String	|False	|Yes	State, province, …|
|currentUser.contacts.address.country	|String	|False	|Yes	|Country name|
|currentUser.contacts.address.postalCode	|String	|False	|Yes	|Postal/Zip code|
|currentUser.contacts.address.metas	|{array}	|False	|Yes	|Array of {key, value} objects|
|currentUser.contacts.address.defaultAddress	|{object}	|False	|Yes |Primary address object| 
|currentUser.contacts.phone	|{object}	|False |Yes	|Array of phones|
|currentUser.contacts.phone.id	|String	|True	|Yes	|Phone identifier|
|currentUser.contacts.phone.type	|String	|False	|Yes	|Phone type: mobile, home, work, …|
|currentUser.contacts.phone.number	|String	|True	|Yes	|Phone number|
|currentUser.contacts.phone.deviceId	|String	|False	|Yes	|Device identifier. Refers to device repository.|
|currentUser.contacts.phone.metas	|{array}	|False	|Yes	|Array of {key, value} objects|
|currentUser.contacts.phone.defaultPhone	|{object}	|False	|Yes	|Primary phone object|
|currentUser.contacts.email	|{object}	|False	|Yes	|Array of emails|
|currentUser.contacts.email.id	|String  |True	|Yes	|Email identifier|
|currentUser.contacts.email.type	|String	|False	|Yes	|Email type: mobile, home, work, …|
|currentUser.contacts.email.address	|String	|True	|Yes	|Email address|
|currentUser.contacts.email.metas	|{array}	|False	|Yes	|Array of {key, value} objects|
|currentUser.contacts.email.defaultEmail	|{object} |False	|Yes	|Primary email object|
|currentUser.contacts.groupId	|String |False	|Yes	|Group identifier|
|**User accounts**	|
|users.accounts	|{object}	|False	|Yes	|Application accounts (credentials to login to application’s backend system)|
|users.accounts.appId	|String	|True	|Yes	|Application ID|
|users.accounts.userId	|String	|True	|Yes	|User identification|
|users.accounts.authToken	|String	|True	|Yes	|Password, PIN, token.|
|users.accounts.authMethod	|String	|True	|Yes	|Basic authentication, oAuth, etc.|
|users.accounts.reset	|Boolean	|True	|Yes	|When reset is true, the user should be prompted to change PIN. Default is false.|
|**vehicle users**|	
|users	|{array}	|False	|Yes	|Array of subscribers (vehicle users). Same attribute as currentUser.|


###Get Identity Information
**Usage:** `drive.identity.get(options).then(resolve, reject);`

**Description:** The get method returns identity information object.

**Parameters:**
- {object} options Optional - Options object allows specifying filters.
- {function} resolve - Function called with identity information data object if the operation is successful. See data object format below.
- {function} reject Optional - Function called in case of error retrieving identity information.

**Returns:** Promise

####Example: get current user
```javascript
function logIdentityInfo(currentUser){
   console.log("userId:"+currentUser.uid);
}

function logError(error){
   console.log(error);
}

function getIdentityInfo(){
  drive.identity.currentUser.get().then(logIdentityInfo,logError);
}
```

####Example: Check if user is logged in
```javascript
function logIdentityInfo(session){
   console.log("user logged in:"+session.loggedIn);
}

function logError(error){
   console.log(error);
}

function getIdentityInfo(){
  drive.identity.session.get().then(logIdentityInfo,logError);
}
```

###Set Identity information
**Usage:** `drive.identity.set(settings,options).then(resolve, reject);`

**Description:** The set method allows setting some identity parameters like user preferences.

**Parameters:**
- {object} settings - Settings object value (attributes values) 
- {object} options Optional - Options object allows specifying filters.
- {function} resolve - Function called if the operation is successful. 
- {function} reject Optional - Function called in case of error setting vehicle information.

**Returns:** Promise

####Example: trigger user login
```javascript
var settings = {"loggedIn":true};

function resolve(){
///success
}

function reject(error){
  console.log(error);
}

function login(){
   drive.identity.session.set(settings).then(resolve,reject);
}
```

###Delete Identity settings
**Usage:** `drive.identity.delete(settings,options).then(resolve, reject)`

**Description:** The delete method allows delete previous settings.

**Parameters:**
- {object} settings - Settings attribute names 
- {object} options Optional - Options object allows specifying filters.
- {function} resolve - Function called if the operation is successful. 
- {function} reject Optional - Function called in case of error setting vehicle information.

**Returns:** Promise

>Note: in the current data model there is no attribute that requires delete settings. This method should be supported for tha sake of uniformity and future use.

###Subscribe to Identity information
**Usage:** `handle = drive.identity.subscribe(callBack,options);`

**Description:** The subscribe method allows registering for value change events. Specified callback function will be called when that event occurs.

**Parameters:**
- {function} callBack - Function called on value change with identity information data object. See data object format below.
- {object} options Optional - Options object allows specifying filters.

**Returns:** {Integer} handle
Subscribe returns handle to subscription or 0 if error. 

####Example: get notification when user logs in
```javascript
function userLoggedIn(loggedIn){
  if (loggedIn){ console.log("user logged in");}
}

function subscribe(){
handle=drive.identity.session.loggedIn.subscribe(userLoggedIn);
}
```

###Unsubscribe from Identity information
**Usage:** `drive.identity.unsubscribe(handle);`

**Description:** The unsubscribe method allows application to stop data notifications.

**Parameters:**
- {object} handle -"handle" corresponds to subscription handle object returned by subscribe method. 

**Returns:** void

####Example
```javascript
function unsubscribe(){
     drive.identity.currentUser.unsubscribe(handle);
}
```

###Access/Availability check
**Usage:** `drive.identity.available();`

**Description:** This method allows to check whether a given attribute or object is supported and accessible. When available method returns not_supported_policy, application can subscribe to policy manager to get notifications when resource state changes.
See policy manager section for more details.

**Parameters:**
- None

**Returns:** String
- "available": resource is available (read/write).
-"readonly": resource is available in read only mode.
- "not_supported": resource is not supported by current vehicle or head unit
-"not_supported_yet": resource is not currently supported by current vehicle or head unit but planned to be supported in future releases.
- "not_supported_security": the resource is not accessible by other applications (private access).
- "not_supported_policy": resource cannot be accessed at this time because of policy constraints. Application can subscribe to policy events to get notified when state of resource changes (allowed, denied or restricted).

####Example
```javascript
function isAvailable(){
    return drive.identity.currentUser.available();
}
```

##Application and System Settings
This Javascript SDK allows managing application and system settings. Applications can use this SDK to store and retrieve their own settings and benefit from built in data events handling.

The following interface represents a base interface to all system/application properties:
```javascript
interface SettingsInterface {
    Promise get (optional object options);
    Promise set (object value, optional object options);
    Promise delete (object value, optional object options);
    Integer subscribe (InterfaceCallback callback, optional object options);
    void unsubscribe (Integer handle);
    Availability available ();
};
callback InterfaceCallback = void(object value, EventType eventType); ();

enum EventType {
"create",
"read",
"update",
"delete"
};

interface CommonDataType {
    readonly    attribute DOMTimeStamp timeStamp;
};
```

- CommonDataType interface represents common data type for all data types.

###System properties
Below properties is a subset of possible attributes that system settings support. More attributes shall be added in the next version of this SDK.

|Parameter	|Type	|Required	|Read only	|Description|
|---    |---    |---    |---    |--- |
|system.baseUrl	|String	|True	|Yes	|ASDP base URL in the following format: https://asdphost:port/ |
|system.language	|String	|True	|No	|Default system language|
|system.metric	|Boolean	|True	|No	|Unit of mesure Metric (True)|

###Application properties
Application properties shall start with application name.

|Parameter||Type||Required||Read only||Description|
|--- |--- |--- |--- |--- |
|{appname}|{object}|False|No|Application name: application specific properties.|
|{appname}.users|{array}|False|No|User preferences for appname|
|{appname}.users.{object}|{object}|False|No|User preferences|
|{appname}.{object}|{object}|False|No|Global application preferences|
|**Application user UI settings**|
|{appname}.ui|{object}|False|No|UI presentation|
|{appname}.ui.categories|{object}|False|No|UI presentation section|
|{appname}.ui.categories.uiType|String|Fase|No|UI type maps to a UI presentation construct or style|
|{appname}.ui.categories.title|String|False|No|Cateory title|
|{appname}.ui.categories.description|String|False|No|Cateory description or hint|
|{appname}.ui.categories.options|{object}|False|No|Category aspect option (future use)|
|{appname}.ui.categories.properties|{array}|False|No|Array of properties for a given category|
|{appname}.ui.categories.properties.propertyId|String|False|No|Refers to full qualified property (|{appname}.{object}…)|
|{appname}.ui.categories.properties.uiType|String|False|No|UI type maps to a UI presentation construct or style|
|{appname}.ui.categories.properties.title|String|False|No|Property title or label|
|{appname}.ui.categories.properties.defualtIndex|Integer|False|No|Position in the options or possible values|
|{appname}.ui.categories.properties.options|{array}|False|No|Possible values|
|{appname}.ui.categories.properties.options.name|String|False|No|Value name or label|
|{appname}.ui.categories.properties.options.value|{type}|False|No|Actual value |
|{appname}.ui.categories.properties.options.uiType|String|False|No|UI type maps to a UI presentation construct or style|
|{appname}.ui.categories.properties.validation|{object}|False|No|Validation object|
|{appname}.ui.categories.properties.validation.required|Boolean|False|No|True means required property|
|{appname}.ui.categories.properties.validation.min|Float|False|No|Min value for numeric and min length for alphanumeric |
|{appname}.ui.categories.properties.validation.max|Float|False|No|Max value for numeric and max length for alphanumeric|
|{appname}.ui.categories.properties.validation.type|String|False|No|Predefined types: email, password, url, date, number, digits|

###Vehicle information user settings

|Parameter||Type||Required||Read only||Description|
|--- |--- |--- |--- |--- |
|Vehicleinfo|{object}|False|No|Vehicle information user settings|
|vehicleinfo.users.unitsOfMeasure|{object}|False|No|Units of mesure.|
|vehicleinfo.users.unitsOfMeasure.metric|Boolean|False|No|True: metric|
|vehicleinfo.users.unitsOfMeasure.unitsFuelVolume|String|False|No|litter or gallon|
|vehicleinfo.users.unitsOfMeasure.unitsDistance|String|False|No|km or mile|
|vehicleinfo.users.unitsOfMeasure.unitsSpeed|String|False|No|km/h or mph|
|vehicleinfo.users.unitsOfMeasure.unitsFuelConsumption|String|False|No|l/100, mpg, km/l|
|vehicleinfo.users.mirror.mirrorTilt|short|False|No|Mirror tilt position in percentage distance travelled, from downward-facing to upward-facing position (Unit: percentage, Resolution: 1, Min: -100, Max: 100, 0 represents center position)|
|vehicleinfo.users.mirror.mirrorPan|short|False|No|Mirror pan position in percentage distance travelled, from left to right position (Unit: percentage, Resolution: 1, Min: -100, Max: 100, 0 represents center position)|
|vehicleinfo.users.steeringWheel.steeringWheelTelescopingPosition|Integer|False|No|Steering wheel position as percentage of extension from the dash (Unit: percentage, Resolution: 1, Min: 0, Max: 100, 0 represents steering wheel positioned closest to dash)|
|vehicleinfo.users.steeringWheel.steeringWheelPositionTilt|Integer|False|No|Steering wheel position as percentage of tilt (Unit: percentage, Resolution: 1, Min: 0, Max: 100, 0 represents steering wheel tilted lowest downward-facing position)|
|vehicleinfo.users.driveMode|String|False|No|""comfort",  "auto", "sport",
 "eco", "manual""|
|vehicleinfo.users.seatAjustment.reclineSeatBack|short|False|No|Seat back recline position as percent to completely reclined (Unit: percentage, Resolution: 1, Min: -100, Max: 100, center 0 represents the seatback upright at a 90 degree angle)|
|vehicleinfo.users.seatAjustment.seatSlide|Integer|False|No|Seat slide position as percentage of distance travelled away from forwardmost position (Unit: percentage, Resolution: 1, Min: 0, Max: 100, 0 represents seat position farthest forward)|
|vehicleinfo.users.seatAjustment.seatCushionHeight|Integer|False|No|Seat cushion height position as a percentage of upward distance travelled (Unit: percentage, Resolution: 1, Min: 0, Max: 100, 0 represents the lowest seat position)|
|vehicleinfo.users.seatAjustment.seatHeadrest|Integer|False|No|Headrest position as a percentage of upward distance travelled (Unit: percentage, Resolution: 1, Min: 0, Max: 100, 0 represents the lowest headrest position)|
|vehicleinfo.users.seatAjustment.seatBackCushion|Integer|False|No|Back cushion position as a percentage of lumbar curvature (Unit: percentage, Resolution: 1, Min: 0, Max: 100, 0 represents flat, and 100 is maximum curvature)|
|vehicleinfo.users.seatAjustment.seatSideCushion|Integer|False|No|Sides of back cushion position as a percentage of curvature (Unit: percentage, Resolution: 1, Min: 0, Max: 100, 0 represents flat, and 100 is maximum curvature)|
|vehicleinfo.users.dashboardIllumination|Integer|False|No|Illumination of dashboard as a percentage (Unit: percentage, Resolution: 1, Min: 0, Max: 100, 0 represents none and 100 maximum illumination)|
|vehicleinfo.users.vehicleSound.activeNoiseControlMode|Boolean|False|No|Active noise control status (False: not-activated, True: activated)|
|vehicleinfo.users.vehicleSound.engineSoundEnhancementMode|String|False|No|Engine sound enhancement mode where a null string means not-activated, and any other value represents a manufacture specific setting|

###Navigation user settings

|Parameter|Type|Required|Read only|Description|
|--- |--- |--- |--- |--- |
|navigation|{object}|False|No|Navigation user settings|
|navigation.users.destinations|{array}|False|No|Favorite destinations (See navigation destination data type)|
|navigation.users.pois|{array}|False|No|Array of favorite POIs (See navigation POI data type)|
|navigation.users.routing.calculation|String|False|No|fastest, shortest, offroad|
|navigation.users.routing.avoiding|{array}|False|No|String array: ["tollways", "highways","parkways"]|

###Identity user settings

|Parameter|Type|Required|Read only|Description|
|--- |--- |--- |--- |--- |
|identity|{object}|False|No|Indentity manager user settings|
|identity.users.session.autoLogout|Boolean|False|No|Auto logout when set to true|
|identity.users.session.timeout|Integer|False|No|Number of seconds being idle before logging out.|

###Notification user settings

|Parameter|Type|Required|Read only|Description|
|--- |--- |--- |--- |--- |
|notification|{object}|False|No|Notification manager user settings|
|notification.users.silent|Boolean|False|No|When set to true, notifications will not be read out|
|notification.users.apps|{array}|False|No|Array of applications|
|notification.users.apps.silent|Boolean|False|No|When set to true, notifications will not be read out for specific application|
|notification.users.apps.keepNumber|Integer|False|No|Number of messages to keep|
|notification.users.apps.keepDays|Integer|False|No|Number of days messages are kept|

###Media user settings

|Parameter|Type|Required|Read only|Description|
|--- |--- |--- |--- |--- |
|media|{object}|False|No|Media manager user settings|
|media.users.autoplay|Boolean|False|No|Autoplay after login|
|media.users.favorite|{array}|False|No|Array of favorite media files|

###Search user settings

|Parameter|Type|Required|Read only|Description|
|--- |--- |--- |--- |--- |
|search|{object}|False|No|Search controller user settings|
|search.users.history.maxItem|Integer|False|No|Search request history max items|
|search.users.history.requests|{array}|False|No|Array of search requests|

###Application user settings

|Parameter|Type|Required|Read only|Description|
|--- |--- |--- |--- |--- |
|apps|{object}|False|No|Application manager user settings|
|apps.users.favorite|{array}|False|No|Array of favorite apps|

###Get System/Application User Settings
**Usage:** `drive.settings.get(options).then(resolve, reject);`

**Description:** The get method returns system information object.

**Parameters:**
- {object} options Optional - Options object allows specifying filters on returned data.
- {function} resolve - Function called with system/application information data object if the operation is successful. See data object format below.
- {function} reject Optional - Function called in case of error retrieving system/application information.

**Returns:** Promise

####Example: get default language
```javascript
function logLanguage(language){
   console.log(language);
}

function logError(error){
   console.log(error);
}

function getDefaultLanguage(){
  drive.settings.system.language.get().then(logLanguage,logError);
}
```

####Example: get baseURL
```javascript
function logBaseURL (baseUrl){
   console.log(language);
}

function logError(error){
   console.log(error);
}

function getBaseURL(){
  drive.settings.system.baseUrl.get().then(logBaseURL,logError);
}
```

####Example: get vehicle seat adjustment user preferences
```javascript
var userSettings = drive.settings.vehicleinfo.users;
var user = {"userId":"user1"};

function getSeatPrefs(seatAjustment){
   console.log(seatAjustment);
}

function logError(error){
   console.log(error);
}

function getUserSeatSettings(){

userSettings.seatAjustment.get(user).then(getSeatPrefs,logError);
}
```

####Example: get navigation latest destination user preferences
```javascript
var userSettings = drive.settings.navigation.users;
var user = {"userId":"user1"};

function getDestPrefs(dest){
   console.log(dest);
}

function logError(error){
   console.log(error);
}

function getUserLastDestination(){

userSettings.destination.get(user).then(getDestPrefs,logError);
}
```

###Set System/Application User Settings
**Usage:** `drive.settings.set(settings,options).then(resolve, reject);`

**Description:** The set method allows set system/application configuration (settings).

**Parameters:**
- {object} settings - Settings object value (attributes values).
- {object} options Optional - Options object allows specifying filters.
- {function} resolve - Function called if the operation is successful. 
- {function} reject Optional - Function called in case of error setting policy information.

**Returns:** Promise

####Example: system settings
```javascript
var language = {"language":"en"};

function resolve(){
///success
}

function reject(error){
  console.log(error);
}

function setDefaultLanguage(){
   drive.settings.system.set(language).then(resolve,reject);
}
```

####Example: Application global settings
```javascript
var settings = {"timeout":2000};

function resolve(){
///success
}

function reject(error){
  console.log(error);
}

function setTimeout(){
   drive.settings.sms.set(settings).then(resolve,reject);
}
```

####Example: Application user preference
```javascript
var settings = {"name":"home", "userId":"user1"};

function resolve(){
///success
}

function reject(error){
  console.log(error);
}

function setVehicleSpeedInfo(){
   drive.settings.navigation.users.set(settings).then(resolve,reject);
}
```

###Delete System/Application User Settings
**Usage:** `drive.settings.delete(settings,options).then(resolve, reject)`

**Description:** The delete method allows delete previous settings.

**Parameters:**
- {object} settings - Settings attribute names 
- {object} options Optional - Options object allows specifying filters.
- {function} resolve - Function called if the operation is successful. 
- {function} reject Optional - Function called in case of error setting vehicle information.

**Returns:** Promise

####Example: Delete settings of a given user
```javascript
var user = {"userId":"user1"};

function resolve(){
///success
}

function reject(error){
  console.log(error);
}

function deleteUserSettings(){
   drive.settings.navigation.users.delete(user).then(resolve,reject);
}
```

###Subscribe to System/Application User Settings
**Usage:** `handle = drive.settings.subscribe(callBack, options)`

**Description:** The subscribe method allows registering for value change events. Specified callback function will be called when that event occurs.

**Parameters:**
- {object} options Optional - Options object allows specifying filters.
- {function} callBack - Function called on value change with settings data object. See data object format below.

**Returns:** {Integer} handle
Subscribe returns handle to subscription or 0 if error. 

####Example: subscribe to all system properties
```javascript
function logSystemSettings(data){
  console.log(data);
}

function subscribe(){
  handle=drive.settings.system.subscribe(logSystemSettings);
}
```

####Example: subscribe to application properties
```javascript
var userSettings = drive.settings.navigation.users;

function destSettings(data){
  console.log(data);
}

function subscribe(){
  handle= userSettings.destination.subscribe(destSettings);
}
```

###Unsubscribe from System/Application User Settings
**Usage:** `drive.settings.unsubscribe(handle);`

**Description:** The unsubscribe method allows application to stop data notifications.

**Parameters:**
- {object} handle - "handle" corresponds to subscription handle object returned by subscribe method. 

**Returns:** void

####Example
```javascript
function unsubscribe(){
     drive.settings.system.unsubscribe(handle);
}
```

###Access/Availability check
**Usage:** `drive.settings.available();`

**Description:** This method allows to check whether a given attribute or object is supported and accessible. 
When available method returns not_supported_policy, application can subscribe to policy manager to get notifications when resource state changes. See policy manager section for more details.

**Parameters:**
- None.

**Returns:** String
- "available": resource is available (read/write).
- "readonly": resource is available in read only mode.
- "not_supported": resource is not supported by current vehicle or head unit.
- "not_supported_yet": resource is not currently supported by current vehicle or head unit but planned to be supported in future releases.
- "not_supported_security": the resource is not accessible by other applications (private access).
- "not_supported_policy": resource cannot be accessed at this time because of policy constraints. Application can subscribe to policy events to get notified when state of resource changes (allowed, denied or restricted).

####Example
```javascript
function isAvailable(){
    return drive.settings.system.available();
}
```

##Notifications
This Javascript SDK allows interacting with notifications service.
The following interface represents a base interface to all notification properties:
CommonDataType interface represents common data type for all data types.

###Notification properties
Below properties is a subset of possible attributes that a notification service may support. More attributes shall be added in the next version of this SDK:

- SMS data format
- Weather alert data format
- Tracking data format
- Site automation data format

###Get Notification Information
**Usage:** `drive.notification.get(options).then(resolve, reject);`

**Description:** The get method returns navigation information object.

**Parameters:**
- {object} options Optional - Options object allows specifying filters.
- {function} resolve - Function called with notification information data object if the operation is successful. 
- {function} reject Optional - Function called in case of error retrieving navigation information.

**Returns:** Promise

####Example: get sms messages
```javascript
interface NotificationInterface {
    Promise get (optional object options);
    Promise set (object value, optional object options);
    Promise delete (object value, optional object options);
    Integer subscribe (InterfaceCallback callback, optional object options);
    void unsubscribe (Integer handle);
    Availability available ();
};
callback InterfaceCallback = void(object value, EventType eventType); ();

enum EventType {
"create",
"read",
"update",
"delete"
};

interface CommonDataType {
    readonly    attribute DOMTimeStamp timeStamp;
};
```

###Set Notification information
**Usage:** `drive.notification.set(settings,options).then(resolve, reject)`

**Description:** The set method allows setting some notification parameters like read flag.

**Parameters:**
- {object} settings - Settings object value (attributes values) 
- {object} options Optional - Options object allows specifying filters.
- {function} resolve - Function called if the operation is successful. 
- {function} reject Optional - Function called in case of error setting notification information.

**Returns:** Promise

####Example:
```javascript

```

###Delete Notification settings
**Usage:** `drive.notification.delete(settings,options).then(resolve, reject)`

**Description:** The delete method allows delete previous settings.

**Parameters:**
- {object} settings - Settings attribute names 
- {object} options Optional - Options object allows specifying filters.
- {function} resolve - Function called if the operation is successful. 
- {function} reject Optional - Function called in case of error setting vehicle information.

**Returns:** Promise

####Example:
```javascript

```

###Subscribe to notification information
**Usage:** `handle = drive.notification.subscribe(callBack,options);`

**Description:** The subscribe method allows registering for value change events. Specified callback function will be called when that event occurs.

**Parameters:**
- {function} callBack - Function called on value change with notification information data object. See data object format below.
- {object} options Optional - Options object allows specifying filters.

**Returns:** {Integer} handle
Subscribe returns handle to subscription or 0 if error. 

####Example: subscribe to incoming sms
```javascript

```

###Unsubscribe from notification information
**Usage:** `drive.notification.unsubscribe(handle);`

**Description:** The unsubscribe method allows application to stop data notifications.

**Parameters:**
- {object} handle = "handle" corresponds to subscription handle object returned by subscribe method. 

**Returns:** void

####Example
```javascript

```

###Access/Availability check
**Usage:** `drive.notification.available();`

**Description:** This method allows to check whether a given attribute or object is supported and accessible. 
When available method returns not_supported_policy, application can subscribe to policy manager to get notifications when resource state changes. See policy manager section for more details.

**Parameters:**
- None.

**Returns:** String
- "available": resource is available (read/write).
- "readonly": resource is available in read only mode.
- "not_supported": resource is not supported by current vehicle or head unit.
- "not_supported_yet": resource is not currently supported by current vehicle or head unit but planned to be supported in future releases.
- "not_supported_security": the resource is not accessible by other applications (private access).
- "not_supported_policy": resource cannot be accessed at this time because of policy constraints. Application can subscribe to policy events to get notified when state of resource changes (allowed, denied or restricted).

####Example
```javascript

```

##Media
This Javascript SDK allows interacting with media player.
The following interface represents a base interface to all media player properties:
CommonDataType interface represents common data type for all data types.

###Media properties
Below properties is a subset of possible attributes that a Media service may support. More attributes shall be added in the next version of this SDK.

###Get Media Information
**Usage:** `drive.media.get(options).then(resolve, reject);`

**Description:** The get method returns media information object.

**Parameters:**
- {object} options Optional - Options object allows specifying filters.
- {function} resolve - Function called with media information data object if the operation is successful. See data object format below.
- {function} reject Optional - Function called in case of error retrieving media information.

**Returns:** Promise

####Example: get current media
```javascript

```

###Set Media information
**Usage:** `drive.media.set(settings,options).then(resolve, reject)`

**Description:** The set method allows setting some media parameters like audio/video source URI.

**Parameters:**
- {object} settings - Settings object value (attributes values) 
- {object} options Optional - Options object allows specifying filters.
- {function} resolve - Function called if the operation is successful. 
- {function} reject Optional - Function called in case of error setting notification information.

**Returns:** Promise

####Example: Request/Release media player
```javascript

```

####Example: set source URI and start media player
```javascript

```

###Delete Media settings
**Usage:** `drive.media.delete(settings,options).then(resolve, reject)`

**Description:** The delete method allows delete previous settings.

**Parameters:**
- {object} settings - Settings attribute names 
- {object} options Optional - Options object allows specifying filters.
- {function} resolve - Function called if the operation is successful. 
- {function} reject Optional - Function called in case of error setting media information.
**Returns:** Promise
####Example:
```javascript

```

Subscribe to media information
**Usage:** `handle = drive.media.subscribe(callBack,options);`

**Description:** The subscribe method allows registering for value change events. Specified callback function will be called when that event occurs.

**Parameters:**
- {function} callBack - Function called on value change with media information data object. See data object format below.
- {object} options Optional - Options object allows specifying filters.

**Returns:** {Integer} handle
Subscribe returns handle to subscription or 0 if error. 

####Example: subscribe to destination
```javascript

```

Unsubscribe from media information
**Usage:** `drive.media.unsubscribe(handle);`

**Description:** The unsubscribe method allows application to stop data notifications.

**Parameters:**
- {object} handle - "handle" corresponds to subscription handle object returned by subscribe method. 

**Returns:** void

####Example:
```javascript

```

###Access/Availability check
**Usage:** `drive.media.available();`

**Description:** This method allows to check whether a given attribute or object is supported and accessible. 
When available method returns not_supported_policy, application can subscribe to policy manager to get notifications when resource state changes.
See policy manager section for more details.

**Parameters:**
- None

**Returns:** String
- "available": resource is available (read/write).
- "readonly": resource is available in read only mode.
- "not_supported": resource is not supported by current vehicle or head unit.
- "not_supported_yet": resource is not currently supported by current vehicle or head unit but planned to be supported in future releases.
- "not_supported_security": the resource is not accessible by other applications (private access).
- "not_supported_policy": resource cannot be accessed at this time because of policy constraints. Application can subscribe to policy events to get notified when state of resource changes (allowed, denied or restricted).

####Example
```javascript

```

##SMS
This Javascript SDK allows interacting with SMS/MMS Messaging.
The following interface represents a base interface to all SMS/MMS properties:
CommonDataType interface represents common data type for all data types.

###SMS/MMS properties
Below properties is a subset of possible attributes that SMS/MMS may support. More attributes shall be added in the next version of this SDK.

###Get SMS/MMS Messages
**Usage:** `drive.sms.get(options).then(resolve, reject);`

**Description:** The get method returns SMS information object.

**Parameters:**
- {object} options Optional -Options object allows specifying filters.
- {function} resolve - Function called with sms information data object if the operation is successful. See data object format below.
- {function} reject Optional - Function called in case of error retrieving SMS information.

**Returns:** Promise

####Example: get inbox messages
```javascript

```

###Set SMS/MMS messages
**Usage:** `drive.sms.set(settings,options).then(resolve, reject)`

**Description:** The set method allows interact with SMS/MMS messaging service for instance send SMS message.

**Parameters:**
- {object} settings - Settings object value (attributes values) 
- {object} options Optional - Options object allows specifying filters.
- {function} resolve - Function called if the operation is successful. 
- {function} reject Optional - Function called in case of error setting SMS information.

**Returns:** Promise

####Example: Send SMS
```javascript

```

###Delete SMS messages
**Usage:** `drive.sms.delete(settings,options).then(resolve, reject)`

**Description:** The delete method allows delete SMS messages.

**Parameters:** 
- {object} settings - Settings attribute names 
- {object} options Optional - Options object allows specifying filters.
- {function} resolve - Function called if the operation is successful. 
- {function} reject Optional - Function called in case of error setting sms data.

**Returns:** Promise

####Example:
```javascript

```

###Subscribe to SMS
**Usage:** `handle = drive.sms.subscribe(callBack,options);`

**Description:** The subscribe method allows registering for value change events. Specified callback function will be called when that event occurs.

**Parameters:**
- {function} callBack - Function called on value change with SMS data object. See data object format below.
- {object} options Optional - Options object allows specifying filters.

**Returns:** - {Integer} handle
Subscribe returns handle to subscription or 0 if error. 

####Example: receive SMS
```javascript

```

Unsubscribe from SMS
**Usage:** `drive.sms.unsubscribe(handle);`

**Description:** The unsubscribe method allows application to stop data notifications.

**Parameters:**
- {object} handle - "handle" corresponds to subscription handle object returned by subscribe method. 

**Returns:** void

####Example
  ```javascript

```

###Access/Availability check
**Usage:**  `drive.sms.available();`

**Description:** This method allows to check whether a given attribute or object is supported and accessible. 
When available method returns not_supported_policy, application can subscribe to policy manager to get notifications when resource state changes.
See policy manager section for more details.

**Parameters:**
- None.

**Returns:** String
- "available": resource is available (read/write).
- "readonly": resource is available in read only mode.
- "not_supported": resource is not supported by current vehicle or head unit.
- "not_supported_yet": resource is not currently supported by current vehicle or head unit but planned to be supported in future releases.
- "not_supported_security": the resource is not accessible by other applications (private access).
- "not_supported_policy": resource cannot be accessed at this time because of policy constraints. Application can subscribe to policy events to get notified when state of resource changes (allowed, denied or restricted).

####Example
```javascript

```

##Search service
This Javascript SDK allows interacting with search service.
The following interface represents a base interface to all Contacts properties:

CommonDataType interface represents common data type for all data types.

###Search properties
Below properties is a subset of possible attributes that Search service may support. More attributes shall be added in the next version of this SDK.

###Get search results
**Usage:** `drive.search.get(options).then(resolve, reject);`

**Description:** The get method returns search results object.

**Parameters:**
- {object} options Optional - Options object allows specifying filters.
- {function} resolve - Function called with contact information data object if the operation is successful. See data object format below.
- {function} reject Optional - Function called in case of error retrieving search result information.

**Returns:** Promise

####Example: get contacts
```javascript

```

###Set search request
**Usage:** `drive.search.set(settings,options).then(resolve, reject)`

**Description:** The set method allows interact with search service for instance get places.

**Parameters:**
- {object} settings - Settings object value (attributes values) 
- {object} options Optional - Options object allows specifying filters.
- {function} resolve - Function called if the operation is successful. 
- {function} reject Optional - Function called in case of error setting search information.

**Returns:** Promise

####Example: Search POIs
```javascript

```

####Example: Search current weather
```javascript

```

####Example: Search forecast weather
```javascript

```

###Delete search requests/results
**Usage:** `drive.search.delete(settings,options).then(resolve, reject)`

**Description:** The delete method allows delete search requests/results.

**Parameters:**
- {object} settings - Settings attribute names 
- {object} options Optional - Options object allows specifying filters.
- {function} resolve - Function called if the operation is successful. 
- {function} reject Optional - Function called in case of error setting search data.

**Returns:** Promise

####Example:
```javascript

```

###Subscribe to search service
**Usage:** `handle = drive.search.subscribe(callBack,options);`

**Description:** The subscribe method allows registering for value change events. Specified callback function will be called when that event occurs.

**Parameters:**
- {function} callBack - Function called on value change with search results/request object. See data object format below.
- {object} options Optional - Options object allows specifying filters.

**Returns:** {Integer} handle
Subscribe returns handle to subscription or 0 if error. 

####Example: subscribe to running apps
```javascript

```

###Unsubscribe from search service
**Usage:** `drive.search.unsubscribe(handle);`

**Description:** The unsubscribe method allows application to stop data notifications.

**Parameters:**
- {object} handle - "handle" corresponds to subscription handle object returned by subscribe method. 

**Returns:** void

####Example
```javascript

```

###Access/Availability check
**Usage:** `drive.search.available();`

**Description:** This method allows to check whether a given attribute or object is supported and accessible. 
When available method returns not_supported_policy, application can subscribe to policy manager to get notifications when resource state changes. See policy manager section for more details.

**Parameters:**
- None

**Returns:** String
- "available": resource is available (read/write).
- "readonly": resource is available in read only mode.
- "not_supported": resource is not supported by current vehicle or head unit.
- "not_supported_yet": resource is not currently supported by current vehicle or head unit but planned to be supported in future releases.
- "not_supported_security": the resource is not accessible by other applications (private access).
- "not_supported_policy": resource cannot be accessed at this time because of policy constraints. Application can subscribe to policy events to get notified when state of resource changes (allowed, denied or restricted).

####Example
```javascript

```

##Site Automation (Digital Life)
This Javascript SDK describes how to interact with site automation.
The following interface represents a base interface to all site automation properties:
CommonDataType interface represents common data type for all data types.

###Site automation properties
Below properties is a subset of possible attributes that site automation may support. More attributes shall be added in the next version of this SDK.

###Get Site Automation Information
**Usage:** `drive.sa.get(options).then(resolve, reject);`

**Description:** The get method returns site automation information object.

**Parameters:**
- {object} options Optional - Options object allows specifying filters.
- {function} resolve - Function called with site automation information data object if the operation is successful. See data object format below.
- {function} reject Optional - Function called in case of error retrieving site automation information.

**Returns:** Promise

####Example: get site automation resource status
```javascript

```

###Set site automation Information
**Usage:** `drive.sa.set(settings,options).then(resolve, reject)`

**Description:** The set method allows setting some site automation parameters.

**Parameters:**
- {object} settings - Settings object value (attributes values) 
- {object} options Optional - Options object allows specifying filters.
- {function} resolve - Function called if the operation is successful. 
- {function} reject Optional - Function called in case of error setting site automation information.

**Returns:** Promise

####Example: Send request
```javascript

```

###Delete Site automation Settings
**Usage:** `drive.sa.delete(settings,options).then(resolve, reject)`

**Description:** The delete method allows delete previous settings.

**Parameters:**
- {object} setting - Settings attribute names 
- {object} options Optional - Options object allows specifying filters.
- {function} resolve - Function called if the operation is successful. 
- {function} reject Optional - Function called in case of error setting site automation information.

**Returns:** Promise

####Example:
```javascript

```

##Subscribe to site automation
**Usage:** `handle = drive.sa.subscribe(callBack,options);`

**Description:** The subscribe method allows registering for value change events. Specified callback function will be called when that event occurs.

**Parameters:**
- {function} callBack - Function called on value change with site automation information data object. See data object format below.
- {object} options Optional - Options object allows specifying filters.

**Returns:** {Integer} handle
Subscribe returns handle to subscription or 0 if error. 

####Example: subscribe to site automation result
```javascript

```

###Unsubscribe from site automation
**Usage:** `drive.sa.unsubscribe(handle);`

**Description:** The unsubscribe method allows application to stop data notifications.

**Parameters:**
{object} handle - "handle" corresponds to subscription handle object returned by subscribe method. 

**Returns:** void

####Example
```javascript

```

###Access/Availability check
**Usage:** `drive.sa.available();`

**Description:** This method allows to check whether a given attribute or object is supported and accessible. 
When available method returns not_supported_policy, application can subscribe to policy manager to get notifications when resource state changes. See policy manager section for more details.

**Parameters:**
- None.

**Returns:** String
- "available": resource is available (read/write).
- "readonly": resource is available in read only mode.
- "not_supported": resource is not supported by current vehicle or head unit.
- "not_supported_yet": resource is not currently supported by current vehicle or head unit but planned to be supported in future releases.
- "not_supported_security": the resource is not accessible by other applications (private access).
- "not_supported_policy": resource cannot be accessed at this time because of policy constraints. Application can subscribe to policy events to get notified when state of resource changes (allowed, denied or restricted).

####Example:
```javascript

```

**Error object format**
|Parameter	|Type	|Required	|Description
|---    |---    |---    |---    |
|error	|String	|True	|Error code
|message	|String	|False	|Error message

**Common error codes**
|Code	|Description
|---    |---    |
|invalid_parameter	|Invalid parameters
|not_authenticated	|Not authenticated
|not_authorized	|Not authorized
|connection_timeout	|Communication error


