import clsx from "clsx";
import { ReactNode } from "react";

type ButtonProps = {
  children: ReactNode;
  type?: "button" | "submit";
  IsFormEmpty?: boolean;
  onClick: () => void;
};
export const Button = ({
  children,
  type = "button",
  IsFormEmpty,
  onClick,
}: ButtonProps) => {
  return (
    <button
      onClick={onClick}
      disabled={IsFormEmpty}
      type={type}
      className={clsx(
        " w-full tablet:w-78 p-2.5  border-2 border-b-gray-950  rounded-2xl mx-auto ",
        IsFormEmpty ? "bg-neutral-600" : "bg-white cursor-pointer"
      )}
    >
      {children}
    </button>
  );
};
