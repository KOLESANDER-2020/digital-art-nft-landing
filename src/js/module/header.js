document.addEventListener("DOMContentLoaded", () => {
    const burger = document.querySelector(".js-burger-menu");
    const menu = document.querySelector(".js-header-menu-list");
    const body = document.body;

    if (!burger || !menu) return;

    burger.addEventListener("click", () => {
        const isOpen = menu.classList.toggle("open");
        burger.classList.toggle("active");
        body.style.overflow = isOpen ? "hidden" : "";
    });

    document.querySelectorAll(".js-header-menu-item a").forEach(link => {
        link.addEventListener("click", () => {
            burger.classList.remove("active");
            menu.classList.remove("open");
            body.style.overflow = "";
        });
    });
});