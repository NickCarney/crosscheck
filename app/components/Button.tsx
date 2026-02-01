import React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "burgundy" | "burgundy-gradient";
  size?: "default" | "large";
  fullWidth?: boolean;
  children: React.ReactNode;
}

const variantStyles = {
  primary: "bg-[#1e3a5f] text-white hover:bg-[#162d4a]",
  secondary: "bg-white text-[#1e3a5f] hover:bg-gray-100",
  burgundy: "bg-[#8b2346] text-white hover:bg-[#7a1f3d]",
  "burgundy-gradient": "bg-gradient-to-r from-[#8b2346] to-[#a52d56] text-white hover:shadow-xl transform hover:-translate-y-0.5",
};

const sizeStyles = {
  default: "px-8 py-3 text-sm",
  large: "px-10 py-4 text-lg",
};

export function Button({
  variant = "primary",
  size = "default",
  fullWidth = false,
  children,
  className = "",
  disabled,
  ...props
}: ButtonProps) {
  return (
    <button
      className={`
        ${variantStyles[variant]}
        ${sizeStyles[size]}
        ${fullWidth ? "w-full" : ""}
        rounded-lg font-semibold transition-all duration-200
        disabled:opacity-50 disabled:cursor-not-allowed
        ${className}
      `.trim()}
      disabled={disabled}
      {...props}
    >
      {children}
    </button>
  );
}
