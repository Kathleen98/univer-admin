import { Button } from "../ui/button"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "../ui/dialog"
import { Input } from "../ui/input"

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
        </DialogDescription>
      </DialogContent>
    </Dialog>
  )
}