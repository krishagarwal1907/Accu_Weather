const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "4386b2be22msh06db047a11f741fp1dddecjsn820f9fddbaad",
    "X-RapidAPI-Host": "weather-by-api-ninjas.p.rapidapi.com",
  },
};


// const getWeather3=(city)=>{
//     cityName.innerHTML = city
// fetch(
//   "https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Boston")
//   .then((response) => response.json())
//   .then((response) => {
//     console.log(response)
//     cloud_pct3.innerHTML = response.cloud_pct
//     temp3.innerHTML = response.temp
//     // temp2.innerHTML = response.temp
//     feels_like3.innerHTML = response.feels_like
//     humidity3.innerHTML = response.humidity
//     // humidity2.innerHTML = response.humidity
//     max_temp3.innerHTML = response.max_temp
//     min_temp3.innerHTML = response.min_temp
//     sunrise3.innerHTML = response.sunrise
//     sunset3.innerHTML = response.sunset
//     wind_speed3.innerHTML = response.wind_speed
//     wind_degrees3.innerHTML = response.wind_degrees
//   })
//   .catch((err) => console.error(err));
// }

const getWeather=(city)=>{
    cityName.innerHTML = city
fetch(
  "https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city="+city,options)
  .then((response) => response.json())
  .then((response) => {
    console.log(response)
    cloud_pct.innerHTML = response.cloud_pct
    temp.innerHTML = response.temp
    temp2.innerHTML = response.temp
    feels_like.innerHTML = response.feels_like
    humidity.innerHTML = response.humidity
    humidity2.innerHTML = response.humidity
    max_temp.innerHTML = response.max_temp
    min_temp.innerHTML = response.min_temp
    sunrise.innerHTML = response.sunrise
    sunset.innerHTML = response.sunset
    wind_speed2.innerHTML = response.wind_speed
    wind_speed.innerHTML = response.wind_speed
  })
  .catch((err) => console.error(err));
}

  submit.addEventListener("click",(e)=>{
    e.preventDefault()
    getWeather(city.value)
  })

  getWeather("Delhi")
//   getWeather3("Boston")

wea.addEventListener("click",(e)=>{
    e.preventDefault()
    getWeather("Delhi")
})
weat.addEventListener("click",(e)=>{
    e.preventDefault()
    getWeather("Kerala")
})
weath.addEventListener("click",(e)=>{
    e.preventDefault()
    getWeather("Bangalore")
})
weathe.addEventListener("click",(e)=>{
    e.preventDefault()
    getWeather("Mumbai")
})

