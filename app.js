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
    distance: '150px',
    duration: 1500,
    easing: 'ease-in-out',
    origin: 'top',
    interval: 400,
});
ScrollReveal().reveal('.reveal2', {
    distance: '100px',
    duration: 1500,
    easing: 'ease-in-out',
    origin: 'bottom',
    interval: 400,
});



//email
let form = document.querySelector("#form");
(function(){
    emailjs.init("JZBUe18LOeXttcc9l"); // 🟢 Replace with your Public Key
  })();

  form.addEventListener("submit", function(e) {

    e.preventDefault();

    emailjs.sendForm("service_n0brl8b", "template_8pufnkm", this)
      .then(() => {
        alert("✅ Message sent successfully!");
        this.reset(); // clear form
      }, (err) => {
        alert(" Failed to send message. Try again.");
        console.error(err);
      });
  });



//text
new Typed('#typed-text', {
    strings: [
        "Software Developer.",
        "WEB Developer.",
        "MERN Stack Developer."
    ],
    typeSpeed: 80,
    backSpeed: 60,
    loop: true
});


