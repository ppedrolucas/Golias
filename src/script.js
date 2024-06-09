function sidebar() {
  const nav = document.getElementById("navbar");

  nav.classList.toggle("hidden");
}

{
  const modal = document.querySelector("dialog");

  function openModal() {
    modal.showModal();
  }
  function closeModal() {
    modal.close();
  }
}
