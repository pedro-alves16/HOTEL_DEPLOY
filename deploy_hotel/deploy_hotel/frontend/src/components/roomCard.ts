import type { Quarto } from "../types/room";
export function renderRoomCard(quarto: Quarto): string {
  return `<div class="border border-linen rounded-none flex flex-col p-7">
        <div class="flex items-center justify-between">
          <p class="font-mono text-[0.7rem] text-stone-hotel flex items-center">
            Nº ${quarto.numero}
          </p>

          <span
            class="bg-linen text-stone-hotel font-sans font-semibold rounded-xl py-px px-3 text-[0.65rem]"
            >${quarto.categoria}</span
          >
        </div>

        <p class="font-serif text-[1.3rem] my-5">Quarto ${quarto.categoria}</p>

        <div class="flex">
          <p class="font-mono font-medium text-[1.4rem]">
            R$ ${quarto.precoPorNoite}
            <span class="text-stone-hotel text-sm font-light">/noite</span>
          </p>
        </div>

        <button
          class="w-full py-2.5 border-[1.5px] mt-4 border-ink rounded bg-transparent font-sans text-[0.85rem] font-medium text-ink hover:bg-ink hover:text-white transition-all"
        >
          Reservar este quarto →
        </button>
      </div>
    `;
}
