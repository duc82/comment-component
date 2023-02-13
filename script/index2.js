const card_delete = document.querySelector(".card_delete");
const overlay = document.querySelector(".overlay");
const modal = document.querySelector(".modal");
const replyBtn = document.querySelector(".card_reply");
const form_reply = document.querySelector(".form_reply");
const modal_decline = document.querySelector(".modal_decline");

const openModal = () => {
  modal.style.display = "block";
  overlay.style.display = "block";
};

const closeModal = () => {
  modal.style.display = "none";
  overlay.style.display = "none";
};

card_delete.onclick = openModal;

overlay.onclick = closeModal;

modal_decline.onclick = closeModal;

replyBtn.onclick = () => {
  form_reply.classList.toggle("hidden");
};
