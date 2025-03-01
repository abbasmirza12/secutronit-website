document.addEventListener("DOMContentLoaded", function () {
    const whatsappLink = document.querySelector('.contact-info a[href^="https://wa.me"]');

    whatsappLink.addEventListener("click", function () {
        alert("You are being redirected to WhatsApp!");
    });
});
