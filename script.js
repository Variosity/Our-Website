function dropdown(id) {
    document.getElementById(id).classList.toggle("show");
}

window.onclick = function (event) {
    if (!event.target.matches('.dropbtn')) {
        var dropdowns = document.getElementsByClassName("dropdowncontent");
        for (var i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }
    }
};
// script.js

document.addEventListener('DOMContentLoaded', () => {
    const headerBar = document.querySelector('.header-bar');

    // Show the header on hover
    headerBar.parentElement.addEventListener('mouseover', () => {
        headerBar.classList.add('show');
    });

    // Hide the header when not hovering
    headerBar.parentElement.addEventListener('mouseleave', () => {
        headerBar.classList.remove('show');
    });
});
