import clsx from "clsx";

// Versão enxuta do buttonClasses do painel (frontend/src/components/ui/buttonStyles.ts), só com
// as variantes usadas na landing.

export type ButtonVariant = "primary" | "outline" | "ghost" | "inverse";
export type ButtonSize = "md" | "lg" | "xl";

const variantClasses: Record<ButtonVariant, string> = {
  primary: "border-transparent bg-[var(--md-primary)] text-[var(--md-on-primary)] hover:bg-[color-mix(in_oklch,var(--md-primary)_80%,transparent)]",
  outline:
    "border-[var(--md-outline-variant)] bg-[var(--md-surface)] text-[var(--md-on-surface)] hover:bg-[var(--md-surface-container)]",
  ghost: "border-transparent text-[var(--md-on-surface-variant)] hover:bg-[var(--md-surface-container-high)] hover:text-[var(--md-on-surface)]",
  /** Botão claro sobre fundo na cor primária. */
  inverse:
    "border-transparent bg-[var(--md-on-primary)] text-[var(--md-primary)] hover:bg-[color-mix(in_oklch,var(--md-on-primary)_88%,transparent)]",
};

const sizeClasses: Record<ButtonSize, string> = {
  md: "h-8 px-2.5 text-sm [&_svg]:size-4",
  lg: "h-10 px-4 text-sm [&_svg]:size-4",
  xl: "h-12 px-6 text-base [&_svg]:size-4",
};

export function buttonClasses({
  variant = "primary",
  size = "md",
  className,
}: { variant?: ButtonVariant; size?: ButtonSize; className?: string } = {}) {
  return clsx(
    "inline-flex shrink-0 cursor-pointer select-none items-center justify-center gap-1.5 whitespace-nowrap rounded-lg border font-medium outline-none transition-all duration-150 focus-visible:border-[var(--ring)] focus-visible:ring-[3px] focus-visible:ring-[color-mix(in_oklch,var(--ring)_50%,transparent)] active:translate-y-px [&_svg]:shrink-0",
    variantClasses[variant],
    sizeClasses[size],
    className,
  );
}
