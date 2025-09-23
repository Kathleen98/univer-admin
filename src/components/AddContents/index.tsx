import { Button } from "../ui/button"
import { Dialog, DialogContent, DialogHeader, DialogTrigger } from "../ui/dialog"

export const AddContents = () => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="dark:text-white font-bold">
          Adicionar Conteúdos
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>Adicionar Conteúdo</DialogHeader>
      </DialogContent>
    </Dialog>
  )
}