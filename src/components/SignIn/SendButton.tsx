interface Props {
  children: string;
  disabled?: boolean;
  className?: string;
}

export const SendButton = ({ children, disabled, className }: Props) => {
  return (
    <button
      className={`px-4 py-2 border-1 border-secondary font-bold text-lg rounded-sm cursor-pointer hover:bg-secondary/10 transition-colors ${className}`}
      disabled={disabled}
    >
      {children}
    </button>
  );
};
