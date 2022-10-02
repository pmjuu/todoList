const resetBtn = document.querySelector("#reset");
resetBtn.addEventListener("click", resetUserInfo);
function resetUserInfo() {
  localStorage.clear();
  location.reload();
}