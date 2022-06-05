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