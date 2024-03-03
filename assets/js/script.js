let leftIcon = document.querySelector(".left-icon");
let rightIcon = document.querySelector(".right-icon");
let images = document.querySelectorAll("img");

for (const img of images) {
    img.classList.add("right");
}

function rightSlider() {
    let activeImage = document.querySelector(".active");
    activeImage.classList.remove("active", "left");

    if (activeImage.nextElementSibling != null) {
        activeImage.nextElementSibling.classList.add("active", "right");
    } else {
        images[0].classList.add("active", "right");
    }
}

function leftSlider() {
    let activeImage = document.querySelector(".active");
    activeImage.classList.remove("active", "right");


    if (activeImage.previousElementSibling != null) {
        activeImage.previousElementSibling.classList.add("active", "left");
    } else {
        images[0].classList.add("active", "left");
    }
}

rightIcon.addEventListener("click", rightSlider);
// leftIcon.addEventListener("click", leftSlider);

