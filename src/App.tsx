import { ChevronRight, Crown } from 'lucide-react';

const CADASTRO_URL = 'http://luck777x.com/';

const bonusLines = [
  'Aproveite sua experiência',
  'Colete seu bônus de boas-vindas',
  'Descubra nossas novidades',
  'Acesse agora e confira!',
];

const reelStrip = Array.from({ length: 16 }, (_, index) => (index % 2 === 0 ? '7' : 'BAR'));
const reelDurations = [3.2, 3.8, 4.4];
const bulbs = [0, 1, 2, 3, 4];

function ReelSymbol({ symbol }: { symbol: string }) {
  if (symbol === '7') {
    return <span className="text-5xl font-black text-red-600">7</span>;
  }
  return <span className="text-sm font-black tracking-widest text-zinc-900">BAR</span>;
}

function SlotMachine() {
  return (
    <div className="flex flex-col items-center">
      <Crown
        className="h-12 w-12 animate-crown-bob text-yellow-400 drop-shadow-[0_0_12px_rgba(250,204,21,0.9)] motion-reduce:animate-none"
        fill="currentColor"
        strokeWidth={1.5}
        aria-hidden="true"
      />
      <div className="mt-3 flex items-center gap-4">
        <div className="relative rounded-3xl border-4 border-purple-600 bg-gradient-to-b from-purple-600 to-purple-950 px-4 pb-4 pt-7 shadow-[0_0_40px_rgba(168,85,247,0.7)]">
          <div className="absolute inset-x-0 top-2.5 flex justify-center gap-4">
            {bulbs.map((bulb) => (
              <span
                key={bulb}
                className="h-2.5 w-2.5 animate-bulb-blink rounded-full bg-yellow-300 motion-reduce:animate-none"
                style={{ animationDelay: `${bulb * 0.25}s` }}
              />
            ))}
          </div>
          <div className="flex gap-2 rounded-xl bg-white p-2">
            {reelDurations.map((duration, reel) => (
              <div key={reel} className="h-20 w-16 overflow-hidden rounded-md bg-white shadow-inner">
                <div
                  className="flex animate-reel-stop flex-col motion-reduce:animate-none"
                  style={{ animationDuration: `${duration}s` }}
                >
                  {reelStrip.map((symbol, index) => (
                    <div key={index} className="flex h-20 w-16 shrink-0 items-center justify-center">
                      <ReelSymbol symbol={symbol} />
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="flex flex-col items-center">
          <span className="h-4 w-4 rounded-full bg-red-500 shadow-[0_0_12px_rgba(239,68,68,0.9)]" />
          <span className="h-16 w-1.5 rounded-full bg-gradient-to-b from-zinc-200 to-zinc-500" />
        </div>
      </div>
    </div>
  );
}

function App() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-[#07030f] text-white">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            'radial-gradient(circle at 50% 20%, rgba(124,58,237,0.35), transparent 55%), radial-gradient(circle at 80% 90%, rgba(202,138,4,0.18), transparent 45%)',
        }}
      />

      <main className="relative mx-auto flex w-full max-w-md flex-col items-center px-6 pb-12 pt-14">
        <SlotMachine />

        <h1 className="mt-8 text-center text-3xl font-black italic uppercase leading-[1.2] text-white sm:text-4xl">
          Comunidade de
        </h1>
        <h2 className="bg-gradient-to-b from-yellow-200 via-yellow-400 to-yellow-600 bg-clip-text text-center text-7xl font-black italic uppercase leading-none text-transparent drop-shadow-[0_4px_0_rgba(120,53,15,0.8)] sm:text-8xl">
          Slots
        </h2>
        <div className="mt-3 h-1.5 w-60 rounded-full bg-gradient-to-r from-transparent via-purple-500 to-transparent" />

        <div className="mt-10 w-full rounded-2xl border border-purple-500/30 bg-white/5 px-6 py-8 text-center backdrop-blur-sm">
          <h3 className="text-2xl font-black italic leading-tight text-yellow-300">Seu bônus está esperando!</h3>
          <ul className="mt-5 flex flex-col gap-2">
            {bonusLines.map((line) => (
              <li key={line} className="text-base font-semibold text-zinc-100">
                {line}
              </li>
            ))}
          </ul>
        </div>

        <a
          href={CADASTRO_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="group relative mt-8 flex w-full animate-glow-pulse items-center justify-center gap-3 overflow-hidden rounded-full bg-gradient-to-b from-purple-500 to-purple-700 px-6 py-5 transition duration-300 hover:scale-[1.03] active:scale-[0.98] motion-reduce:animate-none"
        >
          <span
            aria-hidden="true"
            className="pointer-events-none absolute inset-y-0 left-0 w-1/3 animate-shine bg-gradient-to-r from-transparent via-white/50 to-transparent motion-reduce:animate-none"
          />
          <span className="relative text-2xl font-black italic tracking-wide text-yellow-300 drop-shadow-[0_2px_0_rgba(88,28,135,0.9)]">
            ENTRE AGORA
          </span>
          <ChevronRight
            className="relative h-8 w-8 animate-nudge-x text-yellow-300 motion-reduce:animate-none"
            aria-hidden="true"
          />
        </a>

        <p className="mt-8 text-center text-xs text-zinc-400">18+ | Jogue com responsabilidade.</p>
      </main>

      <section className="relative border-t border-white/10 bg-zinc-950/80">
        <div className="mx-auto max-w-md px-6 py-12 text-center">
          <h2 className="text-xl font-bold uppercase tracking-wide text-white">Fale conosco</h2>
          <p className="mt-6 text-justify text-xs leading-relaxed text-zinc-400 sm:text-center">
            Este site não é afiliado ao Facebook ou a qualquer entidade do Facebook. Depois que você sai do
            Facebook, a responsabilidade não é deles e sim do nosso site. Fazemos todos os esforços para indicar
            claramente e mostrar todas as provas do serviço. Nós não vendemos o seu e-mail ou qualquer informação
            para terceiros. Jamais fazemos nenhum tipo de spam. Se você tiver alguma dúvida, sinta-se à vontade
            para usar o link de contato e falar conosco em horário comercial de Segunda a Sexta das 09h00 às
            18h00. Lemos e respondemos todas as mensagens por ordem de chegada.
          </p>
        </div>
      </section>

      <footer className="relative bg-black px-6 py-6 text-center text-xs text-zinc-400 sm:text-sm">
        2026 © Conceito MKT Digital. Todos os direitos reservados.
      </footer>
    </div>
  );
}

export default App;
