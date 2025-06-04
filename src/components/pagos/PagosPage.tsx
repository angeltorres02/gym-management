"use client";

import { useEffect, useState } from "react";

import { getAllPayments } from "@/actions/usuarios";
import { Pagos } from "@/types/payments";
import { Table } from "../tables/Table";

import dayjs from "dayjs";

import { ColumnDef } from "@tanstack/react-table";

const columns: ColumnDef<Pagos, any>[] = [
  {
    header: "Nombre",
    accessorKey: "client",
    cell: (info) => info.cell.row.original.client.name,
  },
  { header: "Cantidad", accessorKey: "amount" },
  {
    header: "Fecha del pago",
    accessorKey: "date",
    cell: (info) => dayjs(info.getValue()).format("DD/MM/YYYY"),
  },
  { header: "Estatus", accessorKey: "paymentStatus" },
  { header: "Motivo del pago", accessorKey: "reason" },
];

export const PagosPage = () => {
  const [pagos, setPagos] = useState<Pagos[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchClients = async () => {
      try {
        setIsLoading(true);
        const pagos = await getAllPayments();
        setPagos(pagos);
      } catch (error) {
        console.error(error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchClients();
  }, []);

  if (isLoading) return <div>Cargando...</div>;

  return (
    <div className="text-font">
      <Table data={pagos} columns={columns} />
    </div>
  );
};
