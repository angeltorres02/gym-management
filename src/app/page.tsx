import { New_Rocker } from "next/font/google";

const titlesFont = New_Rocker({ weight: "400" });

export default function Home() {
  return (
    <div className="flex flex-col justify-center items-center h-[80vh] text-font">
      <h1 className={`${titlesFont.className}  text-4xl`}>Monster Gym</h1>
      <span className="font-extrabold">Tepeaca</span>

      <form
        action=""
        className="flex flex-col justify-center items-center gap-10"
      >
        <div className="flex gap-6">
          <label htmlFor="" className="text-center">
            Identificate
            <input
              type="text"
              className="w-full bg-transparent placeholder:text-font/50 text-font text-sm border border-slate-200 rounded-md px-3 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow placeholder:text-center"
              placeholder="Usuario"
            />
          </label>
          <label htmlFor="" className="text-center">
            Contraseña
            <input
              type="password"
              className="w-full bg-transparent placeholder:text-font/50 text-font text-sm border border-slate-200 rounded-md px-3 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow placeholder:text-center"
              placeholder="Contraseña"
            />
          </label>
        </div>
        <button className="w-60 bg-transparent text-font text-sm border-font border-1 rounded-md px-3 py-2 ease  hover:backdrop-brightness-120 shadow-sm focus:shadow">
          Enviar
        </button>
      </form>
    </div>
  );
}
