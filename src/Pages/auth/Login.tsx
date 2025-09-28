import { useFormik } from "formik";

import type { FormikProps } from "formik";
import Form from "../../components/Form";
import * as Yup from "yup";

const loginUIArray: LoginUI[] = [
  {
    label: "Email",
    type: "text",
    isCompulsory: "Compulsory",
    name: "email",
  },

  {
    label: "Password",
    type: "password",
    isCompulsory: "Compulsory",
    name: "password",
  },
];

export interface LoginUI {
  label: string;
  type: string;
  isCompulsory?: string;
  name?: string;
}

export interface LoginFormValues {
  email: string;
  password: string;
}

const { type, label, btnSvgIcon, color } = {
  type: "small-width",
  label: "Login",
  btnSvgIcon: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 640 640"
      className="w-5 fill-white"
    >
      <path d="M416 160L480 160C497.7 160 512 174.3 512 192L512 448C512 465.7 497.7 480 480 480L416 480C398.3 480 384 494.3 384 512C384 529.7 398.3 544 416 544L480 544C533 544 576 501 576 448L576 192C576 139 533 96 480 96L416 96C398.3 96 384 110.3 384 128C384 145.7 398.3 160 416 160zM406.6 342.6C419.1 330.1 419.1 309.8 406.6 297.3L278.6 169.3C266.1 156.8 245.8 156.8 233.3 169.3C220.8 181.8 220.8 202.1 233.3 214.6L306.7 288L96 288C78.3 288 64 302.3 64 320C64 337.7 78.3 352 96 352L306.7 352L233.3 425.4C220.8 437.9 220.8 458.2 233.3 470.7C245.8 483.2 266.1 483.2 278.6 470.7L406.6 342.7z" />
    </svg>
  ),
  color: "bg-black",
};

const LoginValidationSchema = Yup.object({
  email: Yup.string()
    .email("Invalid email address")
    .required("Email is required"),
  password: Yup.string()
    .min(6, "Password must be at least 6 characters")
    .required("Password is required"),
});

const Login = () => {
  const formik: FormikProps<LoginFormValues> = useFormik<LoginFormValues>({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: LoginValidationSchema,
    onSubmit: (values) => {
      console.log(values);
    },
  });

  return (
    <>
      {/* <!-- Login Form --> */}
      <Form
        type="HorizontalFormCenter"
        title="Login"
        formik={formik}
        UITextArray={loginUIArray}
        btnLabel={label}
        btnType={type}
        btnSvgIcon={btnSvgIcon}
        color={color}
      />
    </>
  );
};

export default Login;
