
const signInBtn = document.querySelector(" .right  a ");
const signUpBtn = document.querySelector(".signUp");
const popup = document.querySelector(".login");
const popupsignup = document.querySelector(".popupsignup");

console.log(popupsignup)

signInBtn.addEventListener("click", ()=>{
  if (popup.style.display === "none") {
    popup.style.display = "block";
    popupsignup.style.display = "none";

  } else {
    popup.style.display = "none";
  }
})

signUpBtn.addEventListener("click", ()=>{
  if(popupsignup.style.display === "block") {
    popupsignup.style.display = "none";

  } else{
    popupsignup.style.display = "block";
    popup.style.display = "none";

  }
})


document.addEventListener("click", (e)=>{
console.log(e.target.className);
if(e.target.className !== "signUp"){
  popupsignup.style.display = "none";

}
else if(e.target.className === "signUp"){
  popupsignup.style.display = "block";

}

})

document.addEventListener("click", (e)=>{
if(e.target.className !== "signIn") {
  popup.style.display = "none";

}

else {
  popup.style.display = "block";

}
})