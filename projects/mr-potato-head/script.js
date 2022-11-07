const menuBtnOne = document.getElementById("btn-1");
const menuBtnTwo = document.getElementById("btn-2");
const navBar = document.getElementById("nav-bar");

function openNav() {
    menuBtnOne.style.display = "none";
    menuBtnTwo.style.display = "block";
    navBar.style.visibility = "visible";
}

function closeNav() {
    menuBtnOne.style.display = "block";
    menuBtnTwo.style.display = "none";
    navBar.style.visibility = "hidden";
}