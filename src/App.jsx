import { useFormik } from "formik";
import * as Yup from "yup";
import "./App.css";
import FormInput from "./components/FormInput";
import toast, { Toaster } from "react-hot-toast";
import { useState } from "react";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import rahad from "../src/assets/Frame 5099.png";
function App() {
  const [isLoading, setIsLoading] = useState(0);
  const initialValues = {
    text: "",
    password: "",
  };
  const yup = Yup.string();
  const validationSchema = Yup.object({
    text: yup.min(1).required("نام را وارد نکردید"),
    password: yup
      .min(6, "کمتر از 6 کارکتر است")
      .required("رمز عبور اجباری است"),
  });
  const onSubmit = (values, helpers) => {
    setIsLoading(1);
    setTimeout(() => {
      setIsLoading(0);
      helpers.resetForm();
      toast("اطلاعات شما تایید شد", {
        icon: "✓",
        style: {
          borderRadius: "10px",
          background: "#00B977",
          color: "#fff",
        },
      });
    }, 1500);
  };
  const formik = useFormik({
    initialValues,
    onSubmit,
    validationSchema,
    validateOnMount: true,
  });

  return (
    <div className=" h-screen flex justify-center lg:gap-5 items-center mr-auto ml-auto">
      <Toaster />
      <div className="w-full lg:w-[60%] h-full flex flex-col justify-start items-center p-5  gap-8 lg:gap-3 xl:gap-8 xl:p-12 lg:p-4">
        <div className="w-full text-right">
          <svg
            width="87"
            height="60"
            viewBox="0 0 87 60"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect
              x="0.5"
              y="0.5"
              width="86"
              height="59"
              rx="7.5"
              fill="white"
            />
            <g clipPath="url(#clip0_103_1806)">
              <path
                d="M25.99 19.9999C20.47 19.9999 16 24.4799 16 29.9999C16 35.5199 20.47 39.9999 25.99 39.9999C31.52 39.9999 36 35.5199 36 29.9999C36 24.4799 31.52 19.9999 25.99 19.9999ZM32.92 25.9999H29.97C29.65 24.7499 29.19 23.5499 28.59 22.4399C30.43 23.0699 31.96 24.3499 32.92 25.9999ZM26 22.0399C26.83 23.2399 27.48 24.5699 27.91 25.9999H24.09C24.52 24.5699 25.17 23.2399 26 22.0399ZM18.26 31.9999C18.1 31.3599 18 30.6899 18 29.9999C18 29.3099 18.1 28.6399 18.26 27.9999H21.64C21.56 28.6599 21.5 29.3199 21.5 29.9999C21.5 30.6799 21.56 31.3399 21.64 31.9999H18.26ZM19.08 33.9999H22.03C22.35 35.2499 22.81 36.4499 23.41 37.5599C21.57 36.9299 20.04 35.6599 19.08 33.9999ZM22.03 25.9999H19.08C20.04 24.3399 21.57 23.0699 23.41 22.4399C22.81 23.5499 22.35 24.7499 22.03 25.9999ZM26 37.9599C25.17 36.7599 24.52 35.4299 24.09 33.9999H27.91C27.48 35.4299 26.83 36.7599 26 37.9599ZM28.34 31.9999H23.66C23.57 31.3399 23.5 30.6799 23.5 29.9999C23.5 29.3199 23.57 28.6499 23.66 27.9999H28.34C28.43 28.6499 28.5 29.3199 28.5 29.9999C28.5 30.6799 28.43 31.3399 28.34 31.9999ZM28.59 37.5599C29.19 36.4499 29.65 35.2499 29.97 33.9999H32.92C31.96 35.6499 30.43 36.9299 28.59 37.5599ZM30.36 31.9999C30.44 31.3399 30.5 30.6799 30.5 29.9999C30.5 29.3199 30.44 28.6599 30.36 27.9999H33.74C33.9 28.6399 34 29.3099 34 29.9999C34 30.6899 33.9 31.3599 33.74 31.9999H30.36Z"
                fill="black"
              />
            </g>
            <path
              d="M55.472 29.664H52.976V34H51.232V22.624H55.488C58.016 22.624 59.568 24.064 59.568 26.176C59.568 28.384 58.08 29.664 55.472 29.664ZM52.976 28.256H55.488C56.992 28.256 57.808 27.536 57.808 26.192C57.808 24.896 56.96 24.064 55.568 24.032H52.976V28.256ZM67.9483 34L65.5643 29.504H63.1323V34H61.3723V22.624H65.2763C67.8843 22.624 69.3403 23.824 69.3403 26.048C69.3403 27.488 68.5723 28.576 67.2123 29.12L69.8203 33.904V34H67.9483ZM63.1323 28.112H65.3243C66.7163 28.112 67.5963 27.312 67.5963 26.096C67.5963 24.784 66.7963 24.048 65.3243 24.032H63.1323V28.112Z"
              fill="black"
            />
            <rect
              x="0.5"
              y="0.5"
              width="86"
              height="59"
              rx="7.5"
              stroke="#AAAAAA"
            />
            <defs>
              <clipPath id="clip0_103_1806">
                <rect
                  width="24"
                  height="24"
                  fill="white"
                  transform="translate(14 18)"
                />
              </clipPath>
            </defs>
          </svg>
        </div>
        <div className="pb-9">
          <svg
            className="w-full flex justify-center items-center"
            width="201"
            height="42"
            viewBox="0 0 201 42"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M22.16 42L12.56 25.32H7.34V42H0.5V0.299997H14.9C18.1 0.299997 20.8 0.859997 23 1.98C25.24 3.1 26.9 4.6 27.98 6.48C29.1 8.36 29.66 10.46 29.66 12.78C29.66 15.5 28.86 17.98 27.26 20.22C25.7 22.42 23.28 23.92 20 24.72L30.32 42H22.16ZM7.34 19.86H14.9C17.46 19.86 19.38 19.22 20.66 17.94C21.98 16.66 22.64 14.94 22.64 12.78C22.64 10.62 22 8.94 20.72 7.74C19.44 6.5 17.5 5.88 14.9 5.88H7.34V19.86ZM63.5502 33.48H46.0902L43.0902 42H35.9502L50.8902 0.239998H58.8102L73.7502 42H66.5502L63.5502 33.48ZM61.6302 27.9L54.8502 8.52L48.0102 27.9H61.6302ZM113.546 0.299997V42H106.706V23.76H87.0861V42H80.2461V0.299997H87.0861V18.18H106.706V0.299997H113.546ZM147.691 33.48H130.231L127.231 42H120.091L135.031 0.239998H142.951L157.891 42H150.691L147.691 33.48ZM145.771 27.9L138.991 8.52L132.151 27.9H145.771ZM178.007 0.299997C182.447 0.299997 186.327 1.16 189.647 2.88C193.007 4.56 195.587 7 197.387 10.2C199.227 13.36 200.147 17.06 200.147 21.3C200.147 25.54 199.227 29.22 197.387 32.34C195.587 35.46 193.007 37.86 189.647 39.54C186.327 41.18 182.447 42 178.007 42H164.387V0.299997H178.007ZM178.007 36.42C182.887 36.42 186.627 35.1 189.227 32.46C191.827 29.82 193.127 26.1 193.127 21.3C193.127 16.46 191.827 12.68 189.227 9.96C186.627 7.24 182.887 5.88 178.007 5.88H171.227V36.42H178.007Z"
              fill="#2393B0"
            />
          </svg>
        </div>
        <p className="text-[#00519A] text-xl">
          اطلاعات حساب کاربری خود را وارد کنید
        </p>
        <form
          onSubmit={formik.handleSubmit}
          className="w-full h-[70%] flex flex-col justify-between lg:justify-start lg:gap-5 items-center"
        >
          <div className="w-full flex flex-col justify-center items-center gap-6  lg:gap-5 xl:gap-9">
            <FormInput
              label="نام کاربری"
              placeholder="نام خود را وارد نمایید"
              name="text"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.text}
              error={formik.errors.text}
              touched={formik.touched.text}
              type="text"
            />
            <FormInput
              label="رمز عبور"
              placeholder="رمز عبور خود را وارد نمایید"
              name="password"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.password}
              error={formik.errors.password}
              touched={formik.touched.password}
              type="password"
            />
            <p className="w-full text-left text-[#00519A] pl-2">
              فراموشی رمز عبور
            </p>
          </div>
          <button
            disabled={!formik.isValid}
            className="mb-6 w-full h-14 lg:w-48 lg:cursor-pointer rounded-xl cursor-default bg-gradient-to-r from-[#2393B0] to-[#087592] px-4 py-3 text-lg text-white shadow-md"
            type="submit"
          >
            {!isLoading ? (
              "ورود"
            ) : (
              <AiOutlineLoading3Quarters className="w-full animate-spin text-center text-xl text-white" />
            )}
          </button>
        </form>
      </div>
      <div className="hidden w-full lg:flex justify-center items-center bg-[#06355F] h-full rounded-tr-full rounded-br-full relative">
        <img
          className="xl:w-[50rem] xl:right-4 lg:w-[30rem] absolute right-20"
          src={rahad}
          alt="logo"
        />
      </div>
    </div>
  );
}

export default App;
