const API_KEY = '78fea29ca2db37e2328d01a758027ea3'

function onGeoSuccess(position) {
  const lat = position.coords.latitude
  const lon = position.coords.longitude
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`

  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      const city = document.querySelector('#weather span:first-child')
      const weather = document.querySelector('#weather span:last-child')
      city.innerText = data.name
      weather.innerText = data.weather[0].main
    })
}


function onGeoError() {
  alert('error')
}

navigator.geolocation.getCurrentPosition(onGeoSuccess, onGeoError)