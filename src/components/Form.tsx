import type { FormikProps } from "formik";
import type {
  CategoryEachFieldType,
  categoryFormValues,
} from "../Pages/Category/Add";
import type {
  FileUploadtype,
  PostFieldsType,
  PostFormValues,
  PostUITextareaFieldType,
} from "../Pages/Post/Add";
import type { LoginUI } from "../Pages/auth/Login";
import type { categoryUITextareaField } from "../Pages/Category/Add";
import type { RegisterFormValues, RegisterUI } from "../Pages/auth/Register";

import type { LoginFormValues } from "../Pages/auth/Login";
import SubmitButton from "./SubmitButton";
import TextFieldWithLabel from "./TextFieldWithLabel";
import TextAreaWithLabel from "./TextAreaWithLabel";
import FileUploadField from "./FileUploadField";

const Form = ({
  type,
  title,
  UITextArray,
  btnLabel,
  btnType,
  btnSvgIcon,
  color,
  UITextAreaArray,
  formik,
  fileUploadUIInformation,
}: {
  type?: string;
  title: string;
  UITextArray?:
    | CategoryEachFieldType[]
    | LoginUI[]
    | RegisterUI[]
    | PostFieldsType[];
  UITextAreaArray?: categoryUITextareaField[] | PostUITextareaFieldType[];
  btnLabel?: string;
  formik:
    | FormikProps<LoginFormValues>
    | FormikProps<RegisterFormValues>
    | FormikProps<categoryFormValues>
    | FormikProps<PostFormValues>;
  btnType?: string;
  btnSvgIcon: React.ReactElement<React.SVGProps<SVGSVGElement>>;
  color?: string;
  fileUploadUIInformation?: FileUploadtype[];
}) => {
  console.log("I am isnide the form");

  return (
    <>
      <form
        onSubmit={formik?.handleSubmit}
        className={`space-y-5 shadow-2xl rounded-sm py-4 mx-4 px-4 mt-2 ${
          type === "HorizontalFormCenter" && "px-2 mx-auto max-w-sm"
        } `}
      >
        {/* <!-- InputFieldWithLabel --> */}
        {/* <div className="grid gap-2">
            <label htmlFor="categoryName">Name</label>
            <input
              type="text"
              id="categoryName"
              className="w-full h-8 border-1 focus:outline-none focus:border-amber-300 px-2"
            />
          </div> */}

        <h1
          className={`${
            type === "HorizontalFormCenter" && "text-center"
          } font-bold text-xl`}
        >
          {title}
        </h1>

        {UITextArray?.map(
          ({
            label,
            isCompulsory,
            type,
            name,
          }: {
            label: string;
            isCompulsory?: string;
            type: string;
            name?: string;
          }) => (
            <>
              {console.log("I am inside the map method of uitextarray")}
              {console.log(name)}
              <TextFieldWithLabel
                label={label}
                isCompulsory={isCompulsory}
                type={type}
                formik={formik}
                name={name}
              />
            </>
          )
        )}

        {/* <TextFieldWithLabel
          type="text"
          label="Category Description"
          isCompulsory="Compulsory"
        /> */}

        {/* <!-- InputFieldWithLabel --> */}
        {/* <div className="grid gap-2">
            <label htmlFor="">Name</label>
            <input
              type="text"
              className="w-full border-1 focus:outline-none focus:border-amber-300 h-8 px-2"
            />
          </div> */}

        {/* <!-- mt-5 w-max --> */}
        {/* <a className="bg-black text-white px-4 py-2 rounded-sm mt-5 flex items-center hover:cursor-pointer  gap-2 w-max">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 640 640"
              width="20"
              height="20"
              fill="white"
            >
              <path d="M568.4 37.7C578.2 34.2 589 36.7 596.4 44C603.8 51.3 606.2 62.2 602.7 72L424.7 568.9C419.7 582.8 406.6 592 391.9 592C377.7 592 364.9 583.4 359.6 570.3L295.4 412.3C290.9 401.3 292.9 388.7 300.6 379.7L395.1 267.3C400.2 261.2 399.8 252.3 394.2 246.7C388.6 241.1 379.6 240.7 373.6 245.8L261.2 340.1C252.1 347.7 239.6 349.7 228.6 345.3L70.1 280.8C57 275.5 48.4 262.7 48.4 248.5C48.4 233.8 57.6 220.7 71.5 215.7L568.4 37.7z" />
            </svg>
            Submit
          </a> */}

        {UITextAreaArray?.map(
          ({
            label,
            isCompulsory,
          }: {
            label: string;
            isCompulsory: string;
          }) => (
            <TextAreaWithLabel
              key={label}
              label={label}
              isCompulsory={isCompulsory}
            />
          )
        )}

        {fileUploadUIInformation?.map(({ label, isCompulsory }) => (
          <FileUploadField label={label} isCompulsory={isCompulsory} />
        ))}
        {/* 
        <FileUploadField label="Upload Images" isCompulsory="Compulsory" /> */}

        <SubmitButton
          label={btnLabel}
          type={btnType}
          color={color}
          svgIcon={btnSvgIcon}
        />
      </form>
    </>
  );
};

export default Form;
