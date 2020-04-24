const request = require('request');

const geoCode = function(address, callback){
    const url1 = 'https://api.mapbox.com/geocoding/v5/mapbox.places/'+encodeURIComponent(address)+'.json?access_token=pk.eyJ1IjoiZGFtYW4wMSIsImEiOiJjazk3NTh0amUwZXloM2d0Y202NmNibWl4In0.pT4wr5pcalSWs2oFYPUA3A';
    request({url: url1, json: true}, (error, res) => {
        if(error){
            callback('Unable to connect to location service', undefined)
        }else if(res.body.features.length === 0){
            callback('Unable to find location', undefined)
        }else{
            const lat = res.body.features[0].center[1];
            const lag = res.body.features[0].center[0];
            const place_name = res.body.features[0].place_name;
             
        
            callback(undefined, {
                latitude: lat,
                longitude: lag,
                location:  place_name
            })
        }
    })
}

module.exports = geoCode 