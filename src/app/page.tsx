import Link from "next/link";
import type { LucideIcon } from "lucide-react";
import {
  Archive,
  ArrowRight,
  BarChart3,
  Bike,
  Building2,
  Check,
  ChefHat,
  Clock,
  LayoutGrid,
  MonitorSmartphone,
  Palette,
  Printer,
  QrCode,
  Radio,
  Sandwich,
  ShieldCheck,
  SlidersHorizontal,
  Smartphone,
  Users,
  Wallet,
} from "lucide-react";
import { buttonClasses } from "@/lib/buttonStyles";

// Links configurados no .env (veja .env.example).
const CONTACT_HREF = process.env.NEXT_PUBLIC_CONTACT_URL ?? "https://wa.me/?text=Quero%20conhecer%20o%20LogicRest%C3%B4";
const LOGIN_HREF = `${(process.env.NEXT_PUBLIC_APP_URL ?? "http://localhost:3001").replace(/\/$/, "")}/login`;

const NAV = [
  { href: "#recursos", label: "Recursos" },
  { href: "#como-funciona", label: "Como funciona" },
  { href: "#diferenciais", label: "Diferenciais" },
  { href: "#perguntas", label: "Perguntas" },
];

const FLOW: { icon: LucideIcon; title: string; text: string }[] = [
  {
    icon: QrCode,
    title: "O cliente pede",
    text: "Pelo QR Code da mesa, pelo link do cardápio ou com o garçom. Mesa, retirada ou entrega.",
  },
  {
    icon: ShieldCheck,
    title: "A conferência aprova",
    text: "O caixa confere e aprova (ou recusa, com motivo). Nada vai para a cozinha por engano.",
  },
  {
    icon: ChefHat,
    title: "A cozinha prepara",
    text: "Cada item cai no seu local de preparo — cozinha, bar, chapa — com cronômetro na tela.",
  },
  {
    icon: Wallet,
    title: "O caixa fecha",
    text: "Pagamento em várias formas, taxa de serviço, cupom impresso e fechamento de caixa conferido.",
  },
];

const FEATURES: { icon: LucideIcon; title: string; text: string }[] = [
  {
    icon: QrCode,
    title: "Cardápio digital com QR Code",
    text: "Um QR por mesa: o cliente vê fotos, escolhe adicionais e acompanha os próprios pedidos pelo celular.",
  },
  {
    icon: LayoutGrid,
    title: "Mapa de mesas e comandas",
    text: "Veja de longe quais mesas estão livres, ocupadas ou pedindo a conta, organizadas por setor do salão.",
  },
  {
    icon: ChefHat,
    title: "Cozinha em tempo real",
    text: "Fila de produção que atualiza sozinha, com tempo de cada pedido e separação por local de preparo.",
  },
  {
    icon: Bike,
    title: "Delivery e retirada",
    text: "Taxa de entrega por bairro, endereço do cliente salvo e pedidos de balcão no mesmo fluxo do salão.",
  },
  {
    icon: Wallet,
    title: "Controle de caixa",
    text: "Abertura, sangria, suprimento e fechamento com diferença calculada e relatório no formato de cupom.",
  },
  {
    icon: Archive,
    title: "Estoque com histórico",
    text: "Entradas, saídas e ajustes com motivo registrado. Saiba quando, quanto e por que cada item mudou.",
  },
  {
    icon: Sandwich,
    title: "Produtos, adicionais e combos",
    text: "Grupos de opções (ponto da carne, molhos, tamanhos) e kits montados a partir de outros produtos.",
  },
  {
    icon: BarChart3,
    title: "Resumo de vendas",
    text: "Faturamento, ticket médio e pedidos por tipo, comparados com a semana ou o período anterior.",
  },
  {
    icon: Printer,
    title: "Cupom térmico 80 mm",
    text: "Imprima o pedido e o fechamento de caixa direto do navegador, no formato da impressora do balcão.",
  },
  {
    icon: Clock,
    title: "Horário de funcionamento",
    text: "Fora do horário o cardápio avisa que está fechado e não aceita pedidos. Sem pedido perdido às 3h.",
  },
  {
    icon: Building2,
    title: "Várias unidades",
    text: "Cadastre a rede inteira: estabelecimentos, grupos e equipes separadas em um só login de gestão.",
  },
  {
    icon: Palette,
    title: "Com a cara da sua marca",
    text: "Escolha a cor do sistema e do cardápio, tema claro ou escuro, logo e dados do seu restaurante.",
  },
];

const DIFFERENTIALS: { icon: LucideIcon; title: string; text: string; points: string[] }[] = [
  {
    icon: SlidersHorizontal,
    title: "O fluxo se adapta ao seu negócio",
    text: "Não é a sua operação que muda para caber no sistema. Ligue e desligue as etapas que fazem sentido para você.",
    points: [
      "Sem conferência? O pedido vai direto para a cozinha",
      "Sem cozinha separada? Pule a fila de produção",
      "Só delivery? Desligue as mesas",
    ],
  },
  {
    icon: Users,
    title: "Cada pessoa vê só o que precisa",
    text: "Garçom, caixa, cozinheiro, supervisor e gerente entram com o próprio acesso e uma tela feita para a sua função.",
    points: [
      "Garçom no mapa de mesas, pelo celular",
      "Cozinheiro só na fila de produção",
      "Permissões de menu ajustáveis por usuário",
    ],
  },
  {
    icon: Radio,
    title: "Tempo real de verdade",
    text: "Pedido novo aparece na cozinha e no caixa na hora, sem apertar F5. Se a internet oscilar, o sistema reconecta e recupera o que perdeu.",
    points: ["Atualização instantânea", "Cronômetro pela hora do servidor", "Reconexão automática"],
  },
  {
    icon: MonitorSmartphone,
    title: "Sem instalar nada",
    text: "Funciona no navegador do computador do caixa, no tablet da cozinha e no celular do garçom. Abriu, entrou, trabalhou.",
    points: ["Celular, tablet e computador", "Sem servidor no restaurante", "Atualizações sem custo extra"],
  },
];

const ROLES = [
  { role: "Gerente", text: "Vendas, produtos, estoque, equipe e configurações." },
  { role: "Caixa", text: "Conferência de pedidos, pagamentos e fechamento." },
  { role: "Garçom", text: "Mapa de mesas e lançamento de pedidos no celular." },
  { role: "Cozinha", text: "Fila de produção com tempo e local de preparo." },
];

const FAQ = [
  {
    q: "Preciso comprar algum equipamento?",
    a: "Não. O LogicRestô roda no navegador, então serve o computador, tablet ou celular que você já tem. Uma impressora térmica de 80 mm é opcional, para imprimir os cupons.",
  },
  {
    q: "Meus clientes precisam baixar um aplicativo?",
    a: "Não. Eles leem o QR Code da mesa ou abrem o link do seu cardápio e pedem direto pelo navegador do celular.",
  },
  {
    q: "Funciona para delivery e para salão ao mesmo tempo?",
    a: "Sim. Mesa, retirada e entrega entram no mesmo fluxo, e você escolhe quais tipos de pedido o seu restaurante aceita.",
  },
  {
    q: "Consigo controlar o que cada funcionário acessa?",
    a: "Sim. Cada pessoa tem o próprio login e um perfil (garçom, caixa, cozinha, supervisor, gerente), e você ainda pode ajustar item por item do menu.",
  },
  {
    q: "O cupom impresso é nota fiscal?",
    a: "Não. O cupom é um comprovante do pedido e do fechamento de caixa. A emissão de NFC-e exige certificado digital e autorização da SEFAZ e é feita à parte.",
  },
  {
    q: "Tenho mais de uma unidade. Funciona?",
    a: "Sim. Você cadastra os estabelecimentos e grupos da rede, cada um com cardápio, equipe e configurações próprias.",
  },
];

function Logo({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden className={className}>
      <path d="M8.1 13.34l2.83-2.83L3.91 3.5a4.008 4.008 0 0 0 0 5.66l4.19 4.18zm6.78-1.81c1.53.71 3.68.21 5.27-1.38 1.91-1.91 2.28-4.65.81-6.12-1.46-1.46-4.2-1.1-6.12.81-1.59 1.59-2.09 3.74-1.38 5.27L3.7 19.87l1.41 1.41L12 14.41l6.88 6.88 1.41-1.41L13.41 13l1.47-1.47z" />
    </svg>
  );
}

function SectionHeading({ eyebrow, title, text }: { eyebrow: string; title: string; text: string }) {
  return (
    <div className="mx-auto mb-12 max-w-2xl text-center">
      <p className="mb-3 text-sm font-medium text-[var(--md-primary)]">{eyebrow}</p>
      <h2 className="mb-4 text-3xl font-semibold tracking-tight text-[var(--md-on-surface)] sm:text-4xl">{title}</h2>
      <p className="text-base text-[var(--md-on-surface-variant)] sm:text-lg">{text}</p>
    </div>
  );
}

// Prévia ilustrativa da fila da cozinha (dados fictícios).
const PREVIEW_ORDERS = [
  { id: "#1042", where: "Mesa 7", time: "04:12", items: ["2× X-Burguer", "1× Batata média"], status: "Preparando", tone: "warning" },
  { id: "#1043", where: "Entrega", time: "01:35", items: ["1× Pizza calabresa", "1× Refri 2L"], status: "Na fila", tone: "neutral" },
  { id: "#1039", where: "Retirada", time: "09:48", items: ["3× Pastel de carne"], status: "Pronto", tone: "success" },
] as const;

const TONE_CLASSES = {
  warning: "bg-[var(--md-warning-container)] text-[var(--md-on-warning-container)]",
  neutral: "bg-[var(--md-secondary-container)] text-[var(--md-on-secondary-container)]",
  success: "bg-[var(--md-tertiary-container)] text-[var(--md-on-tertiary-container)]",
};

function KitchenPreview() {
  return (
    <div
      aria-hidden
      className="rounded-[var(--radius-2xl)] bg-[var(--md-surface-container-lowest)] p-4 shadow-[var(--md-elevation-3)] ring-1 ring-[var(--md-outline-variant)] sm:p-5"
    >
      <div className="mb-4 flex items-center justify-between">
        <div className="flex items-center gap-2 text-sm font-medium text-[var(--md-on-surface)]">
          <ChefHat className="h-4 w-4 text-[var(--md-primary)]" />
          Cozinha
        </div>
        <span className="flex items-center gap-1.5 rounded-full bg-[var(--md-tertiary-container)] px-2.5 py-1 text-xs font-medium text-[var(--md-on-tertiary-container)]">
          <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-[var(--md-tertiary)]" />
          Ao vivo
        </span>
      </div>
      <div className="flex flex-col gap-3">
        {PREVIEW_ORDERS.map((o) => (
          <div key={o.id} className="rounded-[var(--radius-xl)] bg-[var(--md-surface)] p-3.5 ring-1 ring-[var(--md-outline-variant)]">
            <div className="mb-2 flex items-center justify-between gap-2">
              <div className="flex min-w-0 items-baseline gap-2">
                <span className="font-mono text-sm font-medium text-[var(--md-on-surface)]">{o.id}</span>
                <span className="truncate text-xs text-[var(--md-on-surface-variant)]">{o.where}</span>
              </div>
              <span className={`shrink-0 rounded-full px-2 py-0.5 text-[11px] font-medium ${TONE_CLASSES[o.tone]}`}>{o.status}</span>
            </div>
            <ul className="mb-2 space-y-0.5 text-sm text-[var(--md-on-surface)]">
              {o.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <div className="flex items-center gap-1 font-mono text-xs text-[var(--md-on-surface-variant)]">
              <Clock className="h-3 w-3" />
              {o.time}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function PhonePreview() {
  return (
    <div
      aria-hidden
      className="w-[190px] rounded-[2rem] bg-[var(--md-inverse-surface)] p-2 shadow-[var(--md-elevation-3)]"
    >
      <div className="overflow-hidden rounded-[1.6rem] bg-[var(--md-surface)]">
        <div className="bg-[var(--md-primary)] px-4 pb-4 pt-5 text-[var(--md-on-primary)]">
          <p className="text-[11px] opacity-80">Mesa 7 · Aberto agora</p>
          <p className="text-sm font-semibold">Cardápio</p>
        </div>
        <div className="flex gap-1.5 px-3 pt-3">
          {["Lanches", "Bebidas", "Doces"].map((c, i) => (
            <span
              key={c}
              className={`rounded-full px-2 py-0.5 text-[10px] ${i === 0 ? "bg-[var(--md-primary-container)] text-[var(--md-on-primary-container)]" : "bg-[var(--md-surface-container)] text-[var(--md-on-surface-variant)]"}`}
            >
              {c}
            </span>
          ))}
        </div>
        <div className="space-y-2 p-3">
          {[
            ["X-Burguer", "R$ 28,90"],
            ["X-Salada", "R$ 26,90"],
            ["Batata média", "R$ 18,00"],
          ].map(([name, price]) => (
            <div key={name} className="flex items-center gap-2 rounded-xl bg-[var(--md-surface-container-lowest)] p-2 ring-1 ring-[var(--md-outline-variant)]">
              <span className="h-8 w-8 shrink-0 rounded-lg bg-[var(--md-surface-container-high)]" />
              <div className="min-w-0 flex-1">
                <p className="truncate text-[11px] font-medium text-[var(--md-on-surface)]">{name}</p>
                <p className="text-[10px] text-[var(--md-on-surface-variant)]">{price}</p>
              </div>
            </div>
          ))}
          <div className="mt-1 rounded-xl bg-[var(--md-primary)] py-2 text-center text-[11px] font-medium text-[var(--md-on-primary)]">
            Ver carrinho · 2 itens
          </div>
        </div>
      </div>
    </div>
  );
}

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-[var(--md-surface-container)] text-[var(--md-on-surface)]">
      <header className="sticky top-0 z-30 border-b border-[var(--md-outline-variant)] bg-[color-mix(in_oklch,var(--md-surface-container)_85%,transparent)] backdrop-blur">
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-4 sm:px-6">
          <Link href="/" className="flex items-center gap-2 text-lg font-semibold">
            <Logo className="h-6 w-6 text-[var(--md-primary)]" />
            LogicRestô
          </Link>
          <nav className="hidden items-center gap-6 text-sm text-[var(--md-on-surface-variant)] exp:flex">
            {NAV.map((n) => (
              <a key={n.href} href={n.href} className="transition-colors hover:text-[var(--md-on-surface)]">
                {n.label}
              </a>
            ))}
          </nav>
          <div className="flex items-center gap-2">
            <a href={LOGIN_HREF} className={buttonClasses({ variant: "ghost", size: "lg" })}>
              Entrar
            </a>
            <a href={CONTACT_HREF} target="_blank" rel="noopener noreferrer" className={buttonClasses({ size: "lg", className: "hidden sm:inline-flex" })}>
              Quero conhecer
            </a>
          </div>
        </div>
      </header>

      <main>
        {/* Hero */}
        <section className="relative overflow-hidden">
          <div className="relative mx-auto grid max-w-6xl items-center gap-12 px-4 pb-20 pt-16 sm:px-6 exp:grid-cols-[1.1fr_1fr] exp:pt-24">
            <div>
              <span className="mb-6 inline-flex items-center gap-2 rounded-full bg-[var(--md-surface-container-lowest)] px-3 py-1 text-xs font-medium text-[var(--md-on-surface-variant)] ring-1 ring-[var(--md-outline-variant)]">
                <Smartphone className="h-3.5 w-3.5 text-[var(--md-primary)]" />
                Restaurantes, lanchonetes, bares e pizzarias
              </span>
              <h1 className="mb-6 text-4xl font-semibold leading-[1.1] tracking-tight sm:text-5xl exp:text-6xl">
                Do pedido ao caixa, <span className="text-[var(--md-primary)]">sem papel e sem correria</span>
              </h1>
              <p className="mb-8 max-w-xl text-lg text-[var(--md-on-surface-variant)]">
                Cardápio digital com QR Code, mapa de mesas, cozinha em tempo real, delivery, caixa e estoque. Tudo em um
                só sistema, no navegador, para a equipe inteira.
              </p>
              <div className="flex flex-col gap-3 sm:flex-row">
                <a href={CONTACT_HREF} target="_blank" rel="noopener noreferrer" className={buttonClasses({ size: "xl" })}>
                  Quero uma demonstração
                  <ArrowRight />
                </a>
                <a href="#recursos" className={buttonClasses({ variant: "outline", size: "xl" })}>
                  Ver recursos
                </a>
              </div>
              <ul className="mt-8 flex flex-wrap gap-x-6 gap-y-2 text-sm text-[var(--md-on-surface-variant)]">
                {["Sem instalação", "Funciona no celular", "Atualiza em tempo real"].map((t) => (
                  <li key={t} className="flex items-center gap-1.5">
                    <Check className="h-4 w-4 text-[var(--md-tertiary)]" />
                    {t}
                  </li>
                ))}
              </ul>
            </div>

            <div className="relative mx-auto w-full max-w-md exp:max-w-none">
              <KitchenPreview />
              <div className="absolute -bottom-10 -left-6 hidden sm:block">
                <PhonePreview />
              </div>
            </div>
          </div>
        </section>

        {/* Como funciona */}
        <section id="como-funciona" className="scroll-mt-20 border-y border-[var(--md-outline-variant)] py-20">
          <div className="mx-auto max-w-6xl px-4 sm:px-6">
            <SectionHeading
              eyebrow="Como funciona"
              title="Um pedido, do começo ao fim, sem se perder"
              text="Cada etapa conversa com a próxima. O garçom não precisa correr até a cozinha e o caixa não precisa decifrar comanda de papel."
            />
            <ol className="grid gap-4 sm:grid-cols-2 exp:grid-cols-4">
              {FLOW.map((step, i) => (
                <li key={step.title} className="relative rounded-[var(--radius-xl)] bg-[var(--md-surface)] p-6 ring-1 ring-[var(--md-outline-variant)]">
                  <span className="absolute right-5 top-5 font-mono text-sm text-[var(--md-on-surface-variant)]">0{i + 1}</span>
                  <span className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-[var(--md-primary-container)] text-[var(--md-on-primary-container)]">
                    <step.icon className="h-5 w-5" />
                  </span>
                  <h3 className="mb-2 font-semibold">{step.title}</h3>
                  <p className="text-sm text-[var(--md-on-surface-variant)]">{step.text}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* Recursos */}
        <section id="recursos" className="scroll-mt-20 py-20">
          <div className="mx-auto max-w-6xl px-4 sm:px-6">
            <SectionHeading
              eyebrow="Recursos"
              title="Tudo o que o restaurante precisa no dia a dia"
              text="Do salão à cozinha, do balcão ao delivery: as ferramentas que substituem a comanda de papel, a planilha e o caderno do caixa."
            />
            <div className="grid gap-4 sm:grid-cols-2 exp:grid-cols-3">
              {FEATURES.map((f) => (
                <div
                  key={f.title}
                  className="rounded-[var(--radius-xl)] bg-[var(--md-surface-container-lowest)] p-6 ring-1 ring-[var(--md-outline-variant)] transition-shadow hover:shadow-[var(--md-elevation-2)]"
                >
                  <f.icon className="mb-4 h-6 w-6 text-[var(--md-primary)]" />
                  <h3 className="mb-2 font-semibold">{f.title}</h3>
                  <p className="text-sm text-[var(--md-on-surface-variant)]">{f.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Diferenciais */}
        <section id="diferenciais" className="scroll-mt-20 py-20">
          <div className="mx-auto max-w-6xl px-4 sm:px-6">
            <SectionHeading
              eyebrow="Diferenciais"
              title="Por que o LogicRestô é diferente"
              text="Feito para a realidade de quem está na correria do salão, e não para quem só olha relatório."
            />
            <div className="grid gap-6 exp:grid-cols-2">
              {DIFFERENTIALS.map((d) => (
                <div key={d.title} className="rounded-[var(--radius-2xl)] bg-[var(--md-surface)] p-7 ring-1 ring-[var(--md-outline-variant)]">
                  <span className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-[var(--md-primary)] text-[var(--md-on-primary)]">
                    <d.icon className="h-6 w-6" />
                  </span>
                  <h3 className="mb-2 text-xl font-semibold">{d.title}</h3>
                  <p className="mb-5 text-[var(--md-on-surface-variant)]">{d.text}</p>
                  <ul className="space-y-2">
                    {d.points.map((p) => (
                      <li key={p} className="flex items-start gap-2 text-sm">
                        <Check className="mt-0.5 h-4 w-4 shrink-0 text-[var(--md-tertiary)]" />
                        {p}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Perfis */}
        <section className="py-20">
          <div className="mx-auto grid max-w-6xl items-center gap-12 px-4 sm:px-6 exp:grid-cols-2">
            <div>
              <p className="mb-3 text-sm font-medium text-[var(--md-primary)]">Para a equipe toda</p>
              <h2 className="mb-4 text-3xl font-semibold tracking-tight sm:text-4xl">Uma tela certa para cada função</h2>
              <p className="text-lg text-[var(--md-on-surface-variant)]">
                Menos botão, menos erro, menos treinamento. Quem entra vê só o que faz parte do próprio trabalho, e o dono
                continua com a visão completa da operação.
              </p>
            </div>
            <div className="grid gap-3 sm:grid-cols-2">
              {ROLES.map((r) => (
                <div key={r.role} className="rounded-[var(--radius-xl)] bg-[var(--md-surface-container-lowest)] p-5 ring-1 ring-[var(--md-outline-variant)]">
                  <p className="mb-1 font-semibold">{r.role}</p>
                  <p className="text-sm text-[var(--md-on-surface-variant)]">{r.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Perguntas */}
        <section id="perguntas" className="scroll-mt-20 border-t border-[var(--md-outline-variant)] py-20">
          <div className="mx-auto max-w-3xl px-4 sm:px-6">
            <SectionHeading eyebrow="Perguntas frequentes" title="Ficou alguma dúvida?" text="As respostas para o que mais perguntam antes de começar." />
            <div className="divide-y divide-[var(--md-outline-variant)] rounded-[var(--radius-xl)] bg-[var(--md-surface)] ring-1 ring-[var(--md-outline-variant)]">
              {FAQ.map((item) => (
                <details key={item.q} className="group px-6 py-5">
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-medium [&::-webkit-details-marker]:hidden">
                    {item.q}
                    <span className="text-xl leading-none text-[var(--md-on-surface-variant)] transition-transform group-open:rotate-45">+</span>
                  </summary>
                  <p className="mt-3 text-sm text-[var(--md-on-surface-variant)]">{item.a}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* Chamada final */}
        <section id="contato" className="px-4 py-20 sm:px-6">
          <div className="mx-auto max-w-5xl overflow-hidden rounded-[var(--radius-3xl)] bg-[var(--md-primary)] px-6 py-14 text-center text-[var(--md-on-primary)] sm:px-12">
            <h2 className="mb-4 text-3xl font-semibold tracking-tight sm:text-4xl">Pronto para organizar o seu restaurante?</h2>
            <p className="mx-auto mb-8 max-w-xl text-lg opacity-90">
              Fale com a gente, veja o sistema funcionando com o seu cardápio e comece a atender sem papel.
            </p>
            <a
              href={CONTACT_HREF}
              target="_blank"
              rel="noopener noreferrer"
              className={buttonClasses({ variant: "inverse", size: "xl" })}
            >
              Quero uma demonstração
              <ArrowRight />
            </a>
          </div>
        </section>
      </main>

      <footer className="border-t border-[var(--md-outline-variant)] py-8">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-4 text-sm text-[var(--md-on-surface-variant)] sm:flex-row sm:px-6">
          <div className="flex items-center gap-2">
            <Logo className="h-5 w-5 text-[var(--md-primary)]" />
            LogicRestô © {new Date().getFullYear()}
          </div>
          <a href={LOGIN_HREF} className="hover:text-[var(--md-on-surface)]">
            Acessar o painel
          </a>
        </div>
      </footer>
    </div>
  );
}
