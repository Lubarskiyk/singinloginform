import { cva, type VariantProps } from "class-variance-authority";
import { ButtonHTMLAttributes, ReactNode } from "react";
import { cn } from "../../utils/utils.ts";

const buttonVariants = cva(
  "mt-2 cursor-pointer rounded-lg border  px-12 py-2.5 text-xs font-semibold tracking-wide text-white uppercase " +
    "transition-scale duration-[250ms] ease-in-out hover:scale-110",
  {
    variants: {
      variant: {
        default: "bg-red-600 border-transparent",
        outline: "border-white bg-transparent",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

interface ButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  children: ReactNode;
  className?: string;
}

export default function Button({
  children,
  className,
  variant,
  ...props
}: ButtonProps): ReactNode {
  return (
    <button className={cn(buttonVariants({ variant, className }))} {...props}>
      {children}
    </button>
  );
}
