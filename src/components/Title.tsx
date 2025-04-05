import { New_Rocker } from "next/font/google";

const titlesFont = New_Rocker({ weight: "400" });

export const Title = () => {
  return (
    <>
      <h1 className={`${titlesFont.className}  text-8xl`}>
        <span className="text-8xl text-secondary">M</span>onster{" "}
        <span className="text-8xl text-secondary">G</span>ym
      </h1>
      <h2 className="font-extrabold text-5xl mt-2">Tepeaca</h2>
    </>
  );
};
