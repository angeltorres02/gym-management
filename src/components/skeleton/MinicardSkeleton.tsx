interface Props {
  className?: string;
}

export const MinicardSkeleton = ({ className }: Props) => {
  return (
    <div
      className={`bg-neutral-600 border-2 border-neutral-600 rounded-lg flex justify-center items-center w-full animate-pulse py-2 font-bold ${className}`}
    >
      <div className="h-5"></div>
    </div>
  );
};
