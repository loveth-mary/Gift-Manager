// Reusable navBar
function loadNavbar() {
    document.querySelector(".navBar").innerHTML = `
    <ul>
        <li><a href="index.html">Home</a></li>
        <li><a href="history.html">Gift history</a></li>
        <li><a href="faq.html">FAQ</a></li>
        <li><a href="contact.html">Contact Support</a></li>
        <li><a href="about.html">About</a></li>
    </ul>`;
}
loadNavbar()


// Reusable Footer
function loadFooter() {

    document.querySelector(".footer").innerHTML = `
    <h3>Gift Manager</h3>

    <p>Version 1.0</p>

    <p>Designed to help you organize every gift that matters.</p>

    <p>&copy 2026 Gift Manager. All rights reserved.</p>`;
}
loadFooter();


// Add Gift Page
const giftForm = document.getElementById("giftForm");

giftForm.addEventListener("submit", function(event) {

    event.preventDefault();

});