var Pusher = require('pusher-client');

var pusher = new Pusher('c0eef4118084f8164bec65e6253bf195', {
        encrypted: true,
        wsPort: 443,
        wssPort: 443,
        host: 'notifier.bitskins.com'
    });

pusher.connection.bind('connected', function() {
        // connected to realtime updates 
        console.log(" -- connected to websocket");
    });

pusher.connection.bind('disconnected', function() {
        // not connected to realtime updates
        console.log(" -- disconnected from websocket");
    });

var events_channel = pusher.subscribe('inventory_changes'); // use the relevant channel, see docs below

events_channel.bind('listed', function(data) {
        // use the relevant event type, see docs below
        // print out any data received for the given event type
        console.log(" -- got data: " + JSON.stringify(data));
    });