"use client";

import { useEffect, useState } from "react";
import dayjs from "dayjs";

import {
  getActiveClients,
  getLastPayments,
  getLastPreviousPayments,
  getMembershipSoonToExpire,
} from "@/actions/homepage";

import { Minicard } from "./cards/Minicard";
import { MinicardSkeleton } from "../skeleton/MinicardSkeleton";
import { Chart } from "../chart/Chart";
import { ChartSkeleton } from "../skeleton/ChartSkeleton";

import { ClientesPorMes } from "@/types/client";
import { Membresias } from "@/types/memberships";
import { Pagos } from "@/types/payments";

export const Cards = () => {
  const [isLoadingPayments, setIsLoadingPayments] = useState(true);
  const [isLoadingPendingPayments, setIsLoadingPendingPayments] =
    useState(true);
  const [isLoadingMemberships, setIsLoadingMemberships] = useState(true);
  const [isLoadingActiveClientes, setIsLoadingActiveClients] = useState(true);
  const [total, setTotal] = useState<number>(0);
  const [lastPayments, setLastPayments] = useState<Pagos[]>([]);
  const [previousPayments, setPreviousPayments] = useState<Pagos[]>([]);
  const [AboutToExpireMemberships, setAboutToExpireMemberships] =
    useState<Membresias[]>();
  const [activeClients, setActiveClients] = useState<ClientesPorMes[]>();

  useEffect(() => {
    const retrievePayments = async () => {
      try {
        setIsLoadingPayments(true);
        const pagos = await getLastPayments();
        setLastPayments(pagos.pagos);
        setTotal(pagos.total);
      } catch (error) {
        console.error(error);
      } finally {
        setIsLoadingPayments(false);
      }
    };

    retrievePayments();
  }, []);

  useEffect(() => {
    const retrievePendingPayments = async () => {
      try {
        setIsLoadingPendingPayments(true);
        const pagosPendientes = await getLastPreviousPayments();
        setPreviousPayments(pagosPendientes);
      } catch (error) {
        console.error(error);
      } finally {
        setIsLoadingPendingPayments(false);
      }
    };
    retrievePendingPayments();
  }, []);

  useEffect(() => {
    const retrieveMemberships = async () => {
      try {
        setIsLoadingMemberships(true);
        const membresias = await getMembershipSoonToExpire();
        setAboutToExpireMemberships(membresias);
      } catch (error) {
        console.error(error);
      } finally {
        setIsLoadingMemberships(false);
      }
    };

    retrieveMemberships();
  }, []);

  useEffect(() => {
    const retrieveActiveMemberships = async () => {
      try {
        setIsLoadingActiveClients(true);
        const active = await getActiveClients();
        setActiveClients(active);
      } catch (error) {
        console.error(error);
      } finally {
        setIsLoadingActiveClients(false);
      }
    };
    retrieveActiveMemberships();
  }, []);

  console.log(lastPayments);

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
            {isLoadingPayments ? (
              <MinicardSkeleton />
            ) : (
              <p className="text-3xl font-extrabold">{total.toFixed(2)}$</p>
            )}
          </div>
        </div>
        <div className="flex flex-col gap-4 m-4 justify-center items-center w-[28%] ">
          <h3 className="text-center font-bold">Últimos pagos</h3>
          {isLoadingPayments
            ? Array.from({ length: 3 }).map((_, i) => (
                <MinicardSkeleton key={i} />
              ))
            : lastPayments.map(
                (pay, i) =>
                  i < 3 && (
                    <Minicard key={pay.id} className="text-sm py-2">
                      <p>
                        <span className="font-medium text-[#333]">
                          {pay.client.name}:{" "}
                        </span>
                        <span className="font-semibold text-green-800">
                          ${pay.amount}
                        </span>
                      </p>
                    </Minicard>
                  )
              )}
        </div>
        <div className="flex flex-col gap-4 m-4 justify-center items-center w-[28%]">
          <h3 className="text-center font-bold">Pendientes de pago</h3>
          {isLoadingPendingPayments
            ? Array.from({ length: 3 }).map((_, i) => (
                <MinicardSkeleton key={i} />
              ))
            : previousPayments.map(
                (pay, i) =>
                  i < 3 && (
                    <Minicard key={pay.id} className="text-sm py-2">
                      <p className="font-semibold">
                        <span className="font-medium text-[#333]">
                          {pay.client.name}:{" "}
                        </span>
                        <span className="font-semibold text-green-800">
                          ${pay.amount}
                        </span>
                      </p>
                    </Minicard>
                  )
              )}
        </div>
      </div>
      {/* Segunda card */}
      <div className="row-start-2 bg-linear-to-r from-[#ff0000] to-[#a00000] rounded-2xl">
        <div className="flex justify-between items-center m-4">
          <h3 className="font-bold">Membresias por vencer</h3>
          <span className="text-xs font-semibold text-[#161616aa] cursor-pointer group relative">
            <span className="relative z-10">Ver todo</span>
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#161616aa] transition-all duration-300 ease-in-out group-hover:w-full"></span>
          </span>
        </div>
        <div className="flex flex-col gap-4 mx-4 my-6">
          {isLoadingMemberships
            ? Array.from({ length: 3 }).map((_, i) => (
                <MinicardSkeleton
                  key={i}
                  className="bg-red-950 border-red-950"
                />
              ))
            : AboutToExpireMemberships?.map((membership) => (
                <Minicard key={membership.id} className="text-sm py-2">
                  <p>
                    <span className="">{membership.client.name}: </span>
                    <span className="font-semibold ">
                      {dayjs(membership.expirationDate).format("DD/MM")}
                    </span>
                  </p>
                </Minicard>
              ))}
        </div>
      </div>
      {/* Tercera card */}
      <div className="row-start-2 bg-linear-to-r from-[#C6F200] to-[#8eae00a1] rounded-2xl flex flex-col">
        <div className="flex justify-between items-center m-4">
          <h3 className="font-bold">Resumen de clientes activos</h3>
          <span className="text-xs font-semibold text-[#161616aa] cursor-pointer group relative">
            <span className="relative z-10">Ver todo</span>
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#161616aa] transition-all duration-300 ease-in-out group-hover:w-full"></span>
          </span>
        </div>
        <div className="flex flex-col gap-1 mb-4 mx-4 w-full h-full flex-1">
          {isLoadingActiveClientes ? (
            <ChartSkeleton />
          ) : (
            <Chart activeClients={activeClients!} />
          )}
        </div>
      </div>
    </div>
  );
};
