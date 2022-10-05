const toDoForm = document.querySelector("#todo-form")
const toDoInput = document.querySelector("#todo-form input")
const toDoList = document.querySelector("#todo-list")

let toDos = []

const TODOS_KEY = 'todos'

function saveToDos() {
  localStorage.setItem(TODOS_KEY, JSON.stringify(toDos))
}

function checkToDo(event) {
  // const li = event.target.parentElement
  // li.classList.toggle('darker')
  const span = event.target.nextSibling
  span.classList.toggle('strike-through') //새로고침하면 취소선 사라짐...
}

//console.dir(event)해보면 click event 객체에 대한 정보를 알 수 있다.
function deleteToDo(event) {
  const li = event.target.parentElement
  toDos = toDos.filter((toDo) => toDo.id !== parseInt(li.id)) //parseInt없이 !==를 !=로 해도 됨
  li.remove()
  saveToDos()
}

function paintToDo(newToDoObj) {
  const li = document.createElement("li")
  li.id = newToDoObj.id

  const checkBtn = document.createElement('button')
  li.appendChild(checkBtn)
  checkBtn.innerText = "✓"
  checkBtn.addEventListener('click', checkToDo)

  // const listdiv = document.createElement('div')
  // li.appendChild(listdiv)

  const span = document.createElement('span')
  li.appendChild(span)
  span.innerText = newToDoObj.text

  const button = document.createElement('button')
  button.innerText = "X"
  button.addEventListener('click', deleteToDo)

  li.appendChild(button)
  toDoList.appendChild(li)
}

function handleToDoSubmit(event) {
  event.preventDefault()
  const newToDo = toDoInput.value
  toDoInput.value = ""
  const newToDoObj = {
    text: newToDo,
    id: Date.now()
  }
  toDos.push(newToDoObj)
  paintToDo(newToDoObj)
  saveToDos()
}

toDoForm.addEventListener("submit", handleToDoSubmit)

const savedToDos = localStorage.getItem(TODOS_KEY)

if (savedToDos) {
  const parsedToDos = JSON.parse(savedToDos) //string을 array로 반환함 (이 경우에는 array)
  toDos = parsedToDos
  parsedToDos.forEach(paintToDo)
}

const username = localStorage.getItem('username')
if (username) {
  toDoForm.classList.remove('hidden')
  toDoList.classList.remove('hidden')
}