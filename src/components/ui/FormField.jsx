/**
 * FormField
 * Accessible label + input/textarea wrapper with inline error messaging.
 *
 * Features:
 *   - Persistent visible label (never placeholder-only)
 *   - Correct id/htmlFor association
 *   - aria-describedby wired to error message when in error state
 *   - aria-invalid on the input when there is an error
 *   - Optional hint text
 *   - Supports all standard input props + autocomplete
 *
 * @param {string} id - Required. Unique field ID.
 * @param {string} label - Required. Visible label text.
 * @param {'input'|'textarea'|'select'} as - Form element type. Defaults to 'input'.
 * @param {string} error - Error message to display. Passing this sets aria-invalid.
 * @param {string} hint - Optional helper text below the label.
 * @param {string} className - Additional wrapper classes.
 */
export default function FormField({
  id,
  label,
  as: Tag = "input",
  error,
  hint,
  className = "",
  children,
  ...props
}) {
  const errorId    = error ? id + "-error" : undefined;
  const hintId     = hint  ? id + "-hint"  : undefined;
  const describedBy = [errorId, hintId].filter(Boolean).join(" ") || undefined;

  return (
    <div className={"flex flex-col gap-1" + (className ? " " + className : "")}>
      {/* Label */}
      <label htmlFor={id} className="wv-label">
        {label}
        {props.required && (
          <span className="ml-1 text-error" aria-hidden="true">*</span>
        )}
      </label>

      {/* Optional hint text */}
      {hint && (
        <p id={hintId} className="wv-caption mb-1">
          {hint}
        </p>
      )}

      {/* Input / textarea / select */}
      {Tag === "textarea" ? (
        <textarea
          id={id}
          className={"wv-textarea" + (error ? " is-error" : "")}
          aria-invalid={error ? "true" : undefined}
          aria-describedby={describedBy}
          {...props}
        />
      ) : Tag === "select" ? (
        <select
          id={id}
          className={"wv-input" + (error ? " is-error" : "")}
          aria-invalid={error ? "true" : undefined}
          aria-describedby={describedBy}
          {...props}
        >
          {children}
        </select>
      ) : (
        <input
          id={id}
          className={"wv-input" + (error ? " is-error" : "")}
          aria-invalid={error ? "true" : undefined}
          aria-describedby={describedBy}
          {...props}
        />
      )}

      {/* Error message */}
      {error && (
        <p id={errorId} className="wv-error-message" role="alert">
          {error}
        </p>
      )}
    </div>
  );
}
