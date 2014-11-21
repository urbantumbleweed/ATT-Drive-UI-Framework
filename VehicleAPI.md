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
- CommonDataType interface represents common data type for all data types
- Navigation properties

Below properties is a subset of possible attributes that a navigation system may support. More attributes shall be added in the next version of this SDK. Navigation properties that are not supported by a given navigation system will not be returned in a get method performed on parent object but will trigger an error if methods (get, set, subscribe, delete) are called on a specific unsupported property.

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
- Vehicle information user settings
- Navigation user settings
- Identity user settings
- Notification user settings
- Media user settings
- Search user settings

###Application user settings

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

```

####Example: get baseURL
```javascript

```

####Example: get vehicle seat adjustment user preferences
```javascript

```

####Example: get navigation latest destination user preferences
```javascript

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

```

####Example: Application global settings
```javascript

```

####Example: Application user preference
```javascript

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

```

####Example: subscribe to application properties
```javascript

```

###Unsubscribe from System/Application User Settings
**Usage:** `drive.settings.unsubscribe(handle);`

**Description:** The unsubscribe method allows application to stop data notifications.

**Parameters:**
- {object} handle - "handle" corresponds to subscription handle object returned by subscribe method. 

**Returns:** void

####Example
```javascript

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


