// =========================
// Portfolio Main JavaScript
// =========================

// Get the body element for theme toggling
const body = document.body; // Used for adding/removing dark mode class

// =========================
// Dark Mode Toggle
// =========================
let modeBtn = document.querySelector("#mode"); // Button for toggling dark mode
let isDark = false; // Track current theme state

// Check for saved theme preference in localStorage
const savedTheme = localStorage.getItem('theme');
if (savedTheme === 'dark') {
    isDark = true;
    body.classList.add("dark-mode"); // Apply dark mode if saved
    modeBtn.innerHTML = '<i class="bi bi-brightness-high-fill"></i>'; // Change icon
}

// Toggle dark mode on button click
modeBtn.addEventListener("click", function () {
    isDark = !isDark; // Flip theme state
    // Add smooth transition for theme change
    body.style.transition = 'all 0.5s ease';
    if (isDark) {
        modeBtn.innerHTML = '<i class="bi bi-brightness-high-fill"></i>'; // Sun icon for dark mode
        body.classList.add("dark-mode");
        localStorage.setItem('theme', 'dark'); // Save preference
    } else {
        modeBtn.innerHTML = '<i class="fa-solid fa-moon"></i>'; // Moon icon for light mode
        body.classList.remove("dark-mode");
        localStorage.setItem('theme', 'light'); // Save preference
    }
    // Remove transition after animation
    setTimeout(() => {
        body.style.transition = '';
    }, 500);
});

// =========================
// Scroll Reveal Animations
// =========================
// Animate elements on scroll using ScrollReveal.js
// .reveal: for hero section, .reveal2: for other sections
ScrollReveal().reveal('.reveal', {
    distance: '100px', // How far elements move
    duration: 1200, // Animation duration in ms
    easing: 'cubic-bezier(0.25, 0.46, 0.45, 0.94)', // Easing function
    origin: 'top', // Animation starts from top
    interval: 300, // Delay between elements
    scale: 0.95, // Slightly scale down
    opacity: 0 // Start fully transparent
});
ScrollReveal().reveal('.reveal2', {
    distance: '80px',
    duration: 1200,
    easing: 'cubic-bezier(0.25, 0.46, 0.45, 0.94)',
    origin: 'bottom',
    interval: 300,
    scale: 0.95,
    opacity: 0
});

// =========================
// EmailJS Contact Form
// =========================
// Handles contact form submission using EmailJS
let form = document.querySelector("#form"); // Contact form element
let submitBtn = document.querySelector("#submit"); // Submit button

// Initialize EmailJS with your public key (replace with your own for production)
(function(){
    emailjs.init("JZBUe18LOeXttcc9l");
})();

// Form submit event
form.addEventListener("submit", function(e) {
    e.preventDefault(); // Prevent default form submit
    // Show loading state on button
    const originalText = submitBtn.textContent;
    submitBtn.textContent = "Sending...";
    submitBtn.disabled = true;
    submitBtn.style.opacity = "0.7";
    // Send form using EmailJS
    emailjs.sendForm("service_n0brl8b", "template_8pufnkm", this)
        .then(() => {
            // Success feedback: show message, reset form, restore button
            submitBtn.textContent = "Sent! ✓";
            submitBtn.style.background = "linear-gradient(135deg, #10b981 0%, #059669 100%)";
            showNotification("✅ Message sent successfully!", "success");
            this.reset();
            setTimeout(() => {
                submitBtn.textContent = originalText;
                submitBtn.disabled = false;
                submitBtn.style.opacity = "1";
                submitBtn.style.background = "linear-gradient(135deg, #667eea 0%, #764ba2 100%)";
            }, 3000);
        }, (err) => {
            // Error feedback: show error, restore button
            submitBtn.textContent = "Failed! ✗";
            submitBtn.style.background = "linear-gradient(135deg, #ef4444 0%, #dc2626 100%)";
            showNotification("❌ Failed to send message. Please try again.", "error");
            console.error(err);
            setTimeout(() => {
                submitBtn.textContent = originalText;
                submitBtn.disabled = false;
                submitBtn.style.opacity = "1";
                submitBtn.style.background = "linear-gradient(135deg, #667eea 0%, #764ba2 100%)";
            }, 3000);
        });
});

// =========================
// Notification System
// =========================
// Shows success/error notifications for form
// message: text to display, type: 'success' or 'error'
function showNotification(message, type) {
    const notification = document.createElement('div'); // Create notification div
    notification.className = `notification ${type}`;
    notification.textContent = message;
    notification.style.cssText = `
        position: fixed;
        top: 100px;
        right: 20px;
        padding: 15px 25px;
        border-radius: 10px;
        color: white;
        font-weight: 600;
        z-index: 10000;
        transform: translateX(100%);
        transition: transform 0.3s ease;
        background: ${type === 'success' ? 'linear-gradient(135deg, #10b981 0%, #059669 100%)' : 'linear-gradient(135deg, #ef4444 0%, #dc2626 100%)'};
        box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
    `;
    document.body.appendChild(notification);
    // Animate in
    setTimeout(() => {
        notification.style.transform = 'translateX(0)';
    }, 100);
    // Remove after 4 seconds
    setTimeout(() => {
        notification.style.transform = 'translateX(100%)';
        setTimeout(() => {
            document.body.removeChild(notification);
        }, 300);
    }, 4000);
}

// =========================
// Typed.js Animated Text
// =========================
// Initializes the animated typing effect in the hero section
// and styles the cursor
// Uses the #typed-text span in the hero section
// The cursor is styled with a glowing effect

document.addEventListener('DOMContentLoaded', function() {
    new Typed('#typed-text', {
        strings: [
            "Software Developer.", // First string to type
            "Web Developer.",      // Second string
            "MERN Stack Developer.",
            "Problem Solver.",
            "Creative Thinker."
        ],
        typeSpeed: 80, // Typing speed in ms
        backSpeed: 60, // Backspace speed
        backDelay: 2000, // Delay before backspacing
        loop: true, // Repeat forever
        showCursor: true, // Show blinking cursor
        cursorChar: '|', // Cursor character
        autoInsertCss: true // Insert CSS for cursor
    });
    // Style the cursor with a glow
    const style = document.createElement('style');
    style.innerHTML = '.typed-cursor { color: #ff6a00; font-size: 45px; text-shadow: 0 2px 8px #ff6a00, 0 0px 20px #00c3ff; }';
    document.head.appendChild(style);
});

// =========================
// Smooth Scrolling for Nav Links
// =========================
// Enables smooth scroll for anchor links
// Select all anchor tags that link to IDs

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault(); // Prevent default jump
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth', // Smooth scroll
                block: 'start'
            });
        }
    });
});

// =========================
// Hamburger menu toggle for mobile navbar
// =========================
// Get the hamburger button and nav links list
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('navLinks');

// Add click event to toggle the 'show' class on nav links
if (hamburger && navLinks) {
    hamburger.addEventListener('click', () => {
        // Toggle the 'show' class to display/hide nav links
        navLinks.classList.toggle('show');
    });
}

// =========================
// Hover Effects for Skill and Project Boxes
// =========================
// Adds interactive hover effects to skill and project cards
// Skill boxes: .page3 .box, Project boxes: .page4 .proBox

document.querySelectorAll('.page3 .box').forEach(box => {
    // On mouse enter, lift and scale the box
    box.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-10px) scale(1.02)';
    });
    // On mouse leave, reset transform
    box.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0) scale(1)';
    });
});
document.querySelectorAll('.page4 .proBox').forEach(box => {
    // On mouse enter, lift the project card
    box.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-10px)';
    });
    // On mouse leave, reset transform
    box.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0)';
    });
});

// =========================
// Page Load Animation
// =========================
// Fades in the page on load for a smooth effect
window.addEventListener('load', () => {
    document.body.style.opacity = '0'; // Start hidden
    document.body.style.transition = 'opacity 0.5s ease';
    setTimeout(() => {
        document.body.style.opacity = '1'; // Fade in
    }, 100);
});

// =========================
// Intersection Observer for Section Animations
// =========================
// Animates sections as they enter the viewport
// observerOptions: threshold and rootMargin control when animation triggers
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1'; // Fade in
            entry.target.style.transform = 'translateY(0)'; // Slide up
        }
    });
}, observerOptions);
document.querySelectorAll('section').forEach(section => {
    section.style.opacity = '0'; // Start hidden
    section.style.transform = 'translateY(50px)'; // Start below
    section.style.transition = 'all 0.8s ease'; // Smooth transition
    observer.observe(section); // Start observing
});


