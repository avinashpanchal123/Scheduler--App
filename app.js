const express = require("express");
const { location } = require("express/lib/response");

const app = express();

const events = require("./events.json");

let arr = []

events.map((el)=>{
    let [currDate, currTime] = el.date_Time.split(" ");

    currDate = currDate.split("-");

    let eventObj = {
        event_name : el.event_name,
        date_Time : [currDate, currTime].join(" ")
    }

    arr.push(eventObj);

})


console.log(arr);

var today = new Date();
var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
var time = today.getHours()+':'+today.getMinutes()
+':'+today.getSeconds()+"."+ today.getMilliseconds()  ;




console.log(date + ' '+ time);



app.listen(2233, ()=>{
    console.log("listening on port 2233")
})