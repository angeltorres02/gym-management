"use client";

import { useEffect, useState } from "react";
import { getAllUsers } from "@/actions/usuarios";
import { User } from "@/types/user";
import { Table } from "../tables/Table";

import { ColumnDef } from "@tanstack/react-table";

const columns: ColumnDef<User, any>[] = [
  { header: "Nombre", accessorKey: "name" },
  { header: "Nombre de usuario", accessorKey: "username" },
  { header: "Rol", accessorKey: "role" },
  { header: "Estatus", accessorKey: "userStatus" },
];

export const UsuariosPage = () => {
  const [usuarios, setUsuarios] = useState<User[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchClients = async () => {
      try {
        setIsLoading(true);
        const users = await getAllUsers();
        setUsuarios(users);
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
      <Table data={usuarios} columns={columns} />
    </div>
  );
};
