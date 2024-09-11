// // // // // // // // // // // // // // // // //console.log(Hello World!!!)
// // // // // // // // // // // // // // // // //console.log("7","8")
// // // // // // // // // // // // // // // // // let myName =" _Sayooj"; myName ="__Sk";
// // // // // // // // // // // // // // // // //  myName ="__Sku";
// // // // // // // // // // // // // // // // // console.log(myName);

// // // // // // // // // // // // // // // // // const pi=3.14
// // // // // // // // // // // // // // // // // let area =0, r=10;
// // // // // // // // // // // // // // // // // area = pi*r*r;
// // // // // // // // // // // // // // // // // console.log(area);

// // // // // // // // // // // // // // // // // let firstName =" Sayooj Koroth";
// // // // // // // // // // // // // // // // // console.log(firstName.length);
// // // // // // // // // // // // // // // // // let Name = firstName.trim();
// // // // // // // // // // // // // // // // // console.log(Name)
// // // // // // // // // // // // // // // // // console.log(Name.length);

// // // // // // // // // // // // // // // // // //console.log(typeof(Name));

// // // // // // // // // // // // // // // // // let x=2, lName="Koroth";
// // // // // // // // // // // // // // // // // console.log(typeof( + lName));

// // // // // // // // // // // // // // // // // let fname="sayooj", lname ="koroth"

// // // // // // // // // // // // // // // // // fullName = fname.concat(" " +lname);
// // // // // // // // // // // // // // // // // console.log(fullName);

// // // // // // // // // // // // // // // // // let num1="56", num_2 = "04";
// // // // // // // // // // // // // // // // // console.log(Number(num1)+ " " +Number(num_2));

// // // // // // // // // // // // // // // // let myName ="Sayooj"
// // // // // // // // // // // // // // // // let age = 24
// // // // // // // // // // // // // // // // let bio = `My name is ${myName} and my age is ${age}`;
// // // // // // // // // // // // // // // // console.log(bio);

// // // // // // // // // // // // // // // // let isVerified
// // // // // // // // // // // // // // // // let ageOfP1="42", ageOfP2=42;
// // // // // // // // // // // // // // // // isVerified = (ageOfP1!==ageOfP2);
// // // // // // // // // // // // // // // // console.log(`This is ${isVerified}`);

// // // // // // // // // // // // // // // // let myAge = 120;
// // // // // // // // // // // // // // // // if(myAge>18){
// // // // // // // // // // // // // // // //     console.log(`your age is ${myAge} which means that you are an Adult`);
// // // // // // // // // // // // // // // // }
// // // // // // // // // // // // // // // // else if(myAge==18){
// // // // // // // // // // // // // // // //     console.log("OK");
// // // // // // // // // // // // // // // // }

// // // // // // // // // // // // // // // // else{
// // // // // // // // // // // // // // // //     console.log("not OK");
// // // // // // // // // // // // // // // // }


// // // // // // // // // // // // // // // // let ageOC =10, drinkable;
// // // // // // // // // // // // // // // // if(ageOC<=10){
// // // // // // // // // // // // // // // //     drinkable="milk";
// // // // // // // // // // // // // // // // }
// // // // // // // // // // // // // // // // else if(ageOC>10){
// // // // // // // // // // // // // // // //     drinkable='mirinda'
// // // // // // // // // // // // // // // // }
// // // // // // // // // // // // // // // // console.log(`since your age is ${ageOC} you can only drink - ${drinkable}`);

// // // // // // // // // // // // // // // // drinkable = ageOC<=10 ? "MILK" : "PEPSI"
// // // // // // // // // // // // // // // // console.log(drinkable);

// // // // // // // // // // // // // // // // let fname ="sayooj", lnam="koroth", age1=24;
// // // // // // // // // // // // // // // // if((fname+lnam).length==14 || (age>18) ){
// // // // // // // // // // // // // // // //     console.log("application considered!!!");
// // // // // // // // // // // // // // // // }
// // // // // // // // // // // // // // // // else{
// // // // // // // // // // // // // // // //     console.log("recheck application!!!");
// // // // // // // // // // // // // // // // }


// // // // // // // // // // // // // // // // var yob = 1996;

// // // // // // // // // // // // // // // // switch(yob){
// // // // // // // // // // // // // // // //     case 1996: console.log("ok2");
// // // // // // // // // // // // // // // //     case 196: console.log("OK")
// // // // // // // // // // // // // // // //     case 1999 :console.log("OK1");
// // // // // // // // // // // // // // // //     default :console.log("NOT OK")   

// // // // // // // // // // // // // // // // }

// // // // // // // // // // // // // // // // // let inputFromUser = +prompt("Enter input"), sum=0, i=1;
// // // // // // // // // // // // // // // // // console.log(typeof(inputFromUser));
// // // // // // // // // // // // // // // // // let fact=1;

// // // // // // // // // // // // // // // // // while(i<=inputFromUser){
// // // // // // // // // // // // // // // // //     console.log(i**2);
// // // // // // // // // // // // // // // // //     i=i+1;
// // // // // // // // // // // // // // // // // }

// // // // // // // // // // // // // // // // // for(let x=1; x<=inputFromUser; x++){

// // // // // // // // // // // // // // // // //     if(x==5){
// // // // // // // // // // // // // // // // //         console.log("skipped");
// // // // // // // // // // // // // // // // //         break;
// // // // // // // // // // // // // // // // //     }
// // // // // // // // // // // // // // // // //     console.log(x);
// // // // // // // // // // // // // // // // // }

// // // // // // // // // // // // // // // // let iter=10;

// // // // // // // // // // // // // // // // // do{
// // // // // // // // // // // // // // // // //     console.log("iter");
// // // // // // // // // // // // // // // // //     ++iter
// // // // // // // // // // // // // // // // // }
// // // // // // // // // // // // // // // // // while(iter<inputFromUser)

// // // // // // // // // // // // // // // // // let myFirstArray =['qwqw',5,true,"tyty"], historyArr;
// // // // // // // // // // // // // // // // // console.log(myFirstArray[2]);
// // // // // // // // // // // // // // // // // myFirstArray.unshift("newVal",7,"35345,",`"imp`);
// // // // // // // // // // // // // // // // // console.log(myFirstArray);
// // // // // // // // // // // // // // // // // let arr2= [...myFirstArray];
// // // // // // // // // // // // // // // // // console.log(arr2);
// // // // // // // // // // // // // // // // // console.log(myFirstArray[1]===arr2[1]);

// // // // // // // // // // // // // // // // // console.log("--------------------")

// // // // // // // // // // // // // // // // // const carBrands = [], userInputrecords =[];
// // // // // // // // // // // // // // // // // let userInputlimit = +prompt("Enter the number of records you want to insert :")
// // // // // // // // // // // // // // // // // for(let i=0;i<userInputlimit;i++){
// // // // // // // // // // // // // // // // //     let userrec = prompt("enter record :")
// // // // // // // // // // // // // // // // //     userInputrecords.push(userrec);
// // // // // // // // // // // // // // // // // }

// // // // // // // // // // // // // // // // // console.log(userInputrecords);

// // // // // // // // // // // // // // // // const arr1=["sayooj" ,"koroth","Male",24, '03-07-1996'];

// // // // // // // // // // // // // // // // // let i=0;
// // // // // // // // // // // // // // // // // while(i<=arr1.length-1){
// // // // // // // // // // // // // // // // //     console.log(` + ${arr1[i]} + `);
// // // // // // // // // // // // // // // // //     let str1= arr1[i];
// // // // // // // // // // // // // // // // //     let j=0;
// // // // // // // // // // // // // // // // //     while(j<=str1.length-1){
// // // // // // // // // // // // // // // // //         console.log(str1[j]);
// // // // // // // // // // // // // // // // //         j++
// // // // // // // // // // // // // // // // //     }
// // // // // // // // // // // // // // // // //     i++;
// // // // // // // // // // // // // // // // // }

// // // // // // // // // // // // // // // // // let numbers=[2,4,6,8,10,12,14,16,18,20];

// // // // // // // // // // // // // // // // // for(let number in numbers){
// // // // // // // // // // // // // // // // //     console.log(numbers[number]);
// // // // // // // // // // // // // // // // // }

// // // // // // // // // // // // // // // // // console.log("---------------")

// // // // // // // // // // // // // // // // // let [roll_1, roll_2, ...roll3]=numbers;

// // // // // // // // // // // // // // // // // const names =["sayooj","sa","gh","dd","ded","ghi","opo","paul","gtd","tdi"];
// // // // // // // // // // // // // // // // // let [name1, name2, ...name3] = names;
// // // // // // // // // // // // // // // // // console.log(Array.isArray(name3))

// // // // // // // // // // // // // // // // const car_obj = { Brand :"Maruti",
// // // // // // // // // // // // // // // //                   model :"800",
// // // // // // // // // // // // // // // //                   cubicCap : 799,
// // // // // // // // // // // // // // // //                   YOM : 1998,
// // // // // // // // // // // // // // // //                   ownership : "3rd" 
// // // // // // // // // // // // // // // //  }
// // // // // // // // // // // // // // // // car_obj.model='Alto';
// // // // // // // // // // // // // // // // car_obj.price=300000;

// // // // // // // // // // // // // // // // // let keyval="discountPrice"
// // // // // // // // // // // // // // // // //  console.log(car_obj["YOM"]);
// // // // // // // // // // // // // // // // //  car_obj[keyval]=280000;
// // // // // // // // // // // // // // // // //  console.log("----------");

// // // // // // // // // // // // // // // // //  const personObj ={ fname:"sayooj",
// // // // // // // // // // // // // // // // //                     lname:"koroth",
// // // // // // // // // // // // // // // // //                     age:"2#",
// // // // // // // // // // // // // // // // //                     place:"ko#######",
// // // // // // // // // // // // // // // // //                     mstatus :"Single"
// // // // // // // // // // // // // // // // //   }

// // // // // // // // // // // // // // // // //   personObj.gender="Male";
// // // // // // // // // // // // // // // // //   personObj["zip"]=760098;

// // // // // // // // // // // // // // // // //   console.log(personObj);

// // // // // // // // // // // // // // // // //   for(items in personObj){
// // // // // // // // // // // // // // // // //     if(personObj[items]=="2#"){
// // // // // // // // // // // // // // // // //         personObj[items]=24;
// // // // // // // // // // // // // // // // //     }
// // // // // // // // // // // // // // // // //   }

// // // // // // // // // // // // // // // // //   const key1="objkey1";
// // // // // // // // // // // // // // // // //   const key2="objkey2";
// // // // // // // // // // // // // // // // //   const value1="myvalue1";
// // // // // // // // // // // // // // // // //   const value2="myvalue2";

// // // // // // // // // // // // // // // // //   const realobj ={};
// // // // // // // // // // // // // // // // //   realobj[key1]= value1;
// // // // // // // // // // // // // // // // //   realobj[key2]=value2;
// // // // // // // // // // // // // // // // //   console.log(realobj);

// // // // // // // // // // // // // // // // const newObj = {...car_obj};
// // // // // // // // // // // // // // // // console.log(newObj);

// // // // // // // // // // // // // // // // let [brandname,modelname] =newObj;
// // // // // // // // // // // // // // // // console.log(brandname, modelname);


// // // // // // // // // // // // // // // const arr1 =["name","phone","age",56,67000,411];

// // // // // // // // // // // // // // // let [var1,var2,...var3]=arr1;
// // // // // // // // // // // // // // // console.log(var1,var2, var3);

// // // // // // // // // // // // // // // const objcar ={car:"honda civic",
// // // // // // // // // // // // // // //                 bike:"himalayan 411",
// // // // // // // // // // // // // // //                 laptop: "asus",
// // // // // // // // // // // // // // //                 phone: "iphone",
// // // // // // // // // // // // // // //                 tablet: "samsung",
// // // // // // // // // // // // // // //                 chair:"savya",
// // // // // // // // // // // // // // //                 carNo: 56_5675
// // // // // // // // // // // // // // // }

// // // // // // // // // // // // // // // const newcar ={...objcar, k1:"val1"}
// // // // // // // // // // // // // // // console.log(newcar);

// // // // // // // // // // // // // // // let {car:mc, bike:mb, ...rest}=objcar;
// // // // // // // // // // // // // // // console.log(`my car is ${mc} and bike is ${mb}.` , rest);

// // // // // // // // // // // // // // // objcar.newField=null;
// // // // // // // // // // // // // // // objcar["newField1"]= undefined;

// // // // // // // // // // // // // // // console.log(objcar);

// // // // // // // // // // // // // // // for(let item in objcar){
// // // // // // // // // // // // // // //     console.log(item +" : "+objcar[item]);
// // // // // // // // // // // // // // // }

// // // // // // // // // // // // // // // const students=[
// // // // // // // // // // // // // // //     {name:"sk", gender:"Male", rollno:22, age:16},
// // // // // // // // // // // // // // //     {name: "rk", gender:"male", rollno:43, age:17},
// // // // // // // // // // // // // // //     {name:"pp", gender:"Female", rollno:41,age:19},
// // // // // // // // // // // // // // // ]


// // // // // // // // // // // // // // // const [{name:Name},,{gender}] = students
// // // // // // // // // // // // // // // // console.log(Name, gender);

// // // // // // // // // // // // // // const ages =[10,42,15,22,11,74,39,2], results=[];

// // // // // // // // // // // // // // for(let age of ages){
// // // // // // // // // // // // // //     const obj1={age:age, name:"dRAGON"};
// // // // // // // // // // // // // //     results.push(obj1);
// // // // // // // // // // // // // // }
// // // // // // // // // // // // // // // console.log(results);


// // // // // // // // // // // // // //functions
// // // // // // // // // // // // // // const arrck =[10,23,33,75,3,4,55,29,66,49,7,6,66,6,666,0,98,808,209.8, 0.7, -3.4, 4**6];
// // // // // // // // // // // // // // console.log(arrck);
// // // // // // // // // // // // // // let inpnum=  +prompt("enter the no to be checked :")
// // // // // // // // // // // // // // console.log(displaySum(inpnum1, inpnum2));

// // // // // // // // // // // // // //const displaySum = function(num1, num2){
// // // // // // // // // // // // // //     return `Sum is ${num1+num2}`;
// // // // // // // // // // // // // // }

// // // // // // // // // // // // // //const isEven = function (number){
// // // // // // // // // // // // // //     if(number%2==0){
// // // // // // // // // // // // // //         return true;
// // // // // // // // // // // // // //     }
// // // // // // // // // // // // // //     else{
// // // // // // // // // // // // // //         return false;
// // // // // // // // // // // // // //     }
// // // // // // // // // // // // // // }

// // // // // // // // // // // // // // // console.log(isEven(inpnum1));
// // // // // // // // // // // // // // console.log(firstLetterExtractor(inpstring));

// // // // // // // // // // // // // // function firstLetterExtractor(string){
// // // // // // // // // // // // // //     return string[0];
// // // // // // // // // // // // // // }
// // // // // // // // // // // // // // console.log(searchNum(inpnum));

// // // // // // // // // // // // // // const searchNum = function(number){
// // // // // // // // // // // // // //     for(let item in arrck){
// // // // // // // // // // // // // //         if(arrck[item]==number){
// // // // // // // // // // // // // //             return `number ${number} exists at position ${item}.`
// // // // // // // // // // // // // //         }
// // // // // // // // // // // // // //     }
// // // // // // // // // // // // // // }

// // // // // // // // // // // // // const myArray=[1,666,"jetta","turbin2v.0",56456,6575,777,0.99978567567567754756756764564554645654654];
// // // // // // // // // // // // // let [injetor_no,,model, ...restAttr]=myArray;
// // // // // // // // // // // // // console.log(injetor_no,model, restAttr);


// // // // // // // // // // // // // const obj1={name:"sayooj", occ:"itemp", age:23, mrdstats:false};

// // // // // // // // // // // // // const {name:nm,age:ag}=obj1;
// // // // // // // // // // // // // console.log(nm, ag);

// // // // // // // // // // // // // const ar1=[{name:"say",age:22,gender:"M"},
// // // // // // // // // // // // //             {name:"ksa",age:21,gender:"F"},
// // // // // // // // // // // // // ]

// // // // // // // // // // // // // for(item of ar1){
// // // // // // // // // // // // //    var obj2=item
// // // // // // // // // // // // // }

// // // // // // // // // // // // // const addnum = (num1, num2) => {
// // // // // // // // // // // // //     console.log(num1+num2);
// // // // // // // // // // // // // }



// // // // // // // // // // // // // const insider = () =>{
// // // // // // // // // // // // //     console.log("hello we are inside insider");
// // // // // // // // // // // // //     console.log("calling insider1...");
// // // // // // // // // // // // //     const insider1 =(name1) =>{
// // // // // // // // // // // // //         return `My name is ${name1}`;
// // // // // // // // // // // // //     }
// // // // // // // // // // // // //     console.log(insider1("fghfdb"
// // // // // // // // // // // // //     ));
// // // // // // // // // // // // // }

// // // // // // // // // // // // // insider();

// // // // // // // // // // // // // var name1="hjvbjhbvhj"
// // // // // // // // // // // // // {
// // // // // // // // // // // // //     console.log(name1);
// // // // // // // // // // // // //     var name1="sayooj"
// // // // // // // // // // // // //     console.log(name1.toUpperCase());
// // // // // // // // // // // // // }

// // // // // // // // // // // // // console.log(name1);

// // // // // // // // // // // // // const obj12 ={fname:"sayooj",lname:"k",age:24};

// // // // // // // // // // // // // const displayDet = ({fname:ty, lname}) =>{
// // // // // // // // // // // // //     return `My name is ${ty +lname}`;
// // // // // // // // // // // // // }

// // // // // // // // // // // // // // console.log(displayDet(obj12));

// // // // // // // // // // // // // const displayName = () =>{
// // // // // // // // // // // // //     console.log("gfdgdfg")
// // // // // // // // // // // // // }
// // // // // // // // // // // // // const displayDet = () =>{
// // // // // // // // // // // // //     console.log("loading details....");
// // // // // // // // // // // // //     return displayName();
// // // // // // // // // // // // // }

// // // // // // // // // // // // // displayDet();

// // // // // // // // // // // // const addnum = (num1, num2, cbk) => {
// // // // // // // // // // // //     let res = num1+num2;
// // // // // // // // // // // //     cbk(res);
// // // // // // // // // // // // }

// // // // // // // // // // // // const dispResult =(result) =>{
// // // // // // // // // // // //     console.log(result);
// // // // // // // // // // // // }

// // // // // // // // // // // // addnum(45,0.9,dispResult);

// // // // // // // // // // // // const numbers =[2,4,6,8,10];

// // // // // // // // // // // // numbers.forEach((num) =>{
// // // // // // // // // // // //     console.log(num**2);
// // // // // // // // // // // // })
// // // // // // // // // // // // const arr2 = namesdet.map((arrdata)=>{
// // // // // // // // // // // //    if(arrdata.age>25){
// // // // // // // // // // // //     return arrdata.fname;
// // // // // // // // // // // //    }
// // // // // // // // // // // // })

// // // // // // // // // // // // console.log(arr2);

// // // // // // // // // // // // const filterResult = namesdet.filter((data) =>{

// // // // // // // // // // // //         return data.fname ==="sayooj"
// // // // // // // // // // // //     //return data.age>25;
// // // // // // // // // // // // })

// // // // // // // // // // // // console.log(filterResult);

// // // // // // // // // // // // const oddNumbers =arry.filter((num) => {
// // // // // // // // // // // //     return num %2==0;
// // // // // // // // // // // // })

// // // // // // // // // // // // console.log(oddNumbers);




// // // // // // // // // // // // const TotalAmt = productsInCart.reduce((acc, curval) =>{
// // // // // // // // // // // //     return acc + curval.qty*curval.price;
// // // // // // // // // // // // },0);
// // // // // // // // // // // // console.log(TotalAmt);
// // // // // // // // // // // // console.log(typeof TotalAmt);

// // // // // // // // // // // // const numberrand =[30.4, 30.0, -12, 45022, 4*2, 0, 23022];

// // // // // // // // // // // // productsInCart.sort((a,b) =>{
// // // // // // // // // // // //     return a.qty-b.qty;
// // // // // // // // // // // // });
// // // // // // // // // // // // console.log(productsInCart);

// // // // // // // // // // // // const res1 = productsInCart.every((data) => {
// // // // // // // // // // // //     return data.qty==0;
// // // // // // // // // // // // })
// // // // // // // // // // // // console.log(res1);
// // // // // // // // // // // // arry.splice(1,0,1,2,3,3,4);
// // // // // // // // // // // // console.log(arry);

// // // // // // // // // // // // 

// // // // // // // // // // // // const marks =[23,23,9,18.5,25,22,22,21,20,11,6,14];
// // // // // // // // // // // // const roll =[1,2,8,4,3];


// // // // // // // // // // // // const cartproducts =[{prodname:"dumbell 10KGX2set", qty:3, price:150, warehouse:"Delhi"},
// // // // // // // // // // // //                      {prodname:"hand-grip", qty:12, price:100, warehouse:"HR"},
// // // // // // // // // // // //                      {prodname:"resistanceBand", qty:10, price:100, warehouse:"Banglore"},
// // // // // // // // // // // //                      {prodname:"handbell", qty:1, price:4000, warehouse:"hr"},
// // // // // // // // // // // //                      {prodname:"excercise seat", qty:1, price:1500, warehouse:"HR"},
// // // // // // // // // // // //                      {prodname:"stressball", qty:50, price:5, warehouse:"Bilaspur"}
// // // // // // // // // // // //                     ]



// // // // // // // // // // // // const finder = cartproducts.some((pdt) => {
// // // // // // // // // // // //     return pdt.warehouse=="hr";
// // // // // // // // // // // // })

// // // // // // // // // // // // console.log(finder);

// // // // // // // // // // // // roll.splice(2, 2, "number", 22, "dummyData");

// // // // // // // // // // // // console.log(roll);

// // // // // // // // // // // const id = new Set();
// // // // // // // // // // // id.add(6);
// // // // // // // // // // // id.add("cdhvb");
// // // // // // // // // // // id.add(-10);
// // // // // // // // // // // id.add(10);
// // // // // // // // // // // id.add(10);
// // // // // // // // // // // id.add(6);
// // // // // // // // // // // id.add(61);

// // // // // // // // // // // console.log(id.has(6));

// // // // // // // // // // // for(let item of id){
// // // // // // // // // // //     console.log(item);
// // // // // // // // // // // }

// // // // // // // // // // // const partNumber = new Set();
// // // // // // // // // // // partNumber.add(560065);
// // // // // // // // // // // isAvailable =partNumber.has(560065);
// // // // // // // // // // // console.log(`the part number is ${isAvailable}.`);

// // // // // // // // // // // const about = () =>{
// // // // // // // // // // //     console.log(`the car model is ${this.model} of the year ${this.year}.`);
// // // // // // // // // // // }
// // // // // // // // // // // const car = {
// // // // // // // // // // //     model:"Hyundai",
// // // // // // // // // // //     year:2014,
// // // // // // // // // // //     description : about
// // // // // // // // // // // }

// // // // // // // // // // // console.log(car);

// // // // // // // // // // const dispText = function(loc, zipc) {
// // // // // // // // // //     console.log(`This is a sample line please!!! My name is ${this.pname} and age is ${this.age} at ${loc} & pincode - ${zipc}.`);
// // // // // // // // // // }

// // // // // // // // // // const testObj = {
// // // // // // // // // //     pname: "sk",
// // // // // // // // // //     age: 45
// // // // // // // // // // };

// // // // // // // // // // let displayText = dispText.bind(testObj,"KL", 673612);

// // // // // // // // // // displayText();

// // // // // // // // // const dispSerdet = function(dateserv,gName){
// // // // // // // // //    console.log(`Your vehicle1098 : ${this.cname} bearing no : ${this.regNo} is successfully serviced on ${dateserv} by ${gName} motors. Thank You!!`)
// // // // // // // // // }

// // // // // // // // // const cdet1 ={cname:"innova",regNo:5460 ,ownerName:"dummydat"};
// // // // // // // // // const cdet2 ={cname:"M800",regNo:1098 ,ownerName:"dummydat"};
// // // // // // // // // const cdet3 ={cname:"polo",regNo:5611 ,ownerName:"dummydat"};

// // // // // // // // // dispSerdet.apply(cdet3,[23082024, "sixgrids"]);

// // // // // // // // // const cpydisp = dispSerdet.bind(cdet2, 6062023, "SG");

// // // // // // // // // cpydisp();

// // // // // // // // const createUserDet = function(fname, lname, age, email){
// // // // // // // //         const obj ={};
// // // // // // // //         obj.firstname = fname;
// // // // // // // //         obj.lname = lname;
// // // // // // // //         obj.email =email;
// // // // // // // //         obj.age =age;
// // // // // // // //         obj.bio = function(){
// // // // // // // //             return (`My name is ${this.firstname} ${this.lname}.`)
// // // // // // // //         }
// // // // // // // //         return obj;
// // // // // // // // }

// // // // // // // // const user1 = createUserDet("sayojj","koroth", 24, "sk@gmail.com");
// // // // // // // // console.log(user1);
// // // // // // // // console.log(user1.bio());

// // // // // // // class SvcForm {
// // // // // // //     constructor(vehMake, vehModel, VehMfgYr, vehKms) {
// // // // // // //         this.vehMake = vehMake;
// // // // // // //         this.vehModel = vehModel;
// // // // // // //         this.VehMfgYr = VehMfgYr;
// // // // // // //         this.vehKms = vehKms;
// // // // // // //         this.sType;
// // // // // // //     }

// // // // // // //     serviceType() {
// // // // // // //         if (this.vehKms == 50000 || this.vehKms === 100000) {
// // // // // // //             this.sType = "Major Service!!";
// // // // // // //         }
// // // // // // //         else {
// // // // // // //             this.sType = 'Normal Service!!';
// // // // // // //         }
// // // // // // //     }
// // // // // // // }

// // // // // // // const car1 = new SvcForm("VW", "Polo", 2013, 50000);
// // // // // // // car1.serviceType();
// // // // // // // // console.log(car1.sType);

// // // // // // // // console.log(typeof car1);

// // // // // // // class library {
// // // // // // //     constructor(bookID, bookName, bookPrice, bookType) {
// // // // // // //         this.bookID = bookID;
// // // // // // //         this.bookName = bookName;
// // // // // // //         this.bookPrice = bookPrice;
// // // // // // //         this.bookType = bookType;
// // // // // // //     }
// // // // // // //     printBookDetails() {
// // // // // // //         console.log(`${this.bookName} bearing the bookID : ${this.bookID} is a ${this.bookType} and it's ${this.bookType ==="Adult" ? 'not': 'ok and'} permitted for students`);
// // // // // // //     }
// // // // // // // }

// // // // // // // class sublibrary extends library {
// // // // // // //      constructor(bookID, bookLender){
// // // // // // //         super(bookID)
// // // // // // //         this.bl = bookLender;
// // // // // // //      }
// // // // // // // }


// // // // // // // const book1 = new sublibrary(7675500, "destiny", 430, "Adult", "syam");
// // // // // // // // book1.printBookDetails();

// // // // // // const cartproducts =[4,55,60,981,0.5];

// // // // // const printdetails = function(sdate, scentre){
// // // // //     console.log(`My car ${this.cmake} - ${this.model} was serviced recently on ${sdate} from ${scentre}.`);
// // // // // }

// // // // // const car1 ={cmake:"VW", model:"POLO", ownerName:"Srk"};
// // // // // const car2 ={cmake:"Honda", model:"Jazz", ownerName:"pjk"};
// // // // // const car3 ={cmake:"Maruti", model:"Alto", ownerName:"qwr"};
// // // // // const car4 ={cmake:"Tata", model:"Safari", ownerName:"tyu"};

// // // // // const x = printdetails.bind(car3,23042024,"SixGrids");
// // // // // x();

// // // // class Student {
// // // //     constructor(sname, srno, smarks){
// // // //         this.studentName = sname;
// // // //         this.studentRollno =srno;
// // // //         this.studentMark = smarks;
// // // //     }
// // // //     computeFinalGrade(){
// // // //         let grade = this.grader();  
// // // //         console.log(`Grade of ${this.studentName} is ${grade}`);
// // // //     };
// // // //     grader(){
// // // //         let grade;
// // // //         switch(this.studentMark){
// // // //             case (x>=95) : return grade = "A+";
// // // //                                           break;
// // // //             case this.studentMark >= 90: return grade="A";
// // // //                                           break;
// // // //             case this.studentMark >= 80: return grade="B";
// // // //                                           break;
// // // //             case this.studentMark >= 70: return grade="c";
// // // //                                           break;
// // // //             // case this.studentMark >= 60: return grade="D";
// // // //                                           break;
// // // //             default : return this.studentMark;
// // // //         }
// // // //     };
// // // // }

// // // // const student1 = new Student("Sayooj", 22, 53);
// // // // const student2 =new Student("Srk", 85, 100);
// // // // student2.computeFinalGrade();

// // // const productsInCart = [{pName:"Air Filter", pId: "K41RE4", pQty: 1, pPrice:100},
// // //                         {pName:"Oil filter", pId: "IWER342" , pQty:5 , pPrice:100},
// // //                         {pName:"AC filter", pId: "89TYYE" , pQty:1 , pPrice:100},
// // //                         {pName:"Drain bolt", pId: "001OOP" , pQty:1 , pPrice:100},
// // //                         {pName:"Diesel filter", pId: "NB34CVF" , pQty:1 , pPrice:100},
// // //                         {pName:"Power Steering rack", pId: "QAS340" , pQty:1 , pPrice:100},
// // //                         {pName:"Suspension strut", pId: "NMO99AQ" , pQty:1 , pPrice:100},
// // //                         {pName:"Engine mount - TDI", pId: "EM09TDI" , pQty:1 , pPrice:100}
// // // ]

// // // const redres = productsInCart.reduce((acc, curval) =>{
// // //     return acc +curval.pQty * curval.pPrice;
// // // },0)

// // // console.log(redres);

// // // productsInCart.sort((a,b) => {
// // //     return a.pQty-b.pQty;
// // // });
// // // console.log(productsInCart);

// // // const finder = productsInCart.find((checker) => {
// // //     return checker.pQty===5;
// // // })

// // // console.log(finder);

// // // const everyres = productsInCart.every((pdt)=>{
// // //     return pdt.pPrice===100;
// // // })

// // // console.log(everyres);

// // // productsInCart.splice(2,1,56,77,100);
// // // console.log(productsInCart);
 

// // const dispDetails = function (sub){
// //     console.log(`Student name : ${this.sName} have scored ${this.sMarks} in ${sub}`);
// // }

// // const s1= {
// //     sName:"sjkkth",
// //     sMarks:67,
// //     sAge:16
// // } 

// // const S2 = {
// //     sName:"reqwty",
// //     sMarks:53,
// //     sAge:17
// // }

// // const dispDetailsCpy = dispDetails.bind(S2,["English"]);

// // console.log(dispDetailsCpy);
// // dispDetailsCpy();


// class Cars {
//     constructor(make, model,fuelType ){
//         this.carMake = make;
//         this.carModel =model;
//         this.fuelVariant = fuelType;
//     }
//     mileageDeterminer(){
//         let mileage = this.fuelVariant==="Petrol" ? `Your ${this.carModel} will get 10 to 15 in City & 15-19 in Highways` : `Your ${this.carModel} will get 15-20 in City and 18-23 in Highways`;
//         console.log(mileage);
//     }
// }

// const polo = new Cars("VW", "POLO 1.5 TDI", "Diesel");

// polo.mileageDeterminer();



















