/**
 * Created by asiebert on 14.01.17.
 */
module.exports = function( client ) {
    var Promise = require( "bluebird" );
    return new Promise( function( resolv, reject ) {

        client.MsgEndDialog(function(error,recvMsg){

            if( error ) {
                console.log( "! couldnt cancel dialog. error = " + error );
                reject(error);

                return;
            }

            client.closeSecure();
            console.log("> Dialog canceled successful.");
        });
    });
};