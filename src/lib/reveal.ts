import type { CSSProperties } from "react";

/** Props para um elemento que aparece ao rolar (ver ScrollReveal), com atraso opcional (efeito cascata). */
export function reveal(delayMs = 0) {
  return {
    "data-reveal": "",
    style: { "--reveal-delay": `${delayMs}ms` } as CSSProperties,
  };
}
