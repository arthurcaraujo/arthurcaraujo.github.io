const arrowDown = document.getElementById("arrow-down-background");
const arrowUp = document.getElementById("arrow-up-background");
const navList = document.getElementById("navbar-list");

function openNav() {
    navList.style.display = "block";
    arrowDown.style.visibility = "hidden";
    arrowUp.style.visibility = "visible";
}

function closeNav() {
    navList.style.display = "none";
    arrowDown.style.visibility = "visible";
    arrowUp.style.visibility = "hidden";
}