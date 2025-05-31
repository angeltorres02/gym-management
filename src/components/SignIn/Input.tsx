interface Props {
  label: string;
  type: "password" | "text" | "email" | "number";
  name: string;
}

export const Input = ({ label, type, name }: Props) => {
  return (
    <label className="flex flex-col justify-center items-center gap-4">
      {label}
      <input
        type={type}
        className="border-1 border-secondary rounded-sm p-1 focus:border-1 focus:border-secondary focus:outline-none "
        name={name}
      />
    </label>
  );
};
