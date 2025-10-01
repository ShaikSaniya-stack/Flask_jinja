// Script for Contact Form
document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("contactForm");
    const responseMsg = document.getElementById("responseMsg");

    if (form) {
        form.addEventListener("submit", (e) => {
            e.preventDefault(); // stop actual submission
            responseMsg.style.display = "block"; // show success message

            form.reset(); // clear form fields

            // hide message after 3s
            setTimeout(() => {
                responseMsg.style.display = "none";
            }, 3000);
        });
    }
});
