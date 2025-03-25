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
/* let p = document.createElement("p");
document.body.prepend(p);
let button = document.createElement("button");
button.innerText = "Change Background Color";
document.body.prepend(button);
button.addEventListener("click", () => {
  bgColor();
  Value();
});

function randomColor() {
  let red = Math.floor(Math.random() * 255);
  let green = Math.floor(Math.random() * 255);
  let blue = Math.floor(Math.random() * 255);
  let color = `rgb(${red},${green},${blue})`;
  console.log(color);
  return color;
}

function Value() {
  p.innerText = " Color Changed" + ` ${randomColor()}`;
  console.log("Color Changed");
}

function bgColor() {
  document.body.style.backgroundColor = randomColor();
} */
/*----------------------------------------------------------*/
// Changing the Background Color of Items Clicked
/* let h1 = document.querySelector("h1");
let img = document.querySelector("img");
let h2 = document.querySelector("h2");
let p = document.querySelector("p");

h1.addEventListener("click", clickEvent);
img.addEventListener("click", clickEvent);
h2.addEventListener("click", clickEvent);
p.addEventListener("click", clickEvent);
function clickEvent() {
  this.style.backgroundColor = "yellow";
  console.log(this.innerText);
} */

/*----------------------------------------------------------*/

/* let inp = document.createElement("input");
inp.type = "text";
document.body.prepend(inp);
let btn = document.createElement("button");
btn.innerText = "Click Me";
document.body.prepend(btn);

btn.addEventListener("click", (e) => {
  console.log(e);
  let newDiv = document.createElement("div");
  newDiv.style.backgroundColor = "red";
  newDiv.style.width = "200px";
  newDiv.style.height = "200px";
  newDiv.style.position = "absolute";
  newDiv.style.top = Math.random() * (window.innerHeight - 200) + "px";
  newDiv.style.left = Math.random() * (window.innerWidth - 200) + "px";
  document.body.appendChild(newDiv);
});

inp.addEventListener("keydown", (e) => {
  console.log(e);
  console.log(e.key);
  console.log(e.code);
  console.log(e.keyCode);
}); */

/* window.addEventListener("resize", () => {
  console.log(window.innerWidth, window.innerHeight);
});
window.addEventListener("scroll", () => {
  console.log(window.scrollY);
}); */

/*----------------------------------------------------------*/
// Event Prevent Default
let formInput = document.querySelector("input");
let form = document.querySelector("form");
let ul = document.querySelector("ul");
form.addEventListener("submit", (e) => {
  e.preventDefault();
  let li = document.createElement("li");
  li.innerText = formInput.value;
  ul.appendChild(li);
  formInput.value = "";
});
