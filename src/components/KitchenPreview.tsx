"use client";

import { useEffect, useState } from "react";
import { ChefHat, Clock } from "lucide-react";

// Prévia ilustrativa da fila da cozinha (dados fictícios); os cronômetros andam como na tela real.
const PREVIEW_ORDERS = [
  { id: "#1042", where: "Mesa 7", seconds: 252, items: ["2× X-Burguer", "1× Batata média"], status: "Preparando", tone: "warning" },
  { id: "#1043", where: "Entrega", seconds: 95, items: ["1× Pizza calabresa", "1× Refri 2L"], status: "Na fila", tone: "neutral" },
  { id: "#1039", where: "Retirada", seconds: 588, items: ["3× Pastel de carne"], status: "Pronto", tone: "success" },
] as const;

const TONE_CLASSES = {
  warning: "bg-[var(--md-warning-container)] text-[var(--md-on-warning-container)]",
  neutral: "bg-[var(--md-secondary-container)] text-[var(--md-on-secondary-container)]",
  success: "bg-[var(--md-tertiary-container)] text-[var(--md-on-tertiary-container)]",
};

function formatTimer(total: number) {
  const m = Math.floor(total / 60);
  const s = total % 60;
  return `${String(m).padStart(2, "0")}:${String(s).padStart(2, "0")}`;
}

export function KitchenPreview() {
  const [elapsed, setElapsed] = useState(0);

  useEffect(() => {
    const id = window.setInterval(() => setElapsed((e) => e + 1), 1000);
    return () => window.clearInterval(id);
  }, []);

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
          <span className="relative flex h-1.5 w-1.5">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[var(--md-tertiary)] opacity-75" />
            <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-[var(--md-tertiary)]" />
          </span>
          Ao vivo
        </span>
      </div>
      <div className="flex flex-col gap-3">
        {PREVIEW_ORDERS.map((o, i) => (
          <div
            key={o.id}
            className="animate-slide-in rounded-[var(--radius-xl)] bg-[var(--md-surface)] p-3.5 ring-1 ring-[var(--md-outline-variant)]"
            style={{ animationDelay: `${500 + i * 180}ms` }}
          >
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
            <div className="flex items-center gap-1 font-mono text-xs tabular-nums text-[var(--md-on-surface-variant)]">
              <Clock className="h-3 w-3" />
              {/* Pedido pronto para de contar, como na fila real. */}
              {formatTimer(o.tone === "success" ? o.seconds : o.seconds + elapsed)}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
