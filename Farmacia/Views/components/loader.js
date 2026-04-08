document.addEventListener("DOMContentLoaded", function () {
    const base = "/Farmacia/Views/";

    fetch(base + "components/navbar.html")
        .then(res => res.text())
        .then(html => {
            document.getElementById("navbar-placeholder").innerHTML = html;
        });

    fetch(base + "components/footer.html")
        .then(res => res.text())
        .then(html => {
            document.getElementById("footer-placeholder").innerHTML = html;
        });
});