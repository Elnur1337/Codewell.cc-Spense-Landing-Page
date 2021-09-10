const hamburgerMenuIcon = document.querySelector(".fa-bars");
const exitMenuIcon = document.querySelector(".fa-times");
const mobileMenu = document.querySelector(".mobile-nav");

hamburgerMenuIcon.addEventListener("click", () => {
    mobileMenu.style.left = 0;
    document.body.style.overflowY = "hidden";
});
exitMenuIcon.addEventListener("click", () => {
    mobileMenu.style.left = "100%";
    document.body.style.overflowY = "scroll";
});