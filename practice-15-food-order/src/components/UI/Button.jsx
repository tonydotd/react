export default function Button({ textOnly, children, className, ...props }) {
  let cssClasses = textOnly ? "text-button" : "button";
  cssClasses += className ? " " + className : "";

  return (
    <button className={cssClasses} {...props}>
      {children}
    </button>
  );
}
