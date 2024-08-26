import clsx from "clsx";
import { ButtonHTMLAttributes } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "outline";
}

export default function Button({ variant = "primary", ...props }: ButtonProps) {
  const variantClass = clsx({
    "bg-green min-w-[8rem] p-2 font-bold text-black": variant === "primary",
    "text-green border-green min-w-[8rem] rounded-sm border-[1px] p-2":
      variant === "outline",
  });
  return (
    <button className={clsx(variantClass, props.className)} {...props}>
      {props.children}
    </button>
  );
}
