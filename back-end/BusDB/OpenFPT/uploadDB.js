// Json struct
// "StopId":1,
// "Code":"Q6 095",
// "Name":"Chu Văn An",
// "StopType":"Trụ dừng",
// "Zone":"Quận 6",
// "Ward":null,
// "AddressNo":"27",
// "Street":"Tháp Mười",
// "SupportDisability":"",
// "Status":"Đang khai thác",
// "Lng":106.652554,
// "Lat":10.750232,
// "Search":"CVA 27 TM",
// "Routes":"01, 07, 10, 144, 150, 25",
//#############################################
// DB Struct
// id: 1;
// route: 1;
// Name: "Chu Văn An";
// Lng: 106.652554;
// Lat: 10.750232;

var express = require('express');
var app = express();
var bus = require("./busStopDB.json");
var axios = require('axios');
var busMod = [];
// bus.forEach(element => {
//     let array = element.Routes.split(', ');
//     let flag = array.find((e) => {
//         return e == "76";
//     });
//     if (flag !== undefined) {
//         var bus76 = {
//             id: element.StopId,
//             route: 76,
//             code: element.Code,
//             name: element.Name,
//             lng: element.Lng,
//             lat: element.Lat
//         }
//         busMod.push(bus76);
//     }
// });
// console.log(busMod.length);
// busMod.forEach(element => {
//     axios({
//         method: 'post',
//         url: "http://localhost:8080/api/stops",
//         headers:{
//             "Content-Type": "application/json" 
//         },
//         data: element
//       })
//         .then(function (response) {
//             console.log(response);
//         })
//         .catch(function (error) {
//             console.log(error);
//         });
// });
axios({
    method: 'get',
    url: "http://localhost:8080/api/stops/getinbounds?lng1=106.772549&lat1=10.839028&lng2=106.791241&lat2=10.847313")
    .then(function (response) {
        console.log(response);
    })
    .catch(function (error) {
        console.log(error);
    });
app.listen(3000);