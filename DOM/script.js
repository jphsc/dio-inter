const button = document.getElementById("button");
const text = document.getElementById('text');
const body = document.getElementsByTagName('body');


button.addEventListener('click', changeMode)

function changeMode() {
    button.style.color = "blue"
}