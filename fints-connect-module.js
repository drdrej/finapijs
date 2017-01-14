/**
 * Created by asiebert on 13.01.17.
 */
module.exports = function( client ) {
    var Promise = require( 'bluebird' );

    return new Promise(
        function( resolve, reject ) {

            client.EstablishConnection(function(error){
                if(error){
                    console.log("Fehler: "+error);
                    reject(error);
                }else{
                    console.log("Verbindung erfolgreich aufgebaut.");
                    resolve(client);
                }
            });
        });
};