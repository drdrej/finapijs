
module.exports = function( config ) {
    var Promise = require( "bluebird" );

    return new Promise( function( resolve, reject ) {
        var FinTSClient = require("open-fin-ts-js-client");

        var id = config.id;
        var legId = config.userId;
        var pin = config.pin;
        var bankenliste = config.banken;

        var client = new FinTSClient(id, legId, pin, bankenliste);

        var connect = require('./fints-connect-module');

        connect(client).then(function (client) {
            console.log("> FINTS connected." );
            resolve(client);
        }).catch(function ( err ) {
            console.log("! FINTS not connected." );
            reject(err);
        });
    });
};

