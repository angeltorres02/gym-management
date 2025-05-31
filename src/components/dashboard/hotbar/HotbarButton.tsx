interface Props {
  className?: string;
  children: string;
}

export const HotbarButton = ({ className, children }: Props) => {
  return (
    <button
      type="button"
      className={` bg-linear-to-b from-secondary/25 to-[#71851755] border-1 border-secondary rounded-md text-font px-4 py-2 ${className}`}
    >
      {children}
    </button>
  );
};
