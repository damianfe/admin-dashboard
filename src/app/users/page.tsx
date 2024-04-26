/**
 * eslint-disable @next/next/no-img-element
 *
 * @format
 */

/** @format */
"use client";

import { DataTable } from "@/components/DataTable";
import { ColumnDef } from "@tanstack/react-table";
import React from "react";
import PageTitle from "@/components/PageTitle";

type Props = {};
type Payment = {
  name: string;
  email: string;
  lastOrder: string;
  method: string;
};

const columns: ColumnDef<Payment>[] = [
  {
    accessorKey: "name",
    header: "Name",
    cell: ({ row }) => {
      return (
        <div className="flex gap-2 items-center">
          <img
            className="h-10 w-10"
            src={`https://api.dicebear.com/7.x/lorelei/svg?seed=${row.getValue(
              "name"
            )}`}
            alt="user-image"
          />
          <p>{row.getValue("name")} </p>
        </div>
      );
    }
  },
  {
    accessorKey: "email",
    header: "Email"
  },
  {
    accessorKey: "lastOrder",
    header: "Last Order"
  },
  {
    accessorKey: "method",
    header: "Sucursal"
  }
];

const data: Payment[] = [
  {
    name: "John Doe",
    email: "john@example.com",
    lastOrder: "2023-01-01",
    method: "Palermo"
  },
  {
    name: "Alice Smith",
    email: "alice@example.com",
    lastOrder: "2023-02-15",
    method: "Chacarita"
  },
  {
    name: "Bob Johnson",
    email: "bob@example.com",
    lastOrder: "2023-03-20",
    method: "Cuzco Peru"
  },
  {
    name: "Emma Brown",
    email: "emma@example.com",
    lastOrder: "2023-04-10",
    method: "Balvanera"
  },
  {
    name: "Michael Davis",
    email: "michael@example.com",
    lastOrder: "2024-05-05",
    method: "Mendoza"
  },
  {
    name: "Sophia Wilson",
    email: "sophia@example.com",
    lastOrder: "2024-06-18",
    method: "San Telmo"
  },
  {
    name: "Liam Garcia",
    email: "liam@example.com",
    lastOrder: "2023-07-22",
    method: "San Luis"
  },
  {
    name: "Olivia Martinez",
    email: "olivia@example.com",
    lastOrder: "2023-08-30",
    method: "Tucuman"
  },
  {
    name: "Noah Rodriguez",
    email: "noah@example.com",
    lastOrder: "2023-09-12",
    method: "Cordoba"
  },
  {
    name: "Ava Lopez",
    email: "ava@example.com",
    lastOrder: "2023-10-25",
    method: "Rio Cuarto"
  },
  {
    name: "Elijah Hernandez",
    email: "elijah@example.com",
    lastOrder: "2023-11-05",
    method: "Alipay"
  },
  {
    name: "Mia Gonzalez",
    email: "mia@example.com",
    lastOrder: "2023-12-08",
    method: "WeChat Pay"
  },
  {
    name: "James Perez",
    email: "james@example.com",
    lastOrder: "2024-01-18",
    method: "Square Cash"
  },
  {
    name: "Charlotte Carter",
    email: "charlotte@example.com",
    lastOrder: "2024-02-22",
    method: "Zelle"
  },
  {
    name: "Benjamin Taylor",
    email: "benjamin@example.com",
    lastOrder: "2024-03-30",
    method: "Stripe"
  }
];

export default function UsersPage({}: Props) {
  return (
    <div className="flex flex-col gap-5  w-full">
      <PageTitle title="Barbers" />
      <DataTable columns={columns} data={data} />
    </div>
  );
}
