const btn = document.getElementById("first-next");
const secondbtn = document.getElementById('second-next');
const firstbooking = document.querySelector('.first-booking-section');
const secondbooking = document.querySelector('.second-booking-section');
const thirdbooking = document.querySelector(".third-booking-section")
const firstbackbtn = document.getElementById('first-back')
const secondBackbtn = document.getElementById('second-back')

btn.addEventListener('click', () =>{
    firstbooking.style.display = "none";
    secondbooking.style.display = "block";
})

firstbackbtn.addEventListener('click', () =>{
    firstbooking.style.display = "block";
    secondbooking.style.display = "none";
})

secondBackbtn.addEventListener('click', () =>{
    firstbooking.style.display = "none";
    secondbooking.style.display = "block";
    thirdbooking.style.display = "none"
})

secondbtn.addEventListener('click', () =>{
    secondbooking.style.display = "none"
    thirdbooking.style.display = "block"
})