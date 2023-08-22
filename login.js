
const signInBtn = document.querySelector(" .right  a ");
const signUpBtn = document.querySelector("#signUp");
const popup = document.querySelector(".login");
const popupsignup = document.querySelector(".popupsignup");

console.log(popupsignup)

signInBtn.addEventListener("click", ()=>{
  if (popup.style.display === "none") {
    popup.style.display = "block"
  } else {
    popup.style.display = "none";
  }
})

signUpBtn.addEventListener("click", ()=>{
  if(popupsignup.style.display === "block") {
    popupsignup.style.display = "none";
  } else{
    popupsignup.style.display = "block";
  }
})