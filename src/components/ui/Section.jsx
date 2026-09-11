/**
 * Section
 * Semantic <section> wrapper applying wv-section vertical rhythm.
 * Accepts an optional background variant.
 *
 * @param {string} id - Section id for anchor links.
 * @param {'canvas'|'surface'|'sage'|'navy'} bg - Background variant. Defaults to 'canvas'.
 * @param {string} className - Additional classes.
 */
const BG_MAP = {
  canvas:  "bg-canvas",
  surface: "bg-surface",
  sage:    "bg-sage",
  navy:    "bg-brand-navy text-white",
};

export default function Section({ id, bg = "canvas", className = "", children, ...props }) {
  const bgClass = BG_MAP[bg] || "";
  return (
    <section
      id={id}
      className={"wv-section " + bgClass + (className ? " " + className : "")}
      {...props}
    >
      {children}
    </section>
  );
}

