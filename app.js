const contact = document.querySelector(".contact");
const lucky = document.querySelector(".inside-button");

contact.addEventListener("mouseout",() =>{
    contact.classList.add("anime");
    

});

contact.addEventListener("click" ,() => {
    window.location.href="mailto:apabhishekbusiness@gmail.com?subject=Main from my website";
});

lucky.addEventListener("click", ()=>{
    console.log("got");
});

