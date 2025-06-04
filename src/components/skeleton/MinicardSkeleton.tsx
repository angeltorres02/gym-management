import { ReactNode } from "react";
interface Props {
  children: ReactNode;
}

export const MinicardSkeleton = () => {
  return (
    <div className="bg-neutral-600 border-2 border-neutral-600 rounded-lg flex justify-center items-center w-full animate-pulse py-2 font-bold">
      <div className="h-5"></div>
    </div>
  );
};
