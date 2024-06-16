class Sidebar extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
    <nav
      id="navbar"
      class="hidden fixed z-20 h-screen rounded-r-lg w-72 lg:w-[512px] p-4 border-r-2 bg-zinc-400/50 dark:bg-zinc-900/50 backdrop-blur text-white dark:text-zinc-400"
    >
      <div class="flex items-center px-4 py-2 mb-8 rounded-lg bg-slate-50/50 dark:bg-zinc-950/50">
        <img
          class="size-10 rounded-full mr-4"
          src="assets/avatar.jpeg"
          alt="Logo"
        />
        <p>Mine Titã</p>
      </div>
      <ul class="flex flex-col gap-4 mb-8 transition duration-300 ease-in-out">
        <li
          class="p-4 rounded-lg transition duration-300 ease-in-out hover:bg-slate-50/50 dark:hover:bg-zinc-950/50"
        >
          <a href="#home">Início</a>
        </li>
        <li
          class="p-4 rounded-lg transition duration-300 ease-in-out hover:bg-slate-50/50 dark:hover:bg-zinc-950/50"
        >
          <a href="#sobre">Sobre mim</a>
        </li>
        <li
          class="p-4 rounded-lg transition duration-300 ease-in-out hover:bg-slate-50/50 dark:hover:bg-zinc-950/50"
        >
          <a href="#lojas">Minhas Lojas</a>
        </li>
        <li
          class="p-4 rounded-lg transition duration-300 ease-in-out hover:bg-slate-50/50 dark:hover:bg-zinc-950/50"
        >
          <a href="#contato">Contato</a>
        </li>
      </ul>
    </nav>
    <div class="fixed z-20 top-4 right-4">  
    <button
      class=" p-4 rounded-lg shadow-2xl transition duration-300 ease-in-out bg-zinc-400/50 hover:bg-slate-50/50 dark:bg-zinc-900/50 dark:hover:bg-zinc-950/50"
      onclick="darkMode()"
    >
      <img id="darkMode" class="size-6" src="assets/icons/darkMode.svg" alt="Modo Escuro" />
    </button>
    <button
      class=" p-4 rounded-lg shadow-2xl transition duration-300 ease-in-out bg-zinc-400/50 hover:bg-slate-50/50 dark:bg-zinc-900/50 dark:hover:bg-zinc-950/50"
      onclick="sidebar()"
    >
      <img class="size-6" src="assets/icons/burguer.svg" alt="" />
    </button>
    </div>
    `;
  }
}

customElements.define("main-sidebar", Sidebar);
