const axios = require('axios')

const weather = async (city) => {
    const urlMetaWeather = `https://weather-ydn-yql.media.yahoo.com/forecastrss?location=${encodeURI(city)},ca&format=json`
    const data = await request.get(urlMetaWeather)
    console.log(data)
    
    const urlHgBrasil = `https://api.hgbrasil.com/weather?woeid=${data.woeid}`
    const {data:{results}} = await axios(urlHgBrasil,)

    return results
}


module.exports = weather