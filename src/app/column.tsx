"use client"

import { ColumnDef } from "@tanstack/react-table"
import { User } from "./types"
import { createColumnHelper } from "@tanstack/react-table";
import moment from "moment";
const columnhelper = createColumnHelper();
export const columns: ColumnDef<User>[] = [
  
  {
    accessorKey: "id",
    header: "id",
     enableColumnFilter:false
  },
  {
    accessorFn: (row) => `${row.username}`,
    header: "Username",
    enableColumnFilter:true
  },
  {
    accessorKey: "name",
    header: "Name",
    enableColumnFilter:false
  },
  {
    accessorKey: "email",
    header: "Email",
    enableColumnFilter:true
  },
  {
    accessorKey: "phone",
    header: "Phone Number",
    enableColumnFilter:false
  },
  
  
]

export const columnDefwithGrouping: ColumnDef<User>[] = [
  
  
  {
    header:"Table Header",
    columns:[
      {
        accessorKey: "id",
        header: "id",
         enableColumnFilter:false
      },
      {
        accessorFn: (row) => `${row.username}`,
        header: "Username",
        enableColumnFilter:true
      },
      {
        accessorKey: "name",
        header: "Name",
        enableColumnFilter:false
      },
      {
        accessorKey: "email",
        header: "Email",
        enableColumnFilter:true
      },
      {
        accessorKey: "phone",
        header: "Phone Number",
        enableColumnFilter:false
      },
      // {
      //   accessorKey: "Date",
      //   header: "Date",
      //   // cell:({getValue}) =>moment(new Date(getValue())).format("MMM Do YY")
      // },  
    ]
  },
  
  
]