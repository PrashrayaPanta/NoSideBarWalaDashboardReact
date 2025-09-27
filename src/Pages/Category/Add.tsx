import Form from "../../components/Form";

const CategoryUIArray: CategoryEachField[] = [
  {
    label: "Category Name",
    isCompulsory: "Compulsory",
    type: "text",
  },
];

const categoryUITextarea: categoryUITextareaField[] = [
  {
    label: "Description dsjihjikkjbjk",
    isCompulsory: "Compulsory",
  },
];

export interface categoryUITextareaField {
  label: string;
  isCompulsory: string;
}

export interface CategoryEachField {
  label: string;
  isCompulsory: string;
  type: string;
}

// Button
const { label, type, btnSvgIcon, color } = {
  label: "Add",
  type: "small-width",
  btnSvgIcon: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 640 640"
      className="fill-white w-5 h-5"
    >
      <path d="M352 128C352 110.3 337.7 96 320 96C302.3 96 288 110.3 288 128L288 288L128 288C110.3 288 96 302.3 96 320C96 337.7 110.3 352 128 352L288 352L288 512C288 529.7 302.3 544 320 544C337.7 544 352 529.7 352 512L352 352L512 352C529.7 352 544 337.7 544 320C544 302.3 529.7 288 512 288L352 288L352 128z" />
    </svg>
  ),
  color: "bg-black",
};

const CategoryAdd = () => {
  return (
    <>
      {/* <!-- Category Form --> */}
      {/* <div className="shadow-2xl rounded-sm py-4 mx-4 px-4 mt-2"> */}
      {/* <Title text="Category Form" /> */}
      <Form
        title="Category Add Form"
        UIArray={CategoryUIArray}
        btnLabel={label}
        btnType={type}
        btnSvgIcon={btnSvgIcon}
        color={color}
      />

      {/* </div> */}
    </>
  );
};

export default CategoryAdd;
