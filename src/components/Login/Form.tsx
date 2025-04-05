import { Input } from "./Input";
import { SendButton } from "./SendButton";

export const Form = () => {
  return (
    <form className="flex flex-col gap-12 mt-10 justify-center items-center">
      <div className="flex gap-20 ">
        <Input label="Usuario" type="text" />
        <Input label="Contraseña" type="password" />
      </div>
      <SendButton />
    </form>
  );
};
