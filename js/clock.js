const clock = document.querySelector('h2#clock')

function getClock() {
  const date = new Date()
  const hours = String(date.getHours()).padStart(2, "0")
  const minutes = String(date.getMinutes()).padStart(2, "0")
  const seconds = String(date.getSeconds()).padStart(2, "0")
  clock.innerText = `${hours}:${minutes}:${seconds}`
}

getClock() //브라우저 실행되자마자 바로 현재시각 표시하기
setInterval(getClock, 1000) //1초 뒤에 인터벌 시작