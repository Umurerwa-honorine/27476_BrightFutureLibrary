// Reusable labelled form field with an optional error message underneath.
// `children` is the input/textarea; the parent connects it with the same id.
export default function FormField({ id, label, required, error, children }) {
  return (
    <div className="field">
      <label htmlFor={id}>
        {label} {required && <span className="required">*</span>}
      </label>
      {children}
      {error && (
        <small id={`${id}-error`} className="error">
          {error}
        </small>
      )}
    </div>
  );
}
