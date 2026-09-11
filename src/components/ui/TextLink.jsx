import Link from "next/link";

/**
 * TextLink
 * Styled internal or external link with underline animation and focus ring.
 *
 * @param {string} href - Required. Destination URL.
 * @param {boolean} external - If true, opens in new tab with proper rel attrs.
 * @param {string} className - Additional classes.
 */
export default function TextLink({ href, external = false, className = "", children, ...props }) {
  return (
    <Link
      href={href}
      className={"wv-link" + (className ? " " + className : "")}
      target={external ? "_blank" : undefined}
      rel={external ? "noopener noreferrer" : undefined}
      {...props}
    >
      {children}
    </Link>
  );
}
