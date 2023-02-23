let info = true;
function showInfo() {

    let information = document.getElementById("information");
    if (info) {
        information.style.display = "none";
        info = false;
    } else {
        information.style.display = "block";
        info = true;
    }
}