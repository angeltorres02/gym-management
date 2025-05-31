import { auth } from "@/auth";
import { User } from "@/types/user";
import { HotbarButton } from "./hotbar/HotbarButton";

export const Hotbar = async () => {
  const session = await auth();

  const user: User = session!.user;
  const name = user.name.split(" ")[0];

  return (
    <div className="flex justify-around items-center m-6">
      <div className="text-font inline-flex flex-col  justify-center ">
        <h2 className="text-4xl font-bold">Bienvenido, {name}</h2>
        <p className="text-center text-xs font-light mt-1">
          Asi es como van las cosas hasta el momento...
        </p>
      </div>
      <div className="flex gap-2">
        <HotbarButton>Nuevo pago</HotbarButton>
        <HotbarButton>Nuevo cliente</HotbarButton>
        <HotbarButton>Registro</HotbarButton>
      </div>
    </div>
  );
};
