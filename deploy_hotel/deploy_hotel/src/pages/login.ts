export function renderLogin(app: HTMLDivElement): void {
  app.innerHTML = `
    <div class="flex">
        <!-- container escuro, com position relative -->
        <div class="relative bg-ink overflow-hidden w-1/2">
          <!-- textura: absolute, cobre tudo, pointer-events-none para não bloquear cliques -->
          <div class="grid_hash absolute inset-0 pointer-events-none"></div>

          <!-- conteúdo fica acima da textura com z-10 -->
          <div
            class="relative z-10 p-10 flex flex-col justify-between min-h-screen"
          >
            <h1 class="font-serif text-2xl text-white">
              Hotel <span class="text-gold italic">Deploy</span>
            </h1>
            <p class="font-serif text-[2rem] text-white leading-tight">
              Uma estadia<br />
              <span class="text-gold italic">inesquecível</span><br />
              começa aqui.
            </p>
            <p class="text-[#9E9890] font-sans text-[0.85rem] font-light">
              Gerencie suas reservas, acompanhe estadias<br />
              e acesse benefícios exclusivos.
            </p>
          </div>
        </div>
        <div class="bg-black flex-1 flex flex-col items-center ">
            <div class='text-white bg-[#1A1A19] h-fit p-2 rounded-2xl mt-10'><button class=" mr-3 border border-[#5e5c5c] rounded-xl p-2 w-20">Entrar</button><button class="border border-[#5e5c5c] rounded-xl p-2 w-30">Criar conta</button></div>
        </div>
        
      </div>
  `;
}
