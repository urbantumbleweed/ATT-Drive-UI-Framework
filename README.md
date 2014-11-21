
# Context initialization
Application must call the init function to setup the context of a given SDK before usage.
The callback function will be called by DEC to notify the application of any changes made to its data store space made by external applications or components.
```callback InterfaceCallback = void(object value, EventType eventType); ();```

For instance, if an application wants to use the vehicle information SDK, the application would have to call:
```init(appId, callBack, ["vehicleinfo","navigation”]);```

## Vehicle Information
This Javascript SDK allows retrieving and setting vehicle information.
The following interface represents a base interface to all vehicle properties (from W3C):

<pre>
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
</pre>

Object options can be of type Zone or extended options (to keep compatibility with W3C).
Optional parameter “options” allows filtering the set of attributes the method is applied to. For instance, chose logical or physical vehicle zone.
VehicleCommonDataType interface represents common data type for all vehicle data types.
Vehicle properties
Below properties is a subset of possible attributes that a Vehicle Information Controller may support. More attributes shall be added in the next version of this SDK.
Vehicle properties that are not supported by a given VIC will not be returned in a get method performed on parent object but will trigger an error if methods (get, set, delete, subscribe) are called on a specific unsupported property.

Get Vehicle information
Usage: drive.vehicleinfo.get(options).then(resolve, reject);
Description: The get method returns vehicle information object.
Parameters:
{function} resolve
Function called with vehicle information data object if the operation is successful. See data object format below.
{function} reject Optional
Function called in case of error retrieving vehicle information.
{object} options Optional
"options" object corresponds to a Zone (See Zone data structure below) or any other {attribute : value} that will be used as a filter for returned result.
Returns: Promise
Example: get vehicle speed

Example: get vehicle climate information (HVAC)

Example: get door status

Example: get all vehicle information

Set Vehicle information
Usage: drive.vehicleinfo.set(settings,options).then(resolve, reject);
Description: The set method allows setting some vehicle parameters like climate control (HVAC).
Parameters:
{object} settings
Settings object value (attributes values) 
{object} options Optional
"options" object corresponds to a Zone (See Zone data structure above) or any other attribute value that will be used as a filter to limite update scope.
{function} resolve
Function called if the operation is successful. 
{function} reject Optional
Function called in case of error setting vehicle information.
Returns: Promise
Example: lock driver side door

Example: turn on AC

Delete vehicle information settings
Usage: drive.vehicleinfo.delete(settings,options).then(resolve, reject)
Description: The delete method allows delete previous settings.
Parameters:
{object} settings
Settings attribute names 
{object} options Optional
Options object allows specifying filters.
{function} resolve
Function called if the operation is successful. 
{function} reject Optional
Function called in case of error setting vehicle information.
Returns: Promise
Note: in the current data model there is no attribute that requires delete settings. This method should be supported for tha sake of uniformity and future use.
Subscribe to vehicle information
Usage: handle = drive.vehicleinfo.subscribe(callBack, options);
Description: The subscribe method allows registering for value change events. Specified callback function will be called when that event occurs.
Parameters:
{function} callBack
Function called on value change with vehicle information data object. See data object format below.
{object} options Optional
"options" object corresponds to a Zone or any other attribute value that will be used as a filter to limite subscription scope.
Returns: 
{Integer} handle
Subscribe returns handle to subscription or 0 if error. 
Example: subscribe to vehicle speed

Example: subscribe to any vehicle information

Unsubscribe from vehicle information
Usage: drive.vehicleinfo.unsubscribe(handle);
Description: The unsubscribe method allows application to stop data notifications.
Parameters:
{object} handle
“handle” corresponds to subscription handle object returned by subscribe method. 
Returns: void
Example

Access/Availability check
Usage: drive.vehicleinfo.available();
Description: This method allows to check whether a given attribute or object is supported and accessible. 
When available method returns not_supported_policy, application can subscribe to policy manager to get notifications when resource state changes.
See policy manager section for more details.
Parameters:
None.
Returns: String
"available": resource is available (read/write).
"readonly": resource is available in read only mode.
"not_supported": resource is not supported by current vehicle or head unit.
"not_supported_yet": resource is not currently supported by current vehicle or head unit but planned to be supported in future releases.
"not_supported_security": the resource is not accessible by other applications (private access).
"not_supported_policy": resource cannot be accessed at this time because of policy constraints. Application can subscribe to policy events to get notified when state of resource changes (allowed, denied or restricted).
Example

Navigation
This Javascript SDK allows interacting with navigation system.
The following interface represents a base interface to all navigation properties:

CommonDataType interface represents common data type for all data types.
Navigation properties
Below properties is a subset of possible attributes that a navigation system may support. More attributes shall be added in the next version of this SDK.
Navigation properties that are not supported by a given navigation system will not be returned in a get method performed on parent object but will trigger an error if methods (get, set, subscribe, delete) are called on a specific unsupported property.

 Get Navigation Information
Usage: drive.navigation.get(options).then(resolve, reject);
Description: The get method returns navigation information object.
Parameters:
{object} options Optional
Options object allows specifying filters.
{function} resolve
Function called with navigation information data object if the operation is successful. See data object format below.
{function} reject Optional
Function called in case of error retrieving navigation information.
Returns: Promise
Example: get current position

Example: get all navigation information

Set Navigation information
Usage: drive.navigation.set(settings,options).then(resolve, reject)
Description: The set method allows setting some navigation parameters like destination.
Parameters:
{object} settings
Settings object value (attributes values) 
{object} options Optional
Options object allows specifying filters.
{function} resolve
Function called if the operation is successful. 
{function} reject Optional
Function called in case of error setting vehicle information.
Returns: Promise
Example: set new destination by poi

Example: set new destination by latitude and Longitude

Example: add new poi to the map and make it visible

Example: Hide POI

Example: Start navigation session

Delete Navigation settings
Usage: drive.navigation.delete(settings,options).then(resolve, reject)
Description: The delete method allows delete previous settings.
Parameters:
{object} settings
Settings attribute names 
{object} options Optional
Options object allows specifying filters.
{function} resolve
Function called if the operation is successful. 
{function} reject Optional
Function called in case of error setting navigation information.
Returns: Promise
Example: delete a specific poi

Example: delete all POIs by type (parking)

Subscribe to navigation information
Usage: handle = drive.navigation.subscribe(callBack,options);
Description: The subscribe method allows registering for value change events. Specified callback function will be called when that event occurs.
Parameters:
{function} callBack
Function called on value change with navigation information data object. See data object format below.
{object} options Optional
Options object allows specifying filters.
Returns: 
{Integer} handle
Subscribe returns handle to subscription or 0 if error. 
Example: subscribe to destination

Unsubscribe from navigation information
Usage: drive.navigation.unsubscribe(handle);
Description: The unsubscribe method allows application to stop data notifications.
Parameters:
{object} handle
“handle” corresponds to subscription handle object returned by subscribe method. 
Returns: void
Example

Access/Availability check
Usage: drive.navigation.available();
Description: This method allows to check whether a given attribute or object is supported and accessible. 
When available method returns not_supported_policy, application can subscribe to policy manager to get notifications when resource state changes.
See policy manager section for more details.
Parameters:
None.
Returns: String
"available": resource is available (read/write).
"readonly": resource is available in read only mode.
"not_supported": resource is not supported by current vehicle or head unit.
"not_supported_yet": resource is not currently supported by current vehicle or head unit but planned to be supported in future releases.
"not_supported_security": the resource is not accessible by other applications (private access).
"not_supported_policy": resource cannot be accessed at this time because of policy constraints. Application can subscribe to policy events to get notified when state of resource changes (allowed, denied or restricted).
Example

Identity
This Javascript SDK allows interacting with Identity Manager.
The following interface represents a base interface to all identity properties:

CommonDataType interface represents common data type for all data types.
Identity properties
Below properties is a subset of possible attributes that identity manager supports. More attributes shall be added in the next version of this SDK.

Get Identity Information
Usage: drive.identity.get(options).then(resolve, reject);
Description: The get method returns identity information object.
Parameters:
{object} options Optional
Options object allows specifying filters.
{function} resolve
Function called with identity information data object if the operation is successful. See data object format below.
{function} reject Optional
Function called in case of error retrieving identity information.
Returns: Promise
Example: get current user

Example: Check if user is logged in

Set Identity information
Usage: drive.identity.set(settings,options).then(resolve, reject);
Description: The set method allows setting some identity parameters like user preferences.
Parameters:
{object} settings
Settings object value (attributes values) 
{object} options Optional
Options object allows specifying filters.
{function} resolve
Function called if the operation is successful. 
{function} reject Optional
Function called in case of error setting vehicle information.
Returns: Promise
Example: trigger user login

Delete Identity settings
Usage: drive.identity.delete(settings,options).then(resolve, reject)
Description: The delete method allows delete previous settings.
Parameters:
{object} settings
Settings attribute names 
{object} options Optional
Options object allows specifying filters.
{function} resolve
Function called if the operation is successful. 
{function} reject Optional
Function called in case of error setting vehicle information.
Returns: Promise
Note: in the current data model there is no attribute that requires delete settings. This method should be supported for tha sake of uniformity and future use.
Subscribe to Identity information
Usage: handle = drive.identity.subscribe(callBack,options);
Description: The subscribe method allows registering for value change events. Specified callback function will be called when that event occurs.
Parameters:
{function} callBack
Function called on value change with identity information data object. See data object format below.
{object} options Optional
Options object allows specifying filters.
Returns: 
{Integer} handle
Subscribe returns handle to subscription or 0 if error. 
Example: get notification when user logs in

Unsubscribe from Identity information
Usage: drive.identity.unsubscribe(handle);
Description: The unsubscribe method allows application to stop data notifications.
Parameters:
{object} handle
“handle” corresponds to subscription handle object returned by subscribe method. 
Returns: void
Example

Access/Availability check
Usage: drive.identity.available();
Description: This method allows to check whether a given attribute or object is supported and accessible. 
When available method returns not_supported_policy, application can subscribe to policy manager to get notifications when resource state changes.
See policy manager section for more details.
Parameters:
None.
Returns: String
"available": resource is available (read/write).
"readonly": resource is available in read only mode.
"not_supported": resource is not supported by current vehicle or head unit.
"not_supported_yet": resource is not currently supported by current vehicle or head unit but planned to be supported in future releases.
"not_supported_security": the resource is not accessible by other applications (private access).
"not_supported_policy": resource cannot be accessed at this time because of policy constraints. Application can subscribe to policy events to get notified when state of resource changes (allowed, denied or restricted).
Example


Application and System Settings
This Javascript SDK allows managing application and system settings. Applications can use this SDK to store and retrieve their own settings and benefit from built in data events handling.
The following interface represents a base interface to all system/application properties:

CommonDataType interface represents common data type for all data types.
System properties
Below properties is a subset of possible attributes that system settings support. More attributes shall be added in the next version of this SDK.

Application properties
Application properties shall start with application name.

Vehicle information user settings

Navigation user settings

Identity user settings

Notification user settings

Media user settings

Search user settings

Application user settings

Get System/Application User Settings
Usage: drive.settings.get(options).then(resolve, reject);
Description: The get method returns system information object.
Parameters:
{object} options Optional
Options object allows specifying filters on returned data.
{function} resolve
Function called with system/application information data object if the operation is successful. See data object format below.
{function} reject Optional
Function called in case of error retrieving system/application information.
Returns: Promise
Example: get default language

Example: get baseURL

Example: get vehicle seat adjustment user preferences

Example: get navigation latest destination user preferences

Set System/Application User Settings
Usage: drive.settings.set(settings,options).then(resolve, reject);
Description: The set method allows set system/application configuration (settings).
Parameters:
{object} settings
Settings object value (attributes values).
{object} options Optional
Options object allows specifying filters.
{function} resolve
Function called if the operation is successful. 
{function} reject Optional
Function called in case of error setting policy information.
Returns: Promise
Example: system settings

Example: Application global settings

Example: Application user preference

Delete System/Application User Settings
Usage: drive.settings.delete(settings,options).then(resolve, reject)
Description: The delete method allows delete previous settings.
Parameters:
{object} settings
Settings attribute names 
{object} options Optional
Options object allows specifying filters.
{function} resolve
Function called if the operation is successful. 
{function} reject Optional
Function called in case of error setting vehicle information.
Returns: Promise
Example: Delete settings of a given user

Subscribe to System/Application User Settings
Usage: handle = drive.settings.subscribe(callBack, options)
Description: The subscribe method allows registering for value change events. Specified callback function will be called when that event occurs.
Parameters:
{object} options Optional
Options object allows specifying filters.
{function} callBack
Function called on value change with settings data object. See data object format below.
Returns: 
{Integer} handle
Subscribe returns handle to subscription or 0 if error. 
Example: subscribe to all system properties

Example: subscribe to application properties

Unsubscribe from System/Application User Settings
Usage: drive.settings.unsubscribe(handle);
Description: The unsubscribe method allows application to stop data notifications.
Parameters:
{object} handle
"handle" corresponds to subscription handle object returned by subscribe method. 
Returns: void
Example

Access/Availability check
Usage: drive.settings.available();
Description: This method allows to check whether a given attribute or object is supported and accessible. 
When available method returns not_supported_policy, application can subscribe to policy manager to get notifications when resource state changes.
See policy manager section for more details.
Parameters:
None.
Returns: String
"available": resource is available (read/write).
"readonly": resource is available in read only mode.
"not_supported": resource is not supported by current vehicle or head unit.
"not_supported_yet": resource is not currently supported by current vehicle or head unit but planned to be supported in future releases.
"not_supported_security": the resource is not accessible by other applications (private access).
"not_supported_policy": resource cannot be accessed at this time because of policy constraints. Application can subscribe to policy events to get notified when state of resource changes (allowed, denied or restricted).
Example


Notification
This Javascript SDK allows interacting with notification service.
The following interface represents a base interface to all notification properties:

CommonDataType interface represents common data type for all data types.
Notification properties
Below properties is a subset of possible attributes that a notification service may support. More attributes shall be added in the next version of this SDK.

SMS data format

Weather alert data format

Tracking data format

Site automation data format

Get Notification Information
Usage: drive.notification.get(options).then(resolve, reject);
Description: The get method returns navigation information object.
Parameters:
{object} options Optional
Options object allows specifying filters.
{function} resolve
Function called with notification information data object if the operation is successful. 
{function} reject Optional
Function called in case of error retrieving navigation information.
Returns: Promise
Example: get sms messages

Set Notification information
Usage: drive.notification.set(settings,options).then(resolve, reject)
Description: The set method allows setting some notification parameters like read flag.
Parameters:
{object} settings
Settings object value (attributes values) 
{object} options Optional
Options object allows specifying filters.
{function} resolve
Function called if the operation is successful. 
{function} reject Optional
Function called in case of error setting notification information.
Returns: Promise
Example:

Delete Notification settings
Usage: drive.notification.delete(settings,options).then(resolve, reject)
Description: The delete method allows delete previous settings.
Parameters:
{object} settings
Settings attribute names 
{object} options Optional
Options object allows specifying filters.
{function} resolve
Function called if the operation is successful. 
{function} reject Optional
Function called in case of error setting vehicle information.
Returns: Promise
Example:

Subscribe to notification information
Usage: handle = drive.notification.subscribe(callBack,options);
Description: The subscribe method allows registering for value change events. Specified callback function will be called when that event occurs.
Parameters:
{function} callBack
Function called on value change with notification information data object. See data object format below.
{object} options Optional
Options object allows specifying filters.
Returns: 
{Integer} handle
Subscribe returns handle to subscription or 0 if error. 
Example: subscribe to incoming sms

Unsubscribe from notification information
Usage: drive.notification.unsubscribe(handle);
Description: The unsubscribe method allows application to stop data notifications.
Parameters:
{object} handle
“handle” corresponds to subscription handle object returned by subscribe method. 
Returns: void
Example

Access/Availability check
Usage: drive.notification.available();
Description: This method allows to check whether a given attribute or object is supported and accessible. 
When available method returns not_supported_policy, application can subscribe to policy manager to get notifications when resource state changes.
See policy manager section for more details.
Parameters:
None.
Returns: String
"available": resource is available (read/write).
"readonly": resource is available in read only mode.
"not_supported": resource is not supported by current vehicle or head unit.
"not_supported_yet": resource is not currently supported by current vehicle or head unit but planned to be supported in future releases.
"not_supported_security": the resource is not accessible by other applications (private access).
"not_supported_policy": resource cannot be accessed at this time because of policy constraints. Application can subscribe to policy events to get notified when state of resource changes (allowed, denied or restricted).
Example

Media
This Javascript SDK allows interacting with media player.
The following interface represents a base interface to all media player properties:

CommonDataType interface represents common data type for all data types.
Media properties
Below properties is a subset of possible attributes that a Media service may support. More attributes shall be added in the next version of this SDK.

Get Media Information
Usage: drive.media.get(options).then(resolve, reject);
Description: The get method returns media information object.
Parameters:
{object} options Optional
Options object allows specifying filters.
{function} resolve
Function called with media information data object if the operation is successful. See data object format below.
{function} reject Optional
Function called in case of error retrieving media information.
Returns: Promise
Example: get current media

Set Media information
Usage: drive.media.set(settings,options).then(resolve, reject)
Description: The set method allows setting some media parameters like audio/video source URI.
Parameters:
{object} settings
Settings object value (attributes values) 
{object} options Optional
Options object allows specifying filters.
{function} resolve
Function called if the operation is successful. 
{function} reject Optional
Function called in case of error setting notification information.
Returns: Promise
Example: Request/Release media player

Example: set source URI and start media player



Delete Media settings
Usage: drive.media.delete(settings,options).then(resolve, reject)
Description: The delete method allows delete previous settings.
Parameters:
{object} settings
Settings attribute names 
{object} options Optional
Options object allows specifying filters.
{function} resolve
Function called if the operation is successful. 
{function} reject Optional
Function called in case of error setting media information.
Returns: Promise
Example:

Subscribe to media information
Usage: handle = drive.media.subscribe(callBack,options);
Description: The subscribe method allows registering for value change events. Specified callback function will be called when that event occurs.
Parameters:
{function} callBack
Function called on value change with media information data object. See data object format below.
{object} options Optional
Options object allows specifying filters.
Returns: 
{Integer} handle
Subscribe returns handle to subscription or 0 if error. 
Example: subscribe to destination

Unsubscribe from media information
Usage: drive.media.unsubscribe(handle);
Description: The unsubscribe method allows application to stop data notifications.
Parameters:
{object} handle
“handle” corresponds to subscription handle object returned by subscribe method. 
Returns: void
Example

Access/Availability check
Usage: drive.media.available();
Description: This method allows to check whether a given attribute or object is supported and accessible. 
When available method returns not_supported_policy, application can subscribe to policy manager to get notifications when resource state changes.
See policy manager section for more details.
Parameters:
None.
Returns: String
"available": resource is available (read/write).
"readonly": resource is available in read only mode.
"not_supported": resource is not supported by current vehicle or head unit.
"not_supported_yet": resource is not currently supported by current vehicle or head unit but planned to be supported in future releases.
"not_supported_security": the resource is not accessible by other applications (private access).
"not_supported_policy": resource cannot be accessed at this time because of policy constraints. Application can subscribe to policy events to get notified when state of resource changes (allowed, denied or restricted).
Example





SMS
This Javascript SDK allows interacting with SMS/MMS Messaging.
The following interface represents a base interface to all SMS/MMS properties:

CommonDataType interface represents common data type for all data types.
SMS/MMS properties
Below properties is a subset of possible attributes that SMS/MMS may support. More attributes shall be added in the next version of this SDK.

Get SMS/MMS Messages
Usage: drive.sms.get(options).then(resolve, reject);
Description: The get method returns SMS information object.
Parameters:
{object} options Optional
Options object allows specifying filters.
{function} resolve
Function called with sms information data object if the operation is successful. See data object format below.
{function} reject Optional
Function called in case of error retrieving SMS information.
Returns: Promise
Example: get inbox messages

Set SMS/MMS messages
Usage: drive.sms.set(settings,options).then(resolve, reject)
Description: The set method allows interact with SMS/MMS messaging service for instance send SMS message.
Parameters:
{object} settings
Settings object value (attributes values) 
{object} options Optional
Options object allows specifying filters.
{function} resolve
Function called if the operation is successful. 
{function} reject Optional
Function called in case of error setting SMS information.
Returns: Promise
Example: Send SMS

Delete SMS messages
Usage: drive.sms.delete(settings,options).then(resolve, reject)
Description: The delete method allows delete SMS messages.
Parameters:
{object} settings
Settings attribute names 
{object} options Optional
Options object allows specifying filters.
{function} resolve
Function called if the operation is successful. 
{function} reject Optional
Function called in case of error setting sms data.
Returns: Promise
Example:

Subscribe to SMS
Usage: handle = drive.sms.subscribe(callBack,options);
Description: The subscribe method allows registering for value change events. Specified callback function will be called when that event occurs.
Parameters:
{function} callBack
Function called on value change with SMS data object. See data object format below.
{object} options Optional
Options object allows specifying filters.
Returns: 
{Integer} handle
Subscribe returns handle to subscription or 0 if error. 
Example: receive SMS

Unsubscribe from SMS
Usage: drive.sms.unsubscribe(handle);
Description: The unsubscribe method allows application to stop data notifications.
Parameters:
{object} handle
“handle” corresponds to subscription handle object returned by subscribe method. 
Returns: void
Example

Access/Availability check
Usage: drive.sms.available();
Description: This method allows to check whether a given attribute or object is supported and accessible. 
When available method returns not_supported_policy, application can subscribe to policy manager to get notifications when resource state changes.
See policy manager section for more details.
Parameters:
None.
Returns: String
"available": resource is available (read/write).
"readonly": resource is available in read only mode.
"not_supported": resource is not supported by current vehicle or head unit.
"not_supported_yet": resource is not currently supported by current vehicle or head unit but planned to be supported in future releases.
"not_supported_security": the resource is not accessible by other applications (private access).
"not_supported_policy": resource cannot be accessed at this time because of policy constraints. Application can subscribe to policy events to get notified when state of resource changes (allowed, denied or restricted).
Example

Search service
This Javascript SDK allows interacting with search service.
The following interface represents a base interface to all Contacts properties:

CommonDataType interface represents common data type for all data types.
Search properties
Below properties is a subset of possible attributes that Search service may support. More attributes shall be added in the next version of this SDK.

Get search results
Usage: drive.search.get(options).then(resolve, reject);
Description: The get method returns search results object.
Parameters:
{object} options Optional
Options object allows specifying filters.
{function} resolve
Function called with contact information data object if the operation is successful. See data object format below.
{function} reject Optional
Function called in case of error retrieving search result information.
Returns: Promise
Example: get contacts

Set search request
Usage: drive.search.set(settings,options).then(resolve, reject)
Description: The set method allows interact with search service for instance get places.
Parameters:
{object} settings
Settings object value (attributes values) 
{object} options Optional
Options object allows specifying filters.
{function} resolve
Function called if the operation is successful. 
{function} reject Optional
Function called in case of error setting search information.
Returns: Promise
Example: Search POIs

Example: Search current weather

Example: Search forecast weather

Delete search requests/results
Usage: drive.search.delete(settings,options).then(resolve, reject)
Description: The delete method allows delete search requests/results.
Parameters:
{object} settings
Settings attribute names 
{object} options Optional
Options object allows specifying filters.
{function} resolve
Function called if the operation is successful. 
{function} reject Optional
Function called in case of error setting search data.
Returns: Promise
Example:

Subscribe to search service
Usage: handle = drive.search.subscribe(callBack,options);
Description: The subscribe method allows registering for value change events. Specified callback function will be called when that event occurs.
Parameters:
{function} callBack
Function called on value change with search results/request object. See data object format below.
{object} options Optional
Options object allows specifying filters.
Returns: 
{Integer} handle
Subscribe returns handle to subscription or 0 if error. 
Example: subscribe to running apps

Unsubscribe from search service
Usage: drive.search.unsubscribe(handle);
Description: The unsubscribe method allows application to stop data notifications.
Parameters:
{object} handle
“handle” corresponds to subscription handle object returned by subscribe method. 
Returns: void
Example

Access/Availability check
Usage: drive.search.available();
Description: This method allows to check whether a given attribute or object is supported and accessible. 
When available method returns not_supported_policy, application can subscribe to policy manager to get notifications when resource state changes.
See policy manager section for more details.
Parameters:
None.
Returns: String
"available": resource is available (read/write).
"readonly": resource is available in read only mode.
"not_supported": resource is not supported by current vehicle or head unit.
"not_supported_yet": resource is not currently supported by current vehicle or head unit but planned to be supported in future releases.
"not_supported_security": the resource is not accessible by other applications (private access).
"not_supported_policy": resource cannot be accessed at this time because of policy constraints. Application can subscribe to policy events to get notified when state of resource changes (allowed, denied or restricted).
Example



Site Automation (Digital Life)
This Javascript SDK describes how to interact with site automation.
The following interface represents a base interface to all site automation properties:

CommonDataType interface represents common data type for all data types.
Site automation properties
Below properties is a subset of possible attributes that site automation may support. More attributes shall be added in the next version of this SDK.

Get Site Automation Information
Usage: drive.sa.get(options).then(resolve, reject);
Description: The get method returns site automation information object.
Parameters:
{object} options Optional
Options object allows specifying filters.
{function} resolve
Function called with site automation information data object if the operation is successful. See data object format below.
{function} reject Optional
Function called in case of error retrieving site automation information.
Returns: Promise
Example: get site automation resource status

Set site automation Information
Usage: drive.sa.set(settings,options).then(resolve, reject)
Description: The set method allows setting some site automation parameters.
Parameters:
{object} settings
Settings object value (attributes values) 
{object} options Optional
Options object allows specifying filters.
{function} resolve
Function called if the operation is successful. 
{function} reject Optional
Function called in case of error setting site automation information.
Returns: Promise
Example: Send request

Delete Site automation Settings
Usage: drive.sa.delete(settings,options).then(resolve, reject)
Description: The delete method allows delete previous settings.
Parameters:
{object} settings
Settings attribute names 
{object} options Optional
Options object allows specifying filters.
{function} resolve
Function called if the operation is successful. 
{function} reject Optional
Function called in case of error setting site automation information.
Returns: Promise
Example:

Subscribe to site automation
Usage: handle = drive.sa.subscribe(callBack,options);
Description: The subscribe method allows registering for value change events. Specified callback function will be called when that event occurs.
Parameters:
{function} callBack
Function called on value change with site automation information data object. See data object format below.
{object} options Optional
Options object allows specifying filters.
Returns: 
{Integer} handle
Subscribe returns handle to subscription or 0 if error. 
Example: subscribe to site automation result

Unsubscribe from site automation
Usage: drive.sa.unsubscribe(handle);
Description: The unsubscribe method allows application to stop data notifications.
Parameters:
{object} handle
“handle” corresponds to subscription handle object returned by subscribe method. 
Returns: void
Example

Access/Availability check
Usage: drive.sa.available();
Description: This method allows to check whether a given attribute or object is supported and accessible. 
When available method returns not_supported_policy, application can subscribe to policy manager to get notifications when resource state changes.
See policy manager section for more details.
Parameters:
None.
Returns: String
"available": resource is available (read/write).
"readonly": resource is available in read only mode.
"not_supported": resource is not supported by current vehicle or head unit.
"not_supported_yet": resource is not currently supported by current vehicle or head unit but planned to be supported in future releases.
"not_supported_security": the resource is not accessible by other applications (private access).
"not_supported_policy": resource cannot be accessed at this time because of policy constraints. Application can subscribe to policy events to get notified when state of resource changes (allowed, denied or restricted).
Example

Error object format

Common error codes




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
- New build of <em>att-sdk</em> will be created in <em>dist</em> folder
- Copy the folder and files from <em>dist</em> folder and paste them (overwrite) files in <em>yourapp/att-sdk</em> folder

## Running the example app (Weather)
- Install http-server (node module) globally `npm install –g http-server`
- CD into example app folder (/examples/accuweather) and run `http-server`
- Using your favorite browser open [http://localhost:8080](http://localhost:8080)

## App examples
<img src="/att-drive-apps-onesheet.png">
