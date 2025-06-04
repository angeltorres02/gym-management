import { ReactNode } from "react";

interface Props {
  children: ReactNode;
  className?: string;
}

export const Minicard = ({ children, className }: Props) => {
  return (
    <div
      className={`bg-transparent border-2 border-black rounded-lg flex justify-center items-center w-full ${className}`}
    >
      {children}
    </div>
  );
};
