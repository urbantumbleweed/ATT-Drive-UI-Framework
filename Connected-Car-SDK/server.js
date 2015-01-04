var Hapi = require('hapi');

var M2X = require("m2x");

var m2xClient = new M2X("a6f95c2aac44003a7c2f1141899bf638");
var DEVICE = '4871ee44493f8025ac37f5c2db8800c4';

var rest = require('rest');
var when = require('when');

var mime = require('rest/interceptor/mime');
var entity = require('rest/interceptor/entity');

var AUTH_URL = 'https://systest.digitallife.att.com:443/penguin/api/authtokens?userId=553474456&password=NO-PASSWD&domain=DL&appKey=DE_23CEF339470E7699_1';
var authHeaders = {Appkey: 'DE_23CEF339470E7699_1'};


var restClient = rest.wrap(mime).wrap(entity);
restClient({path:AUTH_URL, method: 'POST'}).then(function(resp){
    console.log('logged', resp.content);
    authHeaders.authToken = resp.content.authToken;
    authHeaders.requestToken = resp.content.requestToken;
});

// Create a server with a host and port
var server = new Hapi.Server();
server.connection({
    port: 3000
});

// Add the route
server.route({
    method: 'GET',
    path:'/on',
    handler: function (request, reply) {

        restClient(
            {
                path: 'https://systest.digitallife.att.com/penguin/api/485317BF0E4A4E9CA3A5704AD417DAE3/devices/PE00000002/switch',
                headers: authHeaders,
                entity: 'on'
            })
        .then(reply, reply);
    }
});

server.route({
    method: 'GET',
    path: '/{param*}',
    handler: {
        directory: {
            path: 'examples'
        }
    }
});

server.route({
    method: 'GET',
    path: '/position',
    handler: function (request, reply) {
        m2xClient.devices.streamValues(DEVICE, 'position', {limit: 10}, function(mres) {
            console.log('m2x stream', mres);
            if (mres.isError()) {

                console.log('m2x stream err', mres.error());
                reply(500);
            }
            else{
                var retVal = mres.json;
                retVal.values.forEach(function(val){
                    val.value = JSON.parse(val.value);
                });
                reply(mres.json);
            }
        });
    }
});

server.route({
    method: 'GET',
    path: '/ac',
    handler: function (request, reply) {
        console.log('ac');
        reply('ok');
    }
});


server.route({
    method: 'GET',
    path: '/off',
    handler: function (request, reply) {

        restClient(
            {
                path: 'https://systest.digitallife.att.com/penguin/api/485317BF0E4A4E9CA3A5704AD417DAE3/devices/PE00000002/switch',
                headers: authHeaders,
                entity: 'off'
            })
        .then(reply, reply);
    }
});




server.route({
    method: 'GET',
    path: '/unlock',
    handler: function (request, reply) {
        console.log('unlock');
        reply('ok');
    }
});

server.route({
    method: 'POST',
    path: '/log',
    handler: function (request, reply) {

       // console.log('/log', typeof request.payload, request.payload);

       var at = new Date().toISOString();
        var values = {
            position: [{value: JSON.stringify(request.query), timestamp: at}]
        };

       // Write the different values into AT&T M2X
        m2xClient.devices.postMultiple(DEVICE, values, function(mres) {
            console.log('m2x log', mres);
            if (mres.isError()) {

                console.log('m2xerr', mres.error());
            }
        });

       reply('ok');
    }
});

// Start the server
server.start();
