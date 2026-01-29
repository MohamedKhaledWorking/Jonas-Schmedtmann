
export default function InputLabel({
  id = "",
  className = "block mb-2.5 text-sm capitalize",
  text = "",
}) {
  return (
    <label htmlFor={id} className={className}>
      {text}
    </label>
  );
}
