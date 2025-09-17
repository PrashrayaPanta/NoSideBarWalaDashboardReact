const TextFieldWithLabel = ({
  type,
  label,
}: {
  type: string;
  label: string;
}) => {
  return (
    <div className="grid gap-2">
      <label htmlFor="categoryName">{label}</label>
      <input
        type={type}
        id="categoryName"
        className="w-full h-8 border-1 focus:outline-none focus:border-amber-300 px-2"
      />
    </div>
  );
};

export default TextFieldWithLabel;
