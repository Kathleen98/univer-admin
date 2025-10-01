import { addContentData, SchemaAddContents } from "@/@types/zod/add-contents"
import { Button } from "../ui/button"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "../ui/dialog"
import { Input } from "../ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../ui/select"
import { Controller, useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'

export const AddContents = () => {
  const { register, control, handleSubmit } = useForm<addContentData>({
    resolver: zodResolver(SchemaAddContents)
  })

  const submit = (data: addContentData) => {
    console.log(data)
  }

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
        <form onSubmit={handleSubmit(submit)} >
          <DialogDescription className="flex flex-col gap-3">
            <Input {...register('title')} type="text" placeholder="Título" />
            <Input {...register('slug')} type="text" placeholder="Slug" />
            <Input {...register('releaseDate')} type="text" placeholder="Data de lançamento" />
            <div className="flex justify-between">
              <Controller
                name="category"
                control={control}
                render={({ field }) => (
                  <Select onValueChange={field.onChange} value={field.value} >
                    <SelectTrigger className="w-[45%]">
                      <SelectValue placeholder={'Categoria'} />
                    </SelectTrigger>

                    <SelectContent >
                      <SelectItem value="movie">Filmes</SelectItem>
                      <SelectItem value="serie">Série</SelectItem>
                    </SelectContent>
                  </Select>
                )}

              />

              <Controller
                name='status'
                control={control}
                render={({ field }) => (
                  <Select onValueChange={field.onChange} value={field.value} >
                    <SelectTrigger className="w-[45%]">
                      <SelectValue placeholder={'Status'} />
                    </SelectTrigger>

                    <SelectContent >
                      <SelectItem value="active">Ativo</SelectItem>
                      <SelectItem value="new">Novidade</SelectItem>
                    </SelectContent>
                  </Select>
                )}
              />

            </div>
            <Input placeholder="Temporadas" />
            <Input placeholder="Epsódios" />
            <Input  {...register("gender")} placeholder="Gênero" />
            <Input  {...register("duration")} placeholder="Duração" />



            <Input  {...register("releaseDate")} placeholder="Data de lançamento" />

            <Input  {...register("description")} placeholder="Descrição" />

            <Button type="submit" className="dark:text-white font-bold" >Adicionar</Button>
          </DialogDescription>
        </form>
      </DialogContent>
    </Dialog>
  )
}