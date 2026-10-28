import type { Metadata } from "next";
import { Geist_Mono, Inter } from "next/font/google";
import "./globals.css";

// Mesmas fontes do painel: Inter em tudo; Geist Mono nos números de pedido e cronômetros.
const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-inter",
  display: "swap",
});
const geistMono = Geist_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-geist-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "LogicRestô — Pedidos, cozinha e caixa no mesmo lugar",
  description:
    "Sistema para restaurantes, lanchonetes e bares: cardápio digital com QR Code, mapa de mesas, cozinha em tempo real, delivery, controle de caixa e estoque.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR" className={`${inter.variable} ${geistMono.variable}`}>
      <body>{children}</body>
    </html>
  );
}
