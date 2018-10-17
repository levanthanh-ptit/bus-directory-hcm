var express = require('express');
var app = express();
var axios = require('axios');
var busDB = require("./busDB.json")
busDB.forEach(element => {
    axios({
        method: 'post',
        url: "http://localhost:8080/api/buses",
        headers: {
            "Content-Type": "application/json"
        },
        data: element
    })
    .then(function (response) {
        console.log(response);
    })
    .catch(function (error) {
        console.log(error);
    });
});
app.listen(3000);