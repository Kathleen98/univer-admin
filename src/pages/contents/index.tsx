import { AddContents } from "@/components/AddContents"
import { DataTableContents } from "@/components/TableContents"

const Content = () => {
  return (
    <div className="flex flex-col gap-4 py-4 md:gap-6 md:py-6 px-4 lg:px-6">
      <div className="flex justify-between items-center">
        <p className="font-bold text-2xl">Gerneciador de conteúdos</p>
        <AddContents />
      </div>
      <DataTableContents />
    </div>
  )
}

export default Content