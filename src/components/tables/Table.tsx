"use client";
import {
  ColumnDef,
  useReactTable,
  getCoreRowModel,
  flexRender,
  getPaginationRowModel,
  getSortedRowModel,
  SortingState,
} from "@tanstack/react-table";
import { useState } from "react";

interface Props<T> {
  data: T[];
  columns: ColumnDef<T, any>[];
}

export const Table = <T,>({ data, columns }: Props<T>) => {
  const [sorting, setSorting] = useState<SortingState>([]);

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    state: { sorting },
    onSortingChange: setSorting,
  });

  return (
    <div>
      <table className="border-collapse border-spacing-0 w-[90%] border-1 border-secondary m-4">
        <thead>
          {table.getHeaderGroups().map((headerGroup) => (
            <tr key={headerGroup.id} className="p-4">
              {headerGroup.headers.map((header) => (
                <th
                  key={header.id}
                  className="px-4 py-2 text-left border-1 border-secondary/20"
                  onClick={header.column.getToggleSortingHandler()}
                >
                  <>
                    {flexRender(
                      header.column.columnDef.header,
                      header.getContext()
                    )}{" "}
                    {
                      { asc: "↑", desc: "↓" }[
                        header.column.getIsSorted() as string
                      ]
                    }
                  </>
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody>
          {table.getRowModel().rows.map((row) => (
            <tr
              key={row.id}
              className="odd:bg-[#333] border-1 border-secondary/20"
            >
              {row.getVisibleCells().map((cell) => (
                <td
                  key={cell.id}
                  className="p-4 border-1 border-secondary/20 w-40 h-22"
                >
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
      <div className="flex justify-center gap-40 mt-12 items-center">
        <button
          disabled={!table.getCanPreviousPage()}
          className="border-1 border-secondary/50 bg-secondary/20 p-4 disabled:opacity-30 hover:bg-secondary/30 disabled:hover:bg-secondary/20 transition-all"
          onClick={() => table.previousPage()}
        >
          Pagina Anterior
        </button>
        <span>
          Página{" "}
          {table.getState().pagination.pageIndex < 9
            ? `0${table.getState().pagination.pageIndex + 1}`
            : table.getState().pagination.pageIndex + 1}{" "}
          de {table.getPageCount()}
        </span>
        <button
          disabled={!table.getCanNextPage()}
          className="border-1 border-secondary/50 bg-secondary/20 p-4 disabled:opacity-30 hover:bg-secondary/30 disabled:hover:bg-secondary/20 transition-all"
          onClick={() => table.nextPage()}
        >
          Pagina siguiente
        </button>
      </div>
    </div>
  );
};
