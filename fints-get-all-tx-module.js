/**
 * Created by asiebert on 13.01.17.
 */
module.exports = function( client ) {

    var Promise = require( 'bluebird' );

    return new Promise( function( resolve, reject ) {
        client.MsgGetKontoUmsaetze(
            client.konten[0].sepa_data,
            null,
            null,
            function(error, rMsg, data){
                if(error){
                    console.log("Fehler beim laden der Umsätze: "+error );
                    reject(error);
                    return;
                }

                console.log( "Kontoauszüge geladen." );

                var jsonfile = require('jsonfile')
                var file = './kontoauszug.json';

                jsonfile.writeFile(file, data, function (err) {
                    console.error(err);
                });

                resolve(client);
            });
    });
};