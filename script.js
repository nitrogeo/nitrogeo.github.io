fetch("./navbar.html")
    .then(response => response.text())
    .then(html => {
        document.querySelector("#navbar-container").innerHTML = html;
    });