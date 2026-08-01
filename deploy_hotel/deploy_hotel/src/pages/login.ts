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
        <div class="bg-black flex-1 flex flex-col items-center">
          <div
            class="text-white bg-[#1A1A19] h-fit p-1 rounded-2xl mt-10 w-fit border border-[#5e5c5c]"
          >
            <button class="mr-3 border border-[#5e5c5c] rounded-xl p-2 w-fit">
              Entrar</button
            ><button class="border border-[#5e5c5c] rounded-xl p-2 w-30">
              Criar conta
            </button>
          </div>
          <div id="formLogin" class="flex flex-col w-1/2 gap-4">
            <h3 class="font-serif text-white text-xl">Bem-vindo de volta</h3>
            <p class="text-[#9E9890] font-sans text-[0.85rem] font-light">
              Gerencie suas reservas, acompanhe estadias<br />
              e acesse benefícios exclusivos.
            </p>

            <div>
              <p class="text-[#c3c2b7] text-[0.70rem]">E-MAIL</p>
              <input
                type="email"
                class="bg-[#2c2c2a] placeholder-gray-600 border border-[#5e5c5c] rounded-sm p-1"
                placeholder="seu@email.com"
              />
            </div>

            <div>
              <p class="text-[#c3c2b7] text-[0.70rem]">SENHA</p>
              <input
                type="email"
                class="bg-[#2c2c2a] placeholder-gray-600 border border-[#5e5c5c] rounded-sm p-1"
                placeholder="senha"
              />
            </div>
            <button
              class="w-full py-2.75 bg-ink text-white rounded-xl border border-[#5e5c5c] font-sans text-[0.88rem] font-medium hover:opacity-[0.82] transition-opacity cursor-pointer"
            >
              Entrar na conta
            </button>

            <div class="flex items-center gap-2.5 my-4">
              <div class="flex-1 h-[0.5px] bg-fog"></div>
              <span
                class="font-sans text-fog text-[0.72rem] text-muted whitespace-nowrap"
                >ou continue com</span
              >
              <div class="flex-1 h-[0.5px] bg-fog"></div>
            </div>

            <button
              class="w-full py-2.5 border-[0.5px] border-fog rounded-[(--radius)] bg-surface-2 font-sans text-[0.85rem] text-ink flex items-center justify-center gap-2 hover:bg-surface-1 transition-colors cursor-pointer"
            >
              <!-- SVG Google -->
              Continuar com Google
            </button>
          </div>
        </div>
      </div>
  `;
}
