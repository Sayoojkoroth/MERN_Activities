
// // // // // const formsubt = document.querySelector(".SignUpBtn");
// // // // // formsubt.addEventListener("click", function(event){
// // // // //     event.preventDefault();
// // // // // })

// // // // // const lmbtn = document.querySelector(".sect_1 button");
// // // // // lmbtn.addEventListener("click", ()=>{
// // // // //     lmbtn.textContent="Clicked"
// // // // //     lmbtn.style.color="white"
// // // // //     lmbtn.style.backgroundColor="black";
// // // // // })

// // // // // const btnarea= document.querySelector(".btn-sect");
// // // // // btnarea.style.padding="100px"

// // // // // const butn = document.querySelectorAll(".btn-sect button");
// // // // // console.log(butn);

// // // // // butn.forEach((b)=>{
// // // // //     b.addEventListener("click",function(){
// // // // //         b.style.color="red"
// // // // //     })
// // // // // })

// // // // // const subBtn = document.querySelector(".SignUpBtn")
// // // // // subBtn.addEventListener("click", function(){
// // // // //     loc.append(message);
// // // // // })

// // // // // const loc = document.querySelector(".SignupCont");
// // // // // const message = document.createElement("h4");
// // // // // message.textContent="Your data is submitted Successfully!";
// // // // // message.classList.toggle("SignupCont", true)
// // // // // const sty = document.querySelector(".SignupCont")
// // // // // console.log(sty)
// // // // // console.log(message.textContent);
// // // // // message.style.fontFamily="verdana"


// // // // // const kp = document.querySelector("body");
// // // // // kp.addEventListener("keydown", function(){
// // // // //     const N = document.createElement("h1");
// // // // //     N.style.color='red';
// // // // //     N.textContent="Success!!!"
// // // // //     kp.append(N)
// // // // // })

// // // // // const btnhover = document.querySelector(".planadder button");
// // // // // btnhover.addEventListener("mouseover",function(){
// // // // //     btnhover.style.backgroundColor="WHITE";
// // // // // })

// // // // // btnhover.addEventListener("mouseleave", function(){
// // // // //     btnhover.style.backgroundColor="blue";
// // // // // })


// // // // // const button = document.querySelector(".btn_subcont button");
// // // // // const sdiv = document.querySelector(".btn_subcont");
// // // // // const div = document.querySelector(".btn_cont");

// // // // // button.addEventListener("click",function(event){

// // // // //     console.log("hoi");
// // // // // })

// // // // // sdiv.addEventListener("click", function(event){
// // // // // event.stopPropagation();
// // // // //     console.log("subdiv clicked");
// // // // // })

// // // // // div.addEventListener("click", function(){
// // // // //     console.log("outer clicked");
// // // // // })

// // // // // const space = document.getElementById("sect_2")
// // // // // const addbtn = document.querySelector(".planadder button");
// // // // // const field = document.getElementById("textbx");
// // // // // const record = document.querySelector(".todolist span")

// // // // // addbtn.addEventListener("click", function(){
// // // // //     const list = document.createElement("li");
// // // // //     list.classList.toggle("todolist", true)
// // // // //     const htm = `
// // // // //                 <span>${field.value}</span>
// // // // //                 <div>
// // // // //                     <button class ="done">done</button>
// // // // //                     <button>Remove</button>
// // // // //                 </div>
// // // // //             `
// // // // //     list.innerHTML=htm
// // // // //     space.append(list);
// // // // // })

// // // // // const record1 = document.querySelector(".todolist .done");
// // // // // record1.addEventListener("click", function(){
// // // // //     console.log(record.textContent);
// // // // // })

// // // // // //Asynchcronous 

// // // // // // console.log("First line");

// // // // // // setTimeout(function(){
// // // // // //     console.log("Second");
// // // // // // }, 10000)

// // // // // // console.log("Third");

// // // // // // console.log("one");

// // // // // // const id = setInterval(function(){
// // // // // //     console.log("inside setInterval");
// // // // // // }, 60000)

// // // // // // console.log("three");
// // // // // // const r = Math.floor(Math.random(25)*1000);
// // // // // // const g = Math.floor(Math.random(25)*1000);
// // // // // // const b = Math.floor(Math.random(25)*1000);
// // // // // // const rgb = `rgb(${r},${g},${b})`
// // // // // // console.log(rgb);


// // // // // // setInterval(()=>{
// // // // // //     const r = Math.floor(Math.random(25)*100);
// // // // // // const g = Math.floor(Math.random(25)*100);
// // // // // // const b = Math.floor(Math.random(25)*100);
// // // // // // const rgb = `rgb(${r},${g},${b})`
// // // // // // console.log(rgb);
// // // // // //     const applicationArea = document.querySelector(".btn_cont");
// // // // // //     applicationArea.style.backgroundColor=rgb;
// // // // // // },1000)

// // // // // console.log("one");

// // // // // const id = setTimeout(()=>{
// // // // //     console.log("ok")
// // // // // },2000)
// // // // // setTimeout(()=>{
// // // // //     console.log("owk")
// // // // // },2000)

// // // // // setInterval(()=>{
// // // // //     console.log("timeout")
// // // // // }, 2000)


// // // // // console.log("three");
// // // // // console.log(id);
// // // // // clearTimeout(id);


// // // // const boxx = document.querySelector(".bx");
// // // // const button = document.querySelector(".bx button")

// // // // const colchanger = () =>{
// // // //     const id = setInterval(()=>{
// // // //         const r = Math.floor(Math.random(255)*100);
// // // //         const g = Math.floor(Math.random(255)*100);
// // // //         const b = Math.floor(Math.random(255)*100);
// // // //         const rgb = `rgb(${r},${g},${b})`;
// // // //         boxx.style.backgroundColor=rgb;

// // // //     },500)
// // // //     return id;
// // // // }
// // // // const id = colchanger();
// // // // console.log(id);



// // // // button.addEventListener("click",function(){
// // // //    clearInterval(id);
// // // //     button.textContent = boxx.style.backgroundColor;
// // // // })

// // // //cbk func

// // // // function that is passed as an argument to another function is known as callback function.


// // // // const addNum = (num1, num2, onSuccess, onFailure)=>{
// // // //     if(typeof num1 == "number" && typeof num2 == "number"){
// // // //         onSuccess(num1, num2);
// // // //     }
// // // //     else{
// // // //        onFailure(num1, num2);
// // // //     }
// // // // }

// // // // const Add = (num1, num2)=>{
// // // //     console.log(`sum is ${num1+num2}`);
// // // // }

// // // // const warn = (num1, num2)=>{
// // // //     console.log(`${num1} & ${num2} are not numbers, please retry...`);
// // // // }

// // // // addNum(2,"6", Add, warn);

// // // const h1 = document.querySelector(".bx :nth-child(1)");
// // // const h2 = document.querySelector(".bx :nth-child(2)");
// // // const h3 = document.querySelector(".bx :nth-child(3)");
// // // const h4 = document.querySelector(".bx :nth-child(4)");
// // // const h5 = document.querySelector(".bx :nth-child(5)");
// // // const h6 = document.querySelector(".bx :nth-child(6)");

// // // // setTimeout(()=>{
// // // //     h1.style.color="red"
// // // //     h1.textContent="Done"
// // // //     setTimeout(()=>{
// // // //         h2.style.color="blue"
// // // //         h2.textContent="Done"
// // // //         setTimeout(()=>{
// // // //             h3.style.color="yellow"
// // // //             h3.textContent="Done"
// // // //             setTimeout(()=>{
// // // //                 h4.style.color="green"
// // // //                 h4.textContent="Done"
// // // //                 setTimeout(()=>{
// // // //                     h5.style.color="green"
// // // //                     h5.textContent="Done"
// // // //                     setTimeout(()=>{
// // // //                         h6.style.color="green"
// // // //                         h6.textContent="Done"
// // // //                         setTimeout(()=>{
// // // //                             h4.style.color="green"
// // // //                             h4.textContent="Done"
// // // //                         },1000)
// // // //                     },3000)
// // // //                 },2000)
// // // //             },1000)
// // // //         },2000)
// // // //     },2000)
// // // // },1000)

// // // // const colChanger = (element, time, cbk) =>{
// // // //     setTimeout(function(){
// // // //         element.textContent ="Doneee"
// // // //     },1000)
// // // // }

// // // // colChanger(h1, 1000, )


// // // // const element = document.querySelector(".bx :nth-child(1)");

// // // // const addnum = (num1, num2, onFailure, onSuccess)=>{
// // // //     if(typeof num1==="number" && typeof num2==="number"){
// // // //         onSuccess(num1, num2);
// // // //     }
// // // //     else{
// // // //         onFailure(num1, num2);
// // // //     }
// // // // }

// // // // const onSuccess = (num1, num2) => {
// // // //     console.log(`Sum of ${num1} and ${num2} is ${num1+num2}`);
// // // // }
// // // // const onFailure = (num1, num2) =>{
// // // //     console.log(`Please check whether both ${num1} and ${num2} are numbers. If not please change it`)
// // // // }

// // // // addnum(1,"6", onFailure, onSuccess);

// // // const text = document.querySelector(".bx :nth-child(1)");
// // // const text1 = document.querySelector(".bx :nth-child(2)")

// // // const stylechanger = (element, time, tcolor, onSuccess, onFailure) => {
// // //     if (element) {
// // //         setTimeout(() => {
// // //             element.textContent = "Changed!"
// // //             element.style.color = tcolor
// // //             if (onSuccess) {
// // //                 onSuccess();
// // //             }
// // //             else {
// // //                 onFailure();
// // //             }
// // //         }, time)
// // //     }
// // // }

// // // stylechanger(text, 1000, "blue", () =>{
// // //     stylechanger(text1, 1000, "red", ()=>{
// // //         stylechanger(text2, 1000, "yellow", ()=>{

// // //         },()=>{console.log("fail1")})
// // //     })
// // // },
// // //     ()=>{console.log("Failed")}

// // // );

// // // function_name(p1,p2,()=>{
// // //     function_name(p1,p2,()=>{})
// // // },()=>{
// // //     function_name(p1,p2,()=>{
// // // function_name(p1,p2,()=>{}  
// // //     })
// // // })

// // // try{
// // //     console.log(x);
// // // }
// // // catch(e){
// // //     console.log("e")
    
// // // }
// // // finally{
// // //     console.log("retry")
// // // }

// // function tester(){
// //     try{
// //         console.log(x);
// //     }
// //     catch(e){
// //         return(e)
// //     }
// //     finally{
// //         console.log("ok")
// //     }
    
// // }

// // console.log(tester());

// // const CreateOrder = (item) => {
// //     console.log(`order created for ${item}`);
// // }
// // const showOrderSummary = () =>{
// //     console.log("this is the order created - xxxxx012")
// // }

// // const promise = CreateOrder("Iphone5s Space grey 16GB");
// // console.log(promise);

// const walkTheDog =()=>{
//     setTimeout(()=>{
//         console.log("Dog Walk Done!!!");
//     }, 2000);

// }

// const dishClean =() =>{
    
// }

// const takeTheTrash =()=>{
//     setTimeout(()=>{
//         console.log("Trashed the waste!!!");
//     },1000);
// }

// const myPm = new Promise((resolve, reject) =>{
//     setTimeout(()=>{
//         resolve("Cleaned the Dishes!!!");
//     },1000);
// })

// console.log(myPm);

// myPm.then(  setTimeout(()=>{
//     console.log("Trashed the waste!!!");
// },2000))
// .then( setTimeout(()=>{
//     console.log("Dog Walk Done!!!");
// }, 2000))


// // let name1="sayooj"
// // const pm  = new Promise((resolve, reject) =>{
// //     if(name1=="sayooj"){
// //         resolve(name1);
// //     }
// //   else{
// //         reject("ndone");
// //     }
  
// // })

// // console.log(pm)

//const cars = {c1:"maruti 800", c2:"VW Polo 1.5 TDI", c3:"hyundai i20"};

// const cpromise = new Promise((resolve, reject) => {
//     if (car["c1"] === "maruti 80") {
//         resolve(car);
//     }
//     else{
//         reject("no cars match your choice");
//     }
// })

// cpromise.then((value)=>{console.log(value.c1)})

// function checkcar(cars){
//     const mp = new Promise((resolve, reject)=>{
//         if(cars.c3==="hyunai i20"){
//             resolve(`you have checked ${cars.c3}`);
//         }
//         else{
//             reject(cars);
//         }
//     })
//     return mp;
// }

// checkcar(cars).then((value)=>console.log(value))
// .catch((e)=>{console.log(e)})

// const text = document.querySelector(".bx :nth-child(1)");
// const text1 = document.querySelector(".bx :nth-child(2)")
// const text2 = document.querySelector(".bx :nth-child(3)")
// const text3 = document.querySelector(".bx :nth-child(4)")
// const text4 = document.querySelector(".bx :nth-child(5)")

// function changeStyle (element){
//     const chpromise = new Promise((resolve, reject) =>{
//         setTimeout(()=>{
//             resolve(element.textContent="Done", element.style.color="red");
//         },1000)
//     })
//     return chpromise;
// }

// changeStyle(text).then(()=>{
//     return changeStyle(text2)
    
// })
// .then((x)=>{
//     setTimeout(()=>{
//         text3.textContent="donee"
//     },2000)
// })

let userLeft = true, userWatchingCatMeme = false;

function userStatus(ul, uwcm){
    const userPromise = new Promise((resolve, reject) => {
        if(ul){
            resolve({userStatus:"user have left", message: "Bye :)"}, 
                console.log("starting loader"),
                setTimeout(()=>{
                    console.log("Loaded!");
                },3000)
            );
        }
        else if(uwcm){
            resolve({userSatus:"user is watching cat memes", message: "user is happy!"});
        }
    })
    return userPromise;
}

userStatus(true, true).then((
    
)=>{console.log("inside then")})

