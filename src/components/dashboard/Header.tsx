import { New_Rocker } from "next/font/google";
import { SignOut } from "../SingOut/SignOut";

const titlesFont = New_Rocker({ weight: "400" });

export const Header = () => {
  return (
    <header className="w-full border-b-1 border-secondary p-4 flex justify-between">
      <h1 className={`${titlesFont.className} text-font text-4xl mx-6`}>
        <span className=" text-secondary">M</span>onster{" "}
        <span className=" text-secondary">G</span>ym
      </h1>
      <SignOut />
    </header>
  );
};
