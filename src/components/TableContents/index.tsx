"use client"

import * as React from "react"
import {
  ColumnDef,
  ColumnFiltersState,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  SortingState,
  useReactTable,
  VisibilityState,
} from "@tanstack/react-table"
import { MoreHorizontal } from "lucide-react"

import { Button } from "@/components/ui/button"
import {
  DropdownMenu, DropdownMenuContent,
  DropdownMenuItem, DropdownMenuSeparator,
  DropdownMenuTrigger
} from "@/components/ui/dropdown-menu"
import { Input } from "@/components/ui/input"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { Badge } from "../ui/badge"
import Image from "next/image"
import { IconPlayerTrackNextFilled, IconPlayerTrackPrevFilled } from "@tabler/icons-react"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../ui/select"

const data: Payment[] = [
  {
    id: "m5gr84i9",
    title: 'Exemplo de Vídeo',
    status: "success",
    videoUrl: "",
    type: 'Filme',
    trailerUrl: 'https://exemplo.com/trailers/exemplo.mp4',
    thumbnailUrl: "https://univer-prod.cloud.seachange.com/dynamic-image-service/unsafe/fit-in/232x348/filters:upscale():fill(blur):format(webp)/univideo01.akamaized.net/cdn/asset/images/thumb-v-WVzeX-A5P2Y.jpg",
    slug: "a-origem",
    releaseDate: '2024-01-15T00:00:00.000Z',
    introStartTime: 120,
    introEndTime: 1234,
    duration: 1231443,
    description: 'testando descrição',
    ageRating: 'l',
    gendes: ['Comédia', 'Drama'],
    years: 2025,
    views: 15
  },
  {
    id: "m5gr84234324i9",
    title: 'Exemplo de Vídeo',
    status: "success",
    videoUrl: "",
    type: 'Documentário',
    trailerUrl: 'https://exemplo.com/trailers/exemplo.mp4',
    thumbnailUrl: "https://univer-prod.cloud.seachange.com/dynamic-image-service/unsafe/fit-in/232x348/filters:upscale():fill(blur):format(webp)/univideo01.akamaized.net/cdn/asset/images/thumb-v-WVzeX-A5P2Y.jpg",
    slug: "a-origem",
    releaseDate: '2024-01-15T00:00:00.000Z',
    introStartTime: 120,
    introEndTime: 1234,
    duration: 1231443,
    description: 'testando descrição',
    ageRating: 'l',
    gendes: ['Comédia', 'Drama'],
    years: 2025,
    views: 30
  },
]

export type Payment = {
  id: string
  title: string
  slug: string
  description: string
  duration: number
  releaseDate: string
  videoUrl: string
  thumbnailUrl: string
  trailerUrl: string
  introStartTime: number
  introEndTime: number
  ageRating: string
  type: string;
  status: string;
  gendes: string[],
  years: number;
  views: number;
}

export const columns: ColumnDef<Payment>[] = [
  {
    accessorKey: 'title',
    header: "Título",
    cell: ({ row }) => {
      const title = row.getValue('title');
      const thumbnailUrl = row.original.thumbnailUrl
      return (
        <div className="capitalize flex gap-2 items-center">
          <Image width={80} height={180} alt="banner" src={thumbnailUrl} />
          <div className="">
            <p>{title as string}</p>
            <p>{new Date().getHours()}h</p>
          </div>
        </div>
      )
    },
  },
  {
    accessorKey: "type",
    header: "Tipo",
    cell: ({ row }) => <Badge className="bg-gray-400 font-bold">{row.getValue("type")}</Badge>,
  },
  {
    accessorKey: "gendes",
    header: "Gêneros",
    cell: ({ row }) => {
      const gendes = row.getValue('gendes') as string[]

      return (<div className="flex gap-1">
        {gendes.map((item, index) => (
          <Badge className="dark:text-white font-bold rounded-sm" key={index}>{item}</Badge>
        ))}
      </div>)
    },
  },
  {
    accessorKey: "years",
    header: "Ano",
    cell: ({ row }) => <p>{row.getValue("years")}</p>,
  },
  {
    accessorKey: "status",
    header: "Status",
    cell: ({ row }) => <Badge className="dark:text-white font-bold rounded-sm bg-green-700" >{row.getValue('status')}</Badge>,
  },
  {
    id: "actions",
    header: "Ações",
    enableHiding: false,
    cell: ({ row }) => {
      const payment = row.original

      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="h-8 w-8 p-0">
              <span className="sr-only">Open menu</span>
              <MoreHorizontal />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuItem
              onClick={() => navigator.clipboard.writeText(payment.id)}
            >
              Editar
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>Excluir</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      )
    },
  },
]

export function DataTableContents() {
  const [sorting, setSorting] = React.useState<SortingState>([])
  const [columnFilters, setColumnFilters] = React.useState<ColumnFiltersState>(
    []
  )
  const [columnVisibility, setColumnVisibility] =
    React.useState<VisibilityState>({})
  const [rowSelection, setRowSelection] = React.useState({})

  const table = useReactTable({
    data,
    columns,
    onSortingChange: setSorting,
    onColumnFiltersChange: setColumnFilters,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    onColumnVisibilityChange: setColumnVisibility,
    onRowSelectionChange: setRowSelection,
    state: {
      sorting,
      columnFilters,
      columnVisibility,
      rowSelection,
    },
  })

  return (
    <div className="w-full">
      <div className="flex items-center py-4 gap-2">
        <Input
          placeholder="Busca por título"
          value={(table.getColumn("title")?.getFilterValue() as string) ?? ""}
          onChange={(event) =>
            table.getColumn("title")?.setFilterValue(event.target.value)
          }
          className="max-w-sm"
        />

        <Select>
          <SelectTrigger className="">
            <SelectValue placeholder="Tipo de conteúdo" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="light">Série</SelectItem>
            <SelectItem value="dark">Filme</SelectItem>
            <SelectItem value="system">Documentário</SelectItem>
          </SelectContent>
        </Select>
        <Select>
          <SelectTrigger className="">
            <SelectValue placeholder="Status" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="light">Ativo</SelectItem>
            <SelectItem value="dark">Inativo</SelectItem>
          </SelectContent>
        </Select>
        {/* <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" className="ml-auto">
              Columns <ChevronDown />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            {table
              .getAllColumns()
              .filter((column) => column.getCanHide())
              .map((column) => {
                return (
                  <DropdownMenuCheckboxItem
                    key={column.id}
                    className="capitalize"
                    checked={column.getIsVisible()}
                    onCheckedChange={(value) =>
                      column.toggleVisibility(!!value)
                    }
                  >
                    {column.id}
                  </DropdownMenuCheckboxItem>
                )
              })}
          </DropdownMenuContent>
        </DropdownMenu> */}
      </div>
      <div className="overflow-hidden rounded-md border ">
        <Table className="">
          <TableHeader className="bg-gray-700 ">
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow key={headerGroup.id}>
                {headerGroup.headers.map((header) => {
                  return (
                    <TableHead className="p-4 xl:p-6" key={header.id}>
                      {header.isPlaceholder
                        ? null
                        : flexRender(
                          header.column.columnDef.header,
                          header.getContext()
                        )}
                    </TableHead>
                  )
                })}
              </TableRow>
            ))}
          </TableHeader>
          <TableBody >
            {table.getRowModel().rows?.length ? (
              table.getRowModel().rows.map((row) => (
                <TableRow
                  key={row.id}
                  data-state={row.getIsSelected() && "selected"}

                >
                  {row.getVisibleCells().map((cell) => (
                    <TableCell className="px-4 xl:px-6" key={cell.id}>
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext()
                      )}
                    </TableCell>
                  ))}
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell
                  colSpan={columns.length}
                  className="h-24 text-center"
                >
                  No results.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
      <div className="flex items-center justify-end space-x-2 py-4">
        <div className="text-muted-foreground flex-1 text-sm">
          {table.getFilteredSelectedRowModel().rows.length} de{" "}
          {table.getFilteredRowModel().rows.length} linha(s) seleciona(s).
        </div>
        <div className="space-x-2">
          <Button
            variant="outline"
            size="sm"
            onClick={() => table.previousPage()}
            disabled={!table.getCanPreviousPage()}
          >
            <IconPlayerTrackPrevFilled />
          </Button>
          <Button
            variant="outline"
            size="sm"
            onClick={() => table.nextPage()}
            disabled={!table.getCanNextPage()}
          >
            <IconPlayerTrackNextFilled />
          </Button>
        </div>
      </div>
    </div>
  )
}
