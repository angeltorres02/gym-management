"use client";

import { useEffect, useState } from "react";
import { getAllClients } from "@/app/actions/usuarios";
import { Cliente } from "@/types/client";
import { Table } from "../tables/Table";

import dayjs from "dayjs";

import { ColumnDef } from "@tanstack/react-table";

const columns: ColumnDef<Cliente, any>[] = [
  { header: "Nombre", accessorKey: "name" },
  { header: "Tipo de membresía", accessorKey: "membershipType" },
  {
    header: "Fecha de inscripción",
    accessorKey: "signUpDate",
    cell: (info) => dayjs(info.getValue()).format("DD/MM/YYYY"),
  },
  { header: "Estatus", accessorKey: "status" },
];

export const ClientesPage = () => {
  const [clientes, setClientes] = useState<Cliente[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchClients = async () => {
      try {
        setIsLoading(true);
        const clientes = await getAllClients();
        setClientes(clientes);
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
      <Table data={clientes} columns={columns} />
    </div>
  );
};
