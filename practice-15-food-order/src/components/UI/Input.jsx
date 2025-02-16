export default function Input({ label, id, className = "", ...props }) {
  return (
    <p className={`control ${className}`}>
      <label htmlFor={id}>{label}</label>
      <input id={id} name={id} {...props} />
    </p>
  );
}
