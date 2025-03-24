/* let smallImg = document.getElementsByClassName("oldImg");
for (let i = 0; i < smallImg.length; i++) {
  smallImg[i].src = "/assets/assets/spiderman_img.png";
  console.log("Value Changed of index " + i);
} */
/*----------------------------------------------------------/*
let tagP = document.getElementsByTagName("p");
for (let i = 0; i < tagP.length; i++) {
  tagP[i].style.color = "red";
  console.log("Color Changed of index " + i);
} */

/*----------------------------------------------------------*/

/* let select = document.querySelectorAll("p");

select.forEach((item, index) => {
  item.style.color = "red";
  console.log("Color Changed of index " + index);
}); */

/*----------------------------------------------------------*/
/* let select = document.querySelectorAll("img");

select.forEach((item, index) => {
  item.style.border = "5px solid red";
  console.log("Color Changed of index " + index);
}); */

/*----------------------------------------------------------*/
/* let select = document.querySelectorAll("#mainImg");

select.forEach((item, index) => {
  item.src = "/assets/assets/creation_1.png";
  console.log("Color Changed of index " + index);
}); */

/*----------------------------------------------------------*/
/* let select = document.querySelectorAll(".boxLink");
console.dir(select);
select.forEach((item, index) => {
  item.style.border = "5px solid red";
  console.log("Color Changed of index " + index);
}); */

/*----------------------------------------------------------*/
// Style Manupulation
/* let links = document.querySelectorAll(".box a");
for (let i = 0; i < links.length; i++) {
  links[i].style.color = "red";
  console.log("Color Changed of index " + i);
} */

/*----------------------------------------------------------*/
// Adding 5 Buttons to the Page and Alerting the Button Number
/* for (let i = 5; i > 0; i--) {
  let button = document.createElement("button");
  button.innerHTML = "Click Me " + i;
  button.style.color = "red";
  document.body.prepend(button);
  button.addEventListener("click", (e) => {
    alert(`Button ${i} Clicked`);
    console.log(`Button ${i} Clicked`);
  });
} */

/*----------------------------------------------------------*/
// Changing the Background Color of the Page
/* let button = document.createElement("button");
button.innerText = "Change Background Color";
document.body.prepend(button);
button.addEventListener("click", () => bgColor());

function randomColor() {
  let red = Math.floor(Math.random() * 255);
  let green = Math.floor(Math.random() * 255);
  let blue = Math.floor(Math.random() * 255);
  let color = `rgb(${red},${green},${blue})`;
  console.log(color);
  return color;
}

function bgColor() {
  document.body.style.backgroundColor = randomColor();
  console.log("Color Changed");
} */
/*----------------------------------------------------------*/
