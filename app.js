const contact = document.querySelector(".contact");
const ul = document.querySelector("ul");
const body = document.querySelector("body");
const main = document.querySelector("main");


const lucky = document.querySelector(".inside-button");
const burgers = document.querySelector(".burgers");

contact.addEventListener("mouseout",() =>{
    contact.classList.add("anime");
    

});

contact.addEventListener("click" ,() => {
    window.location.href="mailto:apabhishekbusiness@gmail.com?subject=Main from my website";
});

lucky.addEventListener("click", ()=>{
    console.log("got");
});
burgers.addEventListener("click",()=>{
    
    ul.classList.toggle("ul-active");
    contact.classList.toggle("contact");
    
});
