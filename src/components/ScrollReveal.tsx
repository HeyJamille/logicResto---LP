"use client";

import { useEffect } from "react";

/**
 * Faz os elementos com `data-reveal` aparecerem ao entrar na tela (ver globals.css). Só esconde
 * os elementos depois de montar (classe `reveal-ready` no <html>), então sem JS tudo fica visível.
 */
export function ScrollReveal() {
  useEffect(() => {
    const root = document.documentElement;
    const elements = document.querySelectorAll<HTMLElement>("[data-reveal]");

    if (!("IntersectionObserver" in window)) return;
    root.classList.add("reveal-ready");

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue;
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      },
      { rootMargin: "0px 0px -8% 0px", threshold: 0.1 },
    );
    elements.forEach((el) => observer.observe(el));

    return () => {
      observer.disconnect();
      root.classList.remove("reveal-ready");
    };
  }, []);

  return null;
}
