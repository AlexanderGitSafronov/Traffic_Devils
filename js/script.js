const modalBtn = document.querySelector(".header__mob_menu");
const closeModalBtn = document.querySelector(".close__modal");
const modal = document.querySelector(".header__modal");
const wrapper = document.querySelector(".wrapper");
const overlay = document.querySelector(".header__modal_overlay");

modalBtn.addEventListener("click", () => {
  modal.classList.add("active");
  wrapper.classList.add("active");
  overlay.classList.add("active");
});
closeModalBtn.addEventListener("click", () => {
  closeModal();
});
overlay.addEventListener("click", () => {
  closeModal();
});

function closeModal() {
  modal.classList.remove("active");
  wrapper.classList.remove("active");
  overlay.classList.remove("active");
}
