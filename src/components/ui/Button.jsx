import Link from "next/link";

/**
 * Button
 * Primary and secondary button / link component with full interaction states.
 *
 * Variants:
 *   - 'primary'   — dark navy fill (wv-btn-primary)
 *   - 'secondary' — outlined (wv-btn-secondary)
 *   - 'ghost'     — low-emphasis (wv-btn-ghost)
 *
 * Use as="a" + href for link variants.
 * Use as="button" (default) for action variants.
 *
 * @param {'primary'|'secondary'|'ghost'} variant
 * @param {'button'|'submit'|'reset'} type
 * @param {boolean} isLoading - Shows loading state and disables the button.
 * @param {boolean} disabled
 * @param {string} href - If provided, renders a Next.js Link.
 * @param {boolean} external - If true and href is set, opens in new tab.
 * @param {React.ReactNode} icon - Optional icon to render before label.
 */
const VARIANT_MAP = {
  primary:   "wv-btn-primary",
  secondary: "wv-btn-secondary",
  ghost:     "wv-btn-ghost",
  gradient:  "wv-btn-gradient",
};

export default function Button({
  variant = "primary",
  type = "button",
  isLoading = false,
  disabled = false,
  href,
  external = false,
  icon,
  className = "",
  children,
  ...props
}) {
  const baseClass = (VARIANT_MAP[variant] || VARIANT_MAP.primary) + (className ? " " + className : "");
  const isDisabled = disabled || isLoading;

  const content = (
    <>
      {isLoading ? (
        <span
          className="inline-block w-4 h-4 border-2 border-current border-t-transparent rounded-full animate-spin"
          aria-hidden="true"
        />
      ) : icon ? (
        <span className="shrink-0" aria-hidden="true">{icon}</span>
      ) : null}
      <span>{isLoading ? "Please wait\u2026" : children}</span>
    </>
  );

  if (href) {
    return (
      <Link
        href={href}
        className={baseClass}
        target={external ? "_blank" : undefined}
        rel={external ? "noopener noreferrer" : undefined}
        aria-disabled={isDisabled || undefined}
        tabIndex={isDisabled ? -1 : undefined}
        {...props}
      >
        {content}
      </Link>
    );
  }

  return (
    <button
      type={type}
      className={baseClass}
      disabled={isDisabled}
      aria-busy={isLoading || undefined}
      {...props}
    >
      {content}
    </button>
  );
}
