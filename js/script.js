let brochureModal = document.getElementById("brochureModal");
let brochureBtns = document.querySelectorAll(".brochureBtn");
let closeModal = document.getElementById("closeModal");

brochureBtns.forEach(function (brochureBtn) {
    brochureBtn.addEventListener("click", function () {
        brochureModal.style.display = "flex";
    });
});

closeModal.addEventListener("click", function () {
    brochureModal.style.display = "none";
});

window.addEventListener("click", function (event) {
    if (event.target === brochureModal) {
        brochureModal.style.display = "none";
    }
});




// Navbar Scroll Effect
function checkScroll() {
    let navbar = document.getElementById("navbar");
    let arjun = window.scrollY;

    console.log(arjun);

    if (arjun < 600) {
        navbar.classList.remove("addnavbar");
    }
    else {
        navbar.classList.add("addnavbar");
    }
}
window.addEventListener("scroll", checkScroll);


// Floor Plan Tabs
let planTab1 = document.getElementById("plan-tab1");
let planTab2 = document.getElementById("plan-tab2");

let planContent1 = document.getElementById("plan-content1");
let planContent2 = document.getElementById("plan-content2");

planContent1.classList.add("active");

planTab1.addEventListener("click", () => {
    planTab1.classList.add("active");
    planTab2.classList.remove("active");
    planContent1.classList.add("active");
    planContent2.classList.remove("active");
})

planTab2.addEventListener("click", () => {
    planTab2.classList.add("active");
    planTab1.classList.remove("active");
    planContent2.classList.add("active");
    planContent1.classList.remove("active");
})
