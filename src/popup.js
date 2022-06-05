// popups for service card
let btn_air_dispersion = document.getElementById("btn-air-dispersion");
let text_card = document.getElementById("air-dispersion-modelling");
btn_air_dispersion.addEventListener('click',(e)=>{
    e.preventDefault();
    text_card.style.display = "block";
});
let close_btn = document.getElementById("close-btn")
close_btn.addEventListener("click", (e)=>{
    e.preventDefault();
    text_card.style.display = "none";
})