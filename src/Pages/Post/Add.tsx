import Form from "../../components/Form";

const UITextareaInformation: UITextareaField[] = [
  {
    label: "Description dsjihjikkjbjk",
    isCompulsory: "Compulsory",
  },
];

export interface UITextareaField {
  label: string;
  isCompulsory: string;
}

const PostUIInformation: PostFields[] = [
  {
    label: "Title",
    type: "text",
    isCompulsory: "Compulsory",
  },
];

export interface PostFields {
  label: string;
  type: string;
  isCompulsory?: string;
}

// File Upload Array

const FileUploadUIArrayInformation: FileUploadtype[] = [
  {
    label: "Images",
    isCompulsory: "Compulsory",
  },
];

export interface FileUploadtype {
  label: string;
  isCompulsory: string;
}

// Button Information
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

const PostAdd = () => {
  return (
    <>
      {/* <!-- Category Form --> */}
      <Form
        title="Add Post"
        UITextAreaArray={UITextareaInformation}
        fileUploadUIInformation={FileUploadUIArrayInformation}
        UIArray={PostUIInformation}
        btnSvgIcon={btnSvgIcon}
        btnLabel={label}
        btnType={type}
        color={color}
      />
    </>
  );
};

export default PostAdd;
