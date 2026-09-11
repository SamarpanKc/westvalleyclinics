/**
 * SectionHeading
 * Consistent heading block used across all sections.
 *
 * Structure (all parts optional except children):
 *   [eyebrow]          ← small uppercase overline label
 *   <h2>children</h2>  ← main heading
 *   [editorial]        ← italic editorial accent line (Instrument Serif)
 *   [body]             ← supporting paragraph text
 *
 * @param {'h1'|'h2'|'h3'} level - Heading level. Defaults to 'h2'.
 * @param {string} eyebrow - Small overline label above the heading.
 * @param {string} editorial - Italic editorial accent line below the heading.
 * @param {string} body - Supporting paragraph text.
 * @param {'left'|'center'} align - Text alignment. Defaults to 'left'.
 * @param {string} className - Additional wrapper classes.
 */
export default function SectionHeading({
  level: Tag = "h2",
  eyebrow,
  editorial,
  body,
  align = "left",
  className = "",
  children,
}) {
  const alignClass = align === "center" ? "text-center items-center" : "text-left items-start";

  return (
    <div className={"flex flex-col gap-3 " + alignClass + (className ? " " + className : "")}>
      {eyebrow && (
        <p className="wv-eyebrow">{eyebrow}</p>
      )}

      <Tag
        className={
          Tag === "h1" ? "wv-h1" :
          Tag === "h2" ? "wv-h2" :
          "wv-h3"
        }
      >
        {children}
      </Tag>

      {editorial && (
        <p className="wv-editorial">{editorial}</p>
      )}

      {body && (
        <p className="wv-body-muted mt-1">{body}</p>
      )}
    </div>
  );
}
