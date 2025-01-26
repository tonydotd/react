export default function Input({ label, invalid, ...props }) {
  let labelClasses = "block mb-2 text-xs font-bold tracking-wide uppercase";
  let inputClasses = "w-full px-3 py-2 leading-tight round shadow";

  if (invalid) {
    labelClasses += ' text-red-400';
    inputClasses += ' text-red-400 bg-red-100 border-red-300';
  } else {
    labelClasses += ' text-stone-300';
    inputClasses += ' text-gray-700 bg-stone-300';
  }

  return (
    <p>
      <label
        className={labelClasses}
      >
        {label}
      </label>
      <input {...props}
        className={inputClasses}
      />
    </p>
  )
}