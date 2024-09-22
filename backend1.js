// class Car{
//     static Carbrand ="VW India";
//     static displayCarbrand(){
//         console.log(`we are ${this.Carbrand}`)
//     }
//     print(){
//         console.log("printed")
//     }
// }
// Car.displayCarbrand();

// const mycar = new Car();


// mycar.print()
const url = "https://jsonplaceholder.typicode.com/photos"
// const req = new XMLHttpRequest();
// req.open("GET", url);
// req.onload = ()=>{
//     console.log(JSON.parse(req.response)[3].url);
// }
// req.send()

// fetch(url).then((val)=>{
//     console.log(val.json());
// })

const connector = (link)=>{
    const reqprom = new Promise((resolve, reject)=>{
        if(link){
            const req = new XMLHttpRequest();
            req.open("GET", link);
            req.onload = ()=>{
                let data = JSON.parse(req.response);
                console.log(data);
                resolve(data);
            }
            req.send();
            req.onerror = ()=>{"Internet Connection lost OK?"}
        }
        else{
            reject();
        }
    })
    return reqprom;
}

connector(url)
.then((data)=>{
    let id = data[5].id;
    let newUrl = `${url}/${id}`;
    connector(newUrl);
})
.catch((e)=>{
    console.log(e)
})

import {displaydet} from './utils/app.js'

console.log(displaydet());