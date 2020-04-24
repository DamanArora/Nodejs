const request = require('request');

const forecast = function(latitude, longitude, callback){
    const url = 'http://api.weatherstack.com/current?access_key=ad816a49638f732e6764b191a4962a85&query='+latitude+','+longitude+'&units=m'
  
    request({url: url, json:true}, (error, res) => {
         if(error){
              callback('Unable to connect to wreather service', undefined)
          }else if(res.body.error){
              callback('Unable to find location', undefined)
          }
        else{
          const data = res.body.current.weather_descriptions[0]+". It is currently "+res.body.current.temperature+" degrees out. It feels like "+res.body.current.feelslike
              callback(undefined, data)    
        }    
    })
}

module.exports = forecast