const TextAreaWithLabel = ({
  label,
  isCompulsory,
}: {
  label: string;
  isCompulsory: string;
}) => {
  return (
    <>
      <div className="flex  flex-col">
        {/* Label with Mandatory Icon */}
        <div className="flex">
          <label htmlFor="">{label}</label>
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

        <textarea
          name="message"
          rows={4}
          cols={50}
          placeholder="Enter your message"
          className="w-full border-1 focus:outline-none focus:border-amber-300 px-2 rounded-sm"
        ></textarea>
      </div>
    </>
  );
};

export default TextAreaWithLabel;
