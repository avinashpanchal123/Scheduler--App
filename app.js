const express = require("express");
const { location } = require("express/lib/response");

const app = express();

const events = require("./events.json");

let flag = true;






let today;
let currDate;
let currTime;

let a;
let b; 

let sec;
let hrs;
let month;
let date;
let mins

let event_name;
let timer  = setInterval(() => {
    getOutput()
}, 1000);



function getOutput(){
    today = new Date();

     if((today.getMonth()+1) < 10){
         month = "0"+(today.getMonth()+1)
     }
     else{
         month = (today.getMonth()+1)
     }

     if( today.getDate() < 10){
         date = "0"+ today.getDate()
     }
     else{
         date = today.getDate()
     }

    if( today.getHours() < 10){
        hrs = "0"+today.getHours()
    }
    else{
        hrs  = today.getHours()
    }

    if( today.getMinutes() < 10){
        mins = "0"+ today.getMinutes()
    }
    else{
        mins = today.getMinutes()
    }

    if( today.getSeconds() < 10) {
        sec = "0" + today.getSeconds()
    }
    else{
        sec = today.getSeconds()
    }

    currDate = today.getFullYear()+'-'+month+'-'+date;


    currTime = hrs+":"+mins+":"+sec;

    a = (currDate+" "+currTime);

   

   for (let i = 0; i < events.length; i++) {
  
    b = events[i].date_Time;
    
   if( a == b){
    clearInterval(timer)
    event_name = events[i].event_name;
    console.log("I am called");
     printOutput(event_name);
   
   }

   }
//    console.log(a);
  

}





function printOutput(str){
    let arr = str.trim().split("");
    
    let left = 0; 
    let right = arr.length-1;

    while( left < right){
        let temp = arr[left];
         arr[left]  = arr[right];
        arr[right] = temp
        left++;
        right--;
    }
    let output = arr.join("");
   
    let outputTimer = setTimeout(() => {
        console.log(output);
        timer = setInterval(getOutput, 200)
    }, ((output.length) * 1000));
}



app.listen(2233, ()=>{
    console.log("listening on port 2233")
})