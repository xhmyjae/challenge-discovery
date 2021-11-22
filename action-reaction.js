let eye = document.getElementById("eye-left");
let close = false;
const btn = document.querySelector("button");

window.onload = function() {

    btn.onclick = function () {
        if (close) {
            eye.style.backgroundColor = "red";
            btn.innerHTML = "Click to open the left eye";
            close = true;
            eye.classList.remove("eye-closed");
        } else {
            eye.style.backgroundColor = "black";
            btn.innerHTML = "Click to close the left eye";
            close = false;
            eye.classList.add("eye-closed");
        }
    }
}