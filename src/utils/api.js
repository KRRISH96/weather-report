const API_KEY = 'b714ec74bbab5650795063cb0fdf5fbe'
const baseUrl = 'https://api.openweathermap.org/data/2.5/'

function routeParams (queryString) {
  return Object.keys(queryString).map((key) => {
    return key+'='+encodeURIComponent(queryString[key])
  }).join('&')
}

function mainUrl (type,queryString) {
  return baseUrl+type+'?'+routeParams(queryString)
}

function getQueryString (location) {
  return {
    q: location,
    type: 'accurate',
    APPID: API_KEY,
    cnt: 7
  }
}

export async function getForecast (location) {
  const queryString = getQueryString(location)
  const url = mainUrl('forecast/daily', queryString)
  const forecast = await fetch(url)
  return forecast.json()
}
