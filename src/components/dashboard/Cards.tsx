import { Minicard } from "./cards/Minicard";

export const Cards = () => {
  return (
    <div className="grid grid-cols-2 grid-rows-2 gap-4 mx-8 h-[80%]">
      {/* Primera card */}
      <div className="col-span-2 bg-linear-to-r from-[#C0C0C0] to-[#696969] flex justify-evenly rounded-2xl relative">
        <span className="text-xs font-semibold text-[#161616aa] absolute m-4 right-0 cursor-pointer group">
          <span className="relative z-10">Ver todo</span>
          <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#161616aa] transition-all duration-300 ease-in-out group-hover:w-full"></span>
        </span>
        <div className="flex flex-col m-4 text-center justify-between">
          <div>
            <h3 className="font-bold">Ingresos y pagos recientes</h3>
            <p>Total mensual</p>
          </div>
          <div className="flex flex-1 items-center justify-center">
            <p className="text-3xl font-extrabold">XX,XXX$</p>
          </div>
        </div>
        <div className="flex flex-col gap-4 m-4 justify-center items-center w-[28%] ">
          <h3 className="text-center font-bold">Últimos pagos</h3>
          <Minicard>Hola</Minicard>
          <Minicard>Hola</Minicard>
          <Minicard>Hola</Minicard>
        </div>
        <div className="flex flex-col gap-4 m-4 justify-center items-center w-[28%]">
          <h3 className="text-center font-bold">Pendientes de pago</h3>
          <Minicard>Hola</Minicard>
          <Minicard>Hola</Minicard>
          <Minicard>Hola</Minicard>
        </div>
      </div>
      {/* Segunda card */}
      <div className="row-start-2 bg-linear-to-r from-[#FF0000] to-[#9A0000] rounded-2xl">
        <div className="flex justify-between items-center m-4">
          <h3 className="font-bold">Membresias por vencer</h3>
          <span className="text-xs font-semibold text-[#161616aa] cursor-pointer group relative">
            <span className="relative z-10">Ver todo</span>
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#161616aa] transition-all duration-300 ease-in-out group-hover:w-full"></span>
          </span>
        </div>
        <div className="flex flex-col gap-4 m-4">
          <Minicard>Hola</Minicard>
          <Minicard>Hola</Minicard>
          <Minicard>Hola</Minicard>
          <Minicard>Hola</Minicard>
        </div>
      </div>
      {/* Tercera card */}
      <div className="row-start-2 bg-linear-to-r from-[#C6F200] to-[#8eae00a1] rounded-2xl">
        <div className="flex justify-between items-center m-4">
          <h3 className="font-bold">Resumen de clientes activos</h3>
          <span className="text-xs font-semibold text-[#161616aa] cursor-pointer group relative">
            <span className="relative z-10">Ver todo</span>
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#161616aa] transition-all duration-300 ease-in-out group-hover:w-full"></span>
          </span>
        </div>
        <div className="flex flex-col gap-1 m-4 ">
          {/* TODO: GRAFICA CLIENTES ACTIVOS POR MESES */}
        </div>
      </div>
    </div>
  );
};
