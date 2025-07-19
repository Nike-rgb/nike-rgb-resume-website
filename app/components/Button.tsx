import { ReactNode } from "react";

type ButtonSize = "small" | "default" | "large";
type ButtonVariant = "contained" | "outlined" | "ghost";
type ButtonType = "button" | "icon-button" | "fab";

export type ButtonProps = {
  text?: string;
  type?: "submit" | "button" | "reset";
  variant?: ButtonVariant;
  size?: ButtonSize;
  disabled?: boolean;
  startIcon?: ReactNode;
  endIcon?: ReactNode;
  onClick?: () => void;
  extraClass?: string;
  buttonType?: ButtonType;
  ariaLabel?: string;
  fullWidth?: boolean;
};

const sizeClasses: Record<ButtonSize, string> = {
  small: "py-2 text-sm",
  default: "py-3 text-base",
  large: "py-4 text-lg",
};

const variantClasses: Record<ButtonVariant, string> = {
  contained: `
    bg-[#3d4852]
    text-white
    hover:bg-[#2e3740]
    focus:bg-[#2e3740]
    disabled:bg-[#3d48524d]
    disabled:text-[#fbfcfd]
  `,
  outlined: `
    border
    border-[#3d4852]
    text-[#04070d]
    bg-white
    hover:bg-[#f0f5ff]
    disabled:border-[#d0d5dd]
    disabled:text-[#34405466]
  `,
  ghost: `
    text-[#3d4852]
    hover:bg-[#f0f5ff]
    disabled:text-[#34405466]
  `,
};

const buttonTypeClasses: Record<ButtonType, string> = {
  button: `
    px-4
    rounded-[8px]
    flex items-center justify-center gap-2
    font-medium
    font-[DM_Sans,sans-serif]
  `,
  "icon-button": `
    p-2 w-10 h-10
    rounded-[8px]
    flex items-center justify-center
  `,
  fab: `
    w-14 h-14
    rounded-full shadow-md
    flex items-center justify-center
  `,
};

export default function Button({
  text,
  type = "button",
  variant = "contained",
  size = "default",
  disabled = false,
  startIcon,
  endIcon,
  onClick,
  extraClass = "",
  buttonType = "button",
  ariaLabel = "button",
  fullWidth = false,
}: ButtonProps) {
  const finalClass = `
    ${buttonTypeClasses[buttonType] || ""}
    ${buttonType === "button" ? sizeClasses[size] || "" : ""}
    ${variantClasses[variant] || ""}
    ${fullWidth ? "w-full" : ""}
    ${extraClass}
  `
    .replace(/\s+/g, " ")
    .trim();

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={finalClass}
      aria-label={ariaLabel}
    >
      {startIcon}
      {buttonType !== "icon-button" && buttonType !== "fab" && (
        <span>{text}</span>
      )}
      {endIcon}
    </button>
  );
}
