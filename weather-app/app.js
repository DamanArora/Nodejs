const request = require('request');
const geoCode = require('./utils/geoCode')
const forecast = require('./utils/forecast')

// taking from command line
const adrs = process.argv[2];

if(adrs){
  geoCode(adrs, (error, res) => {
    if(error){
      return console.log(error);
    }
    forecast(res.latitude, res.longitude, (error, data) => {
      if(error){
        return console.log(error);
      }
      console.log(res.location);
      console.log(data)
    })
  })
}else{
  console.log("Please provide the address");
}
