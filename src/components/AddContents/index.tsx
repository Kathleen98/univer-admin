import { addContentData, SchemaAddContents } from "@/@types/zod/add-contents"
import { Button } from "../ui/button"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "../ui/dialog"
import { Input } from "../ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../ui/select"
import { Controller, useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'

export const AddContents = () => {
  const { register, control } = useForm<addContentData>({
    resolver: zodResolver(SchemaAddContents)
  })


  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="dark:text-white font-bold">
          Adicionar Conteúdos
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Adicionar Conteúdo</DialogTitle>
        </DialogHeader>
        <DialogDescription className="flex flex-col gap-3">
          <Input {...register('title')} type="text" placeholder="Título" />
          <div className="flex justify-between">
            <Controller
              name="category"
              control={control}
              render={({ field }) => (
                <Select >
                  <SelectTrigger value={field.value} onChange={field.onChange} className="w-[45%]">
                    <SelectValue placeholder={'Categoria'} />
                  </SelectTrigger>

                  <SelectContent >
                    <SelectItem value="movie">Filmes</SelectItem>
                    <SelectItem value="serie">Série</SelectItem>
                  </SelectContent>
                </Select>
              )}

            />
            <Select>
              <SelectTrigger className="w-[45%]">
                <SelectValue placeholder={'Status'} />
              </SelectTrigger>

              <SelectContent >
                <SelectItem value="active">Ativo</SelectItem>
                <SelectItem value="new">Novidade</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <Input placeholder="Epsódios" />
          <Input placeholder="Gênero" />
          <Input placeholder="Duração" />



          <Input placeholder="Data de lançamento" />

          <Input placeholder="Descrição" />

          <Button className="dark:text-white font-bold" >Adicionar</Button>
        </DialogDescription>
      </DialogContent>
    </Dialog>
  )
}