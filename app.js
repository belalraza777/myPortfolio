const body = document.body;

//Dark Mode 
let modeBtn = document.querySelector("#mode");
let isDark = false;
modeBtn.addEventListener("click", function () {
    isDark = !isDark;
    if (isDark) {
        modeBtn.innerHTML = '<i class="bi bi-brightness-high-fill"></i>';
        body.classList.add("dark-mode");
    } else {
        modeBtn.innerHTML = '<i class="fa-solid fa-moon"></i>';
        body.classList.remove("dark-mode");
    }

});

//animation scroll
ScrollReveal().reveal('.reveal', {
    distance: '80px',
    duration: 1500,
    easing: 'ease-in-out',
    origin: 'top',
    interval: 300,
});

//Storing Data of Input



