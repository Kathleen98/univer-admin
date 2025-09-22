import { Button } from "../ui/button"
import { Card, CardHeader } from "../ui/card"
import { Input } from "../ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../ui/select"

export const FilterContets = () => {
  return (
    <Card className="p-4">
      <CardHeader className="p-0 font-bold">Filtro de conteúdos</CardHeader>
      <div className=" flex flex-col gap-3">
        <Input placeholder="Nome do conteúdo" />
        <Select>
          <SelectTrigger className="w-full">
            <SelectValue placeholder="Tipo de conteúdo" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="light">Série</SelectItem>
            <SelectItem value="dark">Filme</SelectItem>
            <SelectItem value="system">Documentário</SelectItem>
          </SelectContent>
        </Select>
        <Select>
          <SelectTrigger className="w-full">
            <SelectValue placeholder="Status" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="light">Ativo</SelectItem>
            <SelectItem value="dark">Inativo</SelectItem>
          </SelectContent>
        </Select>

        <Button className="w-2xs self-center dark:text-white font-bold">Filtrar</Button>
      </div>
    </Card>
  )
}