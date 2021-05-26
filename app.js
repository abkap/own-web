const contact = document.querySelector(".contact");
const ul = document.querySelector("ul");
const body = document.querySelector("body");
const main = document.querySelector("main");
const ul_active = document.querySelector(".ul-active");
var isOpen = false;
var count = 0;

const lucky = document.querySelector(".inside-button");
const burgers = document.querySelector(".burgers");

contact.addEventListener("mouseout", () => {
  contact.classList.add("anime");
});

contact.addEventListener("click", () => {
  window.location.href =
    "mailto:apabhishekbusiness@gmail.com?subject=Main from my website";
});

lucky.addEventListener("click", () => {
  console.log("got");
});
function doThis() {
  //   ul.classList.toggle("ul-active");
  //   contact.classList.toggle("contact");

  // ul.classList.add("comeSlowly");
  console.log(isOpen);
  if (isOpen) {
    ul.classList.remove("comeSlowly");
    ul.classList.add("goSlowly");

    // same
    setTimeout(() => {
      ul.classList.remove("ul-active");
      contact.classList.add("contact");
    }, 300);
    isOpen = false;
  } else {
    // same
    ul.classList.add("ul-active");
    contact.classList.remove("contact");

    ul.classList.remove("goSlowly");
    ul.classList.add("comeSlowly");
    isOpen = true;
  }
}
burgers.addEventListener("click", doThis);
