import React from "react";

const variants = {
  default: "bg-blue-600 text-white hover:bg-blue-700",
  destructive: "bg-red-600 text-white hover:bg-red-700",
  outline: "border border-gray-300 bg-white text-gray-800 hover:bg-gray-100",
  secondary: "bg-gray-700 text-white hover:bg-gray-800",
  ghost: "bg-transparent text-gray-700 hover:bg-gray-100",
  link: "bg-transparent text-blue-600 hover:underline p-0",
};

const sizes = {
  sm: "px-3 py-1.5 text-sm",
  default: "px-4 py-2 text-sm",
  lg: "px-6 py-3 text-base",
  icon: "w-10 h-10 p-0",
  "icon-sm": "w-8 h-8 p-0",
  "icon-lg": "w-12 h-12 p-0",
};

export function Button({
  children,
  variant = "default",
  size = "default",
  className = "",
  type = "button",
  disabled = false,
  ...props
}) {
  const baseClasses =
    "inline-flex items-center justify-center gap-2 rounded-md font-medium transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:opacity-50 disabled:cursor-not-allowed";

  return (
    <button
      type={type}
      disabled={disabled}
      className={`${baseClasses} ${variants[variant] || variants.default} ${
        sizes[size] || sizes.default
      } ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}

export default Button;