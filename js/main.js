// Add all your JS here
var btn = document.querySelector('.btn')
var body = document.querySelector('body')
var input = document.querySelector('input')
var output = document.querySelector('.output')
var tops = document.querySelectorAll('.output .top span')
var temp = document.querySelector('.temp')
var aside = document.querySelectorAll('.aside span')
async function getData(city){
    const promise = await fetch(`https://api.weatherapi.com/v1/current.json?key=c4b469446da64a62a7455412241903&q=${city}&aqi=yes`);
    return await promise.json();
}
btn.addEventListener('pointerdown', async ()=>{
  btn.style.cssText = 'border:2px inset gray;'
  let city = input.value
  let result = await getData(city)
  tops[0].innerText = `Humidity:${result.current.humidity}%`
  tops[1].innerHTML =`${result.location.name}, ${result.location.country}`
  temp.innerText = `${result.current.temp_c}°C`
  aside[0].innerText = `Feels-like:${result.current.feelslike_c}°C`
  aside[1].innerText = `Dewpoint:${result.current.dewpoint_c}°C`
  aside[2].innerText = `Wind-speed: ${result.current.wind_kph}kmph`
  aside[3].innerText = `wind-direction:${result.current.wind_degree}°`
  if(result.current.is_day==0){
    body.style.background = 'linear-gradient(45deg,black,purple,black)'
  }
  else{
     body.style.background = 'linear-gradient(45deg,black,purple,white)'
  }
})
btn.addEventListener('pointerup',()=>{
  btn.style.cssText = 'border:2px outset gray;'
})
