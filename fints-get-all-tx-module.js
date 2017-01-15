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

                var dump = require( "./json-dump-module" );
                dump( "kontoauszug", data )
                    .then( function( path ) {
                        console.log( "> saved kontostand.");
                        resolve( data );
                    })
                    .catch( function() {
                        console.log( "[!] Kann den Response nicht speichern.")
                    });

            });
    });
};