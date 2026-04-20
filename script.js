
const header = document.getElementById("header-float");
const header_title = document.querySelector(".h1-header");
const home_icon = document.querySelector(".home-icon");

// When the window is scrolled by more than 50 px, then the header
//  will add the shrink aspect to the css id
window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
        header.classList.add("shrink");
        header_title.classList.add("shrink");
        home_icon.classList.add("shrink");

    } else {
        // Otherwise, make sure that it hasn't shrunk
        header.classList.remove("shrink");
        header_title.classList.remove("shrink");
        home_icon.classList.remove("shrink");
    }
})


// Ticker code
const ticker = document.getElementById("ticker");
let position = 0;

function animate() {
position -= 1; // speed (adjust this)

// Reset when it reaches the full width
if (position <= -ticker.offsetWidth) {
    position = 0;
}

ticker.style.transform = `translateX(${position}px)`;
requestAnimationFrame(animate);
}

// Make sure the ticker starts at the correct position
animate();