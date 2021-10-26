const axios = require('axios')
const OAuth = require('oauth');


const header = {
    "X-Yahoo-App-Id": "igBgZZKL"
};
const request = new OAuth.OAuth(
    null,
    null,
    'dj0yJmk9UnM5V2JJQnYwVzBQJmQ9WVdrOWFXZENaMXBhUzB3bWNHbzlNQT09JnM9Y29uc3VtZXJzZWNyZXQmc3Y9MCZ4PTZh',
    'a69ee108e571b883b58ba6e6f92f0c12b500a975',
    '1.0',
    null,
    'HMAC-SHA1',
    null,
    header
);





const weather = async (city) => {
    const urlMetaWeather = `https://weather-ydn-yql.media.yahoo.com/forecastrss?location=${encodeURI(city)},ca&format=json`
    const data = await request.get(urlMetaWeather)
    console.log(data)
    
    const urlHgBrasil = `https://api.hgbrasil.com/weather?woeid=${data.woeid}`
    const {data:{results}} = await axios(urlHgBrasil,)

    return results
}


//const ACCESS_KEY_MAP_BOX = "pk.eyJ1IjoianVhbmNhbGhlaXJvcyIsImEiOiJja3M2dWpka20wNXE1MnVwY3ZjNjBpcGt6In0._dfQgaS0OcMGcurByL97PQ"
// const urlMapBox = `https://api.mapbox.com/geocoding/v5/mapbox.places/${command}.json?access_token=${ACCESS_KEY_MAP_BOX}`
// request.get({url:urlMapBox, json: "true"}, (err,res) => {
//     console.log(" ===>>>", res)
// })



module.exports = weather