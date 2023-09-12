/* eslint-disable react/prop-types */
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { useState } from "react";

const Input = ({
  label,
  placeholder,
  name,
  type = "text",
  onChange,
  onBlur,
  value,
  error,
  touched,
}) => {
  const [showPassword, setShowPassword] = useState(true);
  const [showIcon, setShowIcon] = useState({
    hide: 1,
    unHide: 0,
  });

  const iconClickHandler = () => {
    showPassword ? setShowPassword(false) : setShowPassword(true);
    setShowIcon({ hide: 0, unHide: 0 });
    if (showIcon.hide) {
      setTimeout(() => {
        setShowIcon({ hide: 0, unHide: 1 });
      }, 20);
    }
    if (showIcon.unHide) {
      setTimeout(() => {
        setShowIcon({ hide: 1, unHide: 0 });
      }, 20);
    }
  };
  const renderIcon = () => {
      if (type === "text") {
        return (
          <svg
            width="25"
            height="25"
            viewBox="0 0 25 25"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12.8828 2.77637C10.1203 2.77637 7.88281 5.01387 7.88281 7.77637C7.88281 10.5326 10.1203 12.7764 12.8828 12.7764C15.6453 12.7764 17.8828 10.5326 17.8828 7.77637C17.8828 5.01387 15.6453 2.77637 12.8828 2.77637ZM12.8828 15.2764C9.55156 15.2764 2.88281 16.9451 2.88281 20.2764V22.7764H22.8828V20.2764C22.8828 16.9451 16.2141 15.2764 12.8828 15.2764Z"
              fill="#C2C7CC"
            />
          </svg>
        );
      }
    if (type === "password")
      return showPassword ? (
        <FaEyeSlash
          style={{ opacity: `${showIcon.hide}` }}
          className="flex-1 text-[#C2C7CC] lg:cursor-pointer"
          onClick={iconClickHandler}
        />
      ) : (
        <FaEye
          style={{ opacity: `${showIcon.unHide}` }}
          className="flex-1 text-[#C2C7CC] lg:cursor-pointer"
          onClick={iconClickHandler}
        />
      );
  };
  return (
    <>
      <label
        htmlFor={name}
        className="flex w-full flex-col items-start justify-center gap-2 relative"
      >
        <div className="flex w-full items-center justify-start gap-4 pr-3 ">
          <span className="text-[#003666]">{label}</span>
        </div>
        <div
          className={`flex w-full items-center justify-center overflow-hidden rounded-2xl border bg-transparent ${
            error && touched && error ? "border-[#FB2047]" : "border-[#C2C7CC]"
          } p-3 lg:border-2 lg:bg-neutral-100 lg:p-4 `}
        >
          <input
            autoComplete="off"
            className="h-full w-full rounded bg-transparent text-sm lg:text-base"
            id={name}
            placeholder={placeholder}
            type={showPassword && type === "password" ? "password" : "text"}
            name={name}
            onChange={onChange}
            onBlur={onBlur}
            value={value}
            style={{ width: type === "password" ? "95%" : "100%" }}
          />
          {renderIcon()}
        </div>
        <span className="flex justify-end text-xs text-red-600 pr-4 top-[5.5rem] absolute right-0 lg:top-[6.2rem] lg:text-sm">
          {error && touched && error}
        </span>
      </label>
    </>
  );
};

export default Input;
