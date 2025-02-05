import { cn } from "../../utils/utils.ts";
import { ReactElement } from "react";

interface InputProps {
  type: string;
  name: string;
  placeholder: string;
  className?: string;
}

export default function Input(props: InputProps): ReactElement {
  const { type, name, placeholder, className } = props;
  return (
    <input
      type={type}
      name={name}
      placeholder={placeholder}
      className={cn(
        "my-2 w-full rounded-lg border-none bg-zinc-100 px-4 py-2.5 text-base outline-none",
        className
      )}
    />
  );
}
