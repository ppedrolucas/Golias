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

{
  function darkMode() {
    const corpo = document.documentElement;
    const img = document.getElementById("darkMode");

    //Atribuiir classe do tema dark
    corpo.classList.toggle("dark");

    //substituir imagem
    if (corpo.classList.contains("dark")) {
      //se tiver light mode, adicionar a imagem light
      img.setAttribute("src", "assets/icons/lightMode.svg"); //adionar ou modificar um atributo
    } else {
      //se não, manter imagem normal
      img.setAttribute("src", "assets/icons/darkMode.svg");
    }
  }
}
