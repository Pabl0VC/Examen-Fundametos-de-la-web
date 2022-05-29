function selectNav (element) {
    element.classList.add("select")
}
function noSelect (element) {
    element.classList.remove("select")
}

function loading (element) {
    element.innerText = "Loading";
}

function addShadow (element) {
    element.classList.add("shadow");
}

function removeShadow (element) {
    element.classList.remove("shadow");
}

function addShadowSection (element) {
    element.classList.add("shadow-section");
}

function removeShadowSection (element) {
    element.classList.remove("shadow-section");
}
function action (element){
    element.classList.add("action");
}
function errorAlert () {
    alert('oops! We are currently experiencing problems with our server. Please try again later. Thank you');
}
