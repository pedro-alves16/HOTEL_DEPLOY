import { navbar } from "../components/navbar";
import { navigate } from "../router";
import { getQuartos } from "../api";
import { renderRoomCard } from "../components/roomCard";

export async function renderHome(app: HTMLDivElement): Promise<void> {
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

    <section id="quartosSection"
      class="grid grid-cols-[repeat(auto-fill,minmax(280px,1fr))] items-center"
    >

    </section>
    `;

  const loginButton = app.querySelector<HTMLButtonElement>("#loginButton")!;
  const quartoContainer = app.querySelector("#quartosSection")!;

  loginButton.addEventListener("click", () => navigate("/login", app));

  const quartos = await getQuartos();
  quartoContainer.innerHTML = quartos.map(renderRoomCard).join("");
}
