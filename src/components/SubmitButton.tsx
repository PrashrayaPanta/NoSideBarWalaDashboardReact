const SubmitButton = ({
  label,
  svgIcon,
  color,
}: {
  label: string;
  svgIcon: React.ReactElement<React.SVGProps<SVGSVGElement>>;
  color: string;
}) => {
  // Add Button Vanni ma h-min hunu paryo aarru same

  // Edit and Delete ma same

  // Form Ko Button ma w-max ra mt-5

  return (
    <>
      <a
        href={`/category/${label.toLowerCase()}`}
        className={`${color} text-white px-4 py-2 rounded-sm ${
          label === "Add" ? "h-min" : null
        }  ${
          label === "Submit" ? "w-max" : null
        }  flex items-center hover:cursor-pointer  gap-2`}
      >
        {svgIcon}
        {label}
      </a>
    </>
  );
};

export default SubmitButton;
