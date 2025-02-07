export default function TabButton({ children, isSelected, ...props }) {
  return (
    <li {...props}>
      <button className={isSelected ? 'active' : undefined}>
        {children}
      </button>
    </li>
  );
}