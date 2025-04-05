import { Form } from "@/components/Login/Form";
import { Title } from "@/components/Title";

export default function Home() {
  return (
    <div className="flex flex-col justify-center items-center text-font h-[80vh]">
      <Title />
      <Form />
    </div>
  );
}
