
// // // // // // // // // // // // const formsubt = document.querySelector(".SignUpBtn");
// // // // // // // // // // // // formsubt.addEventListener("click", function(event){
// // // // // // // // // // // //     event.preventDefault();
// // // // // // // // // // // // })

// // // // // // // // // // // // const lmbtn = document.querySelector(".sect_1 button");
// // // // // // // // // // // // lmbtn.addEventListener("click", ()=>{
// // // // // // // // // // // //     lmbtn.textContent="Clicked"
// // // // // // // // // // // //     lmbtn.style.color="white"
// // // // // // // // // // // //     lmbtn.style.backgroundColor="black";
// // // // // // // // // // // // })

// // // // // // // // // // // // const btnarea= document.querySelector(".btn-sect");
// // // // // // // // // // // // btnarea.style.padding="100px"

// // // // // // // // // // // // const butn = document.querySelectorAll(".btn-sect button");
// // // // // // // // // // // // console.log(butn);

// // // // // // // // // // // // butn.forEach((b)=>{
// // // // // // // // // // // //     b.addEventListener("click",function(){
// // // // // // // // // // // //         b.style.color="red"
// // // // // // // // // // // //     })
// // // // // // // // // // // // })

// // // // // // // // // // // // const subBtn = document.querySelector(".SignUpBtn")
// // // // // // // // // // // // subBtn.addEventListener("click", function(){
// // // // // // // // // // // //     loc.append(message);
// // // // // // // // // // // // })

// // // // // // // // // // // // const loc = document.querySelector(".SignupCont");
// // // // // // // // // // // // const message = document.createElement("h4");
// // // // // // // // // // // // message.textContent="Your data is submitted Successfully!";
// // // // // // // // // // // // message.classList.toggle("SignupCont", true)
// // // // // // // // // // // // const sty = document.querySelector(".SignupCont")
// // // // // // // // // // // // console.log(sty)
// // // // // // // // // // // // console.log(message.textContent);
// // // // // // // // // // // // message.style.fontFamily="verdana"


// // // // // // // // // // // // const kp = document.querySelector("body");
// // // // // // // // // // // // kp.addEventListener("keydown", function(){
// // // // // // // // // // // //     const N = document.createElement("h1");
// // // // // // // // // // // //     N.style.color='red';
// // // // // // // // // // // //     N.textContent="Success!!!"
// // // // // // // // // // // //     kp.append(N)
// // // // // // // // // // // // })

// // // // // // // // // // // // const btnhover = document.querySelector(".planadder button");
// // // // // // // // // // // // btnhover.addEventListener("mouseover",function(){
// // // // // // // // // // // //     btnhover.style.backgroundColor="WHITE";
// // // // // // // // // // // // })

// // // // // // // // // // // // btnhover.addEventListener("mouseleave", function(){
// // // // // // // // // // // //     btnhover.style.backgroundColor="blue";
// // // // // // // // // // // // })


// // // // // // // // // // // // const button = document.querySelector(".btn_subcont button");
// // // // // // // // // // // // const sdiv = document.querySelector(".btn_subcont");
// // // // // // // // // // // // const div = document.querySelector(".btn_cont");

// // // // // // // // // // // // button.addEventListener("click",function(event){

// // // // // // // // // // // //     console.log("hoi");
// // // // // // // // // // // // })

// // // // // // // // // // // // sdiv.addEventListener("click", function(event){
// // // // // // // // // // // // event.stopPropagation();
// // // // // // // // // // // //     console.log("subdiv clicked");
// // // // // // // // // // // // })

// // // // // // // // // // // // div.addEventListener("click", function(){
// // // // // // // // // // // //     console.log("outer clicked");
// // // // // // // // // // // // })

// // // // // // // // // // // // const space = document.getElementById("sect_2")
// // // // // // // // // // // // const addbtn = document.querySelector(".planadder button");
// // // // // // // // // // // // const field = document.getElementById("textbx");
// // // // // // // // // // // // const record = document.querySelector(".todolist span")

// // // // // // // // // // // // addbtn.addEventListener("click", function(){
// // // // // // // // // // // //     const list = document.createElement("li");
// // // // // // // // // // // //     list.classList.toggle("todolist", true)
// // // // // // // // // // // //     const htm = `
// // // // // // // // // // // //                 <span>${field.value}</span>
// // // // // // // // // // // //                 <div>
// // // // // // // // // // // //                     <button class ="done">done</button>
// // // // // // // // // // // //                     <button>Remove</button>
// // // // // // // // // // // //                 </div>
// // // // // // // // // // // //             `
// // // // // // // // // // // //     list.innerHTML=htm
// // // // // // // // // // // //     space.append(list);
// // // // // // // // // // // // })

// // // // // // // // // // // // const record1 = document.querySelector(".todolist .done");
// // // // // // // // // // // // record1.addEventListener("click", function(){
// // // // // // // // // // // //     console.log(record.textContent);
// // // // // // // // // // // // })

// // // // // // // // // // // // //Asynchcronous 

// // // // // // // // // // // // // console.log("First line");

// // // // // // // // // // // // // setTimeout(function(){
// // // // // // // // // // // // //     console.log("Second");
// // // // // // // // // // // // // }, 10000)

// // // // // // // // // // // // // console.log("Third");

// // // // // // // // // // // // // console.log("one");

// // // // // // // // // // // // // const id = setInterval(function(){
// // // // // // // // // // // // //     console.log("inside setInterval");
// // // // // // // // // // // // // }, 60000)

// // // // // // // // // // // // // console.log("three");
// // // // // // // // // // // // // const r = Math.floor(Math.random(25)*1000);
// // // // // // // // // // // // // const g = Math.floor(Math.random(25)*1000);
// // // // // // // // // // // // // const b = Math.floor(Math.random(25)*1000);
// // // // // // // // // // // // // const rgb = `rgb(${r},${g},${b})`
// // // // // // // // // // // // // console.log(rgb);


// // // // // // // // // // // // // setInterval(()=>{
// // // // // // // // // // // // //     const r = Math.floor(Math.random(25)*100);
// // // // // // // // // // // // // const g = Math.floor(Math.random(25)*100);
// // // // // // // // // // // // // const b = Math.floor(Math.random(25)*100);
// // // // // // // // // // // // // const rgb = `rgb(${r},${g},${b})`
// // // // // // // // // // // // // console.log(rgb);
// // // // // // // // // // // // //     const applicationArea = document.querySelector(".btn_cont");
// // // // // // // // // // // // //     applicationArea.style.backgroundColor=rgb;
// // // // // // // // // // // // // },1000)

// // // // // // // // // // // // console.log("one");

// // // // // // // // // // // // const id = setTimeout(()=>{
// // // // // // // // // // // //     console.log("ok")
// // // // // // // // // // // // },2000)
// // // // // // // // // // // // setTimeout(()=>{
// // // // // // // // // // // //     console.log("owk")
// // // // // // // // // // // // },2000)

// // // // // // // // // // // // setInterval(()=>{
// // // // // // // // // // // //     console.log("timeout")
// // // // // // // // // // // // }, 2000)


// // // // // // // // // // // // console.log("three");
// // // // // // // // // // // // console.log(id);
// // // // // // // // // // // // clearTimeout(id);


// // // // // // // // // // // const boxx = document.querySelector(".bx");
// // // // // // // // // // // const button = document.querySelector(".bx button")

// // // // // // // // // // // const colchanger = () =>{
// // // // // // // // // // //     const id = setInterval(()=>{
// // // // // // // // // // //         const r = Math.floor(Math.random(255)*100);
// // // // // // // // // // //         const g = Math.floor(Math.random(255)*100);
// // // // // // // // // // //         const b = Math.floor(Math.random(255)*100);
// // // // // // // // // // //         const rgb = `rgb(${r},${g},${b})`;
// // // // // // // // // // //         boxx.style.backgroundColor=rgb;

// // // // // // // // // // //     },500)
// // // // // // // // // // //     return id;
// // // // // // // // // // // }
// // // // // // // // // // // const id = colchanger();
// // // // // // // // // // // console.log(id);



// // // // // // // // // // // button.addEventListener("click",function(){
// // // // // // // // // // //    clearInterval(id);
// // // // // // // // // // //     button.textContent = boxx.style.backgroundColor;
// // // // // // // // // // // })

// // // // // // // // // // //cbk func

// // // // // // // // // // // function that is passed as an argument to another function is known as callback function.


// // // // // // // // // // // const addNum = (num1, num2, onSuccess, onFailure)=>{
// // // // // // // // // // //     if(typeof num1 == "number" && typeof num2 == "number"){
// // // // // // // // // // //         onSuccess(num1, num2);
// // // // // // // // // // //     }
// // // // // // // // // // //     else{
// // // // // // // // // // //        onFailure(num1, num2);
// // // // // // // // // // //     }
// // // // // // // // // // // }

// // // // // // // // // // // const Add = (num1, num2)=>{
// // // // // // // // // // //     console.log(`sum is ${num1+num2}`);
// // // // // // // // // // // }

// // // // // // // // // // // const warn = (num1, num2)=>{
// // // // // // // // // // //     console.log(`${num1} & ${num2} are not numbers, please retry...`);
// // // // // // // // // // // }

// // // // // // // // // // // addNum(2,"6", Add, warn);

// // // // // // // // // // const h1 = document.querySelector(".bx :nth-child(1)");
// // // // // // // // // // const h2 = document.querySelector(".bx :nth-child(2)");
// // // // // // // // // // const h3 = document.querySelector(".bx :nth-child(3)");
// // // // // // // // // // const h4 = document.querySelector(".bx :nth-child(4)");
// // // // // // // // // // const h5 = document.querySelector(".bx :nth-child(5)");
// // // // // // // // // // const h6 = document.querySelector(".bx :nth-child(6)");

// // // // // // // // // // // setTimeout(()=>{
// // // // // // // // // // //     h1.style.color="red"
// // // // // // // // // // //     h1.textContent="Done"
// // // // // // // // // // //     setTimeout(()=>{
// // // // // // // // // // //         h2.style.color="blue"
// // // // // // // // // // //         h2.textContent="Done"
// // // // // // // // // // //         setTimeout(()=>{
// // // // // // // // // // //             h3.style.color="yellow"
// // // // // // // // // // //             h3.textContent="Done"
// // // // // // // // // // //             setTimeout(()=>{
// // // // // // // // // // //                 h4.style.color="green"
// // // // // // // // // // //                 h4.textContent="Done"
// // // // // // // // // // //                 setTimeout(()=>{
// // // // // // // // // // //                     h5.style.color="green"
// // // // // // // // // // //                     h5.textContent="Done"
// // // // // // // // // // //                     setTimeout(()=>{
// // // // // // // // // // //                         h6.style.color="green"
// // // // // // // // // // //                         h6.textContent="Done"
// // // // // // // // // // //                         setTimeout(()=>{
// // // // // // // // // // //                             h4.style.color="green"
// // // // // // // // // // //                             h4.textContent="Done"
// // // // // // // // // // //                         },1000)
// // // // // // // // // // //                     },3000)
// // // // // // // // // // //                 },2000)
// // // // // // // // // // //             },1000)
// // // // // // // // // // //         },2000)
// // // // // // // // // // //     },2000)
// // // // // // // // // // // },1000)

// // // // // // // // // // // const colChanger = (element, time, cbk) =>{
// // // // // // // // // // //     setTimeout(function(){
// // // // // // // // // // //         element.textContent ="Doneee"
// // // // // // // // // // //     },1000)
// // // // // // // // // // // }

// // // // // // // // // // // colChanger(h1, 1000, )


// // // // // // // // // // // const element = document.querySelector(".bx :nth-child(1)");

// // // // // // // // // // // const addnum = (num1, num2, onFailure, onSuccess)=>{
// // // // // // // // // // //     if(typeof num1==="number" && typeof num2==="number"){
// // // // // // // // // // //         onSuccess(num1, num2);
// // // // // // // // // // //     }
// // // // // // // // // // //     else{
// // // // // // // // // // //         onFailure(num1, num2);
// // // // // // // // // // //     }
// // // // // // // // // // // }

// // // // // // // // // // // const onSuccess = (num1, num2) => {
// // // // // // // // // // //     console.log(`Sum of ${num1} and ${num2} is ${num1+num2}`);
// // // // // // // // // // // }
// // // // // // // // // // // const onFailure = (num1, num2) =>{
// // // // // // // // // // //     console.log(`Please check whether both ${num1} and ${num2} are numbers. If not please change it`)
// // // // // // // // // // // }

// // // // // // // // // // // addnum(1,"6", onFailure, onSuccess);

// // // // // // // // // // const text = document.querySelector(".bx :nth-child(1)");
// // // // // // // // // // const text1 = document.querySelector(".bx :nth-child(2)")

// // // // // // // // // // const stylechanger = (element, time, tcolor, onSuccess, onFailure) => {
// // // // // // // // // //     if (element) {
// // // // // // // // // //         setTimeout(() => {
// // // // // // // // // //             element.textContent = "Changed!"
// // // // // // // // // //             element.style.color = tcolor
// // // // // // // // // //             if (onSuccess) {
// // // // // // // // // //                 onSuccess();
// // // // // // // // // //             }
// // // // // // // // // //             else {
// // // // // // // // // //                 onFailure();
// // // // // // // // // //             }
// // // // // // // // // //         }, time)
// // // // // // // // // //     }
// // // // // // // // // // }

// // // // // // // // // // stylechanger(text, 1000, "blue", () =>{
// // // // // // // // // //     stylechanger(text1, 1000, "red", ()=>{
// // // // // // // // // //         stylechanger(text2, 1000, "yellow", ()=>{

// // // // // // // // // //         },()=>{console.log("fail1")})
// // // // // // // // // //     })
// // // // // // // // // // },
// // // // // // // // // //     ()=>{console.log("Failed")}

// // // // // // // // // // );

// // // // // // // // // // function_name(p1,p2,()=>{
// // // // // // // // // //     function_name(p1,p2,()=>{})
// // // // // // // // // // },()=>{
// // // // // // // // // //     function_name(p1,p2,()=>{
// // // // // // // // // // function_name(p1,p2,()=>{}  
// // // // // // // // // //     })
// // // // // // // // // // })

// // // // // // // // // // try{
// // // // // // // // // //     console.log(x);
// // // // // // // // // // }
// // // // // // // // // // catch(e){
// // // // // // // // // //     console.log("e")

// // // // // // // // // // }
// // // // // // // // // // finally{
// // // // // // // // // //     console.log("retry")
// // // // // // // // // // }

// // // // // // // // // function tester(){
// // // // // // // // //     try{
// // // // // // // // //         console.log(x);
// // // // // // // // //     }
// // // // // // // // //     catch(e){
// // // // // // // // //         return(e)
// // // // // // // // //     }
// // // // // // // // //     finally{
// // // // // // // // //         console.log("ok")
// // // // // // // // //     }

// // // // // // // // // }

// // // // // // // // // console.log(tester());

// // // // // // // // // const CreateOrder = (item) => {
// // // // // // // // //     console.log(`order created for ${item}`);
// // // // // // // // // }
// // // // // // // // // const showOrderSummary = () =>{
// // // // // // // // //     console.log("this is the order created - xxxxx012")
// // // // // // // // // }

// // // // // // // // // const promise = CreateOrder("Iphone5s Space grey 16GB");
// // // // // // // // // console.log(promise);

// // // // // // // // const walkTheDog =()=>{
// // // // // // // //     setTimeout(()=>{
// // // // // // // //         console.log("Dog Walk Done!!!");
// // // // // // // //     }, 2000);

// // // // // // // // }

// // // // // // // // const dishClean =() =>{

// // // // // // // // }

// // // // // // // // const takeTheTrash =()=>{
// // // // // // // //     setTimeout(()=>{
// // // // // // // //         console.log("Trashed the waste!!!");
// // // // // // // //     },1000);
// // // // // // // // }

// // // // // // // // const myPm = new Promise((resolve, reject) =>{
// // // // // // // //     setTimeout(()=>{
// // // // // // // //         resolve("Cleaned the Dishes!!!");
// // // // // // // //     },1000);
// // // // // // // // })

// // // // // // // // console.log(myPm);

// // // // // // // // myPm.then(  setTimeout(()=>{
// // // // // // // //     console.log("Trashed the waste!!!");
// // // // // // // // },2000))
// // // // // // // // .then( setTimeout(()=>{
// // // // // // // //     console.log("Dog Walk Done!!!");
// // // // // // // // }, 2000))


// // // // // // // // // let name1="sayooj"
// // // // // // // // // const pm  = new Promise((resolve, reject) =>{
// // // // // // // // //     if(name1=="sayooj"){
// // // // // // // // //         resolve(name1);
// // // // // // // // //     }
// // // // // // // // //   else{
// // // // // // // // //         reject("ndone");
// // // // // // // // //     }

// // // // // // // // // })

// // // // // // // // // console.log(pm)

// // // // // // // //const cars = {c1:"maruti 800", c2:"VW Polo 1.5 TDI", c3:"hyundai i20"};

// // // // // // // // const cpromise = new Promise((resolve, reject) => {
// // // // // // // //     if (car["c1"] === "maruti 80") {
// // // // // // // //         resolve(car);
// // // // // // // //     }
// // // // // // // //     else{
// // // // // // // //         reject("no cars match your choice");
// // // // // // // //     }
// // // // // // // // })

// // // // // // // // cpromise.then((value)=>{console.log(value.c1)})

// // // // // // // // function checkcar(cars){
// // // // // // // //     const mp = new Promise((resolve, reject)=>{
// // // // // // // //         if(cars.c3==="hyunai i20"){
// // // // // // // //             resolve(`you have checked ${cars.c3}`);
// // // // // // // //         }
// // // // // // // //         else{
// // // // // // // //             reject(cars);
// // // // // // // //         }
// // // // // // // //     })
// // // // // // // //     return mp;
// // // // // // // // }

// // // // // // // // checkcar(cars).then((value)=>console.log(value))
// // // // // // // // .catch((e)=>{console.log(e)})

// // // // // // // // const text = document.querySelector(".bx :nth-child(1)");
// // // // // // // // const text1 = document.querySelector(".bx :nth-child(2)")
// // // // // // // // const text2 = document.querySelector(".bx :nth-child(3)")
// // // // // // // // const text3 = document.querySelector(".bx :nth-child(4)")
// // // // // // // // const text4 = document.querySelector(".bx :nth-child(5)")

// // // // // // // // function changeStyle (element){
// // // // // // // //     const chpromise = new Promise((resolve, reject) =>{
// // // // // // // //         setTimeout(()=>{
// // // // // // // //             resolve(element.textContent="Done", element.style.color="red");
// // // // // // // //         },1000)
// // // // // // // //     })
// // // // // // // //     return chpromise;
// // // // // // // // }

// // // // // // // // changeStyle(text).then(()=>{
// // // // // // // //     return changeStyle(text2)

// // // // // // // // })
// // // // // // // // .then((x)=>{
// // // // // // // //     setTimeout(()=>{
// // // // // // // //         text3.textContent="donee"
// // // // // // // //     },2000)
// // // // // // // // })

// // // // // // // // let userLeft = true, userWatchingCatMeme = false;

// // // // // // // // function userStatus(ul, uwcm){
// // // // // // // //     const userPromise = new Promise((resolve, reject) => {
// // // // // // // //         if(ul){
// // // // // // // //             resolve({userStatus:"user have left", message: "Bye :)"}, 
// // // // // // // //                 console.log("starting loader"),
// // // // // // // //                 setTimeout(()=>{
// // // // // // // //                     console.log("Loaded!");
// // // // // // // //                 },3000)
// // // // // // // //             );
// // // // // // // //         }
// // // // // // // //         else if(uwcm){
// // // // // // // //             resolve({userSatus:"user is watching cat memes", message: "user is happy!"});
// // // // // // // //         }
// // // // // // // //     })
// // // // // // // //     return userPromise;
// // // // // // // // }

// // // // // // // // userStatus(true, true).then((

// // // // // // // // )=>{console.log("inside then")})

// // // // // // // // check if callback hell code runs synchronously or asynchronously when using different settimout

// // // // // // // const text = document.querySelector(".bx :nth-child(1)");
// // // // // // // const text1 = document.querySelector(".bx :nth-child(2)");
// // // // // // // const text2 = document.querySelector(".bx :nth-child(3)");
// // // // // // // const text3 = document.querySelector(".bx :nth-child(4)");

// // // // // // // // const domchanger = (element, time, color, callback)=>{
// // // // // // // //     setTimeout(()=>{
// // // // // // // //         element.textContent = "OK";
// // // // // // // //         element.style.color=color;
// // // // // // // //         callback();
// // // // // // // //     },time);
// // // // // // // // }

// // // // // // // // domchanger(text1, 4000, "green", ()=>{
// // // // // // // //     domchanger(text, 2000, "yellow")
// // // // // // // // })

// // // // // // // //create the promise

// // // // // // // // const domchanger = (element, time, color)=>{
// // // // // // // //     const prom1 = new Promise((resolve, reject)=>{
// // // // // // // //         if(element){
// // // // // // // //             setTimeout(()=>{
// // // // // // // //                 element.textContent="Done & Dusted!";
// // // // // // // //                 element.style.color=color;
// // // // // // // //                 resolve("OK")
// // // // // // // //             },time)

// // // // // // // //         }
// // // // // // // //         else{
// // // // // // // //             reject("error");
// // // // // // // //         }
// // // // // // // //     })
// // // // // // // //     return prom1;
// // // // // // // // }

// // // // // // // // const dc = domchanger(text, 1000, "yellow")
// // // // // // // // console.log(dc)
// // // // // // // // dc.then(()=>{
// // // // // // // //     return domchanger(text2, 1000, "red")
// // // // // // // // })
// // // // // // // // .then((val)=>{
// // // // // // // //    return  domchanger(text3, 1000, "green")
// // // // // // // // })
// // // // // // // // .then(()=>{
// // // // // // // //     return domchanger(null, 2000, "blue")
// // // // // // // // })
// // // // // // // // .catch(()=>{

// // // // // // // // })
// // // // // // // // const dataUrl ="https://jsonplaceholder.typicode.com/posts"

// // // // // // // // const xhr = new XMLHttpRequest();

// // // // // // // // xhr.open("GET",dataUrl);

// // // // // // // // function x(){
// // // // // // // //     if(xhr.readyState==4){
// // // // // // // //         console.log(xhr);
// // // // // // // //     const response = xhr.response;

// // // // // // // //     const finalOut = JSON.parse(response)
// // // // // // // //     console.log(finalOut)
// // // // // // // //     }
// // // // // // // // }



// // // // // // // // xhr.send();

// // // // // // // // const dataUrl = "https://jsonplaceholder.typicode.com/posts";

// // // // // // // // const request  = new XMLHttpRequest();

// // // // // // // // request.open("GET", dataUrl);
// // // // // // // // request.onload = ()=>{
// // // // // // // //     const resp = request.response;
// // // // // // // //     console.log(typeof resp)
// // // // // // // //     const finalresp =JSON.parse(resp);
// // // // // // // //     console.log(typeof finalresp);
// // // // // // // //     console.log(finalresp);
// // // // // // // // }
// // // // // // // // request.send();

// // // // // // // //test failure code in callback and promise - what happns when a part is failed in btw;

// // // // // // // // function domchanger(element, time, bgcol, callback){
// // // // // // // //     setTimeout(()=>{
// // // // // // // //         element.textContent = "changed";
// // // // // // // //         element.style.backgroundColor =bgcol;
// // // // // // // //         callback()
// // // // // // // //     }, time)
// // // // // // // // }

// // // // // // // // domchanger(text, 7000, "red",()=>{
// // // // // // // //     domchanger(text1, 1000, "yellow", ()=>{
// // // // // // // //         domchanger(text2, 4000, "blue", ()=>{
// // // // // // // //             domchanger(text3, 1000, "green", ()=>{
// // // // // // // //                 console.log("printing on prio");
// // // // // // // //             })
// // // // // // // //         })
// // // // // // // //     })
// // // // // // // // })

// // // // // // // // setTimeout(()=>{
// // // // // // // //     console.log("first set");
// // // // // // // // },1000)
// // // // // // // // console.log("second set");
// // // // // // // // setTimeout(()=>{
// // // // // // // //     console.log(i*2);
// // // // // // // // },1000)
// // // // // // // // const id = setInterval(()=>{
// // // // // // // //     console.log(Math.random(10));
// // // // // // // // })
// // // // // // // // setTimeout(()=>{
// // // // // // // //     clearInterval(id);
// // // // // // // // },2000)

// // // // // // // const domchanger = (element, time, bgcol)=>{
// // // // // // //     const mypromise = new Promise((resolve, reject)=>{
// // // // // // //         if(element){
// // // // // // //             setTimeout(()=>{
// // // // // // //                 element.style.backgroundColor =bgcol;
// // // // // // //                 resolve();
// // // // // // //             },time)
// // // // // // //         }
// // // // // // //         else{
// // // // // // //             reject();
// // // // // // //         }
// // // // // // //     })
// // // // // // //     return mypromise;
// // // // // // // }

// // // // // // // domchanger(text, 1000, "yellow")
// // // // // // // .then(()=>{
// // // // // // //     return domchanger(text1, 1000, "red")
// // // // // // // })
// // // // // // // .then(()=>{
// // // // // // //     return domchanger(tex, 1000, "blue")
// // // // // // // })
// // // // // // // .catch((val)=>{
// // // // // // //     console.log(val)
// // // // // // // })

// // // // // // function walkTheDog() {
// // // // // //     const wtd = new Promise((resolve, rject)=>{
// // // // // //         console.log("Dog walk done!!");
// // // // // //         resolve(120455);
// // // // // //     })
// // // // // //     return wtd;
// // // // // // }

// // // // // // function cleanDishes(time){
// // // // // //     const cds = new Promise((resolve, reject)=>{
// // // // // //         if(time>"12000000"){
// // // // // //             console.log("dishes cleaned!!");
// // // // // //         resolve();
// // // // // //         }
// // // // // //         else{
// // // // // //             reject("erwerewrwe");
// // // // // //         }  
// // // // // //     })
// // // // // //     return cds;
// // // // // // }

// // // // // // walkTheDog()
// // // // // // .then((val)=>{
// // // // // //     cleanDishes(val);
// // // // // // })
// // // // // // .catch((val)=>{
// // // // // //     console.log(val);
// // // // // // })


// // // // // // const url = "https://jsonplaceholder.typicode.com/posts";


// // // // // // const mycon = new XMLHttpRequest();
// // // // // // mycon.open("GET", url);
// // // // // // mycon.onload = function nrt() {
// // // // // //     const resp = mycon.response;
// // // // // //     const finalresp = JSON.parse(resp);
// // // // // //     const id = finalresp[5].id;
// // // // // //     const url1 = `https://jsonplaceholder.typicode.com/posts/${id}`;

// // // // // //     const req1 = new XMLHttpRequest();
// // // // // //     req1.open("GET", url1);
// // // // // //     req1.onload = function(){
// // // // // //         const resp = JSON.parse(req1.response);
// // // // // //         console.log(resp);
// // // // // //     } 
// // // // // //     req1.send();
// // // // // // }
// // // // // // mycon.send();

// // // // // const url = "https://jsonplaceholder.typicode.com/posts";

// // // // // const reqfn = (link) => {
// // // // //     const conprom = new Promise((resolve, reject) => {
// // // // //         if (link) {
// // // // //             const req = new XMLHttpRequest()
// // // // //             req.open("GET", link);
// // // // //             req.onload = function () {
// // // // //                 resolve(JSON.parse(req.response));
// // // // //             }
// // // // //             req.send();
// // // // //         }
// // // // //         else{
// // // // //             reject("not ok")
// // // // //         }

// // // // //     })
// // // // //     return conprom;
// // // // // }

// // // // // reqfn(url)
// // // // //     .then((val) => {
// // // // //         const reqval = val[5].id;
// // // // //         let newLink = `${url}/${reqval}`;
// // // // //         return newLink;
// // // // //     })
// // // // //     .then((val) => {
// // // // //         return reqfn(val);
// // // // //     })
// // // // //     .then((val) => {
// // // // //         console.log(val)
// // // // //     })
// // // // //     .catch((e) => {
// // // // //         console.log(e)
// // // // //     })

// // // // // const url = "https://jsonplaceholder.typicode.com/posts";

// // // // // fetch(url)
// // // // //         .then((val)=>{
// // // // //             let x =(val.json());
// // // // //             return x;
// // // // //         })



// // // // // const url = "https://jsonplaceholder.typicode.com/posts";

// // // // // fetch(url).then((resp)=>{
// // // // //     const resp1 = resp.json()
// // // // //     return resp1
// // // // // })
// // // // // .then((respo)=>{
// // // // //     console.log(respo);
// // // // // })

// // // // // import {displayName} from './utils/app.js'

// // // // // try{
// // // // //     displayName("Sayooj", "koroth")
// // // // // }
// // // // // catch(error){
// // // // //     console.log(error)
// // // // // }



// // // // // import {Car, Owner} from './utils/app.js'


// // // // // const VW_Polo = new Car("VW", "Polo 1.5 TDI", 1500, 2014, "Diesel", 770000);
// // // // // VW_Polo.calcOnRoadPrice();

// // // // // const owner1 = new Owner("Sayooj Koroth", "24", "Fullstack dev", "Maruti","" , "","","", 455000);
// // // // // console.log(owner1);
// // // // // console.log(owner1.displayOwnerInfo());
// // // // // owner1.calcOnRoadPrice();
// // // // // Owner.displayServiceCenterName();

// // // // // let string1 = 77
// // // // // console.log(String (string1));

// // // // // const myArray = [56,99,0];
// // // // // myArray.push(21,22);
// // // // // myArray.pop();
// // // // // myArray.unshift(300,88,90);
// // // // // myArray.shift()
// // // // // console.log(myArray);
// // // // const numbers =[2,3,5,6,4,3,22,3,0,99];
// // // // const newArr =[...numbers, -2, -900]
// // // // console.log(newArr);

// // // // // let sum=0;
// // // // // for(let number of numbers){
// // // // //     console.log(number)
// // // // // }
// // // // // console.log(sum);

// // // // // for(let number in numbers){
// // // // //     console.log(numbers[number])
// // // // // }

// // // // const names = ["SAYOOJ", "koroth", "RAJU", "DEV"];

// // // // let [fname,lname, ...rest] = names;
// // // // console.log(fname, lname, rest)

// // // // const obj = {name:"sayooj", age:24, place:"KL"};
// // // // // obj.interest="coding"
// // // // // obj["interest"]="automotive";
// // // // // console.log(obj)

// // // // // for(let item of obj){
// // // // //     console.log(`${item} : ${obj[item]}`)
// // // // // }

// // // // // let {name:username, place: location} =obj;
// // // // // console.log(username, location);

// // // // // const newobj = {...obj, interest:"coding"}
// // // // // console.log(newobj)

// // // // // addnum();

// // // // // function addnum(){
// // // // //     console.log("adder");
// // // // // }
// // // // // const addnum = function(){

// // // // // }
// // // // // const addnum = ()=>{

// // // // // }
// // // // let x= 34
// // // // {
// // // //     let x= 45;
// // // // }
// // // // console.log(x);

// // // // const addnum = (x, y, callback, callback1) =>{
// // // //     let sum = x+y;
// // // //     callback(sum);
// // // //     callback1();
// // // // }

// // // // const dp =(sum)=>{
// // // //     console.log(`sum is ${sum}`)
// // // // }
// // // // const xp = ()=>{
// // // //     console.log("ok");
// // // // }

// // // // addnum(2,4, dp, xp);



// // // // const newdf = numbers.forEach((number)=>{
// // // //    return number*2;
// // // // })
// // // // console.log(newdf);

// // // // const newar =numbers.map((number)=>{
// // // //     return number*9
// // // // })

// // // // console.log(newar)

// // // // const filres= numbers.filter((num)=>{
// // // //     return (num>-10)
// // // // })

// // // // console.log(filres);

// // // // const sum = numbers.reduce((accumulator, curval)=>{
// // // //     return accumulator+curval;
// // // // })

// // // // console.log(sum)

// // // // let numbers = [2,4,6,-5, 109, 65, 34,2];

// // // // const cartProducts = [{pname:"keyboard", pId:"K10890", qty:1, price:200},
// // // //                       {pname:"mouse", pId:{pId1:"MU0870",pId2:"MU1890"}, qty:3, price:100},
// // // //                       {pname:"cooling fan", pId:"CFBRUSS9", qty:0, price:300},
// // // //                       {pname:"led light", pId:"MU90017", qty:1, price:80},
// // // //                       {pname:"mouse pad", pId:"MU90017", qty:1, price:20}
// // // //                     ]


// // // // const number = new Set(numbers);
// // // // number.add(-5)
// // // // console.log(number.has(-50))
// // // // const pobj ={
// // // //     name:"sayooj",
// // // //     lname:"koroth",
// // // //     age:24,
// // // //     displayDetails(curDate, svcName){
// // // //         console.log(`Person details with the name : ${this.fname + " " + this.lname} with the age ${this.age} has been recorded on ${curDate} by ${svcName}`)
// // // //     }
// // // // }

// // // // const pperson1 ={fname:"Sayooj", lname:"K", age:24};


// // // // pobj.displayDetails.apply(pperson1,[Date(), "Six grids Automotive"]);

// // // // const binder =pobj.displayDetails.bind(pperson1,Date(), "sg automtives");
// // // // console.log(binder);
// // // // binder();


// // // // numbers.splice(3, 2, 200, 400, 600);
// // // // console.log(numbers);


// // // // cartProducts.splice(1, 0, {pname:"earpod"})
// // // // console.log(cartProducts);
// // // // const x= numbers.every((num)=>{
// // // //     return num>-7;
// // // // })

// // // // console.log(x)


// // // // cartProducts.forEach((item)=>{
// // // //     console.log(item.pname);
// // // // })

// // // // const pId = cartProducts.map((item)=>{
// // // //     if(item.price<100){
// // // //         item.price*0;
// // // //     }
// // // //     return item.price;
// // // // })
// // // // console.log(pId);

// // // // const highqty = cartProducts.filter((item)=>{
// // // //     return item.qty>1;
// // // // })
// // // // console.log(highqty);

// // // // const amount = cartProducts.reduce((accumulator, curval)=>{
// // // //     return accumulator + curval.qty * curval.price;
// // // // },0)

// // // // console.log(amount);

// // // // numbers.sort((a,b)=>{
// // // //     return b-a;
// // // // });
// // // // console.log(numbers);

// // //     console.log(window);

// // // // function myfunc1(){
// // // //     console.log(this.name);
// // // // } 
// // // // const testObj = {name:"sayooj", age:24}

// // // // myfunc.call(testObj);
// // // // myfunc1.call(testObj);

// // // class Student{
// // //     constructor(name, age, rollno){
// // //         this.s_name=name;
// // //         this.s_age=age;
// // //         this.s_rno = rollno;
// // //     }
// // //     printStudentDetails(){
// // //         console.log(`Name of student : ${this.s_name}`);
// // //         console.log(`Age of student : ${this.s_age}`);
// // //         console.log(`ID of student : ${this.s_id}`);
// // //     }
// // // }

// // // const student1 = new Student("Sayooj Koroth", 16, 22);
// // // // student1.printStudentDetails();

// // // class Teacher extends Student{
// // //     constructor(tname, classhead, name, rollno,age){
// // //         super(name, age, rollno);
// // //         this.t_name= tname;
// // //         this.t_classhead =classhead;

// // //     }
// // //     displayTeacherDetails(){
// // //         console.log(`Teacher ${this.t_name} is the class teacher for ${this.s_name} and ${this.s_age} in class ${this.t_classhead}`);
// // //     }
// // // }
// // // const tc1 = new Teacher("Riju", 7, "sayooj", 24, 16);
// // // console.log(tc1)
// // // tc1.displayTeacherDetails();

// // const ele = document.querySelector(".lisCont");

// // // console.log(ele)
// // const newele = document.createElement("div");
// // newele.innerHTML=`<h1>My name is xyz</h1>
// //                     <ul>
// //                         <li>Home sweet home</li>
// //                         <li>Home sweet home1</li>
// //                         <li>Home sweet home2</li>
// //                     </ul>`
// // newele.classList.toggle("elestyle", true)
// // // console.log(newele)

// // const checker = document.querySelector(".lisCont :nth-child(2)")
// // console.log(checker)

// // checker.addEventListener("click", (e)=>{
// //     ele.style.display="none";

// // })

// // const id =setInterval(()=>{
// //     console.log(Math.random()*10);
// // }, 2000);

// // setTimeout(()=>{
// //     clearInterval(id);
// //     console.log("stopped")
// // },8000)

// const firstText = document.querySelector(".bx :nth-child(1)");
// const SecondText = document.querySelector(".bx :nth-child(2)");
// const thirdText = document.querySelector(".bx :nth-child(3)");
// const fourthText = document.querySelector(".bx :nth-child(4)");
// const fifthText = document.querySelector(".bx :nth-child(5)");

// // const domchanger = (element, time, bgcol, callback)=>{
// //     setTimeout(()=>{
// //         element.textContent="Changed";
// //         element.style.backgroundColor=bgcol;
// //         callback();
// //     },time)  
// // }

// // domchanger(firstText,1000,"yellow", ()=>{
// //     domchanger(SecondText, 1000, "blue", ()=>{
// //         domchanger(thirdText, 3000, "red")
// //     })
// // })

// // const addnum = (x,y) => {
// //     try{
// //         return x+y;
// //     }
// //     catch(e){
// //         console.log(e);
// //     }
// //     finally{
// //         console.log( "ok");
// //     }
// // }

// // console.log(addnum(d,7))

// let x = 20;

// const domchanger = (element, time) => {
//     const chprom = new Promise((resolve, reject) => {
//         if (element) {
//             setTimeout(() => {
//                 element.textContent = "changed!!!";
//                 element.style.color = "green";
//                 resolve();
//             },time)
//         }
//         else{
//             reject();
//         }
//     })
//     return chprom;
// }

// domchanger(firstText,2000)
// .then(()=>{
//    return domchanger(fgdfg,2000)
// })
// .then(()=>{
//     domchanger(thirdText,2000)
// })
// .catch((e)=>{
//     console.log(e)
// })

