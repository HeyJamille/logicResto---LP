import Image, { type StaticImageData } from "next/image";
import Link from "next/link";
import type { LucideIcon } from "lucide-react";
import {
  Archive,
  ArrowRight,
  BarChart3,
  BellRing,
  Bike,
  Building2,
  Check,
  ChefHat,
  Clock,
  Coffee,
  CupSoda,
  IceCreamCone,
  LayoutGrid,
  MonitorSmartphone,
  Palette,
  Pizza,
  Printer,
  QrCode,
  Radio,
  Salad,
  Sandwich,
  ShieldCheck,
  SlidersHorizontal,
  Users,
  UtensilsCrossed,
  Wallet,
  Wine,
  X,
} from "lucide-react";
import { KitchenPreview } from "@/components/KitchenPreview";
import { ScrollReveal } from "@/components/ScrollReveal";
import { buttonClasses } from "@/lib/buttonStyles";
import { reveal } from "@/lib/reveal";
// Fotos do Unsplash (licença livre), baixadas para public/img — ver README.
import balcaoImg from "../../public/img/balcao.jpg";
import caixaImg from "../../public/img/caixa.jpg";
import cozinhaImg from "../../public/img/cozinha.jpg";
import cozinheiraImg from "../../public/img/cozinheira.jpg";
import garcomImg from "../../public/img/garcom.jpg";
import garcomBandejaImg from "../../public/img/garcom-bandeja.jpg";
import hamburguerImg from "../../public/img/hamburguer.jpg";
import pizzaioloImg from "../../public/img/pizzaiolo.jpg";

// Links configurados no .env (veja .env.example).
const CONTACT_HREF = process.env.NEXT_PUBLIC_CONTACT_URL ?? "https://wa.me/5585999063736?text=Quero%20conhecer%20o%20LogicRest%C3%B4";

const NAV = [
  { href: "#dia-a-dia", label: "No dia a dia" },
  { href: "#como-funciona", label: "Como funciona" },
  { href: "#recursos", label: "O que tem" },
  { href: "#perguntas", label: "Dúvidas" },
  { href: "#planos", label: "Planos" },
];

// Tipos de casa que rolam na faixa abaixo do topo.
const SEGMENTS: { icon: LucideIcon; label: string }[] = [
  { icon: Sandwich, label: "Hamburgueria" },
  { icon: Pizza, label: "Pizzaria" },
  { icon: Wine, label: "Bar" },
  { icon: Coffee, label: "Cafeteria" },
  { icon: UtensilsCrossed, label: "Restaurante" },
  { icon: Salad, label: "Comida saudável" },
  { icon: IceCreamCone, label: "Sorveteria e açaí" },
  { icon: CupSoda, label: "Lanchonete" },
];

// Situações da correria do salão: o "antes" que todo dono conhece e como fica com o sistema.
const PAINS: { before: string; after: string }[] = [
  {
    before: "O garçom anotou “X-salada sem cebola”, mas a letra ninguém entende.",
    after: "O pedido chega na tela da cozinha do jeitinho que o cliente pediu.",
  },
  {
    before: "Mesa 12 chamando faz dez minutos e ninguém viu.",
    after: "O mapa de mesas mostra, de longe, quem está esperando e quem quer a conta.",
  },
  {
    before: "Fim da noite, o caixa não bate e ninguém sabe onde foi parar a diferença.",
    after: "Sangria, suprimento e cada pagamento ficam registrados. A diferença aparece na hora.",
  },
  {
    before: "Cliente ligando pra perguntar se o lanche já saiu.",
    after: "Ele acompanha o pedido pelo celular, e a sua equipe atende quem está no salão.",
  },
];

const FLOW: { icon: LucideIcon; title: string; text: string }[] = [
  {
    icon: QrCode,
    title: "O cliente pede",
    text: "Lê o QR Code da mesa, abre o link do cardápio ou chama o garçom. Do jeito que ele preferir.",
  },
  {
    icon: ShieldCheck,
    title: "Alguém dá uma conferida",
    text: "O caixa olha o pedido e aprova. Se tiver algo estranho, recusa e explica o motivo.",
  },
  {
    icon: ChefHat,
    title: "A cozinha faz",
    text: "Cada item vai para quem prepara: cozinha, bar ou chapa. Com o tempo correndo na tela.",
  },
  {
    icon: Wallet,
    title: "O caixa fecha",
    text: "Pix, cartão, dinheiro, conta dividida, taxa de serviço. Cupom impresso e tudo certo.",
  },
];

// Destaques em blocos grandes, alternando foto e texto.
const SHOWCASE: {
  eyebrow: string;
  title: string;
  text: string;
  points: string[];
  image: StaticImageData;
  alt: string;
  overlay: "phone" | "kitchen" | "cash";
}[] = [
  {
    eyebrow: "Cardápio digital",
    title: "O cliente pede pelo celular, sem esperar ninguém",
    text: "Cada mesa ganha um QR Code. O cliente vê as fotos, escolhe os adicionais e manda o pedido. Depois acompanha tudo pelo celular.",
    points: ["Sem baixar aplicativo", "Adicionais, tamanhos e combos", "Mesa, retirada ou entrega"],
    image: hamburguerImg,
    alt: "Hambúrguer com batata frita sobre uma tábua de madeira",
    overlay: "phone",
  },
  {
    eyebrow: "Cozinha",
    title: "A cozinha sabe o que sai agora",
    text: "Os pedidos aparecem na tela na hora, em ordem e com o tempo correndo. Cada item vai para o seu lugar: cozinha, bar ou chapa.",
    points: ["Chega sozinho, sem papel", "Cronômetro em cada pedido", "Separado por local de preparo"],
    image: cozinhaImg,
    alt: "Cozinheiro cortando legumes na cozinha de um restaurante",
    overlay: "kitchen",
  },
  {
    eyebrow: "Balcão e caixa",
    title: "No fim da noite, o caixa fecha certinho",
    text: "Pagamentos, sangrias e suprimentos ficam registrados. Você abre o caixa, trabalha tranquilo e fecha sabendo exatamente quanto entrou.",
    points: ["Pix, cartão e dinheiro", "Conta dividida e taxa de serviço", "Fechamento impresso no balcão"],
    image: balcaoImg,
    alt: "Clientes esperando no balcão de uma cafeteria",
    overlay: "cash",
  },
];

const FEATURES: { icon: LucideIcon; title: string; text: string }[] = [
  {
    icon: QrCode,
    title: "Cardápio no celular do cliente",
    text: "Com foto, adicionais e QR Code em cada mesa. O cliente pede sem esperar e ainda acompanha o pedido.",
  },
  {
    icon: LayoutGrid,
    title: "Mapa de mesas",
    text: "Bateu o olho, sabe quem está livre, ocupado ou pedindo a conta. Separado por área do salão.",
  },
  {
    icon: ChefHat,
    title: "Tela da cozinha",
    text: "Os pedidos chegam sozinhos, em ordem, com o tempo de cada um. Acabou o grito de “saiu a 7!”.",
  },
  {
    icon: Bike,
    title: "Delivery e retirada",
    text: "Taxa de entrega por bairro e endereço do cliente salvo. Tudo no mesmo lugar que os pedidos do salão.",
  },
  {
    icon: Wallet,
    title: "Caixa que fecha",
    text: "Abertura, sangria, suprimento e fechamento. No fim do dia você sabe exatamente quanto entrou.",
  },
  {
    icon: Archive,
    title: "Estoque sem caderninho",
    text: "Toda entrada e saída fica anotada com o motivo. Nada de “alguém pegou e não avisou”.",
  },
  {
    icon: Sandwich,
    title: "Adicionais e combos",
    text: "Ponto da carne, molho extra, tamanho da pizza, combo da casa. Do jeito que o seu cardápio já é.",
  },
  {
    icon: BarChart3,
    title: "Como foram as vendas",
    text: "Quanto vendeu hoje, ticket médio e o que mais saiu, comparado com a semana passada.",
  },
  {
    icon: Printer,
    title: "Impressão no balcão",
    text: "Pedido e fechamento de caixa direto na impressora térmica que você já usa.",
  },
  {
    icon: Clock,
    title: "Seu horário respeitado",
    text: "Fechou? O cardápio avisa o cliente e não deixa pedir. Ninguém recebe pedido às 3 da manhã.",
  },
  {
    icon: Building2,
    title: "Mais de uma casa",
    text: "Tem filial? Cada uma com o seu cardápio e a sua equipe, e você acompanha todas.",
  },
  {
    icon: Palette,
    title: "Com a sua cara",
    text: "A cor, o nome e os dados do seu restaurante no sistema e no cardápio que o cliente vê.",
  },
];

const DIFFERENTIALS: { icon: LucideIcon; title: string; text: string }[] = [
  {
    icon: SlidersHorizontal,
    title: "Do seu jeito",
    text: "Não confere pedido? Não tem cozinha separada? Só faz delivery? Você liga só o que usa.",
  },
  {
    icon: Users,
    title: "Fácil pra equipe",
    text: "Cada um entra e vê só a parte do próprio trabalho. O treinamento leva minutos.",
  },
  {
    icon: Radio,
    title: "Na hora",
    text: "Pediu, apareceu. Se a internet piscar, o sistema volta sozinho e recupera o que perdeu.",
  },
  {
    icon: MonitorSmartphone,
    title: "Nada pra instalar",
    text: "Computador, tablet ou celular que você já tem. Abriu o navegador, está pronto.",
  },
];

// Cada função da equipe, falando com as próprias palavras o que espera do sistema.
const ROLES: { role: string; quote: string; text: string; image: StaticImageData; alt: string }[] = [
  {
    role: "Quem cuida do negócio",
    quote: "Quero saber como está o movimento sem ficar ligando pra ninguém.",
    text: "Vendas, cardápio, estoque e equipe, de onde estiver.",
    image: pizzaioloImg,
    alt: "Rapaz de avental sorrindo e segurando uma pizza",
  },
  {
    role: "Quem está no caixa",
    quote: "Só quero que o caixa feche certinho no fim da noite.",
    text: "Confere os pedidos, recebe e fecha o caixa.",
    image: caixaImg,
    alt: "Atendente sorrindo no caixa enquanto a cliente paga",
  },
  {
    role: "Quem atende as mesas",
    quote: "Não dá pra correr até a cozinha a cada pedido.",
    text: "Lança o pedido pelo celular, do lado do cliente.",
    image: garcomBandejaImg,
    alt: "Garçom sorrindo carregando uma bandeja com copos",
  },
  {
    role: "Quem está na cozinha",
    quote: "Me diz o que sai agora e pronto.",
    text: "Vê a fila em ordem, com o tempo de cada pedido.",
    image: cozinheiraImg,
    alt: "Cozinheira sorrindo na cozinha do restaurante",
  },
];

// Planos pagos ainda sem preço definido: aparecem como "Sob consulta" e levam para o WhatsApp.
const PLANS: {
  name: string;
  tagline: string;
  price: string;
  period?: string;
  cta: string;
  note: string;
  features: string[];
  featured?: boolean;
}[] = [
  {
    name: "Avaliação gratuita",
    tagline: "Pra conhecer o sistema completo",
    price: "R$ 0",
    period: "por 7 dias",
    cta: "Começar teste grátis",
    note: "Sem cartão de crédito · Sem fidelidade",
    features: [
      "Todos os recursos liberados",
      "Cardápio com QR Code",
      "Mapa de mesas e tela da cozinha",
      "Caixa, estoque e relatórios",
      "Logins para a equipe",
    ],
    featured: true,
  },
  {
    name: "Essencial",
    tagline: "Pra organizar o salão e o caixa",
    price: "Sob consulta",
    cta: "Falar com a gente",
    note: "Para uma unidade",
    features: [
      "Cardápio com QR Code",
      "Mapa de mesas",
      "Tela da cozinha",
      "Caixa com fechamento",
      "Impressão no balcão",
    ],
  },
  {
    name: "Profissional",
    tagline: "Pra quem quer controle total",
    price: "Sob consulta",
    cta: "Falar com a gente",
    note: "Para uma ou mais unidades",
    features: [
      "Tudo do Essencial",
      "Delivery e retirada",
      "Controle de estoque",
      "Relatórios de vendas",
      "Mais de uma unidade",
    ],
  },
];

const FAQ = [
  {
    q: "Vou precisar comprar algum equipamento?",
    a: "Não. Ele funciona no navegador, então o computador, o tablet e os celulares que você já tem dão conta. Se quiser imprimir os pedidos, uma impressora térmica comum de 80 mm resolve.",
  },
  {
    q: "Meu cliente vai ter que baixar aplicativo?",
    a: "Não. Ele aponta a câmera para o QR Code da mesa (ou abre o link do seu cardápio) e já pode pedir.",
  },
  {
    q: "Dá pra usar no salão e no delivery ao mesmo tempo?",
    a: "Dá. Mesa, retirada e entrega entram no mesmo lugar, e você escolhe quais desses o seu restaurante aceita.",
  },
  {
    q: "Consigo escolher o que cada funcionário vê?",
    a: "Consegue. Cada pessoa tem o próprio login (garçom, caixa, cozinha, supervisor ou gerente) e você ainda pode liberar ou esconder item por item do menu.",
  },
  {
    q: "O cupom que sai na impressora é nota fiscal?",
    a: "Não, e a gente prefere ser sincero sobre isso: o cupom é um comprovante do pedido e do fechamento de caixa. A NFC-e precisa de certificado digital e autorização da SEFAZ, e é emitida à parte.",
  },
  {
    q: "Tenho mais de uma loja. Funciona pra mim?",
    a: "Funciona. Você cadastra cada unidade com o seu cardápio, a sua equipe e as suas configurações, e acompanha todas.",
  },
];

function Logo({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden className={className}>
      <path d="M8.1 13.34l2.83-2.83L3.91 3.5a4.008 4.008 0 0 0 0 5.66l4.19 4.18zm6.78-1.81c1.53.71 3.68.21 5.27-1.38 1.91-1.91 2.28-4.65.81-6.12-1.46-1.46-4.2-1.1-6.12.81-1.59 1.59-2.09 3.74-1.38 5.27L3.7 19.87l1.41 1.41L12 14.41l6.88 6.88 1.41-1.41L13.41 13l1.47-1.47z" />
    </svg>
  );
}

/** Traço amarelo "feito à mão" embaixo de uma palavra do título. */
function Swoosh({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 300 24" fill="none" preserveAspectRatio="none" aria-hidden className={className}>
      <path d="M4 18C60 7 140 3 296 10" stroke="currentColor" strokeWidth="8" strokeLinecap="round" />
    </svg>
  );
}

function SectionHeading({ eyebrow, title, text }: { eyebrow: string; title: string; text?: string }) {
  return (
    <div className="mx-auto mb-12 max-w-2xl text-center" {...reveal()}>
      <p className="mb-3 inline-block rounded-full bg-[var(--md-primary-container)] px-3 py-1 text-sm font-semibold text-[var(--md-primary)]">
        {eyebrow}
      </p>
      <h2 className="mb-4 font-display text-3xl font-bold tracking-tight text-[var(--md-on-surface)] sm:text-[2.6rem] sm:leading-tight">
        {title}
      </h2>
      {text && <p className="text-base text-[var(--md-on-surface-variant)] sm:text-lg">{text}</p>}
    </div>
  );
}

/** Cartãozinho branco que flutua sobre as fotos (notificações do sistema). */
function FloatingCard({
  icon: Icon,
  tone,
  title,
  text,
  className,
  delay = "0s",
}: {
  icon: LucideIcon;
  tone: string;
  title: string;
  text: string;
  className?: string;
  delay?: string;
}) {
  return (
    <div aria-hidden className={`absolute z-10 ${className ?? ""}`}>
      <div
        className="flex animate-bob items-center gap-3 rounded-2xl bg-white px-4 py-3 shadow-[var(--md-elevation-3)]"
        style={{ animationDelay: delay }}
      >
        <span className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full ${tone}`}>
          <Icon className="h-5 w-5" />
        </span>
        <div className="whitespace-nowrap">
          <p className="text-sm font-semibold text-[var(--md-on-surface)]">{title}</p>
          <p className="text-xs text-[var(--md-on-surface-variant)]">{text}</p>
        </div>
      </div>
    </div>
  );
}

function PhonePreview() {
  return (
    <div aria-hidden className="w-[200px] rounded-[2.2rem] bg-[var(--md-inverse-surface)] p-2 shadow-[var(--md-elevation-3)]">
      <div className="overflow-hidden rounded-[1.8rem] bg-white">
        <div className="bg-[var(--md-primary)] px-4 pb-4 pt-5 text-white">
          <p className="text-[11px] opacity-85">Mesa 7 · Aberto agora</p>
          <p className="font-display text-sm font-bold">Cardápio</p>
        </div>
        <div className="flex gap-1.5 px-3 pt-3">
          {["Lanches", "Bebidas", "Doces"].map((c, i) => (
            <span
              key={c}
              className={`rounded-full px-2 py-0.5 text-[10px] font-medium ${i === 0 ? "bg-[var(--md-primary)] text-white" : "bg-[var(--md-surface-container)] text-[var(--md-on-surface-variant)]"}`}
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
            <div key={name} className="flex items-center gap-2 rounded-xl bg-white p-2 ring-1 ring-[var(--md-outline-variant)]">
              <span className="h-8 w-8 shrink-0 rounded-lg bg-[var(--brand-yellow-container)]" />
              <div className="min-w-0 flex-1">
                <p className="truncate text-[11px] font-semibold text-[var(--md-on-surface)]">{name}</p>
                <p className="text-[10px] font-medium text-[var(--md-tertiary)]">{price}</p>
              </div>
            </div>
          ))}
          <div className="mt-1 rounded-full bg-[var(--md-primary)] py-2 text-center text-[11px] font-semibold text-white">
            Ver carrinho · 2 itens
          </div>
        </div>
      </div>
    </div>
  );
}

/** Resumo ilustrativo do caixa do dia (valores fictícios). */
function CashPreview() {
  return (
    <div aria-hidden className="w-[250px] rounded-3xl bg-white p-5 shadow-[var(--md-elevation-3)]">
      <p className="mb-1 text-xs font-medium text-[var(--md-on-surface-variant)]">Caixa de hoje</p>
      <p className="mb-4 font-display text-2xl font-bold text-[var(--md-on-surface)]">R$ 3.482,90</p>
      <div className="space-y-2.5 text-sm">
        {[
          ["Pix", "R$ 1.640,00", "w-[78%]"],
          ["Cartão", "R$ 1.312,90", "w-[62%]"],
          ["Dinheiro", "R$ 530,00", "w-[28%]"],
        ].map(([label, value, width]) => (
          <div key={label}>
            <div className="mb-1 flex justify-between text-xs">
              <span className="text-[var(--md-on-surface-variant)]">{label}</span>
              <span className="font-semibold text-[var(--md-on-surface)]">{value}</span>
            </div>
            <div className="h-1.5 rounded-full bg-[var(--md-surface-container)]">
              <div className={`h-full rounded-full bg-[var(--md-primary)] ${width}`} />
            </div>
          </div>
        ))}
      </div>
      <p className="mt-4 flex items-center gap-1.5 rounded-full bg-[var(--md-tertiary-container)] px-3 py-1.5 text-xs font-semibold text-[var(--md-on-tertiary-container)]">
        <Check className="h-3.5 w-3.5" /> Caixa conferido, sem diferença
      </p>
    </div>
  );
}

export default function LandingPage() {
  return (
    <div className="min-h-screen overflow-x-clip bg-[var(--md-surface-container)] text-[var(--md-on-surface)]">
      <ScrollReveal />

      <header className="sticky top-0 z-30 border-b border-[var(--md-outline-variant)] bg-white/90 backdrop-blur">
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-4 sm:px-6">
          <Link href="/" className="flex items-center gap-2 font-display text-xl font-bold">
            <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-[var(--md-primary)] p-1.5 text-white">
              <Logo className="h-full w-full" />
            </span>
            LogicRestô
          </Link>
          <nav className="hidden items-center gap-7 text-sm font-medium text-[var(--md-on-surface-variant)] lg:flex">
            {NAV.map((n) => (
              <a key={n.href} href={n.href} className="transition-colors hover:text-[var(--md-primary)]">
                {n.label}
              </a>
            ))}
          </nav>
          <a href={CONTACT_HREF} target="_blank" rel="noopener noreferrer" className={buttonClasses({ size: "lg" })}>
            Fale com a gente
          </a>
        </div>
      </header>

      <main>
        {/* Topo */}
        <section className="relative bg-white">
          <div className="relative mx-auto grid max-w-6xl items-center gap-14 px-4 pb-20 pt-12 sm:px-6 lg:grid-cols-[1.05fr_1fr] lg:pb-28 lg:pt-20">
            <div>
              <span className="mb-6 inline-flex animate-enter items-center gap-2 rounded-full bg-[var(--brand-yellow-container)] px-4 py-1.5 text-sm font-semibold text-[var(--md-on-warning-container)]">
                <UtensilsCrossed className="h-4 w-4" />
                Pra quem vive a correria do salão
              </span>
              <h1
                className="mb-6 animate-enter font-display text-[2.6rem] font-extrabold leading-[1.05] tracking-tight sm:text-6xl lg:text-[4.2rem]"
                style={{ animationDelay: "100ms" }}
              >
                Casa cheia,
                <br />
                equipe{" "}
                <span className="relative inline-block text-[var(--md-primary)]">
                  tranquila
                  <Swoosh className="absolute -bottom-2 left-0 h-3 w-full text-[var(--brand-yellow)] sm:-bottom-3 sm:h-4" />
                </span>
              </h1>
              <p className="mb-9 max-w-xl animate-enter text-lg text-[var(--md-on-surface-variant)] sm:text-xl" style={{ animationDelay: "200ms" }}>
                O LogicRestô organiza os pedidos, a cozinha e o caixa pra você poder fazer o que mais importa: cuidar
                bem de quem senta à sua mesa.
              </p>
              <div className="flex animate-enter flex-col gap-3 sm:flex-row" style={{ animationDelay: "300ms" }}>
                <a href={CONTACT_HREF} target="_blank" rel="noopener noreferrer" className={buttonClasses({ size: "xl", className: "group" })}>
                  Quero ver funcionando
                  <ArrowRight className="transition-transform group-hover:translate-x-1" />
                </a>
                <a href="#dia-a-dia" className={buttonClasses({ variant: "outline", size: "xl" })}>
                  Como ele ajuda
                </a>
              </div>
              <ul className="mt-9 flex flex-wrap gap-x-6 gap-y-2 text-sm font-medium text-[var(--md-on-surface-variant)]">
                {["Nada pra instalar", "Usa o celular que você já tem", "Pedido chega na hora"].map((t, i) => (
                  <li key={t} className="flex animate-enter items-center gap-2" style={{ animationDelay: `${400 + i * 90}ms` }}>
                    <span className="flex h-5 w-5 items-center justify-center rounded-full bg-[var(--md-tertiary)] text-white">
                      <Check className="h-3 w-3" />
                    </span>
                    {t}
                  </li>
                ))}
              </ul>
            </div>

            {/* Foto com forma orgânica, mancha azul atrás e notificações flutuando */}
            <div className="relative mx-auto w-full max-w-[460px] animate-enter" style={{ animationDelay: "200ms" }}>
              <div
                aria-hidden
                className="absolute inset-0 translate-x-5 translate-y-5 rotate-6 rounded-[46%_54%_42%_58%/55%_45%_55%_45%] bg-[var(--md-primary)]"
              />
              <div aria-hidden className="absolute -right-4 -top-6 h-24 w-24 rounded-full bg-[var(--brand-yellow)]" />
              <div className="relative aspect-[4/5] overflow-hidden rounded-[46%_54%_42%_58%/55%_45%_55%_45%]">
                <Image
                  src={garcomImg}
                  alt="Garçom sorrindo segurando um prato no salão do restaurante"
                  fill
                  priority
                  placeholder="blur"
                  sizes="(min-width: 1024px) 460px, 90vw"
                  className="object-cover"
                />
              </div>
              <FloatingCard
                icon={BellRing}
                tone="bg-[var(--md-primary-container)] text-[var(--md-primary)]"
                title="Novo pedido · Mesa 7"
                text="2× X-Burguer, 1× Batata"
                className="-left-4 top-10 sm:-left-14"
              />
              <FloatingCard
                icon={Check}
                tone="bg-[var(--md-tertiary)] text-white"
                title="Pedido #1039 pronto"
                text="Retirada no balcão"
                className="-right-2 bottom-16 sm:-right-10"
                delay="-2s"
              />
            </div>
          </div>
        </section>

        {/* Faixa de segmentos rolando */}
        <div className="relative z-10 -my-6 -rotate-2 bg-[var(--md-primary)] py-4 text-white shadow-[var(--md-elevation-3)]">
          <div className="flex w-max animate-marquee gap-10 pr-10">
            {[...SEGMENTS, ...SEGMENTS].map((s, i) => (
              <span key={i} aria-hidden={i >= SEGMENTS.length} className="flex items-center gap-2.5 font-display text-lg font-semibold">
                <s.icon className="h-5 w-5 text-[var(--brand-yellow)]" />
                {s.label}
              </span>
            ))}
          </div>
        </div>

        {/* No dia a dia: as dores da correria e como ficam */}
        <section id="dia-a-dia" className="scroll-mt-20 pb-20 pt-28">
          <div className="mx-auto max-w-5xl px-4 sm:px-6">
            <SectionHeading
              eyebrow="A gente sabe como é"
              title="Sexta à noite, casa lotada…"
              text="Comanda que some, cliente esperando, caixa que não bate. Se você tem restaurante, já passou por isso. Olha como fica:"
            />
            <div className="grid gap-5 sm:grid-cols-2">
              {PAINS.map((p, i) => (
                <div key={p.before} {...reveal((i % 2) * 120)} className="overflow-hidden rounded-3xl bg-white shadow-[var(--md-elevation-2)]">
                  <div className="flex items-start gap-3 px-6 pb-5 pt-6">
                    <span className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[var(--md-primary-container)] text-[var(--md-primary)]">
                      <X className="h-4 w-4" />
                    </span>
                    <p className="text-[var(--md-on-surface-variant)] line-through decoration-[var(--md-primary)]/40">{p.before}</p>
                  </div>
                  <div className="flex items-start gap-3 bg-[var(--md-tertiary-container)] px-6 py-5">
                    <span className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[var(--md-tertiary)] text-white">
                      <Check className="h-4 w-4" />
                    </span>
                    <p className="font-semibold text-[var(--md-on-tertiary-container)]">{p.after}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Destaques: foto + texto alternando */}
        <section className="bg-white py-20 lg:py-28">
          <div className="mx-auto flex max-w-6xl flex-col gap-24 px-4 sm:px-6 lg:gap-32">
            {SHOWCASE.map((s, i) => (
              <div key={s.title} className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
                <div className={`relative ${i % 2 ? "lg:order-2" : ""}`} {...reveal()}>
                  <div
                    aria-hidden
                    className={`absolute -inset-3 rounded-[2.5rem] ${i % 2 ? "-rotate-3 bg-[var(--brand-yellow)]" : "rotate-3 bg-[var(--md-primary-container)]"}`}
                  />
                  <div className="relative aspect-[4/3] overflow-hidden rounded-[2.5rem]">
                    <Image src={s.image} alt={s.alt} fill placeholder="blur" sizes="(min-width: 1024px) 540px, 92vw" className="object-cover" />
                  </div>
                  <div className={`absolute -bottom-10 z-10 ${i % 2 ? "-left-2 sm:-left-8" : "-right-2 sm:-right-8"} ${s.overlay === "kitchen" ? "hidden w-[300px] max-w-[85%] sm:block" : ""}`}>
                    {s.overlay === "phone" && <div className="animate-float"><PhonePreview /></div>}
                    {s.overlay === "kitchen" && <KitchenPreview />}
                    {s.overlay === "cash" && <div className="animate-bob"><CashPreview /></div>}
                  </div>
                </div>
                <div {...reveal(120)} className="pt-8 lg:pt-0">
                  <p className="mb-3 text-sm font-bold uppercase tracking-wider text-[var(--md-primary)]">{s.eyebrow}</p>
                  <h3 className="mb-5 font-display text-3xl font-bold leading-tight tracking-tight sm:text-4xl">{s.title}</h3>
                  <p className="mb-7 text-lg text-[var(--md-on-surface-variant)]">{s.text}</p>
                  <ul className="space-y-3">
                    {s.points.map((p) => (
                      <li key={p} className="flex items-center gap-3 font-medium">
                        <span className="flex h-6 w-6 items-center justify-center rounded-full bg-[var(--md-tertiary)] text-white">
                          <Check className="h-3.5 w-3.5" />
                        </span>
                        {p}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Como funciona */}
        <section id="como-funciona" className="scroll-mt-20 py-20 lg:py-28">
          <div className="mx-auto max-w-6xl px-4 sm:px-6">
            <SectionHeading
              eyebrow="Como funciona"
              title="O caminho de um pedido, sem tropeço"
              text="Do momento em que o cliente escolhe até a conta paga, cada pessoa da equipe sabe exatamente a sua parte."
            />
            <ol className="relative grid gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
              {/* Linha tracejada ligando as etapas no desktop */}
              <div aria-hidden className="absolute left-[12%] right-[12%] top-10 hidden border-t-2 border-dashed border-[color-mix(in_oklch,var(--md-primary)_35%,transparent)] lg:block" />
              {FLOW.map((step, i) => (
                <li key={step.title} {...reveal(i * 120)} className="group relative text-center">
                  <span className="relative mx-auto mb-5 flex h-20 w-20 items-center justify-center rounded-full bg-white text-[var(--md-primary)] shadow-[var(--md-elevation-2)] transition-transform duration-300 group-hover:scale-110">
                    <step.icon className="h-8 w-8" />
                    <span className="absolute -right-1 -top-1 flex h-7 w-7 items-center justify-center rounded-full bg-[var(--md-primary)] font-display text-sm font-bold text-white">
                      {i + 1}
                    </span>
                  </span>
                  <h3 className="mb-2 font-display text-lg font-bold">{step.title}</h3>
                  <p className="mx-auto max-w-[26ch] text-sm text-[var(--md-on-surface-variant)]">{step.text}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* Recursos */}
        <section id="recursos" className="scroll-mt-20 bg-white py-20 lg:py-28">
          <div className="mx-auto max-w-6xl px-4 sm:px-6">
            <SectionHeading
              eyebrow="O que tem"
              title="Tudo o que a sua casa precisa, num lugar só"
              text="Pode aposentar a comanda de papel, a planilha e o caderninho do caixa."
            />
            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {FEATURES.map((f, i) => (
                // O reveal fica num wrapper para o translate do hover não brigar com o da entrada.
                <div key={f.title} {...reveal((i % 3) * 90)}>
                  <div className="group h-full rounded-3xl bg-[var(--md-surface-container)] p-7 transition-all duration-300 hover:-translate-y-1.5 hover:bg-white hover:shadow-[var(--md-elevation-3)]">
                    <f.icon
                      strokeWidth={1.5}
                      className="mb-5 h-7 w-7 text-[var(--md-on-surface)] transition-colors duration-300 group-hover:text-[var(--md-primary)]"
                    />
                    <h3 className="mb-2 font-display text-lg font-bold">{f.title}</h3>
                    <p className="text-[15px] text-[var(--md-on-surface-variant)]">{f.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Diferenciais: faixa azul */}
        <section className="relative overflow-hidden bg-[var(--md-primary)] py-20 text-white lg:py-24">
          <div aria-hidden className="absolute -left-24 -top-24 h-80 w-80 rounded-full bg-white/10" />
          <div aria-hidden className="absolute -bottom-32 right-10 h-96 w-96 rounded-full bg-white/5" />
          <div className="relative mx-auto max-w-6xl px-4 sm:px-6">
            <div className="mx-auto mb-14 max-w-2xl text-center" {...reveal()}>
              <h2 className="mb-4 font-display text-3xl font-bold tracking-tight sm:text-[2.6rem] sm:leading-tight">Feito pra rotina de verdade</h2>
              <p className="text-lg text-white/85">
                Pensado pra quem está no balcão, na chapa e entre as mesas, e não só pra quem olha relatório.
              </p>
            </div>
            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {DIFFERENTIALS.map((d, i) => (
                <div key={d.title} {...reveal(i * 100)} className="rounded-3xl bg-white/10 p-7 ring-1 ring-white/20 backdrop-blur-sm">
                  <d.icon strokeWidth={1.5} className="mb-5 h-7 w-7 text-white" />
                  <h3 className="mb-2 font-display text-xl font-bold">{d.title}</h3>
                  <p className="text-white/85">{d.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Equipe: fotos com a fala de cada função */}
        <section className="py-20 lg:py-28">
          <div className="mx-auto max-w-6xl px-4 sm:px-6">
            <SectionHeading
              eyebrow="Pra equipe toda"
              title="Cada um com a sua tela, ninguém perdido"
              text="Quem trabalha em restaurante não tem tempo pra aprender sistema complicado. Por isso cada pessoa vê só o que precisa."
            />
            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {ROLES.map((r, i) => (
                <div key={r.role} {...reveal(i * 100)}>
                  <figure className="group h-full overflow-hidden rounded-3xl bg-white shadow-[var(--md-elevation-2)] transition-transform duration-300 hover:-translate-y-1.5">
                    <div className="relative aspect-square overflow-hidden">
                      <Image
                        src={r.image}
                        alt={r.alt}
                        fill
                        placeholder="blur"
                        sizes="(min-width: 1024px) 270px, (min-width: 640px) 45vw, 92vw"
                        className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
                      />
                    </div>
                    <div className="relative p-6 pt-8">
                      <span className="absolute -top-6 left-6 flex h-12 w-12 items-center justify-center rounded-full bg-[var(--md-primary)] font-display text-3xl leading-none text-white shadow-[var(--md-elevation-2)]">
                        “
                      </span>
                      <blockquote className="mb-4 font-display text-[17px] font-semibold leading-snug">{r.quote}</blockquote>
                      <figcaption>
                        <p className="text-sm font-bold text-[var(--md-primary)]">{r.role}</p>
                        <p className="text-sm text-[var(--md-on-surface-variant)]">{r.text}</p>
                      </figcaption>
                    </div>
                  </figure>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Perguntas */}
        <section id="perguntas" className="scroll-mt-20 bg-white py-20 lg:py-28">
          <div className="mx-auto max-w-3xl px-4 sm:px-6">
            <SectionHeading
              eyebrow="Dúvidas"
              title="Ficou com alguma pergunta?"
              text="Separamos as que mais ouvimos de donos de restaurante. Se a sua não estiver aqui, é só chamar."
            />
            <div className="space-y-3" {...reveal()}>
              {FAQ.map((item) => (
                <details key={item.q} className="group rounded-2xl bg-[var(--md-surface-container)] px-6 py-5 transition-colors open:bg-[var(--md-primary-container)]">
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-display font-semibold [&::-webkit-details-marker]:hidden">
                    {item.q}
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-white text-xl leading-none text-[var(--md-primary)] transition-transform group-open:rotate-45">
                      +
                    </span>
                  </summary>
                  <p className="mt-3 text-[15px] text-[var(--md-on-surface-variant)]">{item.a}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* Planos */}
        <section id="planos" className="scroll-mt-20 py-16 lg:py-20">
          <div className="mx-auto max-w-6xl px-4 sm:px-6">
            <SectionHeading
              eyebrow="Planos"
              title="Escolha o plano da sua casa"
              text="Comece com 7 dias grátis e, depois, fique com o plano que faz sentido pro seu restaurante."
            />
            <div className="grid items-stretch gap-6 md:grid-cols-3">
              {PLANS.map((plan, i) => (
                <div key={plan.name} {...reveal(i * 100)}>
                  <div
                    className={`relative flex h-full flex-col overflow-hidden rounded-3xl bg-white shadow-[var(--md-elevation-2)] transition-transform duration-300 hover:-translate-y-1.5 ${plan.featured ? "ring-2 ring-[var(--md-primary)]" : "ring-1 ring-[var(--md-outline-variant)]"}`}
                  >
                    {plan.featured && (
                      <div className="bg-[var(--md-primary)] py-1.5 text-center text-xs font-bold uppercase tracking-wider text-white">
                        Comece por aqui
                      </div>
                    )}
                    <div className="flex flex-1 flex-col p-7">
                      <h3 className="font-display text-lg font-bold">{plan.name}</h3>
                      <p className="mb-5 text-sm text-[var(--md-on-surface-variant)]">{plan.tagline}</p>
                      <p className="mb-6 flex min-h-12 items-baseline gap-1.5">
                        <span
                          className={`font-display font-extrabold tracking-tight ${plan.period ? "text-5xl" : "text-3xl"}`}
                        >
                          {plan.price}
                        </span>
                        {plan.period && <span className="font-medium text-[var(--md-on-surface-variant)]">{plan.period}</span>}
                      </p>
                      <ul className="mb-7 space-y-3">
                        {plan.features.map((f) => (
                          <li key={f} className="flex items-center gap-2.5 text-sm font-medium">
                            <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[var(--md-primary-container)] text-[var(--md-primary)]">
                              <Check className="h-3 w-3" strokeWidth={3} />
                            </span>
                            {f}
                          </li>
                        ))}
                      </ul>
                      <a
                        href={CONTACT_HREF}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={buttonClasses({
                          variant: plan.featured ? "primary" : "outline",
                          size: "lg",
                          className: "group mt-auto h-12 w-full text-base",
                        })}
                      >
                        {plan.cta}
                        <ArrowRight className="transition-transform group-hover:translate-x-1" />
                      </a>
                      <p className="mt-3 text-center text-xs text-[var(--md-on-surface-variant)]">{plan.note}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-[var(--md-inverse-surface)] py-10 text-white/70">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-4 text-sm sm:flex-row sm:px-6">
          <div className="flex items-center gap-2 font-display text-base font-bold text-white">
            <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-[var(--md-primary)] p-1.5">
              <Logo className="h-full w-full" />
            </span>
            LogicRestô
          </div>
          <p>Feito pra quem vive a correria do salão · © {new Date().getFullYear()}</p>
        </div>
      </footer>
    </div>
  );
}
