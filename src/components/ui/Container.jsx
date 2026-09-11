/**
 * Container
 * Shared max-width (1200px) wrapper with responsive horizontal padding.
 * Use this instead of hardcoding padding/max-width on every section.
 *
 * @param {string} as - HTML element to render. Defaults to "div".
 * @param {string} className - Additional classes.
 */
export default function Container({ as: Tag = "div", className = "", children, ...props }) {
  return (
    <Tag className={"wv-container" + (className ? " " + className : "")} {...props}>
      {children}
    </Tag>
  );
}
