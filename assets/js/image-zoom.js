document.addEventListener("DOMContentLoaded", function () {
    const images = document.querySelectorAll(".image-zoom");
    const overlay = document.getElementById("overlay");
    const overlayImg = document.getElementById("overlay_image");

    images.forEach((img) => {
        img.addEventListener("click", () => {
            overlayImg.src = img.src;
            overlay.classList.add("show");
        });
    });

    overlay.addEventListener("click", (e) => {
        overlay.classList.remove("show");
    });

    document.addEventListener("keydown", (e) => {
        if (e.key === "Escape") {
            overlay.classList.remove("show");
        }
    });
});