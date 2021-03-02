const $root = document.documentElement;
const $sesionButton = document.querySelector('.header-session')
let dark = false;

$sesionButton.addEventListener('click', changeColor);

function changeColor() {
    console.log('********');
    let background = "while";
    let color = "black";
    if(dark) {
        background = "black";
        color = "while";
        dark = false;
    } else dark = true;
    console.log('color: ', color);
    $root.style.setProperty("--text-color", color);
    $root.style.setProperty("--background", background);
}
