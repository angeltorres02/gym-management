import Image from "next/image";

interface Props {
  children: string;
  className?: string;
  image?: string;
  alt?: string;
}

export const Minicard = ({ children, image, alt = "", className }: Props) => {
  return (
    <div
      className={`bg-transparent border-1 border-black rounded-lg flex justify-evenly items-center w-full ${className}`}
    >
      {image && <Image src={image} alt={alt} />}
      {children}
    </div>
  );
};
