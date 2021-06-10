let temperature = document.getElementById('temp')
let humidity = document.getElementById('humidity')
let cityLabel = document.getElementById('cityLabel')
let input = document.getElementById('input')
let description = document.getElementById('description')
let img = document.getElementById('img')
let windspeed = document.getElementById('windspeed')
let winddirection = document.getElementById('winddirection')


let btn = document.getElementById('btn') 

let btnEvent = btn.addEventListener('click', getData)



function getData() {
    let city = input.value 
    let url = "http://api.weatherstack.com/current?access_key=579654ca28657a388cb5f65f27893c56&units=f&query=" + city
    fetch(url)
    .then((res) => res.json()).then((data) => {
    console.log((data))
    
    img.setAttribute('src', data.current.weather_icons[0]); 
    description.innerHTML = data.current.weather_descriptions
    temperature.innerHTML = 'Temperature: ' + data.current.temperature + ' °F'; 
    humidity.innerHTML = 'Humidity: ' + data.current.humidity + '%'
    cityLabel.innerHTML = data.location.name + ', ' + data.location.region + ' - ' + data.location.country
    windspeed.innerHTML = 'Wind Speed: ' + data.current.wind_speed + ' mph'
    winddirection.innerHTML = 'Wind Direction: ' + data.current.wind_dir

   
    

    

    })
}