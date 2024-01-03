// Galéria JavaScript kódja
// Példa: Kattintás események hozzáadása a képekhez
document.addEventListener("DOMContentLoaded", function () {
    const galleryCategories = document.querySelectorAll(".gallery-category");

    galleryCategories.forEach(category => {
        const images = category.querySelectorAll("img");

        images.forEach(image => {
            image.addEventListener("click", function () {
                window.open(this.src, "_blank");
            });
        });
    });
});
