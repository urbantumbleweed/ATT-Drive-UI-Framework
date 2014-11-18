Contents

TOC \\o 1-3

1.  **Revision History PAGEREF \_Toc \\h 7**

2.  **Acronyms and Abbreviations PAGEREF \_Toc1 \\h 8**

3.  **Introduction PAGEREF \_Toc2 \\h 9**

4.  **Scope PAGEREF \_Toc3 \\h 10**

5.  **Getting started PAGEREF \_Toc4 \\h 11**

    1.  Integrated Development Environment Setup PAGEREF \_Toc5 \\h 12

<!-- -->

6.  Early Development Environment Setup PAGEREF \_Toc6 \\h 17

    3.  Designing a simple HU Application (appropriate only for early
        > development environment deployment strategy) PAGEREF \_Toc7
        > \\h 20

    4.  Developing simple HU application (appropriate only for early
        > development environment deployment strategy) PAGEREF \_Toc8
        > \\h 21

    5.  Developing simple HU application (appropriate only for
        > integrated development environment deployment strategy)
        > PAGEREF \_Toc9 \\h 22

    6.  HU Application Packaging & Deploying PAGEREF \_Toc10 \\h 24

        1.  Early development environment (Under development) PAGEREF
            > \_Toc11 \\h 25

        2.  Integrated development environment PAGEREF \_Toc12 \\h 26

<!-- -->

1.  **Project Installation Instructions: PAGEREF \_Toc13 \\h 28**

    1.  Pre-Requisites: PAGEREF \_Toc14 \\h 28

    2.  Configurations: PAGEREF \_Toc15 \\h 28

    3.  Loading the Project into Eclipse: PAGEREF \_Toc16 \\h 29

    4.  Steps to Run the Project: PAGEREF \_Toc17 \\h 29

2.  **SDK developers guide PAGEREF \_Toc18 \\h 31**

    1.  Context initialization PAGEREF \_Toc19 \\h 31

    2.  Navigation: PAGEREF \_Toc20 \\h 34

        1.  Get current location: PAGEREF \_Toc21 \\h 36

        2.  Set destination PAGEREF \_Toc22 \\h 38

        3.  Get trip information PAGEREF \_Toc23 \\h 40

        4.  Show POIs on the map PAGEREF \_Toc24 \\h 42

        5.  Show Tracking information on the map PAGEREF \_Toc25 \\h 45

        6.  Zoom to POI type: PAGEREF \_Toc26 \\h 48

        7.  Zoom to specific POI: PAGEREF \_Toc27 \\h 49

        8.  Follow POI PAGEREF \_Toc28 \\h 50

    3.  Identity Policy TBD PAGEREF \_Toc29 \\h 51

    4.  Application and System Settings TBD PAGEREF \_Toc30 \\h 51

    5.  Speech (Virtual Assistant) TBD PAGEREF \_Toc31 \\h 51

    6.  Notification TBD PAGEREF \_Toc32 \\h 51

    7.  Media TBD PAGEREF \_Toc33 \\h 51

    8.  Application manager TBD PAGEREF \_Toc34 \\h 51

    9.  SMS TBD PAGEREF \_Toc35 \\h 51

    10. Search service TBD PAGEREF \_Toc36 \\h 51

    11. Error object format TBD PAGEREF \_Toc37 \\h 51

3.  **Architecture PAGEREF \_Toc38 \\h 51**

    1.  Application Development Environments PAGEREF \_Toc39 \\h 51

        1.  Native Applications on the Head Unit PAGEREF \_Toc40 \\h 52

        2.  Web Applications Accessed through the Head Unit Web Viewer
            > PAGEREF \_Toc41 \\h 53

        3.  Web Applications Accessed Through a User Device PAGEREF
            > \_Toc42 \\h 55

        4.  Telematics Applications PAGEREF \_Toc43 \\h 56

    2.  HWAP packaging and configuration PAGEREF \_Toc44 \\h 58

    3.  Setting GUI and user preferences PAGEREF \_Toc45 \\h 58

    4.  Permission manifest (consent page) and resource permission
        > PAGEREF \_Toc46 \\h 58

    5.  Policy management PAGEREF \_Toc47 \\h 58

    6.  Notification PAGEREF \_Toc48 \\h 58

    7.  Virtual assistance PAGEREF \_Toc49 \\h 58

    8.  HU interaction PAGEREF \_Toc50 \\h 59

    9.  Help: FAQ, troubleshooting guide. PAGEREF \_Toc51 \\h 59

4.  **Authentication, Security and Identity PAGEREF \_Toc52 \\h 59**

5.  **ASDP Simulators and how to use them PAGEREF \_Toc53 \\h 59**

6.  **Introduction to Sandbox PAGEREF \_Toc54 \\h 59**

7.  **Class Model Generation PAGEREF \_Toc55 \\h 59**

8.  **APIs PAGEREF \_Toc56 \\h 59**

<!-- -->

1.  <span id="_Toc" class="anchor"></span>Revision History

  ------------- ----------------- ----------------- ----------------------------
  Version       Date              Author            Comment
  Beta 1        August 6, 2014    Azar Mobasheri    First Draft
                                  Mohamed Yousef    
  First draft   October 10,2014   Mohamed Youssef   Adding Navigation examples
  ------------- ----------------- ----------------- ----------------------------

1.  <span id="_Toc1" class="anchor"></span>Acronyms and Abbreviations

  --------- ----------------------------------------
  Acronym   Description
  API       Application Programming Interface
  CVC       Connected Vehicle Cloud
  ECU       Electronics Control Unit
  HA        High Availability
  HLA       High Level Architecture
  M2M       Machine to Machine
  OEM       Original Equipment Manufacturer
  PoC       Proof of Concept
  REST      Representational State Transfer
  SIEM      Security Incident and Event Monitoring
  SOTA      Software Over The Air
  TCU       Telematics Control Unit
  VIN       Vehicle Identification Number
  HU        Head Unit
  ASDP      Automobile Service Delivery Platform
  MSDP      Multi Service Delivery Platform
  ECE       Ericsson Composition Engine
  M2M-DM    Machine to Machine Device Management
  CP        Content Provider
  HWA       Hosted Web Applications
  3PP       Third party provider
            
            
            
  --------- ----------------------------------------

1.  <span id="_Toc2" class="anchor"></span>Introduction

The Automobile Service Delivery Platform (ASDP) is an open cloud based
platform consisting of many components and eco-systems. The following
diagram provides a high level view of the ASDP components and interfaces
with external systems.

![](media/image1.png)

ASDP manages and facilitates the relationships between the components
and external partner systems by providing various integration points via
APIs. . APIs are based on standard technologies such as HTTP REST, SOAP,
and Java APIs which simplify integrating new or existing services.

The purpose of this document is to provide detail instructions and
recommendation to developers who are interested in developing
applications for ASDP.

1.  <span id="_Toc3" class="anchor"></span>Scope

TBD

1.  <span id="_Toc4" class="anchor"></span>Getting started

> Objectives

-   To be able to setup the basic development and deployment environment

<!-- -->

-   To be able to develop, debug and test a very basic application for
    > the CVC-HU.

<!-- -->

-   To deploy and execute a simple application within the basic
    > deployment environment.

<!-- -->

-   To have a general idea about the different HU packaging & deployment
    > environment.

    1.  <span id="_Toc5" class="anchor"></span>Integrated Development
        Environment Setup

  --
  --

1.  Log in to AT&T Drive studio then navigate to *Root/Ericsson/Ericsson
    > Drops/Drop 3 - 03.21.14. ***Make sure to choose the most recent
    > drop folder****

2.  Download the in vehicle development environment and simulators
    > *CXP9024426.zip* or the archive file listed in the most recent
    > release note.

> ![](media/image2.png)
>
> Fig 5.1 vehicle development environments and simulators package

1.  Extract the zip file (unzip) to a new folder e.g.
    > *C:/EricssonCloud/ASDP*. Note that this path will be referenced
    > later in this document as ****\$ProjectWorkDirectory****

<!-- -->

4.  Install and configure message broker package e.g. *SPAN server* *(
    > for more information refer to Drive-HMI-Installation-Guide.decx)*

<!-- -->

5.  Copy the All Java Script files (.js) from ***\$ProjectWorkDirectory/
    > DataEventJSSDK /src/main/js*** to your project work space.

<!-- -->

6.  *Configure the connection to the* message broker package e.g. *span
    > server as follows:*

    a.  *Open Properties.js file under **ProjectWorkDirectory/
        > DataEventJSSDK /src/main/js ***for editing

> ![](media/image3.png)
>
> Fig 5.2 poperties file location

b.  Edit the *host* and *port* variable to match your setting of span
    > *(refer to the instruction in the document listed at step 3).*

c.  

> ![](media/image4.png)

Fig 5.3 properties file.

7.  Install and configure ASDP Android Head Unit Service:

    a.  Install *ASDPVehicleHUService* in your Environment. ****Note
        > this component is used to run the DEC (Data Event Controller)
        > client.****

    <!-- -->

    b.  Configure the Head Unit Service as flows:

        i.  Run the Android Service as shown in the figure below.

        ii. Click on the setting icon as shown in fig below.

        iii. 

> ![](media/image5.png)
>
> Fig 5.4 Android Service configuration icon

iv. Configure the connectivity parameter as shown in the following
    > table.

  ------------------------------------- ------------------------------------------------------------------- -------------------------------------------
  **Parameter**                         **Default Value**                                                   **Notes**
  **Span Server IP**                    -                                                                   *Refer to the span server setting step 3*
  **Span Server Port**                  4402                                                                
  **Virtual Assist Server End Point**   https://garagesvservices.ericy.com/hwavirtualassistservices-1/hwa   
  **Policy Manager End Point**          https://garagesvservices.ericy.com/hwapolicymanager-1/hwa/pm/v1     
  **MSDP Username**                     candy1                                                              
  **MSDP Password**                     candy1                                                              
  ------------------------------------- ------------------------------------------------------------------- -------------------------------------------

c.  Execute the head unit service:

    i.  Return back to the main screen

    ii. Click on the continue button as shown below.

> ![](media/image6.png)
>
> Fig 5.5 Android device simulator Activation button

7.  Configure the Android Client Project as follows:

    a.  Create an Android project for client application.

    b.  Copy *DataEventModel-1.0.0-SNAPSHOT.jar,
        > DataEventModel-1.0.0-SNAPSHOT.jar* and
        > *MessageBrokerSDK-1.0.0-SNAPSHOT.jar* from
        > ***\$ProjectWorkDirectory/ DataEventSDK /src/main/js*** to the
        > libs folder of the Android project as shown in the following
        > figure .

    c.  Download Jackson libraries from
        > [*http://jackson.codehaus.org/*](http://jackson.codehaus.org/)
        > to the libs folder of the Android project as shown in the
        > following figure

> ![](media/image7.png)
>
> Fig 5.6 Android project folder view.

a.  Edit AndroidManifest.xml and modify the manifest elements as
    > follows:

> *\<uses-permission
> android:name="android.permission.WRITE\_EXTERNAL\_STORAGE"/\>*
>
> *\<uses-permission
> android:name="android.permission.READ\_EXTERNAL\_STORAGE"/\>*
>
> *\<uses-permission android:name="android.permission.INTERNET"/\>*

6.  <span id="_Toc6" class="anchor"></span>Early Development Environment
    Setup

<!-- -->

1.  Log in to AT&T Drive studio then navigate to *Root/Ericsson/Ericsson
    > Drops/Drop 3 - 03.21.14. ***Make sure you chose the most recent
    > drop folder****

2.  Download the in vehicle development environment and simulators
    > *CXP9024426.zip* or the archive file listed in the most recent
    > release note.

> ![](media/image8.png)
>
> Fig 5.7 vehicle development environments and simulators package

1.  Extract the zip file (unzip) to a new folder e.g.
    > *C:/EricssonCloud/ASDP*. Note that this path will be referenced
    > later in this document as ****\$ProjectWorkDirectory****

2.  Install and configure the message broker e.g. SPAN server *( for
    > more information refer to Drive-HMI-Installation-Guide.decx)*

<!-- -->

5.  Test the development environment as follows:

    a.  Change the directory to C:\\EricssonCloud\\ASDP\\Bin

    b.  Double click on the application server icon as shown in fig 5.8

> ![](media/image9.png)
>
> Fig 5.8: File view of the application server.

a.  The application server will start and the following screen will
    > appear Fig 5.9.

> ![](media/image10.png)

Fig 5.9: the application server up running

a.  Start your text editor , example shown in fig 5.10

> ![](media/image11.png)
>
> Fig 5.10: text editor uprunning

Note: if you have any problem starting the application server, or an
error displayed in the application server screen refer to section 7.9
FAQ and trubleshooting

3.  <span id="_Toc7" class="anchor"></span>Designing a simple HU
    Application *(appropriate only for early development environment
    deployment strategy)*

*Please note that Section 5.3 and 5.4 follows the early development
environment deployment and packaging strategy, which is under
development in this stage of the project. As a result of the simplicity
of this strategy for the HU application development at Ericsson decided
to start with-it as an introduction to HU application development.*

Our goal is to design a simple HTML 5 based application that connect to
the application server and the pre-deployed simulators e.g. car
simulator. Then the application will display the current car speed and
automatically updating the speed value as a result of receiving a
notification from the car simulator. The following Fig 5.11 shows the
block diagram for the expected output and interaction between the
application and the car simulator.

![](media/image12.png)

Fig 5.11 block diagram for speed change simple app

In order to achive this task you need to have your application do the
following

1.  Establish the connectivity between the HTML 5 application and the
    > application server and simulators by importing ***drive.js***
    > libery (within the HTML app).

2.  Create a place holder (variable) in your application to display the
    > speed as shown in fig 5.11.

3.  Subscribe to the speed change event

4.  Create an event handler to update the speed variable.

    3.  <span id="_Toc8" class="anchor"></span>Developing simple HU
        application *(appropriate only for early development environment
        deployment strategy)*

To simplify the development of the first application copy ***drive.js***
to the current work directory.

Please notice the mapping between the above 4 design points and the
source code shown below. Also note the following:

1.  The display variable created in line 6 is updated within the event
    > handler line 12.

2.  The event handler function line 11, is registered in the
    > subscription to speed event line 9

![](media/image13.png)

Fig. 5.12 simple HU HTML5 application source code.

Add the java equivalent

After editing your HTML 5 application loaded it in your browser as shown
in fig 5.13 (the browser used here for loading and debugging application
is chrome.

![](media/image14.png)

Fig 5.13 the application in run time displaying change in speed

3.  <span id="_Toc9" class="anchor"></span>Developing simple HU
    application *(appropriate only for integrated development
    environment deployment strategy)*

The following Hello World app can be used with the integrated
development environment set up and needed to be executed on Android
tablet or simulator. For simplicity comments added to explain every line
of code.

![](media/image15.png)

Fig 5.14 Integrated development environment *Hello World* application

Debugging and testing.

In order to debug your HTML application, let’s create ab error by
deleting the ***drive.js*** library from the current work directory, the
application will display blank page. To debug the application:

1.  Click on the icon at top right corner of your browser
    > (![](media/image16.png) )

2.  From the menu chose tools -\> java script tools

> The console will show you an error “*Filed to load resource: net:
> error not found”*. As shown in fig 5.15

![](media/image17.png)

Fig 5.15. shows error in Java script debugging consoul.

For more information on how to debug HTML 5/ Javascript application in
crome refer to

[*https://developer.chrome.com/extensions/tut\_debugging*](https://developer.chrome.com/extensions/tut_debugging)

3.  <span id="_Toc10" class="anchor"></span>HU Application Packaging &
    Deploying

There are three options for packing and deployment proposed by the HU
SDK. These three options cover the three expected phases of development
of a HU application:

1.  Early development environment where the application is running
    > within a web browser connecting to the application server,
    > simulators and environment resources.

2.  Integrated development environment, where the application running on
    > Android tablet (or Head unit simulator) and connecting to an
    > external application server, simulators and environment resources.

3.  The demo environment, where the application and all the environment
    > resources and simulators are deployed together on Android tablet
    > (or HU simulator).

    1.  <span id="_Toc11" class="anchor"></span>Early development
        environment *(Under development)*

In the early stages of HU application development, developers are much
more interested in building functionality of their own application, test
it quickly then modify it based on the result. This kind of environment
is suitable for this stage of development, where the simulators are
deployed on the application server like tomcat and has all the
connectivity to ASDP, DEC (data event controller) and policy managers
are pre-configured and deployed. The server environment also contains
the message broker installed and configured where it acts as the central
connection between the application and the server side environment. The
message broker interacts with different components through the message
broker SDK. Refer to HU application developed in section 6.3 as an
example of this packaging environment.

When an HTML application subscribes to a service in the server side, the
subscription will be established through the local DEC SDK loaded by the
browser e.g. drive.js. The DEC SDK will generate a message through the
local message broker (internal part of the library). In this scenario
the message broker SDK sends the message to the message broker using
HTTP or web sockets. As soon as the message reaches the message broker
it decided the destination service, and deliver it through the message
broker SDK which interacts with the DEC which is connecting all
comports.

When there is a change occurs in any of the simulators as a result of an
internal or external event, the DEC SDK immediately notify all the
subscribers through a message created by the message broker SDK, and
place it in the message broker. The message broker will use the same
communication protocol to send the message to the client side message
broker SDK which will decode it and send it to the application to
process the information locally.

> Fig 5.16 Early devlopment environment.

1.  <span id="_Toc12" class="anchor"></span>Integrated development
    environment

When the GUI development reaches advanced stage, developers care more
about the aspect ratios of the displayed object and the exact layout of
the GUI components, in this stage the HTML 5 required to be deployed in
Android tablet e.g. head unit simulator. The flow will be the same as
the previous deployment the only difference is in the client side where
the application and the SDKs are deployed in the android tablet and
loaded with the application in the home screen via web viewer. This
deployment is also suitable for the native Android applications that
connect to the ASDP server side and simulators.

> ![](media/image19.png)

Fig. 5.17 Integrated Development environments.

In order to use the integrated development environment make sure the
following components are installed and correctly configured within your
Android tablet or head unit simulator:

1.  Span message broker simulator or SDK provided by Nfusion *(for more
    > information on how to download, install and configure span,
    > consult Nfusion documentation).*

2.  Include DECSDK binaries (Jar) into your application development
    > project.

3.  Download and install the DEC-Android package that encapsulates the
    > DEC-Android service to your Android tablet

Demo environment *(Under development)*

In the demo environment the server side and the client side are both
deployed on the android tablet. Where it is required to have a fast
response and better mobility as shown in fig 1.10

> ![](media/image20.png)

Fig 5.18 Demo environment.

1.  <span id="_Toc13" class="anchor"></span>Project Installation
    Instructions:

    1.  <span id="_Toc14" class="anchor"></span>Pre-Requisites:

-   Java Version: JDK 1.7 or higher

<!-- -->

-   Eclipse Version: Eclipse Kepler version

<!-- -->

-   HW/SW Requirements:

    1.  Windows/Ubuntu OS for running the DecSample Project

    2.  Android Device (mobile/tablet) for running the DECService
        > android application

    3.  nSpan server running on the Android device or on the PC

    <!-- -->

    1.  <span id="_Toc15" class="anchor"></span>Configurations:

1.  Set the following System Environment variables.

    a.  JAVA\_HOME - C:\\Java\\jdk1.7.0\_67\\bin

    b.  JRE\_HOME - C:\\Java\\jdk1.7.0\_67\\jre

    c.  SPAN\_SERVER\_PROP\_FILE\_DIR -
        > C:\\Projects\\CVC\\DecSampleProject\\conf

2.  In Eclipse goto Window-\>Preferences-\>Java-\>Installed JREs and add
    > the jdk 1.7, if not present already.

3.  To run the html files in browser using Eclipse, follow the below
    > steps.

    a.  Use the menus: Run...External Tools...External Tools
        > Configurations. You'll get a configuration dialog.

    b.  Click on New Launch Configuration and give your config a Name
        > (like "ViewInBrowser").

    c.  Enter the full path to your browser in the Location field.

    d.  Click the Variables button in the Arguments field; in the dialog
        > that pops up, look for the variable called
        > "selected\_resource\_loc". Choose it and dismiss the popup
        > dialog.

    e.  And now hit "Apply" and dismiss the main dialog.

    <!-- -->

    1.  <span id="_Toc16" class="anchor"></span>Loading the Project into
        Eclipse:

  ------------------------ --------------------------------------------------------------------------------------
  ![](media/image21.png)   DEC sample project, unzip in a separate folder and use it as a base for this section
  ------------------------ --------------------------------------------------------------------------------------

0.  

<!-- -->

1.  Right click on the Project Explorer and select Import.

2.  Select Existing Projects into Workspace under the General Tab.

3.  In the Select Root Directory - Browse to the path where you have
    > downloaded the DecSampleProject and click on Finish.

4.  Right click on the Project and select Properties-\>Java Build Path.
    > Under the Libraries tab, click on the Add External Jars button and
    > add the DataEventSDK-1.0.0-SNAPSHOT-release. jar present in the
    > libs folder.

5.  Select the Project and goto Projects tab and check if the “Build
    > Automatically” option is selected.

> This completes importing and building the project in Eclipse.

4.  <span id="_Toc17" class="anchor"></span>Steps to Run the Project:

<!-- -->

1.  Start the Span Server on your localhost. If the Span server is
    > started on a different machine than

set the ipaddress in the following files.

For Java test Clients - DecSampleProject\\conf\\spanserver.properties

For JS test Clients -
DecSampleProject\\src\\main\\js\\normal\\Properties.js

1.  Install the DECService.apk on the android device and start the
    > service. Refer to DECService installation document on further
    > details on this.

2.  **To Test Java clients**:

<!-- -->

a.  To run a java test client (for e.g.) NavigationTest.java, right
    > click on the file and select

Run As-\> Java Application.

a.  The test client sends the Subscription and the Set information to
    > the span server and listens for incoming messages from the span
    > server.

b.  The console view can be used to view the logs.

<!-- -->

1.  **To Test JavaScript clients Using Browser**:

    a.  Select the html client file (for e.g.) PolicyClient.html and
        > select the “ViewInBrowser”

> External Tool Configuration that was configured previously. This would
> run the html file on the browser that was selected in the
> configuration.

a.  The following would be displayed on a successful connection to the
    > span server.

![](media/image22.png)

5.  **To Test JavaScript clients Using WebView:**

<!-- -->

1.  <span id="_Toc18" class="anchor"></span>SDK developers guide

    1.  <span id="_Toc19" class="anchor"></span>Context initialization

Application must initialize the context with specific SDK e.g.
Navigation, SMS, ..etc before using that SDK functionalities. This
initialization informs DEC to notify the application of any changes made
to its data store space made by external applications or components.

![](media/image23.png)

> …
>
> ![](media/image24.png)

*Fig 6.1 Code sample shows how to initialize the context for Navigation
SDK*

1.  In order to interact with DEC you need to instantiate a new instance
    > of Drive class and use this object for further interaction with
    > DEC as follows :

> ![](media/image25.png)

1.  To initalize an SDK use call the init method in the object created
    > at 1 with the proper SDK name as a parameter. The following line
    > of code will initalize the Navigation SDK.

> ![](media/image26.png)

1.  You can initalize more than one sdk for one call, for example, you
    > can initalize SMS, Vehicle information and Media SDKs in one call
    > as follows:

> ![](media/image27.png)
>
> Fig 6.2 initialize multiple DEC SDKs

-   Create array of string contains the SDKs names you like to use in
    > your application

> ![](media/image28.png)

-   Pass the array name to the init method

> ![](media/image29.png)

Vehicle Information

1.  <span id="_Toc20" class="anchor"></span>Navigation:

A Head Unit application can interact with the navigation app using DEC
SDK by altering (adding/updating/removing) DEC data elements associated
with the navigation metadata name space in a form of message. The
following block diagram shows the interaction between the HMI or apps
and the navigation app.

![](media/image30.png)

> Fig1: Navigation interaction with DEC

The following sequence diagram shows the interaction among the car
simulator, a HU app and the navigation application through DEC.

![](media/image31.png)

FIG.2: Interaction with navigation app.

-   The navigation app subscribes (either using init or subscribe
    > methods) to the DEC navigation data element (navigation name
    > space) and specifies the name of the callback method *(the method
    > which will be executed by DEC when the navigation data element is
    > modified)*.

<!-- -->

-   When the car position changes (either by the car simulator or
    > internally by HU platform), the apps (including navigation) will
    > be notified by DEC via the callback method. The navigation app
    > would then update the map to show the current car position.

<!-- -->

-   Another example of integration with navigation app would be to set
    > some points of interest pins on the map. This can be done using
    > DEC navigation SDK adding POI data to the drive.navigation.pois
    > data element.

> The following sections show some examples that cover a subset of of
> DEC’s data elements that are associated with the navigation namespace.
> These data elements are position, destination, session, points of
> interests, waypoints and track, **the rest of the data elements will
> be described in more details with samples in the following sprints.**

-   **Position data element:** holds the information for a position on
    > the map, like latitude, longitude, velocity of the vehicle in KMs
    > and GPS position precision.

<!-- -->

-   **Destination data element:** shows the destination information like
    > destination name, its ID, full address (street, city, region,
    > country, and postal code), latitude, longitude, the icon
    > associated with the destination.

<!-- -->

-   **Session data element:** it holds information about the current
    > trip, like time to destination, estimated arrival time, distance
    > to destination, current location and speed limit in KM.

<!-- -->

-   **Point if interest data element:** holds the street address of the
    > POI as well as the latitude and longitude GPS coordinates, the
    > icon associated with it, and its category.

<!-- -->

-   **WayPoints data element:** a way point is a significant location in
    > the current route it has type like intersection, free text field
    > for description, the icon associated with it, its name latitude
    > and longitude.

<!-- -->

-   **Track data element:** is an aggregation of way points that can be
    > maintained and modified initially by tracking application. It
    > holds data like the name of the track and array of way points.

***\
***

1.  <span id="_Toc21" class="anchor"></span>Get current location:

> The following example can be used to identify the current vehicle GPS
> location.
>
> The client application needs to subscribe to the changes in current
> location (position) data element. As soon as the current position
> changes, a notification will be sent from the DEC to the callback
> function implemented in the *OnPositionChange* class.

![](media/image32.png)

Fig 3: Get current location sequence diagram

1.  The client application subscribes to the *position* DEC data
    > element.

2.  When the car position changes (due to movement or the car simulator
    > changed the position), the new *position* will be pushed to DEC.

3.  As a result of *position* data element change, DEC will invoke the
    > callback method for all applications that subscribed to that data
    > element passing the new position to the corresponding client
    > application.

![](media/image33.png)

![](media/image34.png)

  ------------------------ ------------------------
  ***Source code***
  ![](media/image35.png)
  ------------------------ ------------------------

1.  <span id="_Toc22" class="anchor"></span>Set destination

> The following example demonstrates how to set a destination on the map
> e.g.: POI, favorite, address, etc. The navigation application
> subscribes to the navigation data element. Whenever the client
> application pushes a new destination to DEC, a notification will be
> sent from the DEC to the Navigation application (via callback
> function) that will update the map accordingly.
>
> ![](media/image37.png)

Fig 4: Set Destination sequence diagram

1.  The Navigation application subscribes to the navigation data element
    > in DEC.

2.  The client app sets a new destination by calling
    > drive.navigation.set method.

3.  As a result of destination change, DEC updates the destination
    > object within the navigation data element then invokes the
    > callback method for all applications that subscribed to that data
    > element.

4.  Navigation app shows the new destination on the map.

*The following code illustrate how to set a new destination*

![](media/image38.png)

  ------------------------
  ***Source code***
  ![](media/image39.png)
  ------------------------

1.  <span id="_Toc23" class="anchor"></span>Get trip information

> The following example illustrates some trip information like time to
> destination, current speed limit and destination information as well.
>
> ![](media/image40.png)

Fig 5: Get trip information sequence diagram

1.  Navigation app subscribes to navigation namespace.

2.  The client application updates the DEC information by calling
    > *drive.navigation.set*.

3.  As a result of navigation object change, DEC invokes the callback
    > method for all applications that subscribed to that data element
    > passing the current navigation session data.

![](media/image41.png)

![](media/image42.png)

  ------------------------
  ***Source code***
  ![](media/image43.png)
  ------------------------

*\
*

1.  <span id="_Toc24" class="anchor"></span>Show POIs on the map

> In this example we are going to explore the following:

1.  Create and populate a new Point of Interest (POI) for Toronto
    > Pearson international airport

2.  Post the new POI to DEC.

3.  Introduce Resolve and Reject callback methods.

> ![](media/image44.png)
>
> Fig 6: shows Person Airport over the navigation map.
>
> ![](media/image45.png)

Fig 7: show POI on map sequence diagram

1.  Navigation app subscribes to the *navigation* data element.

2.  When a client application wants to show a new POI on the map, it
    > simply passes the POI information to the DEC by calling set
    > method. If the set method call is successful, the resolve callback
    > will be called otherwise reject callback method will be called.

3.  As a result of POI changes, DEC updates the POI object within the
    > navigation data element then invokes the callback method for all
    > applications that subscribed to drive.navigation.pois passing the
    > new POI(s).

4.  As soon as the Navigation client receives the new POI data element
    > from the DEC, it will apply the proper internal business logic and
    > show the POI overlay on the map.

![](media/image46.png)

  ------------------------ ------------------------
  ![](media/image47.png)   ![](media/image48.png)
  ------------------------ ------------------------

  ------------------------ ------------------------ ------------------------
  ***Source code***
  ![](media/image49.png)
  ------------------------ ------------------------ ------------------------

1.  <span id="_Toc25" class="anchor"></span>Show Tracking information on
    the map

The tracking applications collects locations and sends them as an array
of POIs to DEC, then DEC will notify all subscribed clients (navigation
application for instance). Finally, all notified clients will apply the
proper business logic to reflect the tracing information. In case of
navigation application it will display the tracking points on the map as
shown below.

![](media/image52.png)

*Fig. 8 : shows the tracing points over the navigation map.*

![](media/image53.png)

*Fig. 9:* Show tracking information on the map sequence diagram

1.  The Navigation application subscribes to the *navigation* data
    > element.

2.  If an application wants to show a POI on the map along with all
    > corresponding tracking information (past locations), the app can
    > simply pass the collected locations in a Poi object to the DEC.

3.  As a result of POIs change, DEC updates the POIs object within the
    > navigation data element then invokes the callback method for all
    > applications that subscribed to that data element and send the new
    > POI to the corresponding client applications (Navigation in this
    > example).

4.  As soon as the Navigation client receives the new POI data element
    > from the DEC it will apply the proper internal business logic and
    > show the POI with corresponding tracking points over the map
    > (breadcrumb).

![](media/image54.png)

  ------------------------
  *Source code*
  ![](media/image55.png)
  ------------------------

*\
*

1.  <span id="_Toc26" class="anchor"></span>Zoom to POI type:

This example shows how to zoom the current map to show all POIs of a
given type. The parking POIs will be used in this example.

![](media/image56.png)

*Fig 10: shows Parking POIs on the map.*

![](media/image57.png)

*Fig. 11:* Zoom to POI type sequence diagram

1.  The Navigation application subscribes to the *navigation* data
    > element and its associated data elements in DEC.

2.  For instance, a client app searching for “parking around me “ would
    > publish the search result (array of parking data) to the DEC
    > calling drive.navigation.pois.set method.

3.  Whenever DEC receives the request, it will notify the navigation app
    > passing the parking data which will simply display them on the
    > map.

4.  If the client app wants to make the map zoom to a level where all
    > parking locations are visible, the client app can simply set the
    > setZoomToPoiType data element as depicted below.

![](media/image58.png)

  ------------------------
  *Source code*
  ![](media/image59.png)
  ------------------------

1.  <span id="_Toc27" class="anchor"></span>Zoom to specific POI:

This example is similar to the previous one (zoom to a POI type) with
the exception of zooming to a specific POI instead of POI type.

![](media/image60.png)

  ------------------------
  *Source code*
  ![](media/image61.png)
  ------------------------

1.  <span id="_Toc28" class="anchor"></span>*Follow POI *

> If a client app wants to make the map follow a given moving POI (like
> a friend’s position), the app can simply calls
> drive.navigation.map.set method passing the POI ID.
>
> The client app can switch back to vehicle map view (follow vehicle’s
> position) by calling the same method and passing “\<me\>” as value.
>
> ![](media/image62.png)

1.  <span id="_Toc29" class="anchor"></span>Identity Policy TBD

2.  <span id="_Toc30" class="anchor"></span>Application and System
    Settings TBD

3.  <span id="_Toc31" class="anchor"></span>Speech (Virtual Assistant)
    TBD

4.  <span id="_Toc32" class="anchor"></span>Notification TBD

5.  <span id="_Toc33" class="anchor"></span>Media TBD

6.  <span id="_Toc34" class="anchor"></span>Application manager TBD

7.  <span id="_Toc35" class="anchor"></span>SMS TBD

8.  <span id="_Toc36" class="anchor"></span>Search service TBD

9.  <span id="_Toc37" class="anchor"></span>Error object format TBD

<!-- -->

1.  <span id="_Toc38" class="anchor"></span>Architecture

    1.  <span id="_Toc39" class="anchor"></span>Application Development
        Environments

There are many options for applications to provide connected car
services using the ASDP platform. Applications can be hosted in ASDP or
external servers provided by partners.

![](media/image63.png)

Figure 1: Generic Service Integration view

Following sections enumerate and briefly describe various options for
applications to integrate into ASDP and provide services that are
accessed in-vehicle or remotely.

1.  <span id="_Toc40" class="anchor"></span>Native Applications on the
    Head Unit

Native applications reside on the vehicle’s head unit and are executed
locally in the head unit’s application environment. To access ASDP
services native applications securely connect to a counterpart Back-End
application which is hosted in the ASDP hosted application environment
in the cloud. Back-END applications execute application logic on the
server side and can access ASDP functionality or external services and
content provided by partners via platform APIs.

![](media/image64.png)

Figure 2: Service by Native Application in the Vehicle Head Unit

1.  <span id="_Toc41" class="anchor"></span>Web Applications Accessed
    through the Head Unit Web Viewer

Web applications, typically HTML5, are accessed via the vehicle’s head
unit web browser. In this case, the service is provided by a tandem of a
Front-End application that includes the HTML5 and user experience logic
and a Back-End application providing the same functions described in the
previous section.

The Front-End application can make use of the ASDP User Experience and
User Interaction component which adapts the user experience according to
the head unit device type, user profile, and the context where the
application is accessed. A Back-End application can server both a native
or hosted Front-End application.

Both Front-End and Back-End applications can either be hosted in the
ASDP Application Execution Environment or they can be hosted on a
partner’s external server. If applications are hosted on an external
server, application traffic is passed through (proxy) the ASDP.

![](media/image65.png)

Figure 2:

Figure 3: Service by Web Application Hosted in the ASDP

![](media/image66.png)

Figure 4: Service by Web Application Hosted on External Server

1.  <span id="_Toc42" class="anchor"></span>Web Applications Accessed
    Through a User Device

These applications are accessed via the user’s personal devices such as
smart phones, tablets, or computers and are hosted in the ASDP Execution
Environment. Depending on the nature of the service they provide, they
require either a dedicated Front-End application or the device is
allowed to use an existing Front-End application. All ASDP functionality
available to in-car application is also made available to these
applications thru the use of Back-End applications.

![](media/image67.png)

Figure 5: Service by Web Applications Accessed on a User Device

1.  <span id="_Toc43" class="anchor"></span>Telematics Applications

These applications are accessed by OEM, Dealers, telematics service
provider partners, or user’s devices. Applications can be hosted in ASDP
Execution Environment or on an external partner’s server.

ASDP device adapters are developed to comply to TCU specifications and
facilitate communication between the TCU and the cloud. Similarly, ASDP
service adapters handle different data format and interface
specifications required by applications who consume telematics data.

Access to data is governed by the Service Exposure component of the
platform to ensure access to data is granted based on proper access
control rules according to established business management agreements.

![](media/image68.png)

Figure 6: Telematics Services

1.  <span id="_Toc44" class="anchor"></span>HWAP packaging and
    configuration

(TBD)

1.  <span id="_Toc45" class="anchor"></span>Setting GUI and user
    preferences

(TBD)

1.  <span id="_Toc46" class="anchor"></span>Permission manifest (consent
    page) and resource permission

(TBD)

1.  <span id="_Toc47" class="anchor"></span>Policy management

(TBD)

1.  <span id="_Toc48" class="anchor"></span>Notification

(TBD)

1.  <span id="_Toc49" class="anchor"></span>Virtual assistance

(TBD)

1.  <span id="_Toc50" class="anchor"></span>HU interaction

The ASDP HTML 5 SDK is an abstraction of HU device capabilities (voice,
speakers, etc). HWAP HTML 5 applications use this SDK to communication
with native HU platform without have a direct dependency. Instead of
developing applications targeted for a specific HU provider, only HTML 5
SDK implementation is changed (device dependent).

1.  <span id="_Toc51" class="anchor"></span>Help: FAQ, troubleshooting
    guide.

(TBD)

1.  <span id="_Toc52" class="anchor"></span>Authentication, Security and
    Identity

(TBD)

1.  <span id="_Toc53" class="anchor"></span>ASDP Simulators and how to
    use them

(TBD)

1.  <span id="_Toc54" class="anchor"></span>Introduction to Sandbox

(TBD)

1.  <span id="_Toc55" class="anchor"></span>Class Model Generation

How to create client data name space –class model

1.  <span id="_Toc56" class="anchor"></span>APIs

[Link to in-vehicle SDK document]
