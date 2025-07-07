import { ClientesPorMes } from "../../types/client";
import {
  Bar,
  BarChart,
  Legend,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

interface Props {
  activeClients: ClientesPorMes[];
}

interface Data {
  mes: string;
  clientes: number;
}

export const Chart = ({ activeClients }: Props) => {
  const data: Data[] = [];

  activeClients.forEach((client) => {
    const actual = {
      mes: client.month,
      clientes: client.count,
    };

    data.push(actual);
  });

  return (
    <ResponsiveContainer
      width="90%"
      height="100%"
      style={{ outline: "none", marginTop: "0.5rem" }}
    >
      <BarChart data={data}>
        <XAxis
          dataKey="mes"
          tick={{ fill: "#333" }}
          axisLine={{ stroke: "#333" }}
          tickLine={{ stroke: "#333" }}
        />
        <YAxis
          tick={{ fill: "#333" }}
          axisLine={{ stroke: "#333" }}
          tickLine={{ stroke: "#333" }}
        />
        <Tooltip
          contentStyle={{
            background: "#ddd",
            border: "2px solid #036e00",
            borderRadius: "8px",
          }}
          cursor={{ fill: "rgba(3, 110, 0, 0.1)" }}
        />
        <Legend />
        <Bar dataKey="clientes" fill="#036e00" />
      </BarChart>
    </ResponsiveContainer>
  );
};
