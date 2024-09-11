const actionele = document.querySelector(".todo");
console.log(actionele);


const btn = document.querySelector(".planadder button")
console.log(btn);
btn.addEventListener("click", function(){
actionele.style.display="inline-block"
    
})

const newblock = document.createElement("button");
newblock.style.backgroundColor="red"
newblock.textContent="Click me "
const addloc = document.querySelector("#sect_2");
addloc.append(newblock)

console.log(newblock);
newblock.setAttribute("href", "Ex.html")
console.log(newblock);

const lmbtn = document.querySelector(".sect_1 button");
lmbtn.addEventListener("click", ()=>{
    lmbtn.textContent="Clicked"
    lmbtn.style.color="white"
    lmbtn.style.backgroundColor="black";
})

const btnarea= document.querySelector(".btn-sect");
btnarea.style.padding="100px"

const butn = document.querySelectorAll(".btn-sect button");
console.log(butn);

butn.forEach((b)=>{
    b.addEventListener("click",function(){
        b.style.color="red"
    })
})

const subBtn = document.querySelector(".SignUpBtn")
subBtn.addEventListener("click", function(){
    loc.append(message);
})

const loc = document.querySelector(".SignupCont");
const message = document.createElement("h4");
message.textContent="Your data is submitted Successfully!";
message.classList.toggle("SignupCont", true)
const sty = document.querySelector(".SignupCont")
console.log(sty)
console.log(message.textContent);
message.style.fontFamily="verdana"


const kp = document.querySelector("body");
kp.addEventListener("keydown", function(){
    const N = document.createElement("h1");
    N.style.color='red';
    N.textContent="Success!!!"
    kp.append(N)
})

const btnhover = document.querySelector(".planadder button");
btnhover.addEventListener("mouseover",function(){
    btnhover.style.backgroundColor="WHITE";
})

btnhover.addEventListener("mouseleave", function(){
    btnhover.style.backgroundColor="blue";
})

