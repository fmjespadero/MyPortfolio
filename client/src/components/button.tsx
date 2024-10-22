import React from "react";

type VariantType = "primary" | "secondary" | "disabled";

interface ButtonType extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  className?: string;
  variant?: VariantType;
}

export const Button: React.FC<ButtonType> = ({
  children,
  className,
  variant = "primary",
  ...props
}) => {
  const getButtonClasses = () => {
    switch (variant) {
      case "primary":
        return "bg-[#0866FF] text-white rounded-md font-medium flex gap-1 items-center";
      case "secondary":
        return "bg-[#3A3B3C] text-white rounded-md font-medium flex gap-1 items-center";
      case "disabled":
        return "bg-gray-300 text-gray-500 cursor-not-allowed";
      default:
        return "";
    }
  };
  return (
    <button
      className={`py-3 px-2 ${getButtonClasses()} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};
