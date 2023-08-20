const thickness = document.querySelectorAll("option");
const price = document.querySelector("div .price");
const selectList = document.querySelector("select");
console.log(thickness);
console.log(selectList);

function changePrice(){
  price.innerHTML = selectList.value;
  
}

selectList.addEventListener("click", changePrice);

