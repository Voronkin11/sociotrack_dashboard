export const modal = () => {
    const openBtn = document.querySelector(".openModal");
    const closeBtn = document.querySelector(".closeModal");
    const modal = document.querySelector(".modal");
    const substrate = document.querySelector(".modal__substrate");

    if (openBtn) {
        openBtn.addEventListener("click", (evt) => {
            evt.preventDefault();
            modal.classList.add("modal--show");
            document.body.style.overflow = "hidden";
        });
    
        closeBtn.addEventListener("click", (evt) => {
            evt.preventDefault();
            modal.classList.remove("modal--show");
            document.body.style.overflow = "auto";
        });

        substrate.addEventListener("click", (evt) => {
            evt.preventDefault();
            modal.classList.remove("modal--show");
            document.body.style.overflow = "auto";
        });
    }
}
