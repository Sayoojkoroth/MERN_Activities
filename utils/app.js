export const displayName = (Fname, lname)=>{
    console.log(`My name is ${Fname + " " + lname}`);
}

export class Car{
    constructor(make, model, power, year, fueltype, price){
        this.carMake=make;
        this.carModel=model;
        this.powerSpecs=power;
        this.mfgYear=year;
        this.fuelVariant=fueltype;
        this.exSmPrice = price;
    }
    calcOnRoadPrice =()=>{
        try{
            let onRoadPrice = this.exSmPrice + (10*this.exSmPrice)/100
            console.log(onRoadPrice);
        }
        catch(error){
            console.log("error encounter : " + error);
        }
    }
}

export class Owner extends Car{
    constructor(name, age, occ, make, model,power, year, fueltype, price ){
        super(make, model, power, year, fueltype, price);
        this.ownerName = name;
        this.ownerAge = age;
        this.occupation = occ;
    }

    static SvcName = "SIX Grids Automotive";

    displayOwnerInfo(){
        const ownerInfo = {};
        ownerInfo.OwnerName =this.ownerName;
        ownerInfo.OwnerAge = this.ownerAge;
        ownerInfo.occupation = this.occupation;
        ownerInfo.car = this.carMake;
        ownerInfo.svc = this.SvcName
        return ownerInfo;
    }

    static displayServiceCenterName = () =>{
        console.log(this.SvcName);

    }

}

export const displaydet = ()=>{
    return "display!!";
}