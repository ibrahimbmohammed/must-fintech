import { twMerge } from "tailwind-merge";
import { cva, VariantProps } from "class-variance-authority";
import { Loader2 } from "lucide-react";
import React from "react";

const buttonVariants = cva(" ", {
  variants: {
    variant: {
      default: " ",
      primary: " bg-primaryDark text-white rounded-[10px]  py-[0.5rem] ",
      outline:
        " border-[1.8px] border-primaryDark text-primaryDark rounded-[10px]  py-[0.4rem] ",
      secondary: "text-black bg-zinc-100 rounded-[1.3rem]",
      whitebg: "text-black bg-white rounded-[0.6rem] border",
      ghost:
        "bg-transparent hover:bg-zinc-100 text-zinc-800 data-[state=open]:bg-transparent data-[state=open]:bg-transparent",
      link: "bg-transparent dark:bg-transparent underline-offset-4 hover:underline text-slate-900 dark:text-slate-100 hover:bg-transparent dark:hover:bg-transparent",
    },
    size: {
      default: "  ",
    },
  },
  defaultVariants: {
    variant: "default",
    size: "default",
  },
});

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  isLoading?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, children, type, variant, isLoading, size, ...props }, ref) => {
    return (
      <button
        className={twMerge(buttonVariants({ variant, size, className }))}
        ref={ref}
        type={type || "button"}
        disabled={isLoading}
        {...props}
      >
        {isLoading ? <Loader2 className="mr-2 h-4 w-4 animate-spin " /> : null}
        {children}
      </button>
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
