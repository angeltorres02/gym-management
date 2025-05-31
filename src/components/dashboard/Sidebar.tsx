"use client";

import clsx from "clsx";

import Link from "next/link";
import { usePathname } from "next/navigation";

export const Sidebar = () => {
  const pathname = usePathname();

  const navItems = [
    {
      nombre: "Menú Principal",
      url: "/dashboard",
    },
    {
      nombre: "Usuarios",
      url: "/dashboard/usuarios",
    },
    {
      nombre: "Clientes",
      url: "/dashboard/clientes",
    },
    {
      nombre: "Pagos",
      url: "/dashboard/pagos",
    },
    {
      nombre: "Registro",
      url: "/dashboard/registro",
    },
  ];

  return (
    <aside className="flex flex-col text-font w-auto border-r border-secondary">
      <nav className="h-full">
        <ul className="h-full flex flex-col ">
          {navItems.map((item) => (
            <Link
              key={item.nombre}
              className={clsx(
                "cursor-pointer py-10 px-8 text-center hover:bg-secondary/5  transition-all",
                {
                  "bg-secondary/30 hover:bg-secondary/30":
                    pathname === item.url,
                }
              )}
              href={item.url}
            >
              <li>{item.nombre}</li>
            </Link>
          ))}
        </ul>
      </nav>
    </aside>
  );
};
