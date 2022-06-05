(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
const secrets = {
    GEOAPI_SECRET : "57af4a9b871548f3b07e1afe28686747",
    LATITUDE : -1.2550144,
    LONGITITUDE : 36.814848,
}
module.exports = secrets;
},{}],2:[function(require,module,exports){
const {GEOAPI_SECRET} = require("./config/index");
// const {LATITUDE, LONGITITUDE } = require("./config/index");
// console.log(GEOAPI_SECRET, LATITUDE, LONGITITUDE);
const successfulLookUp = () =>{
    const {LATITUDE, LONGITITUDE } = require("./config/index");
    //console.log(LATITUDE, LONGITITUDE)
    fetch(`https://api.opencagedata.com/geocode/v1/json?q=${LATITUDE}+${LONGITITUDE}&key=${GEOAPI_SECRET}`)
    .then((res) => {
        res.json();
    })
    .then((results) =>{
        alert(`${results}`);
    })
    .catch( (err)=>{
        console.log(err);
    })
}

let location = document.getElementById("loc");
location.addEventListener('click', successfulLookUp);
},{"./config/index":1}]},{},[2]);
