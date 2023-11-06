document.addEventListener("DOMContentLoaded", function () {
    const services = document.querySelectorAll(".service");

    // Add a hover effect to the service elements
    services.forEach((service) => {
        service.addEventListener("mouseenter", () => {
            service.style.transform = "scale(1.1)";
        });

        service.addEventListener("mouseleave", () => {
            service.style.transform = "scale(1)";
        });
    });

    // Add animation to the header text
    const header = document.querySelector("header h1");
    header.addEventListener("mouseenter", () => {
        header.style.animation = "bounce 0.5s";
    });

    // Reset the animation when it finishes
    header.addEventListener("animationend", () => {
        header.style.animation = "none";
    });
});
