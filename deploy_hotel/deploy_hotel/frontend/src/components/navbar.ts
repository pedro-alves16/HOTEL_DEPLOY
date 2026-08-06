export function navbar(): string {
  return `<header
      class="flex justify-between bg-white items-center px-12 py-6 border-b border-b-fog"
    >
      <h1 class="font-serif text-2xl">
        Hotel <span class="text-gold italic">Deploy</span>
      </h1>
      <div class="text-sm">
        <div class="flex gap-2 items-center text-stone-hotel">
          <div
            class="bg-gold w-6 h-6 rounded-full flex items-center justify-center text-white"
          >
            1
          </div>

          <p>QUARTOS</p>
          <div class="bg-fog h-px w-5"></div>

          <div
            class="border border-gold w-6 h-6 rounded-full flex items-center justify-center text-stone-hotel"
          >
            2
          </div>

          <p>RESERVA</p>
          <div class="bg-fog h-px w-5"></div>

          <div
            class="border border-gold w-6 h-6 rounded-full flex items-center justify-center text-stone-hotel"
          >
            3
          </div>

          <p>CONFIRMAÇÃO</p>
        </div>

        
      </div>
      <button
          class="w-30 py-2.5 border-[1.5px] border-ink rounded bg-transparent font-sans text-[0.85rem] font-medium text-ink hover:bg-ink hover:text-white transition-all"
        id="loginButton">
          ENTRAR
        </button>
    </header>`;
}
