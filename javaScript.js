const navLinks = document.querySelectorAll(".nav-link");
const travelBtn = document.getElementById("button");
const btn = document.getElementById("first-next");

navLinks.forEach(link =>{
    link.addEventListener('click', () =>{
        navLinks.forEach(item =>{
            item.style.color = "var(--bs-main-color)";
        })
        link.style.color = "red";
    })
});

travelBtn.addEventListener('click', () => {
    window.location.href = 'booking.html';
})

btn.addEventListener('click', () =>{
    alert('hello');
})
