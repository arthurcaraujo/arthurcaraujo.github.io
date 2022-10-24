const checkboxes = document.getElementsByClassName("language-checkbox");
const proficiencyLevels = document.getElementsByClassName("proficiency");
const proficiencyDefaultValues = document.getElementsByClassName("proficiency-default-value");
const textInputLastCheckbox = document.getElementById("other");
const invisibleElems = document.getElementsByClassName("invisible-elem");

// Function for radio buttons
function radioBtnsFunc() {
    for (let i = 0; i < checkboxes.length; i++) {
        if (document.getElementById("radio-yes").checked) {
            checkboxes[i].disabled = false;
        }
        else {
            checkboxes[i].checked = false;
            checkboxes[i].disabled = true;
            proficiencyLevels[i].disabled = true;
            proficiencyLevels[i].value = proficiencyDefaultValues[i].value;
            textInputLastCheckbox.disabled = true;
            invisibleElems[i].style.display = "none";
        }
    }    
}

// Function for checkboxes
function checkboxesFunc() {    
    for (let i = 0; i < checkboxes.length; i++) {
        if (checkboxes[i].checked) {
            proficiencyLevels[i].disabled = false;
            invisibleElems[i].style.display = "block";
        }
        else {
            proficiencyLevels[i].disabled = true;
            proficiencyLevels[i].value = proficiencyDefaultValues[i].value;
            invisibleElems[i].style.display = "none";
        }
    }    

    if (checkboxes[6].checked == true) {
        textInputLastCheckbox.disabled = false;
    }
    else {
        textInputLastCheckbox.disabled = true;
    }
}

// Function specifically for the last checkbox
function otherLangFunc() {    
    const automaticInnerInput = document.getElementById("other-lang");

    if (textInputLastCheckbox.value === "") {
        automaticInnerInput.innerHTML = "...";
    }
    else {
        automaticInnerInput.innerHTML = textInputLastCheckbox.value;
    }
}