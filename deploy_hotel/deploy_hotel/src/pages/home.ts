import { navbar } from "../components/navbar";
import { navigate } from "../router";

export function renderHome(app: HTMLDivElement): void {
  app.innerHTML = `${navbar()} <section>
      <div class="bg-paper py-13 px-12 border-b border-linen">
        <p
          class="font-mono text-[0.7rem] uppercase tracking-[0.12em] text-gold mb-2"
        >
          Disponível hoje
        </p>
        <h1
          class="font-serif text-[2.2rem] font-normal leading-[1.15] tracking-tight text-ink my-3"
        >
          Escolha o seu <em class="italic text-stone-hotel">quarto ideal</em>
        </h1>
        <p class="text-stone-hotel font-ligh">
          3 quartos disponíveis · Check-in a partir de hoje
        </p>
      </div>
      <div class="bg-paper px-12 py-7 border-b border-linen">
        <button
          class="bg-black text-white py-3 px-5 rounded-xl text-sm font-bold hover:bg-stone-hotel cursor-pointer"
        >
          Todos
        </button>

        <button
          class="bg-black text-white py-3 px-5 rounded-xl text-sm font-bold hover:bg-stone-hotel cursor-pointer"
        >
          Standard
        </button>

        <button
          class="bg-black text-white py-3 px-5 rounded-xl text-sm font-bold hover:bg-stone-hotel cursor-pointer"
        >
          Luxo
        </button>

        <button
          class="bg-black text-white py-3 px-5 rounded-xl text-sm font-bold hover:bg-stone-hotel cursor-pointer"
        >
          Suíte
        </button>
      </div>
    </section>

    <section
      class="grid grid-cols-[repeat(auto-fill,minmax(280px,1fr))] items-center"
    >
      <div class="border border-linen rounded-none flex flex-col p-7">
        <div class="flex items-center justify-between">
          <p class="font-mono text-[0.7rem] text-stone-hotel flex items-center">
            Nº 101
          </p>

          <span
            class="bg-linen text-stone-hotel font-sans font-semibold rounded-xl py-px px-3 text-[0.65rem]"
            >STANDARD</span
          >
        </div>

        <p class="font-serif text-[1.3rem] my-5">Quarto Standard</p>

        <div class="flex">
          <p class="font-mono font-medium text-[1.4rem]">
            R$ 100
            <span class="text-stone-hotel text-sm font-light">/noite</span>
          </p>
        </div>

        <button
          class="w-full py-2.5 border-[1.5px] mt-4 border-ink rounded bg-transparent font-sans text-[0.85rem] font-medium text-ink hover:bg-ink hover:text-white transition-all"
        >
          Reservar este quarto →
        </button>
      </div>

      

      <div class="border border-linen rounded-none flex flex-col p-7">
        <div class="flex items-center justify-between">
          <p class="font-mono text-[0.7rem] text-stone-hotel flex items-center">
            Nº 101
          </p>

          <span
            class="bg-linen text-stone-hotel font-sans font-semibold rounded-xl py-px px-3 text-[0.65rem]"
            >STANDARD</span
          >
        </div>

        <p class="font-serif text-[1.3rem] my-5">Quarto Standard</p>

        <div class="flex">
          <p class="font-mono font-medium text-[1.4rem]">
            R$ 100
            <span class="text-stone-hotel text-sm font-light">/noite</span>
          </p>
        </div>

        <button
          class="w-full py-2.5 border-[1.5px] mt-4 border-ink rounded bg-transparent font-sans text-[0.85rem] font-medium text-ink hover:bg-ink hover:text-white transition-all"
        >
          Reservar este quarto →
        </button>
      </div>

      <div class="border border-linen rounded-none flex flex-col p-7">
        <div class="flex items-center justify-between">
          <p class="font-mono text-[0.7rem] text-stone-hotel flex items-center">
            Nº 101
          </p>

          <span
            class="bg-linen text-stone-hotel font-sans font-semibold rounded-xl py-px px-3 text-[0.65rem]"
            >STANDARD</span
          >
        </div>

        <p class="font-serif text-[1.3rem] my-5">Quarto Standard</p>

        <div class="flex">
          <p class="font-mono font-medium text-[1.4rem]">
            R$ 100
            <span class="text-stone-hotel text-sm font-light">/noite</span>
          </p>
        </div>

        <button
          class="w-full py-2.5 border-[1.5px] mt-4 border-ink rounded bg-transparent font-sans text-[0.85rem] font-medium text-ink hover:bg-ink hover:text-white transition-all"
        >
          Reservar este quarto →
        </button>
      </div>

      <div class="border border-linen rounded-none flex flex-col p-7">
        <div class="flex items-center justify-between">
          <p class="font-mono text-[0.7rem] text-stone-hotel flex items-center">
            Nº 101
          </p>

          <span
            class="bg-linen text-stone-hotel font-sans font-semibold rounded-xl py-px px-3 text-[0.65rem]"
            >STANDARD</span
          >
        </div>

        <p class="font-serif text-[1.3rem] my-5">Quarto Standard</p>

        <div class="flex">
          <p class="font-mono font-medium text-[1.4rem]">
            R$ 100
            <span class="text-stone-hotel text-sm font-light">/noite</span>
          </p>
        </div>

        <button
          class="w-full py-2.5 border-[1.5px] mt-4 border-ink rounded bg-transparent font-sans text-[0.85rem] font-medium text-ink hover:bg-ink hover:text-white transition-all"
        >
          Reservar este quarto →
        </button>
      </div>
    </section>
    `;

  const loginButton = app.querySelector<HTMLButtonElement>("#loginButton")!;

  loginButton.addEventListener("click", () => navigate("/login", app));
}
