/**
 * Created by asiebert on 15.01.17.
 */

module.exports = function( prefix, data ) {

    var Promise = require( 'bluebird' );

    return new Promise( function( resolve, reject ) {
        var suffix = moment().format( 'X' );
        var file = prefix + "_" + suffix + ".json"; //'./kontoauszug.json';

        console.log( "> dump json to file: " + file );

        var jsonfile = require('jsonfile');

        jsonfile.writeFile(file, data, function (err) {
            if( err ) {
                console.error(err);
                reject( err );
                return;
            }

            resolve( file );
        });
    });

};