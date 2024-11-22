document.addEventListener("DOMContentLoaded", function () {
    const navItems = document.querySelectorAll("nav > div");

    navItems.forEach((item) => {
        item.addEventListener("mouseover", function () {
            const content = this.querySelector(".content");
            if (content) {
                content.style.display = "block";
            }
        });

        item.addEventListener("mouseout", function () {
            const content = this.querySelector(".content");
            if (content) {
                content.style.display = "none";
            }
        });
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const navItems = document.querySelectorAll("nav > div");

    navItems.forEach((item) => {
        item.addEventListener("mouseover", function () {
            const content = this.querySelector(".content2");
            if (content) {
                content.style.display = "block";
            }
        });

        item.addEventListener("mouseout", function () {
            const content = this.querySelector(".content2");
            if (content) {
                content.style.display = "none";
            }
        });
    });
});

let slider = document.querySelector(".slider .list");
let items = document.querySelectorAll(".slider .list .item");
let next = document.getElementById("next");
let prev = document.getElementById("prev");
let dots = document.querySelectorAll(".slider .dots li");

let lengthItems = items.length - 1;
let active = 0;
next.onclick = function () {
    active = active + 1 <= lengthItems ? active + 1 : 0;
    reloadSlider();
};
prev.onclick = function () {
    active = active - 1 >= 0 ? active - 1 : lengthItems;
    reloadSlider();
};
let refreshInterval = setInterval(() => {
    next.click();
}, 5000);
function reloadSlider() {
    slider.style.left = -items[active].offsetLeft + "px";
    //
    let last_active_dot = document.querySelector(".slider .dots li.active");
    last_active_dot.classList.remove("active");
    dots[active].classList.add("active");

    clearInterval(refreshInterval);
    refreshInterval = setInterval(() => {
        next.click();
    }, 5000);
}
document.addEventListener("DOMContentLoaded", function () {
    const dropdownToggle = document.querySelector(".dropdown-toggle");
    const dropdownMenu = document.querySelector(".dropdown-menu");

    if (dropdownToggle) {
        dropdownToggle.addEventListener("click", function (e) {
            e.preventDefault();
            dropdownMenu.classList.toggle("show");
        });
    }

    // Ẩn menu khi nhấn ngoài
    document.addEventListener("click", function (e) {
        if (
            !dropdownMenu.contains(e.target) &&
            !dropdownToggle.contains(e.target)
        ) {
            dropdownMenu.classList.remove("show");
        }
    });
});