let leftIcon = document.querySelector(".left-icon");
let rightIcon = document.querySelector(".right-icon");

function rightSlider() {
    let activeImage = document.querySelector(".active");
    activeImage.classList.remove("active");
    if (activeImage.nextElementSibling != null) {
        activeImage.nextElementSibling.classList.add("active");

    } else {
        rightIcon.parentNode.nextElementSibling.firstElementChild.classList.add("active");
    }
}
function leftSlider() {
    let activeImage = document.querySelector(".active");
    activeImage.classList.remove("active");
    if (activeImage.previousElementSibling != null) {
        activeImage.previousElementSibling.classList.add("active");

    } else {
        leftIcon.parentNode.nextElementSibling.lastElementChild.classList.add("active");
    }
}


rightIcon.addEventListener("click", rightSlider);
leftIcon.addEventListener("click", leftSlider);
