import {reqlink} from './Student.js';
export const link = reqlink;

export function requestCall(url){
    const prom = new Promise((resolve, reject)=>{
        const req = new XMLHttpRequest();
        req.open("GET", url);
        req.onload = ()=>{
            let resp = JSON.parse(req.response);
            resolve(resp);
        }
        req.send();
    })
    return prom;
}
