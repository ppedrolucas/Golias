class Footer extends HTMLElement {
  connectedCallback() {
    let data = new Date();
    let ano = data.getFullYear();
    this.innerHTML = `
    <footer class="w-full bg-white dark:bg-zinc-900 dark:text-zinc-400">
        <div class="container mx-auto p-6 flex items-center justify-between">
          <div>
            <p class="text-xs">${ano} &copy; Todos os direitos reservados.</p>
          </div>
          <div class="flex gap-2">
            <a href="https://www.instagram.com/">
              <img
                class="size-4"
                src="assets/icons/socialMedias/insta.svg"
                alt="Instagram"
              />
            </a>
            <a href="#">
              <img
                class="size-4"
                src="assets/icons/socialMedias/threads.svg"
                alt="Threads"
              />
            </a>
            <a href="#">
              <img
                class="size-4"
                src="assets/icons/socialMedias/mail.svg"
                alt="E-mail"
              />
            </a>
            <a href="#">
              <img
                class="size-4"
                src="assets/icons/socialMedias/linkedin.svg"
                alt="Linkedin"
              />
            </a>
          </div>
        </div>
    </footer>
        `;
  }
}

customElements.define("main-footer", Footer);
