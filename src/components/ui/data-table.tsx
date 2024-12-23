"use client"
import {
  ColumnDef,
  flexRender,
  getCoreRowModel,
  useReactTable,
  getSortedRowModel,
  getFilteredRowModel,
  ColumnSort,
  getPaginationRowModel
} from "@tanstack/react-table"
// import { Table ,TableCell,TableRow,TableHeader,TableBody ,TableHead} from "./table" 

import React from "react"

interface DataTableProps<TData, TValue> {
  columns: ColumnDef<TData, TValue>[]
  data: TData[]
}

export function DataTable<TData, TValue>({
  columns,
  data,
}: DataTableProps<TData, TValue>) {
  const [sorting,setSorting] = React.useState<ColumnSort[]>([])
  const [Filtering,setFiltering] = React.useState<any>([])
  const [coloumnfil,setcoloumnfil] = React.useState<any>([])
  const sortIcons = { asc: "🔺", desc: "🔻" };
  const table = useReactTable({
    data,
    columns,
    // manualFiltering: true,
    
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel:getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    // globalFilterFn: 'text' ,
    getPaginationRowModel:getPaginationRowModel(),
    state:{
      sorting:sorting,
      globalFilter:Filtering,
      columnFilters:coloumnfil
    },
    onSortingChange:setSorting,
    onGlobalFilterChange:setFiltering,
    onColumnFiltersChange:setcoloumnfil
  })
  return (
    <div className="p-2.5 w-full">
      <div>
        
      <h1 className="text-3xl font-extrabold dark:text-white"><small className=" font-semibold text-violet-500 dark:text-violet-400">User List data</small></h1>
      </div>
      <div className="grid gap-6 mb-6 md:grid-cols-2">
        <div>
        <label htmlFor="first_name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Table filter</label>
        <input type="text" id="first_name" value={Filtering} onChange={(e)=> setFiltering(e.target.value)}placeholder="Enter text" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"></input>
        </div>
      </div>
      {/* <input type="text" value={Filtering} onChange={(e)=> setFiltering(e.target.value)}></input> */}
      <hr />
      <div className="overflow-auto divtable">
      <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead className=" position-sticky  top-0 text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          {table.getHeaderGroups().map((headerel) => {
               return (
                       <tr key={headerel.id} data-id={headerel.id} className='theadtr'>
                           {/* {headerel.map(columnel)=>{
                            return ( <th key={columnel.id}></th>)
                           }} */}
                           {headerel.headers.map((header)=>{
                            return (
                              <th key={header.id} colSpan={header.colSpan} onClick={header.column.getToggleSortingHandler()} className="px-6 py-3">
                                   {header.isPlaceholder ? null :      flexRender(
                          header.column.columnDef.header,
                          header.getContext()
                        )}
                               {
      header.column.getIsSorted() === false
        ? null // Show nothing when sorting is inactive
        : sortIcons[header.column.getIsSorted() as "asc" | "desc"]
    }
                              </th>
                            )
                           })}
                       </tr>
               )
          })}
        </thead>
        <tbody>
          {table.getRowModel().rows.map(rowel =>{
            return (
              <tr key={rowel.id} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                {rowel.getVisibleCells().map(cells =>{
                  return <td key={cells.id} className="px-6 py-4">
                               { flexRender(
                          cells.column.columnDef.cell,
                          cells.getContext()
                        )}
                  </td>
                })}
              </tr>
            )
          })}
        </tbody>
      </table>
      </div>
      <div className="pagination">
        <div className="inline-flex mt-2 xs:mt-0">
      <button onClick={()=> table.setPageIndex(0)} disabled={!table.getCanPreviousPage()} className="flex items-center justify-center px-3 h-8 text-sm font-medium text-white bg-gray-800 border-s rounded-s hover:bg-gray-900 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">{`<<`}</button>
      <button  onClick={()=> table.previousPage()} disabled={!table.getCanPreviousPage()} className="flex items-center justify-center px-3 h-8 text-sm font-medium text-white bg-gray-800 border-0 border-s border-gray-700  hover:bg-gray-900 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">Prev</button>
      <button onClick={()=> table.nextPage()} disabled={!table.getCanNextPage()} className="flex items-center justify-center px-3 h-8 text-sm font-medium text-white bg-gray-800 border-0 border-s border-gray-700  hover:bg-gray-900 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">next</button>
      <button onClick={()=> table.setPageIndex(table.getPageCount() - 1 )} disabled={!table.getCanNextPage()} className="flex items-center justify-center px-3 h-8 text-sm font-medium text-white bg-gray-800 border-0 border-s border-gray-700 rounded-e hover:bg-gray-900 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">{`>>`}</button>
      </div>
      <div className="flex flex-col items-center justify-center">
      <p className="text-sm text-gray-700 dark:text-gray-400">
       Page <span className="font-semibold text-gray-900 dark:text-white">{table.options.state.pagination?.pageIndex} </span> to <span className="font-semibold text-gray-900 dark:text-white"> {table.getPageCount() - 1} </span>total page
      </p>
      </div>
      </div>
      {/* <Table >
        <TableHeader>
          {table.getHeaderGroups().map((headerGroup) => (
            <TableRow key={headerGroup.id} >
              {headerGroup.headers.map((header) => {
                // console.log(header.column)
                return (
                  <TableHead key={header.id}>
                    {header.isPlaceholder
                      ? null
                      : flexRender(
                          header.column.columnDef.header,
                          header.getContext()
                        )}
                        {header.column.getCanFilter() ? (
                          <div>
                            <input type='text'
                            value={
                              (header.column.getFilterValue() || '' ) as 
                              string
                            }
                            onChange={(e) =>{
                              header.column.setFilterValue(
                                e.target.value
                              )
                            }}
                            />
                          </div>
                        ) : null}
                  </TableHead>
                )
              })}
            </TableRow>
          ))}
        </TableHeader>
        <TableBody>
          {table.getRowModel().rows?.length ? (
            table.getRowModel().rows.map((row) => (
              <TableRow
                key={row.id}
                data-state={row.getIsSelected() && "selected"}
              >
                {row.getVisibleCells().map((cell) => (
                  <TableCell key={cell.id}>
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </TableCell>
                ))}
              </TableRow>
            ))
          ) : (
            <TableRow>
              <TableCell  >
                No results.
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table> */}
    </div>
  )
}