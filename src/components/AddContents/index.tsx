import { Button } from "../ui/button"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "../ui/dialog"
import { Input } from "../ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../ui/select"

export const AddContents = () => {
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
        <DialogDescription>
          <Input type="text" placeholder="Título" />
          <Select>
            <SelectTrigger>
              <SelectValue placeholder={'Categoria'} />
            </SelectTrigger>

            <SelectContent>
              <SelectItem value="movie">Filmes</SelectItem>
              <SelectItem value="serie">Série</SelectItem>
            </SelectContent>
          </Select>

          <Input placeholder="Gênero" />
          <Input placeholder="Duração" />

          <Select>
            <SelectTrigger>
              <SelectValue placeholder={'Status'} />
            </SelectTrigger>

            <SelectContent>
              <SelectItem value="active">Ativo</SelectItem>
              <SelectItem value="new">Novidade</SelectItem>
            </SelectContent>
          </Select>

          <Input placeholder="Data de lançamento" />

          <Input placeholder="Descrição" />
        </DialogDescription>
      </DialogContent>
    </Dialog>
  )
}