import type { FormikProps } from "formik";

const TextFieldWithLabel = ({
  type = "text",
  label,
  isCompulsory,
  formik,
  name,
}: {
  type?: string;
  label: string;
  isCompulsory?: string;
  name?: string;
  formik: FormikProps<any>;
}) => {
  console.log("I am inside the text field with label");

  // console.log(name);
  console.log(formik);
  const hasError = name && formik.errors[name] && formik.touched[name];
  const errorMessage = hasError ? formik.errors[name] : "";

  return (
    <>
      <div className="flex  flex-col">
        {/* Label with Mandatory Icon */}
        <div className="flex">
          <label htmlFor={name}>{label}</label>

          {isCompulsory === "Compulsory" && (
            <svg
              stroke="currentColor"
              fill="none"
              stroke-width="2"
              viewBox="0 0 24 24"
              stroke-linecap="round"
              stroke-linejoin="round"
              className="text-red-500"
              height="18"
              width="18"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M12 6v12"></path>
              <path d="M17.196 9 6.804 15"></path>
              <path d="m6.804 9 10.392 6"></path>
            </svg>
          )}
        </div>
        <input
          type={type}
          onChange={formik?.handleChange}
          onBlur={formik?.handleBlur}
          value={formik?.values[name]}
          name={name}
          className={`w-full h-8 border-1 focus:outline-none px-2 rounded-sm ${
            hasError ? "border-red-500" : "border-gray-300"
          }`}
        />
        {/* Display error message */}
        {hasError && (
          <span className="text-red-500 text-sm mt-1">{errorMessage}</span>
        )}
      </div>
    </>
  );
};

export default TextFieldWithLabel;
