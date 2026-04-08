document.addEventListener("DOMContentLoaded", function () {
    const depth = window.location.pathname.split("/").length - 2;
    const prefix = depth > 1 ? "../" : "./";

    fetch(prefix + "components/navbar.html")
        .then(res => res.text())
        .then(html => {
            document.getElementById("navbar-placeholder").innerHTML = html;
        });

    fetch(prefix + "components/footer.html")
        .then(res => res.text())
        .then(html => {
            document.getElementById("footer-placeholder").innerHTML = html;
        });
});