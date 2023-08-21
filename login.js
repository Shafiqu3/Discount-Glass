

const button = document.querySelector(" .right  a ");

console.log(button);
const popup = document.querySelector(".login");
console.log(button)

button.addEventListener("click", ()=>{
  if (popup.style.display === "none") {
    popup.style.display = "block"
  } else {
    popup.style.display = "none";
  }
})